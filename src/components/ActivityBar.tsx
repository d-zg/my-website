import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SchoolIcon from '@mui/icons-material/School';
import WeekendIcon from '@mui/icons-material/Weekend';

function ActivityBar({
  book, skill, activity, skillLink, bookLink,
}: any) {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      color: 'secondary.main',
      alignItems: 'center',
      '& .MuiTypography-root': {
        padding: '15px',
        fontSize: '14px',
        paddingRight: '12px',
        color: '#808080',
        flexGrow: 1,
      },
    }}
    >
      <Button>
        <Typography variant="button" sx={{ color: '#808080' }}>
          {'I\'m relaxing by:'}
          <br />
          {`${activity}`}
        </Typography>
        <WeekendIcon />
      </Button>
      <Button href={bookLink} target="_blank">
        <Typography variant="button" sx={{ color: '#808080' }}>
          {'I\'m reading:'}
          <br />
          {`${book}`}
        </Typography>
        <AutoStoriesIcon />
      </Button>
      <Button href={skillLink} target="_blank">
        <Typography variant="button" sx={{ color: '#808080' }}>
          {'I\'m learning:'}
          <br />
          {`${skill}`}
        </Typography>
        <SchoolIcon />
      </Button>
    </Box>
  );
}

export default ActivityBar;
