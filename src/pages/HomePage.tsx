import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import ContactBar from '../components/ContactBar';
import ImageCircle from '../components/ImageCircle';

function HomePage() {
  const art : String[] = ['https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a620fb140986723.624bd3b0b6f4e.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d1babd140986723.624bd3b0b608c.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c15790140986723.624bd3b0b67ca.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3bb68f140986723.624bd3b0b5621.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/df52b1140986723.624bd3b0b8147.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c6ea05140986723.624bd3b0b77ae.png',
  ];

  const [currentIndex, setIndex] = useState(0);

  const incrementIndex : any = () => {
    setIndex((currentIndex + 1) % art.length);
  };

  return (
    <Box>
      <Box
        display="flex"
        flexDirection="row"
        sx={{
          alignContent: 'left',
        }}
      >
        <Box sx={{
          width: '50%',
          mt: '6%',
          textAlign: 'left',
          pl: '12%',
          position: 'relative',
          height: '100%',
        }}
        >
          <Typography
            fontSize="64px"
            fontWeight="300"
          >
            {'Hey! I\'m Daniel Zhang.'}
          </Typography>
          <Typography
            sx={{ pt: '10%', mr: '10%' }}
          >
            {`I'm a B.S. + M.Sc. student at Vanderbilt University majoring in Computer Science
          and Math. I'm broadly interested in generative ML, distributed computing, and data science.`}
          </Typography>
          <ContactBar />
        </Box>
        <ImageCircle
          handleClick={incrementIndex}
          imageSource={art[currentIndex]}
          sx={{
            top: '12%',
            left: '50%',
            zIndex: 2,
          }}
        />
        <ImageCircle
          handleClick={incrementIndex}
          imageSource={art[(currentIndex + 1) % art.length]}
          sx={{
            top: '25%',
            left: '57%',
            zIndex: 1,
            opacity: 0.35,
          }}
          size={{
            height: '400px',
            width: '400px',
          }}
        />
        <Typography sx={{
          position: 'absolute',
          top: '60%',
          left: '90%',
          transform: 'rotate(90deg) translateY(-100%)',
          transformOrigin: 'left top 0',
          whiteSpace: 'nowrap',
        }}
        >
          Click to check out my art!
        </Typography>
      </Box>
    </Box>
  );
}

export default HomePage;
