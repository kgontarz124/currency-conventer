import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#519D9E',
    },
    secondary: {
      main: '#FBFBFB',
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
      h3: {
        width: 'max-content',
        fontSize: '1.8rem',
        '@media(min-width: 600px)': {
          fontSize: '3rem',
        },
      },
      h6: {
        color: '#fff',
      },
      subtitle1: {
        fontWeight: 'lighter',
        color: '#519D9E',
      },
      subtitle2: {
        fontWeight: 'lighter',
        fontSize: '0.775rem',
      },
    },
    MuiToolbar: {
      root: {
        width: '100%',
        background: '#519D9E',
        display: 'flex',
        justifyContent: 'space-between',
      },
    },
    MuiListItemText: {
      root: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
    },
    MuiButton: {
      containedSecondary: {
        color: '#519D9E',
        '&:hover': {
          backgroundColor: '#fff',
          opacity: 0.8,
          transition: 'all 0.3s',
        },
      },
    },
  },
});
