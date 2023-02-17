import { TextField } from '@mui/material';

export const Input = ({ name, defaultValue }: any) => {
  return <TextField defaultValue={defaultValue} name={name} />;
};
