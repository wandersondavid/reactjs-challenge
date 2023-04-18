import { colors, createTheme } from '@mui/material';

export const theme = createTheme({
  brand: {
    blue: colors.blue[100],
    green: colors.green[400],
    red: colors.red[400],
  },

  palette: {
    primary: { main: '#055F5B' },
    secondary: { main: '#E1E514' },
  },

  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
