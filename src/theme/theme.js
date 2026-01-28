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
        
    },
    typography: {
        //Titulo
        h4: {
            fontFamily: 'General Sans Variable, sans-serif', 
            color: "#6d5bd0fc",
            fontWeight: 700, 
            letterSpacing: '4px', 
            fontSize: '50px',
            textShadow: '0px 1px 2px rgba(0,0,0,0.10)',
            lineHeight: 1.1,
        },

        subtitle1: {
            marginBottom: '1.3rem',
            marginTop: 0,
            fontWeight: 330,         
            fontSize: '1rem',
            color: '#6d5bd0f3',
            letterSpacing: '2px',
            textShadow: '0px 1px 2px rgba(0,0,0,0.10)'
        },
    
        //ENCIMA DO INPUT
        label:{
            fontFamily: 'Sora, sans-serif',
            fontWeight: 600,
            fontSize: '0.90rem',
            letterSpacing: '0.10px',
            fontStyle: 'italic',
            color: '#442fbca4',
            alignSelf: 'flex-start',
            marginTop: 10,
            marginLeft: 15,
        },
        
        opcoes:{
            fontFamily: 'Sora, sans-serif',
            fontWeight: 400,
            fontSize: '0.90rem',
            letterSpacing: '0.10px',
            color: '#09051fb4',
            alignSelf: 'center',
            marginTop: 30,
            marginBottom: 10,
            
        },

        sing:{
            fontFamily: 'Sora, sans-serif',
            fontWeight: 400,
            fontSize: '0.90rem',
            letterSpacing: '0.10px',
            color: '#09051fb4',
            alignSelf: 'center',
            marginTop: 30,
            marginBottom: 10,
        },
        
    },

      components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          width: '100%',
          height: 50    ,
        padding: "10px 18px",


          // Borda normal
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#c4c4c4",
          },

          // Hover
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#07192ead",
          },

          // Quando está focado
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#0e1e318e",
            borderWidth: 2,
          },
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#6b7280",

          "&.Mui-focused": {
            color: "#1565c0",
          },
        },
      },
    },
  
   MuiLink: {
      styleOverrides: {
        root: {
          marginTop: 15,
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          color: '#31a89e',
          textDecoration: 'none',
          transition: '0.2s ease',
          fontSize: '10',
          "&:hover": {
            color: '#1e5b56',
            textDecoration: 'none',
          },
        },
      },
    },
    MuiButton: {
  styleOverrides: {
    root: {
      borderRadius: 50,
      height: 48,
      fontFamily: 'Sora, sans-serif',
      fontWeight: 700,
      letterSpacing: '1px',
      textTransform: 'uppercase',
      boxShadow: 'none',
      transition: '0.25s ease',
      marginTop: 15,
      color: '#0e0c0ce7'
    },

    contained: {
      background: 'linear-gradient(90deg, #6d5bd0, #7f6cff)',
      width: '100%', 
      fontSize: 14,height: 50,

      "&:hover": {
        background: 'linear-gradient(90deg, #5b4ac2, #6d5bd0)',
        boxShadow: '0 4px 14px rgba(109, 91, 208, 0.35)',
        transform: 'translateY(-1px)',
      },

      "&:active": {
        transform: 'translateY(0px)',
        boxShadow: '0 2px 6px rgba(109, 91, 208, 0.3)',
      }
    },
    outlined:
    {
      borderRadius: 50,
      width: '100%',
      height: 50,
      fontSize: 14,
      borderColor: '#38373bfc',
      borderWidth: 0.8,
      color: '#68676efa',

      "&:hover": {
        borderColor: '#6d5bd0f3',
        backgroundColor: 'rgba(107, 107, 107, 0.05)',
        boxShadow: '0 4px 14px rgba(30, 91, 86, 0.15)',
        transform: 'translateY(-1px)',
      },

      "&:active": {
        transform: 'translateY(0px)',
        boxShadow: '0 2px 6px rgba(30, 91, 86, 0.1)',
      }
    }
  }
}
},
});

