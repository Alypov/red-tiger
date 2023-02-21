import { Paper, Table as MaterialTable, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { memo, useState } from 'react';
import { useForm } from 'react-hook-form';
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
  const [candidateID, setCandidateID] = useState('');

  const { handleSubmit, control, reset } = useForm({ defaultValues: { id: '', name: '', contact: '', email: '' } });

  const editRow = (row: candidate) => {
    setIsOpen(true);
    reset({
      id: row.id,
      name: row.name,
      contact: row.contact,
      email: row.email,
    });
    setCandidateID(row.id);
  };

  const updateCandidate = (data: any) => {
    console.log('data=====>', data);
  };

  const getKeys = (rows: candidate[]) => {
    return Object.keys(rows);
  };

  const renderRow = (row: any) => {
    const keys = getKeys(row);

    const result = keys.map((item, index) => {
      return (
        <>
          <TableCell key={item} align={index !== 0 ? 'right' : undefined}>
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
      <Modal title='EDIT CANDIDATE' onSubmitHandler={handleSubmit(updateCandidate)} actions isOpen={isOpen} setIsOpen={setIsOpen}>
        <CreateUpdateCandidate control={control} candidateID={candidateID} />
      </Modal>
      <TableContainer component={Paper}>
        <MaterialTable sx={{ minWidth: tableMinWidth }}>
          <TableHead>
            <TableRow>
              {headCells.map((cell, index): any => {
                return (
                  <TableCell key={cell} align={index !== 0 ? 'right' : undefined}>
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
