import { createTheme } from '@mui/material';

import colors from './theme-colors.module.scss';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.primeLight,
      dark: colors.primeDark,
    },
    secondary: {
      main: colors.secondaryLight,
      dark: colors.secondaryDark,
    },
    success: {
      main: colors.successLight,
      dark: colors.successDark,
    },
    error: {
      main: colors.errorLight,
      dark: colors.errorDark,
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableFocusRipple: true,
        disableRipple: true,
      },
    },
  },
});
