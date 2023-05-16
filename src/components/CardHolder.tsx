import React from 'react';
import {
  Box,
} from '@mui/material';
import { CardHolderProps } from '../types';
import ProjectCard from './ProjectCard';
// takes an array of jsons
function CardHolder({ projects } : any) {
  return (
    <Box sx={{
      pt: '4%',
      pb: '7%',
      pr: '5%',
      display: 'flex',
      flexDirection: 'row',
      columnGap: '35px',
      overflowX: 'auto',
      '&::-webkit-scrollbar': {
        width: 0,
        height: 0,
        background: 'transparent',
      },
      '& > *': {
        flexShrink: 0,
      },
      flexWrap: 'nowrap',
    }}
    >
      {projects.map((item: CardHolderProps) => (
        <ProjectCard
          title={item.title}
          description={item.description}
          link={item.link}
        />
      ))}
    </Box>
  );
}

export default CardHolder;
