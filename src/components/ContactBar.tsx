import React from 'react';
import { Box, Typography, Button } from '@mui/material';
// eslint-disable-next-line import/no-extraneous-dependencies
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function ContactBar() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      color: 'secondary.main',
    }}
    >
      <Button href="#/resume">
        <Typography variant="button" sx={{ color: '#808080' }}>
          Resume
        </Typography>
        <ArrowOutwardIcon />
      </Button>
      <Button href="https://github.com/d-zg/" target="_blank">
        <Typography variant="button" sx={{ color: '#808080' }}>
          Github
        </Typography>
        <ArrowOutwardIcon />
      </Button>
      <Button href="https://www.linkedin.com/in/daniel-zhang-71273a25b/" target="_blank">
        <Typography variant="button" sx={{ color: '#808080' }}>
          Linkedin
        </Typography>
        <ArrowOutwardIcon />
      </Button>
      <Button href="mailto:daniel.zhang.1@vanderbilt.edu">
        <Typography variant="button" sx={{ color: '#808080' }}>
          Email
        </Typography>
        <ArrowOutwardIcon />
      </Button>
    </Box>
  );
}

export default ContactBar;
