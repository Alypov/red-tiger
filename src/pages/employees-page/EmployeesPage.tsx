import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Table, CreateUpdateCandidate } from '../../components';
import { employee, mockEmployees } from '../../shared';
import { Button, Modal } from '../../ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { validationSchema } from './validation';

interface TableItem {
  id: string;
  name: string;
  contact: string;
  email: string;
}

export const EmployeesPage = () => {
  const headCells: string[] = ['ID', 'Name', 'Contact', 'Email', ''];

  const [isOpen, setIsOpen] = useState(false);
  const [tableData, setTableData] = useState<TableItem[]>([]);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(validationSchema), defaultValues: { id: '', name: '', contact: '', email: '' } });

  const prepareTableInfo = () => {
    const result: TableItem[] = [];
    mockEmployees.map((item) => {
      result.push({ id: item.id, name: item.name, contact: item.contact, email: item.email });
    });
    setTableData(result);
  };

  useEffect(() => {
    prepareTableInfo();
  }, []);
  const addCandidate = (data: any) => {
    console.log('ADDED', data);
    reset({ id: '', name: '', contact: '', email: '' });
    setIsOpen(false);
  };

  const onOpenOnClickHandler = () => setIsOpen(!isOpen);
  return (
    <div>
      <Modal minWidth='500px' onSubmitHandler={handleSubmit(addCandidate)} actions isOpen={isOpen} setIsOpen={setIsOpen} title='ADD CANDIDATE'>
        {<CreateUpdateCandidate errors={errors} control={control} />}
      </Modal>
      <Button color='primary' text='Add' onClick={onOpenOnClickHandler} />
      <Table tableMinWidth={650} rows={tableData} headCells={headCells} />
    </div>
  );
};
