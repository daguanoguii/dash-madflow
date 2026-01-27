import {createTheme} from '@mui/material/styles';

export const theme = createTheme({
    palette:{
        primary:{
            mode: 'dark',
            main: '#1fb6a6',
        },
        background:{
            default: '#0b2c3d',
            paper: 'rgba(255,255,255,0.08)',
        },
        shape: {
            borderRadius: 12,
        },
        
    }
});
