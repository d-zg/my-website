import React, { useState, useEffect } from 'react';
import {
  Box, Button, Typography, CircularProgress,
} from '@mui/material';
import { BlogPost } from '../types';
import PostGrid from '../components/PostGrid';

function BlogPage() {
  const [loading, setLoading] = useState(0);
  const [blogposts, setBlogPosts] = useState<BlogPost[]>([]);
  useEffect(() => {
    setLoading(1);
    fetch('https://dzgwriting.xyz:443/blogposts')
      .then((response) => response.json())
      .then((json) => {
        setBlogPosts(json);
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
        <CircularProgress />
        <Typography>Fetching blog posts...</Typography>
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
        <CircularProgress />
        <Typography>Give my cheapo EC2 instance a bit!</Typography>
      </Box>
    );
  }
  if (loading === 2 && blogposts.length > 0) {
    return (
      <Box sx={{
        pt: '2.5%',
        ml: '10%',
        mr: '8%',
        alignItems: 'center',
      }}
      >
        <Typography variant="h1" fontSize="96px" fontWeight="500" sx={{ opacity: '0.3' }}>My Blog!</Typography>
        <Typography fontSize="24px">Check my writing out.</Typography>
        <Box sx={{ pt: '4%' }}>
          <PostGrid projects={blogposts} />
        </Box>

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
        <CircularProgress />
        <Typography>
          Sorry, fetch failed for some reason. My EC2 instance might be dead.
          Refresh maybe?
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{
      mt: '6%',
      ml: '10%',
    }}
    >
      <Typography>
        Nothing here yet! Get me to write something.
      </Typography>
      <Button href="#/">
        <Typography variant="button" sx={{ fontSize: '16px' }}>
          Back to home
        </Typography>
      </Button>
    </Box>
  );
}

export default BlogPage;
