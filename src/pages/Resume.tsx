import React from 'react';
import { Box, Typography } from '@mui/material';

function Resume() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      pt: '4%',
      pl: '10%',
      pr: '10%',
      pb: '10%',
    }}
    >
      <Typography variant="h3">
        Education
      </Typography>
      <Typography sx={{ pt: '5px' }}>
        Vanderbilt University, M.Sc. + B.S. Computer Science, B.A. Math. Expected Spring 2025.
      </Typography>
      <Typography fontSize="14px" sx={{ pl: '25px ' }}>
        <strong>Coursework: </strong>
        {' '}
        {'Machine Learning, Topics in Big Data, Probability/Statistics, Graph Theory, Game Theory. (Fall 2023:) Advanced ML, Representation Learning, Principles of SWE, Linear Optimization, Topology '}
        <br />
        <strong>Activities: </strong>
        {' '}
        Data Science for Social Good, Math Club, Google Developer Club
      </Typography>

      <Typography variant="h3" sx={{ pt: '40px' }}>
        Skills
      </Typography>
      <Typography fontSize="16px">
        <strong>Languages:</strong>
        {' '}
        Python, C++, JavaScript, R, Dart
        <br />
        <strong>Tools and libraries: </strong>
        Git, Bash, ML (Huggingface, PyTorch), Data Science (pandas, scikit-learn, NumPy),
        React, Node, SQL, MongoDB, Spark, AWS
        {' '}
        <br />
        <strong>Misc: </strong>
        {' '}
        Latex, Adobe Photoshop, Indesign, Illustrator, EMT/CPR certified
      </Typography>

      <Typography variant="h3" sx={{ pt: '40px' }}>
        Experiences
      </Typography>
      {/* <Typography sx={{ pt: '10px' }}>
        <strong>Vanderbilt Data Science Institute</strong>
      </Typography>
      <Typography sx={{ pt: '0px' }}>
        Data Science for Social Good Developer, Starting June 2023, Nashville, TN.
      </Typography>
      <Typography sx={{ fontSize: '14px', pt: '14px' }}>
        • Developing NLP/data science applications for Nashville nonprofits.
      </Typography> */}
      <Typography sx={{ pt: '20px' }}>
        <strong>Vanderbilt University Leach Lab</strong>
      </Typography>
      <Typography sx={{ pt: '0px' }}>
        Research, August 2022 - May 2023, Nashville, TN.
      </Typography>
      <Typography sx={{ fontSize: '14px', pt: '14px' }}>
        • Writing a manuscript about using text-to-image models to generate image training data.
      </Typography>
      <Typography sx={{ pt: '20px' }}>
        <strong>Columbia University Computational Design Lab</strong>
      </Typography>
      <Typography sx={{ pt: '0px' }}>
        Research, May 2022 - August 2022, Nashville, TN.
      </Typography>
      <Typography sx={{ fontSize: '14px', pt: '14px' }}>
        • Designing and improving Opal, a multimodal AI tool that helps
        newspaper illustrators generate visual assets and ideas.
      </Typography>
      <Typography sx={{ pt: '20px' }}>
        <strong>Scarsdale Volunteer Ambulance Corps</strong>
      </Typography>
      <Typography sx={{ pt: '0px' }}>
        Volunteer, April 2021 - August 2021, Scarsdale, NY.
      </Typography>
      <Typography sx={{ fontSize: '14px', pt: '14px' }}>
        • Trained and volunteered as EMT-B.
        Responded to 911 calls and provided emergency medical treatment.
      </Typography>
    </Box>
  );
}

export default Resume;
