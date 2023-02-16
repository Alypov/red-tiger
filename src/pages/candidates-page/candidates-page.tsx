// import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import { useState } from 'react';
import { Table } from '../../components';
import { mockCandidates } from '../../shared';
import { Button, Modal } from '../../ui';

export const CandidatesPage = () => {
  const headCells: string[] = ['ID', 'Name', 'Contact', 'Email', ''];

  const [isOpen, setIsOpen] = useState(false);

  const addCandidate = () => {
    console.log('ADDED');
    setIsOpen(false);
  };

  const onOpenOnClickHandler = () => setIsOpen(!isOpen);
  return (
    <div>
      <Modal onSubmitHandler={addCandidate} actions isOpen={isOpen} setIsOpen={setIsOpen} title='ADD CANDIDATE'>
        CREATE A NEW CANDIDATE
      </Modal>
      <Button color='primary' text='Add' onClick={onOpenOnClickHandler} />
      <Table tableMinWidth={650} rows={mockCandidates} headCells={headCells} />
    </div>
  );
};
