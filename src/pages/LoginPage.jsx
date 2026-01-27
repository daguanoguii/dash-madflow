
import { Grid, Box, Typography, TextField, IconButton, Link } from "@mui/material";
import { useState } from "react";
import VisibilityOffSharpIcon from '@mui/icons-material/VisibilityOffSharp';
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';
import bg from '../assets/medflow.jpeg';
import { red, cyan,  } from "@mui/material/colors";
import { FcGoogle } from 'react-icons/fc';

export const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((prev => !prev));
    const handleMouseDownPassword = (event) => event.preventDefault();

  return (

        <Grid container sx={{minHeight: "100vh",
                             minWidth: "100vh",
                             backgroundColor: cyan[50]
        }}>
            <Grid item
                    xs={12}
                    md={5}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ minHeight: "100vh", minWidth: "100vh" }}
            >
                <Box sx={{
                        backgroundColor: red[50],
                        padding: "20px",
                }}>
                    
                    <Box 
                         sx={{
                            width: "100%",
                            maxWidth: 400,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            }}>
                        <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, letterSpacing: '3px',}}>
                            Login
                        </Typography>

                        <Typography variant="subtitle1">
                        Olá, Seja Bem vindo!
                        </Typography>

                        <Typography variant="subtitle2" 
                                    sx={{
                                        mt: 1,
                                        alignSelf: 'flex-start',
                        }}>
                        email

                        </Typography>

                        <TextField
                        placeholder="Digite Seu Email"
                        color="secondary" 
                        fullWidth
                        margin="none"  />

                        <Typography 
                        variant="subtitle2"
                        fullWidth
                        sx={{
                            mt: 1,
                            alignSelf: 'flex-start',}}>
                        senha
                        </Typography>

                        <TextField
                        placeholder="Digite Sua Senha"
                        type={showPassword ? "text" : "password"}
                        color="secondary" 
                        fullWidth
                        margin="none"
                        variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                                        {showPassword ? <VisibilityOffSharpIcon /> : <VisibilitySharpIcon />}
                                    </IconButton>
                                )
                            }}
                        />

                        <Link href="#" underline="hover">
                            {'Esqueceu a senha?'}
                        </Link>
                        
                        <Box sx={{ m: 2, width: 300, height: 50, backgroundColor: red[900], borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant="button" display="block" gutterBottom sx={{ color: 'white', fontFamily: 'Inter, sans-serif', fontWeight: 600, letterSpacing: '1px' }}>
                                ENTRAR 
                            </Typography>
                        </Box>

                        <Typography 
                        variant="subtitle2"
                        fullWidth
                        sx={{
                            mt: 1,
                            alignSelf: 'center',}}>
                        Ou entre com:
                        </Typography>
                        
                        <Box sx={{ m: 2, width: 300, height: 50, backgroundColor: 'white', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', border: 1, borderColor: red[900] }}>
                            <Typography variant="button" display="block" gutterBottom sx={{ color: red[900], fontFamily: 'Inter, sans-serif', fontWeight: 600, letterSpacing: '1px' }}>
                                <FcGoogle size={17}/>ENTRE COM O GOOGLE
                            </Typography>
                        </Box>

                        <Box sx={{display: "inline"}}>
                            <Typography 
                            variant="subtitle2"
                            fullWidth
                            sx={{
                                mt: 1,
                                alignSelf: 'center',}}>
                            Não tem uma conta? <Link href="#" sx={{paddingLeft: "3px"}}>
                            {'Inscreva-se'}</Link>
                            </Typography>

                            

                        </Box>        
                        


                        
                    </Box>
                </Box>
            </Grid>
            
            <Grid

                item
                xs={12}
                md={7}
                sx={{
                    paddingTop: "80px",
                    height: "85vh",
                    width: "10%",
                    backgroundImage: `url(${bg})`,
                    minHeight: "70vh",
                    minWidth: "70vh",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    display: { xs: 'none', md: 'block' },
                    borderRadius: "20px"
                    
                    
                    
                    }}
            >
                
            </Grid>
        </Grid>
        );
        };