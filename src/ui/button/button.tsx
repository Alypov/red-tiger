import { Button as MaterialButton, ThemeProvider } from '@mui/material';

import cn from 'classnames';
import { theme } from '../../shared';

import styles from './styles.module.scss';
type button = {
  color: 'primary' | 'secondary' | 'warning' | 'success' | 'error' | 'info' | 'inherit';
  text: string;
};

export const Button = ({ color, text }: button) => {
  return (
    // <ThemeProvider theme={theme}>
      <MaterialButton color={color} variant='contained'>
        {text}
      </MaterialButton>
    // </ThemeProvider>
  );
};
