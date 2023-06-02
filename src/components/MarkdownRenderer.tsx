import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Typography, Box, Table, TableBody, TableRow, TableCell, ThemeProvider, createTheme,
} from '@mui/material';
import remarkGfm from 'remark-gfm';

function StyledTypography({ children } : any) {
  return (
    <Typography
      sx={{ fontSize: '20px' }}
    >
      {children}
      <br />
      <br />
    </Typography>
  );
}

const customTheme = createTheme({
  typography: {
    // Override the font sizes as per your requirements
    fontSize: 16, // for the default font size
    h1: {
      fontSize: 24,
    },
    h2: {
      fontSize: 20,
    },
    body1: {
      fontSize: 20,
    },
  },
});

function StyledTableCell({ sx, align, children } : any) {
  return (
    <ThemeProvider theme={customTheme}>
      <TableCell
        sx={{
          border: '1px solid grey',
          // borderBottom: 'none', // optional, remove if not needed
          textAlign: align || 'left',
          fontWeight: 'inherit',
          fontSize: 'inherit',
          ...sx,
        }}
      >
        {children}
      </TableCell>
    </ThemeProvider>
  );
}

function MarkDownRenderer({ markdownContent } : any) {
  return (
    <Box>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          table: Table,
          tbody: TableBody,
          tr: TableRow,
          td: StyledTableCell,
          th: StyledTableCell,
          p: StyledTypography,
        }}
      >
        {markdownContent}

      </ReactMarkdown>
    </Box>
  );
}

export default MarkDownRenderer;
