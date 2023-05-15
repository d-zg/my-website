import React from 'react';
import { Box } from '@mui/material';

function ImageCircle({
  imageSource, sx, size, handleClick,
} : any) {
  return (
    <Box
      onClick={handleClick}
      sx={{
        pt: '8%',
        pl: '8%',
        position: 'absolute',
        pb: '0%',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        ...sx,
      }}
    >
      <Box sx={{
        maxWidth: '500px',
        borderRadius: '50%',
        overflow: 'hidden',
        height: '500px',
        elevation: 5,
        boxShadow: 5,
        aspectRatio: '1 / 1',
        ...size,
      }}
      >
        <img
          src={imageSource}
          alt="My art!"
          style={{
            width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center',
          }}
        />
      </Box>
    </Box>
  );
}

export default ImageCircle;
