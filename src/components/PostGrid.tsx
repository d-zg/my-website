import React from 'react';
import {
  Box,
} from '@mui/material';
import { BlogPost } from '../types';
import PostCard from './PostCard';
// takes an array of jsons
function PostGrid({ projects } : any) {
  return (

    <Box sx={{
      display: 'grid',
      gap: '2%',
      // overflowY: 'auto',
      pb: '10%',
      '&::-webkit-scrollbar': {
        width: 0,
        height: 0,
        background: 'transparent',
      },
      '& > *': {
        flexShrink: 0,
        width: '95%',
      },
    }}
    >

      {projects.map((item: BlogPost) => (
        <PostCard
          title={item.headline}
          description={item.tagline}
          // eslint-disable-next-line no-underscore-dangle
          postid={`${item._id}`}
        />
      ))}
    </Box>
  );
}

export default PostGrid;
