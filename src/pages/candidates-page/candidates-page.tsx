// import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import { Table } from '../../components';
import { mockCandidates } from '../../shared';
import { Button } from '../../ui';
export const CandidatesPage = () => {
  const headCells: string[] = ['Name', 'Contact', 'Email', 'Created At'];
  return (
    <div>
      <Button color='primary' text='Add' />
      <Table tableMinWidth={650} rows={mockCandidates} headCells={headCells} />
    </div>
  );
};
