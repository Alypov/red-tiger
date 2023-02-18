import { TextField } from '@mui/material';

export const Input = ({ name, defaultValue }: any) => {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <TextField id={name} defaultValue={defaultValue} name={name} />
    </>
  );
};
