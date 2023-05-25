import React from 'react';
// import ProjectCard from '../components/ProjectCard';
import { Box, Typography } from '@mui/material';
import { CardHolderProps } from '../types';
import CardHolder from '../components/CardHolder';

function ProjectPage() {
  const projects : CardHolderProps[] = [
    {
      title: 'This Page!',
      description: 'The frontend is written with React and MaterialUI components. The backend, which is pretty much just for the blog, is a node + express server hosted on a free EC2 instance. Blogposts are stored in MongoDB and hosted on a free mongo atlas instance.',
      link: 'https://github.com/d-zg/my-website',
    },
    {
      title: 'Nashville Accidents',
      description: `Analyzed 1TB+ of Nashville emergency incident data,
      weather data, and traffic data. Generated visualizations, performed
      statistical analysis, and fit classical ML models. Used AWS, Spark, GeoPandas, and sk-learn.`,
      link: 'https://github.com/d-zg/nashville-accidents',
    },
    {
      title: 'Snapp',
      description: 'Android app that calculates SNAP benefits and contains related resources for NY and CT. Available on Google Play store. Coded with flutter.',
      link: 'https://github.com/snap-app/snapp',
    },
    {
      title: 'Holdem\'s Classifier',
      description: `Recorded 300 of my hands and actions, then trained a small neural network to predict what action I would take. Action predictor
      web app with HTML + CSS frontend and Node backend.`,
      link: 'https://github.com/d-zg/Poker-Action-Classifier',
    },
    {
      title: 'NBA Shot Prediction',
      description: `Predicting NBA shot makes. Used sk-learn and pandas to do data exploration, and feature selection, then fit and tested
      various classical ML methods and different hyperparameters on a dataset of 122,000 shots`,
      link: 'colab.research.google.com/drive/1rFfEfhvep8CtRG-GfFWtkI0cfkk0D8eH?',
    },
  ];

  return (
    <Box sx={{ pt: '2.5%', pl: '10%' }}>
      <Typography variant="h1" fontSize="96px" fontWeight="500" sx={{ opacity: '0.3' }}>Works</Typography>
      <Typography fontSize="24px">Selected Projects</Typography>
      <CardHolder projects={projects} />
    </Box>

  );
}

export default ProjectPage;
