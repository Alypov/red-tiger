import { Button as MaterialButton } from '@mui/material';

type button = {
  color: 'primary' | 'secondary' | 'warning' | 'success' | 'error' | 'info' | 'inherit';
  text: string;
  onClick?: () => void;
};

export const Button = ({ color, text, onClick }: button) => {
  return (
    <MaterialButton onClick={onClick} color={color} variant='contained'>
      {text}
    </MaterialButton>
  );
};
