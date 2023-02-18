import { Button as MaterialButton } from '@mui/material';

type button = {
  color: 'primary' | 'secondary' | 'warning' | 'success' | 'error' | 'info' | 'inherit';
  text: string;
  onClick?: () => void;
  type?: 'button' | 'reset' | 'submit';
};

export const Button = ({ type, color, text, onClick }: button) => {
  return (
    <MaterialButton type={type} onClick={onClick} color={color} variant='contained'>
      {text}
    </MaterialButton>
  );
};
