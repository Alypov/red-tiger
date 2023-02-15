import { Paper, Table as MaterialTable, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { memo } from 'react';
import { candidate } from '../../shared';

export type table = {
  tableMinWidth: number;
  rows: candidate[];
  headCells: string[];
};

export const Table = memo(({ tableMinWidth, rows, headCells }: table) => {
  const getKeys = (rows: candidate[]) => {
    return Object.keys(rows);
  };

  const renderRow = (row: any) => {
    const keys = getKeys(row);

    const result = keys.map((item) => (
      <TableCell align='right' key={item}>
        {row[item]}
      </TableCell>
    ));
    return (
      <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        {result}
      </TableRow>
    );
  };

  return (
    <>
      <TableContainer component={Paper}>
        <MaterialTable sx={{ minWidth: tableMinWidth }}>
          <TableHead>
            <TableRow>
              {headCells.map((cell, index): any => {
                return (
                  <TableCell align={index !== 0 ? 'right' : undefined} key={cell}>
                    {cell}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return renderRow(row);
            })}
          </TableBody>
        </MaterialTable>
      </TableContainer>
    </>
  );
});
