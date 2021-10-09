// import './App.css';
import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { CssBaseline } from "@mui/material";
import blue from '@mui/material/colors/blue';
import { Paper } from "@mui/material";
function App() {
  const [theme, setTheme] = useState(true);
  const icon = !theme ? <Brightness7Icon /> : <Brightness4Icon />;
  const appliedTheme = createTheme(theme ? light : dark);

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <div className="App">


        <Header>
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="h2" sx={{ display: { xs: 'none', sm: 'block', display: "inline-flex", flexDirection: "row" } }}>
              Home
            </Typography>

            <Box component="div" sx={{ marginLeft: "auto" }}>
              <ButtonGroup variant="string" color="inherit" >
                <Button>Home</Button>
                <Button>Contact</Button>
                <Button>About</Button>
              </ButtonGroup>

              <Box sx={{ display: { xs: 'none', sm: 'inline' } }}>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="mode"
                  onClick={() => setTheme(!theme)}
                >
                  {icon}
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </Header>

        <Home />
      </div>
    </ThemeProvider>
  );
}

const light = {
  palette: {
    mode: 'light',
  }
};
const dark = {
  palette: {
    mode: 'dark',
  }
};

export default App;