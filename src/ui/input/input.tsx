import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

export const Input = ({ name, control, error }: any) => {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => <TextField id={name} name={name} helperText={error ? error[name]?.message : null} error={!!error[name]?.message} onChange={onChange} value={value} />}
      />
    </>
  );
};
