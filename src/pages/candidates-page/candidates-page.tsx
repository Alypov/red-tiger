import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Table, CreateUpdateCandidate } from '../../components';
import { mockCandidates } from '../../shared';
import { Button, Modal } from '../../ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { validationSchema } from './validation';

export const CandidatesPage = () => {
  const headCells: string[] = ['ID', 'Name', 'Contact', 'Email', ''];

  const [isOpen, setIsOpen] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(validationSchema), defaultValues: { id: '', name: '', contact: '', email: '' } });

  const addCandidate = (data: any) => {
    console.log('ADDED', data);
    reset({ id: '', name: '', contact: '', email: '' });
    setIsOpen(false);
  };
  console.log('errors', errors);

  const onOpenOnClickHandler = () => setIsOpen(!isOpen);
  return (
    <div>
      <Modal onSubmitHandler={handleSubmit(addCandidate)} actions isOpen={isOpen} setIsOpen={setIsOpen} title='ADD CANDIDATE'>
        {<CreateUpdateCandidate errors={errors} control={control} />}
      </Modal>
      <Button color='primary' text='Add' onClick={onOpenOnClickHandler} />
      <Table tableMinWidth={650} rows={mockCandidates} headCells={headCells} />
    </div>
  );
};
