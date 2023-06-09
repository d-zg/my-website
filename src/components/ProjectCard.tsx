import React from 'react';
import {
  Box, Button, Card, CardContent, CardHeader, Typography,
} from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function ProjectCard({ title, description, link } : any) {
  const isMobile = window.innerWidth < 600;
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
        width: isMobile ? '95%' : '40%',
        height: isMobile ? '60vh' : '50vh',
      }}
    >
      <Box sx={{ p: 2 }}>
        <CardHeader
          title={title}
          onClick={() => { window.open(link, '_blank'); }}
          sx={{
            '& .MuiTypography-root': {
              fontSize: '5rem',
            },
            lineHeight: '1',
            whiteSpace: 'wrap',
            pr: '30%',
            '&:hover .MuiCardHeader-title': {
              transition: 'all 0.3s ease',
              opacity: '0.3',
            },

          }}
        />
        <CardContent sx={{ minHeight: '55%' }}>
          <Typography>
            {description}
          </Typography>
          <Button href={link}>
            <Typography variant="button" sx={{ fontWeight: '400', color: '#808080' }}>
              Code
            </Typography>
            <ArrowOutwardIcon />
          </Button>
        </CardContent>
      </Box>
    </Card>
  );
}

export default ProjectCard;
