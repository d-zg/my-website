import React from 'react';
import {
  Box, Button, Card, CardContent, CardHeader, Typography,
} from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function PostCard({ title, description, postid } : any) {
  const handleClick = () => {
    window.location.href = `#/writings/${postid}`;
  };
  return (
  // <Typography>
  //   Sup
  // </Typography>
    <Card
      variant="outlined"
      sx={{
        background: 'transparent',
        border: '3px solid #00754b',
        borderRadius: 0,
        width: '100%',
        height: '45vh',
      }}
    >
      <Box sx={{ p: 2 }}>
        <CardHeader
          onClick={handleClick}
          title={title}
          sx={{
            '& .MuiTypography-root': {
              fontSize: '5rem',
            },
            '&:hover .MuiCardHeader-title': {
              transition: 'all 0.3s ease',
              opacity: '0.3',
            },
            // pr: '30%',
          }}
        />
        <CardContent sx={{ minHeight: '55%' }}>
          <Typography>
            {description}
          </Typography>
          <Button href={`#/writings/${postid}`}>
            <Typography variant="button" sx={{ fontWeight: '400', color: '#808080' }}>
              Read this post
            </Typography>
            <ArrowOutwardIcon />
          </Button>
        </CardContent>
      </Box>
    </Card>
  );
}

export default PostCard;
