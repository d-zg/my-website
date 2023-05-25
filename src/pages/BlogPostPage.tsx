import React, { useState, useEffect } from 'react';
import {
  Box, Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { BlogPost } from '../types';
// import PostGrid from '../components/PostGrid';

function BlogPostPage() {
  const { id } = useParams();

  const [loading, setLoading] = useState(0);
  const [blogpost, setBlogPost] = useState<BlogPost>();
  useEffect(() => {
    setLoading(1);
    fetch(`http://ec2-54-227-81-218.compute-1.amazonaws.com:443/blogposts/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setBlogPost(json);
        setLoading(2);
      }).catch((error) => {
        setLoading(3);
        // want this to be visible
        // eslint-disable-next-line
        console.error('An error occurred:', error);
      });
  }, []);

  if (loading === 0) {
    return (
      <Box sx={{
        mt: '6%',
        ml: '10%',
        alignItems: 'center',
      }}
      >
        <Typography>Sending fetch request for this blogpost...</Typography>
      </Box>
    );
  }
  if (loading === 1) {
    return (
      <Box sx={{
        mt: '6%',
        ml: '10%',
        alignItems: 'center',
      }}
      >
        <Typography>Give my cheapo EC2 instance a bit!</Typography>
      </Box>
    );
  }

  if (loading === 3) {
    return (
      <Box sx={{
        mt: '6%',
        ml: '10%',
        alignItems: 'center',
      }}
      >
        <Typography>
          Sorry, fetch failed for some reason. My EC2 instance might be dead.
          Or this id does not exist.
          Refresh maybe?
        </Typography>
      </Box>
    );
  }

  if (blogpost) {
    const { headline, tagline, fulltext } = blogpost;
    return (
      <Box sx={{
        pt: '2.5%',
        ml: '10%',
        mr: '8%',
        alignItems: 'center',
      }}
      >
        <Typography variant="h1" fontSize="96px" fontWeight="500" sx={{ opacity: '0.3' }}>{headline}</Typography>
        <Typography fontSize="24px">{tagline}</Typography>
        <Typography>{fulltext}</Typography>
      </Box>
    );
  }
  return (
    <Box sx={{
      pt: '2.5%',
      ml: '10%',
      mr: '8%',
      alignItems: 'center',
    }}
    >
      <Typography>Something went wrong.</Typography>
    </Box>
  );
}

export default BlogPostPage;
