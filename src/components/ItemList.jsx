import React, { useState, useEffect } from "react";
import axios from "axios";
import { ColorModeContext, useMode } from "../theme";
import { MyProSidebarProvider } from "../pages/global/sidebar/sidebarContext";
import Topbar from "../pages/global/Topbar";
import { Helmet } from 'react-helmet-async';
import { CssBaseline, ThemeProvider, IconButton, Button,Box } from "@mui/material";
import { tokens } from "../theme";
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const Itemlist = () => {
  const [item, setItem] = useState([]);
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    const response = await axios.get("http://localhost:5000/item");
    setItem(response.data);
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:5000/item/${id}`);
    getItem();
  };


  const navigateToEditPage = (id) => {
    navigate(`/item/edit/${id}`);
  };

  const Class = (kelas) => {
    switch (kelas) {
      case 1:
        return 'Attacker';
      case 2:
        return 'Defender';
        case 3:
        return 'Supporter';
      default:
        return 'Unknown';
    }
  };

  const Code = (code) => {
    switch (code) {
      case 1:
        return 'Fire';
      case 2:
        return 'Water';
      case 3:
        return 'Wind';
      case 4:
        return 'Electric';
      case 5:
        return 'Iron';
      default:
        return 'Unknown';
    }
  };

  const Weapon = (weapon) => {
    switch (weapon) {
      case 1:
        return 'AR';
      case 2:
        return 'SMG';
      case 3:
        return 'SG';
      case 4:
        return 'SR';
      case 5:
        return 'RL';
      case 6:
        return 'MG';
      default:
        return 'Unknown';
    }
  };

  const Company = (company) => {
    switch (company) {
      case 1:
        return 'Elysion';
      case 2:
        return 'Missilis';
      case 3:
        return 'Tetra';
      case 4:
        return 'Pilgrim';
      case 5:
        return 'Abnormal';
      default:
        return 'Unknown';
    }
  };

  const Squad = (squad) => {
    switch (squad) {
      case 1:
        return 'Pioneer';
      case 2:
        return 'Pioneer';
        case 3:
        return 'Pioneer';
      default:
        return 'Unknown';
    }
  };

  const Burst = (burst) => {
    switch (burst) {
      case 1:
        return '1';
      case 2:
        return '2';
        case 3:
        return '3';
      default:
        return 'Unknown';
    }
  };

  const Cube = (cube) => {
    switch (cube) {
      case 1:
        return 'Adjutant Cube';
      case 2:
        return '2';
        case 3:
        return '3';
      default:
        return 'Unknown';
    }
  };

  const mapRoleToLabel = (role) => {
    switch (role) {
      case 1:
        return 'Admin';
      case 2:
        return 'Users';
      default:
        return 'Unknown';
    }
  };

  const renderActions = (params) => (
    <div>

      <IconButton onClick={() => navigateToEditPage(params.row.id)}>
        <EditIcon />
      </IconButton>


      <IconButton onClick={() => deleteItem(params.row.id)}>
        <DeleteIcon />
      </IconButton>

    </div>
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyProSidebarProvider>
          <div style={{ height: "100%", width: "100%" }}>
            <Helmet>
              <title>Shifty | Item</title>
            </Helmet>
            <main>
              <Topbar />
              <Box m="20px">
                <div>
                  <h1 className="title">Daftar Perlengkapan</h1>
                  <h2 className="subtitle">List of Item</h2>
                  <Button href="/item/additem" variant="contained" color="success">
                    Add New
                  </Button>
                  <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                      rows={item}
                      columns={[
                        { field: 'id', headerName: 'Id', width: 100 },
                        { field: 'name', headerName: 'Name', width: 150 },
                        { field: 'description', headerName: 'Description', width: 500 },
                        {
                          field: "action",
                          headerName: "Action",
                          width: 120,
                          renderCell: renderActions,

                        },
                      ]}
                      getRowId={(row) => row.id} // Use uuid or id as the row id
                    />
                  </div>
                </div>
                </Box>
            </main>
          </div>
        </MyProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Itemlist;