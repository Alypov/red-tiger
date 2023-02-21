import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Table, CreateUpdateCandidate } from '../../components';
import { mockCandidates } from '../../shared';
import { Button, Modal } from '../../ui';

export const CandidatesPage = () => {
  const headCells: string[] = ['ID', 'Name', 'Contact', 'Email', ''];

  const [isOpen, setIsOpen] = useState(false);
  const { control, handleSubmit, reset } = useForm({ defaultValues: { id: '', name: '', contact: '', email: '' } });

  const [newCandidateData, setNewCandidateData] = useState({ id: '', name: '', contact: '', email: '' });

  const addCandidate = (data: any) => {
    console.log('ADDED', data);
    reset({ id: '', name: '', contact: '', email: '' });
    setIsOpen(false);
  };

  const onOpenOnClickHandler = () => setIsOpen(!isOpen);
  return (
    <div>
      <Modal onSubmitHandler={handleSubmit(addCandidate)} actions isOpen={isOpen} setIsOpen={setIsOpen} title='ADD CANDIDATE'>
        {<CreateUpdateCandidate control={control} />}
      </Modal>
      <Button color='primary' text='Add' onClick={onOpenOnClickHandler} />
      <Table tableMinWidth={650} rows={mockCandidates} headCells={headCells} />
    </div>
  );
};
