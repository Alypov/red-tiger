import { Paper, Table as MaterialTable, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { memo, useState } from 'react';
import { candidate } from '../../shared';
import { Button, Modal } from '../../ui';
import { CreateUpdateCandidate } from '../create-update-candidate';

export type table = {
  tableMinWidth: number;
  rows: candidate[];
  headCells: string[];
};

export const Table = memo(({ tableMinWidth, rows, headCells }: table) => {
  const [isOpen, setIsOpen] = useState(false);
  const [candidateData, setCandidateData] = useState<candidate>({ id: '', name: '', contact: '', email: '' });

  const editRow = (row: candidate) => {
    setIsOpen(true);
    setCandidateData({
      id: row.id,
      name: row.name,
      contact: row.contact,
      email: row.email,
      followUpResults: [{ createdAt: '11/01/2013', result: 'none' }],
    });
  };

  const getKeys = (rows: candidate[]) => {
    return Object.keys(rows);
  };

  const renderRow = (row: any) => {
    const keys = getKeys(row);

    const result = keys.map((item, index) => {
      return (
        <>
          <TableCell align={index !== 0 ? 'right' : undefined} key={item}>
            {row[item]}
          </TableCell>
        </>
      );
    });
    return (
      <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        {result}
        <TableCell align='right'>
          <Button onClick={() => editRow(row)} color='secondary' text='EDIT' />
        </TableCell>
      </TableRow>
    );
  };

  return (
    <>
      <Modal actions isOpen={isOpen} setIsOpen={setIsOpen}>
        <CreateUpdateCandidate data={candidateData} />
      </Modal>
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
