import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import { ColorModeContext, useMode } from "../theme";
import { MyProSidebarProvider } from "../pages/global/sidebar/sidebarContext";
import Topbar from "../pages/global/Topbar";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';




function EditItem() {
  const navigate = useNavigate();
  const [theme, colorMode] = useMode();
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getItemById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/item/${id}`);
        setName(response.data.name);
        setDescription(response.data.description);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getItemById();
  }, [id]);

  const updateItem = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/item/${id}`, {
        name: name,
        description: description
      });
      navigate("/item");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div className="min-h-full" style={{ height: "100%", width: "100%" }}>
            <Helmet>
              <title>Nikke Characters List - Shifty.moe</title>
            </Helmet>
            <Topbar />
            <main className="w-11/12 md:w-9/12 border-1 p-4 mb-4 rounded mx-auto">
            <Box m="20px">
                <div>
                  <h1 className="title">Tambah Pengguna</h1>
                  <h2 className="subtitle">Add New User</h2>
                  <div className="card is-shadowless">
                    <div className="card-content">
                      <div className="content">
                        <form onSubmit={updateItem}>
                          <p className="has-text-centered">{msg}</p>
                          <TextField fullWidth
                            label="Nama Item"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required // This attribute makes the field required
                          />
                         <br />
                         <br />
                         <TextField fullWidth
                            label="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required // This attribute makes the field required
                          />
                          <br />
                          <br />
                          <div className="field">
                            <div className="control">
                              <Button type="submit" variant="contained">
                                Save Data
                              </Button>                          
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </Box>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default EditItem;