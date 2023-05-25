import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import ContactBar from '../components/ContactBar';
import ImageCircle from '../components/ImageCircle';
import ActivityBar from '../components/ActivityBar';

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
          flexWrap: 'wrap',
          alignContent: 'left',
        }}
      >
        <Box sx={{
          width: '50%',
          mt: '6%',
          textAlign: 'left',
          pl: '10%',
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
            sx={{ pt: '8%', mr: '10%' }}
          >
            {`I'm a B.S. + M.Sc. student at Vanderbilt University majoring in Computer Science
          and Math. I'm broadly interested in generative ML, distributed computing, and data science.`}
          </Typography>
          <ContactBar />
          <Typography
            sx={{ pt: '8%', mr: '10%' }}
          >
            This is my portfolio, blog, notebook, and frontend practice website.
            <br />
            {'\nHere\'s what I\'m up to right now:'}
          </Typography>
          <ActivityBar book="napkin" activity="Playing Basketball" skill="MaterialUI" bookLink="https://venhance.github.io/napkin/Napkin.pdf" skillLink="https://mui.com/" />
        </Box>
        <Box sx={{
          position: 'relative',
        }}
        >
          <ImageCircle
            handleClick={incrementIndex}
            imageSource={art[currentIndex]}
            sx={{
              top: '30%',
              left: '75px',
              zIndex: 2,
              // wordWrap: 'break-word',
              // whiteSpace: 'pre-wrap',
            }}
          />
          <ImageCircle
            handleClick={incrementIndex}
            imageSource={art[(currentIndex + 1) % art.length]}
            sx={{
              top: '50%',
              left: '225px',
              zIndex: 1,
              opacity: 0.35,
              wordWrap: 'break-word',
              whiteSpace: 'pre-wrap',
            }}
            size={{
              height: '400px',
              width: '400px',
            }}
          />
          <Typography sx={{
            position: 'relative',
            top: '75%',
            left: '675px',
            transform: 'rotate(90deg) translateY(-100%)',
            transformOrigin: 'left top 0',
            whiteSpace: 'nowrap',
          }}
          >
            Click to check out my art!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
