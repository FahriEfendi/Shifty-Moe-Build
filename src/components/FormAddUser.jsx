import React, { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { ColorModeContext, useMode } from "../theme";
import { MyProSidebarProvider } from "../pages/global/sidebar/sidebarContext";
import Topbar from "../pages/global/Topbar";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';


function AddUser() {
  const navigate = useNavigate();
  const [theme, colorMode] = useMode();
  const [msg, setMsg] = useState("");
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");

  const AddUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        nama: nama,
        password: password,
        confPassword: confPassword,
        role: role
      });

      navigate("/users");
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
                        <form onSubmit={AddUser}>
                          <p className="has-text-centered">{msg}</p>
                          <TextField fullWidth
                            label="Nama Lengkap"
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                            required // This attribute makes the field required
                          />
                         <br />
                           <TextField
                            type="password"
                            label="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required // This attribute makes the field required
                          />
                          <TextField
                            type="password"
                            label="Konfirmasi Password"
                            value={confPassword}
                            onChange={(e) => setConfPassword(e.target.value)}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required // This attribute makes the field required
                          />
                           <br />
                          <br />

                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Role</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={role}
                              label="Role"
                              onChange={(e) => setRole(e.target.value)}
                            >
                              <MenuItem value={1}>Admin</MenuItem>
                              <MenuItem value={2}>Users</MenuItem>
                            </Select>
                          </FormControl>
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

export default AddUser;