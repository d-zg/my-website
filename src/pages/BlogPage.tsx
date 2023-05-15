import React from 'react';
import { Box, Button, Typography } from '@mui/material';

function BlogPage() {
  return (
    <Box sx={{
      mt: '6%',
      ml: '10%',
    }}
    >
      <Typography>
        Nothing here yet! Get me to write something.
      </Typography>
      <Button href="/">
        <Typography variant="button" sx={{ fontSize: '16px' }}>
          Back to home
        </Typography>
      </Button>
    </Box>
  );
}

export default BlogPage;
