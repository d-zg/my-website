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
      <Button>
        <Typography variant="button" sx={{ color: '#808080' }}>
          Resume
        </Typography>
        <ArrowOutwardIcon />
      </Button>
      <Button>
        <Typography variant="button" sx={{ color: '#808080' }}>
          Github
        </Typography>
        <ArrowOutwardIcon />
      </Button>
      <Button>
        <Typography variant="button" sx={{ color: '#808080' }}>
          Linkedin
        </Typography>
        <ArrowOutwardIcon />
      </Button>
    </Box>
  );
}

export default ContactBar;
