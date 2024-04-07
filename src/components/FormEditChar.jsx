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
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';


function AddChar() {
  const navigate = useNavigate();
  const [theme, colorMode] = useMode();
  const [msg, setMsg] = useState("");
  const { id } = useParams();
  const [name, setName] = useState("");
  const [charclass, setCharclass] = useState("");
  const [code, setCode] = useState("");
  const [weapon, setWeapon] = useState("");
  const [company, setCompany] = useState("");
  const [squad, setSquad] = useState("");
  const [burst, setBurst] = useState("");
  const [cube, setCube] = useState("");
  const [rarity, setRarity] = useState("");
  const [normal_attack, setNormal_attack] = useState("");
  const [skill_1, setSkill_1] = useState("");
  const [skill_2, setSkill_2] = useState("");
  const [burst_skill, setBurst_skill] = useState("");
  

  useEffect(() => {
    const getCharById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/character/${id}`);
        setName(response.data.name);
        setCharclass(response.data.charclass);
        setCode(response.data.code);
        setWeapon(response.data.weapon);
        setCompany(response.data.company);
        setSquad(response.data.squad);
        setBurst(response.data.burst);
        setCube(response.data.cube);
        setRarity(response.data.rarity);
        setNormal_attack(response.data.normal_attack);
        setSkill_1(response.data.skill_1);
        setSkill_2(response.data.skill_2);
        setBurst_skill(response.data.burst_skill);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getCharById();
  }, [id]);

  const EditChar = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/character/${id}`, {
        name: name,
        charclass: charclass,
        code: code,
        weapon: weapon,
        company: company,
        squad: squad,
        burst: burst,
        cube: cube,
        rarity: rarity,
        normal_attack: normal_attack,
        skill_1: skill_1,
        skill_2: skill_2,
        burst_skill: burst_skill
      });

      navigate("/admin/character");
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
              <title>Shifty | Edit Karakter</title>
            </Helmet>
            <Topbar />
            <main className="w-11/12 md:w-9/12 border-1 p-4 mb-4 rounded mx-auto">
            <Box m="20px">
                <div>
                <h1 className="title">Merubah Karkter</h1>
                  <h2 className="subtitle">Edit Character </h2>
                  <div className="card is-shadowless">
                    <div className="card-content">
                      <div className="content">
                        <form onSubmit={EditChar}>
                          <p className="has-text-centered">{msg}</p>
                          <TextField fullWidth
                            label="Nama Karakter"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required // This attribute makes the field required
                          />
                         <br />
                         <br />
                         <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Class</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={charclass}
                              label="Class"
                              required // This attribute makes the field required
                              onChange={(e) => setCharclass(e.target.value)}
                            >
                              <MenuItem value={1}>Attacker</MenuItem>
                              <MenuItem value={2}>Defender</MenuItem>
                              <MenuItem value={3}>Supporter</MenuItem>
                            </Select>
                          </FormControl>
                          <br />
                          <br />
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Code</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={code}
                              label="Class"
                              required // This attribute makes the field required
                              onChange={(e) => setCode(e.target.value)}
                            >
                              <MenuItem value={1}>Fire</MenuItem>
                              <MenuItem value={2}>Water</MenuItem>
                              <MenuItem value={3}>Wind</MenuItem>
                              <MenuItem value={4}>Electric</MenuItem>
                              <MenuItem value={5}>Iron</MenuItem>
                            </Select>
                          </FormControl>
                           <br />
                           <br />

                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Weapon</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={weapon}
                              label="Class"
                              required // This attribute makes the field required
                              onChange={(e) => setWeapon(e.target.value)}
                            >
                              <MenuItem value={1}>AR</MenuItem>
                              <MenuItem value={2}>SMG</MenuItem>
                              <MenuItem value={3}>SG</MenuItem>
                              <MenuItem value={4}>SR</MenuItem>
                              <MenuItem value={5}>RL</MenuItem>
                              <MenuItem value={6}>MG</MenuItem>
                            </Select>
                          </FormControl>

                          <br />
                           <br />

                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Company</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={company}
                              label="Class"
                              required // This attribute makes the field required
                              onChange={(e) => setCompany(e.target.value)}
                            >
                              <MenuItem value={1}>Elysion</MenuItem>
                              <MenuItem value={2}>Missilis</MenuItem>
                              <MenuItem value={3}>Tetra</MenuItem>
                              <MenuItem value={4}>Pilgrim</MenuItem>
                              <MenuItem value={5}>Abnormal</MenuItem>
                             
                            </Select>
                          </FormControl>

                          <br />
                           <br />

                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Squad</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={squad}
                              label="Class"
                              required // This attribute makes the field required
                              onChange={(e) => setSquad(e.target.value)}
                            >
                              <MenuItem value={1}>Pioneer</MenuItem>
                              <MenuItem value={2}>777</MenuItem>
                              <MenuItem value={3}>Mighty Tools</MenuItem>
                              <MenuItem value={4}>YoRHa</MenuItem>
                              <MenuItem value={5}>Maid For You</MenuItem>
                              <MenuItem value={6}>Counters</MenuItem>
                              <MenuItem value={7}>A.C.P.U</MenuItem>
                              <MenuItem value={8}>Unlimited</MenuItem>
                              <MenuItem value={9}>Heretic</MenuItem>
                             
                            </Select>
                          </FormControl>
                          <br />
                           <br />
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Burst</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={burst}
                              label="Class"
                              required // This attribute makes the field required
                              onChange={(e) => setBurst(e.target.value)}
                            >
                              <MenuItem value={1}>One</MenuItem>
                              <MenuItem value={2}>Two</MenuItem>
                              <MenuItem value={3}>Three</MenuItem>
                            </Select>
                          </FormControl>

                          <br />
                           <br />

                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Cube</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={cube}
                              label="Class"
                              required // This attribute makes the field required
                              onChange={(e) => setCube(e.target.value)}
                            >
                              <MenuItem value={1}>Adjutant Cube</MenuItem>
                              <MenuItem value={2}>Assault Cube</MenuItem>
                              <MenuItem value={3}>Bastion Cube</MenuItem>
                              <MenuItem value={4}>Onslaught Cube</MenuItem>
                              <MenuItem value={5}>Quantum Cube</MenuItem>
                              <MenuItem value={6}>Resilience Cube</MenuItem>
                              <MenuItem value={7}>Vigor Cube</MenuItem>
                              <MenuItem value={8}>Wingman Cube</MenuItem>
                            </Select>
                          </FormControl>
                          <br />
                           <br />

                          <TextField fullWidth
                            label="Normal_attack"
                            value={normal_attack}
                            onChange={(e) => setNormal_attack(e.target.value)}
                            required // This attribute makes the field required
                          />
                           <br />
                           <br />

                           <TextField fullWidth
                            label="skill_1"
                            value={skill_1}
                            onChange={(e) => setSkill_1(e.target.value)}
                            required // This attribute makes the field required
                          />
                           <br />
                           <br />

                           <TextField fullWidth
                            label="skill_2"
                            value={skill_2}
                            onChange={(e) => setSkill_2(e.target.value)}
                            required // This attribute makes the field required
                          />
                           <br />
                           <br />
                           <TextField fullWidth
                            label="burst_skill"
                            value={burst_skill}
                            onChange={(e) => setBurst_skill(e.target.value)}
                            required // This attribute makes the field required
                          />
                          <br />
                          <br />
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Rarity</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={rarity}
                              label="Class"
                              required // This attribute makes the field required
                              onChange={(e) => setRarity(e.target.value)}
                            >
                              <MenuItem value={1}>SR</MenuItem>
                              <MenuItem value={2}>SSR</MenuItem>
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

export default AddChar;