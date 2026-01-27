import { createTheme } from '@mui/material/styles';

export const themedark = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
    text: {
      primary: '#333',
      secondary: '#555',
    },
  },
});