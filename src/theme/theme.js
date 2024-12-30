// theme.js

import { createTheme } from '@mui/material/styles';

// Light Theme
export const lightTheme = createTheme({
  direction: 'ltr',
  palette: {
    mode: 'light',
    primary: {
      main: '#fffaff',
    },
    secondary: {
      main: '#ff7043',
    },
    background: {
      default: '#f4f6f8',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#ffffff',
    },
  },
});

// Dark Theme
export const darkTheme = createTheme({
  direction: 'ltr',

  palette: {
    mode: 'dark',
    primary: {
      main: '#3949ab',
    },
    secondary: {
      main: '#ff7043',
    },
    background: {
      default: '#303030',
      paper: '#424242',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
  },
});
