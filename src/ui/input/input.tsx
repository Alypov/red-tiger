import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

export const Input = ({ name, control }: any) => {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <Controller name={name} control={control} render={({ field: { value, onChange } }) => <TextField id={name} name={name} onChange={onChange} value={value} />} />
    </>
  );
};
