import React from 'react';
import {
  AppBar, Box, Button, Typography,
} from '@mui/material';

function NavBar() {
  return (
    <AppBar
      position="static"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: 'none',
        flexDirection: 'row',
        borderBottom: 1,
        borderBottomColor: 'secondary.main',
        backgroundColor: 'transparent',
        elevation: 1,
        pl: '120px',
        pr: '120px',
        pt: '14px',
        pb: '6px',
        zIndex: 1,
      }}
    >
      <Button href="/">
        <Typography
          variant="button"
          sx={{
            fontSize: '26px',
            fontWeight: 500,
            display: 'inline-flex',
            alignItems: 'center',
            textTransform: 'lowercase',
          }}
        >
          <span style={{ color: 'lightgrey' }}>d</span>
          <span style={{ fontWeight: 700, color: '#BBD2B8' }}>.</span>
          <span style={{ color: '#967bb6' }}>zhang</span>
        </Typography>
      </Button>
      <Box>
        <Button href="/writings/">
          <Typography variant="button" sx={{ fontSize: '16px' }}>
            Writings
          </Typography>
        </Button>
        <Button href="/projects/">
          <Typography variant="button" sx={{ fontSize: '16px' }}>
            Projects
          </Typography>
        </Button>
        <Button variant="outlined" sx={{ borderRadius: 0, ml: '10px', borderColor: 'secondary.main' }} href="/resume/">
          <Typography variant="button" sx={{ fontSize: '16px' }}>
            Resume
          </Typography>
        </Button>
      </Box>
    </AppBar>
  );
}

export default NavBar;
