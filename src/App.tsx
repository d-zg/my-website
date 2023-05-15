import React from 'react';
import './App.css';
import {
  CssBaseline, Paper, ThemeProvider, createTheme,
} from '@mui/material';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
// import { BrowserRouter } from 'react-router-dom';

// import HomePage from './pages/HomePage';
// import NavBar from './components/NavBar';

function App() {
  const theme : any = createTheme({
    palette: {
      primary: {
        main: '#FFFFFF',
      },
      secondary: {
        main: '#D3D3D3',
      },
      text: {
        primary: '#808080',
      },
    },
    typography: {
      fontFamily: 'Work Sans',
      fontSize: 16,
      body1: {
        fontWeight: 200,
        color: '#808080',
      },
      button: {
        fontWeight: 350,
        fontSize: '16px',
        color: '#808080',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>

      <CssBaseline />
      <Paper
        sx={{
          backgroundImage: 'radial-gradient(circle at 70% 40%, #c0e5e1, transparent 35%), radial-gradient(circle at 30% 70%, #c0e5e1, transparent 45%), radial-gradient(circle at 50% 60%, #ceebe8, transparent 35%), radial-gradient(circle at 80% 90%, #b2dfdb, transparent 35%)',
          position: 'absolute',
          width: '100%',
          top: 0,
          height: '100%',
          elevation: 0,
          borderBottom: 'none',
          zIndex: 0, // To ensure the paper component is behind the app bar
          overflowY: 'auto', // Allow vertical scrolling

        }}
      >
        <NavBar />
        <HomePage />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
