import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Box, Table, TableBody, TableRow, TableCell,
} from '@mui/material';
import remarkGfm from 'remark-gfm';

function StyledTableCell({ sx, align, children } : any) {
  return (
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
  );
}

function MarkDownRenderer({ markdownContent } : any) {
  return (
    <Box>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          table: Table, tbody: TableBody, tr: TableRow, td: StyledTableCell, th: StyledTableCell,
        }}
      >
        {markdownContent}

      </ReactMarkdown>
    </Box>
  );
}

export default MarkDownRenderer;
