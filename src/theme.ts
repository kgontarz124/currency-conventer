import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#519D9E',
      //   light: '#FBFBFB',
      //   dark: '#F3B821',
    },
    secondary: {
      main: '#343838',
      //   light: '#FBFBFB',
      //   dark: '#293647',
    },
    text: {
      primary: '#343838',
    },
  },
  typography: {
    fontFamily: '"Roboto", arial, sans-serif',
    fontSize: 14,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 475,
      md: 600,
      lg: 800,
      xl: 1440,
    },
  },
  overrides: {
    MuiFormLabel: {
      root: {
        color: '#519D9E',
      },
    },
    MuiTypography: {
      subtitle1: {
        fontWeight: 'lighter',
        color: '#519D9E',
      },
    },
  },
});
