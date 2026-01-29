
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import './index.css'
import '@fontsource/sora/700.css';



createRoot(document.getElementById('root')).render( 
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </ThemeProvider>    
);
