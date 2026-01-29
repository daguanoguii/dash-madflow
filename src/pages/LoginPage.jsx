
import { Grid, Box, Typography, TextField, IconButton, Link, Button } from "@mui/material";
import { useState } from "react";
import VisibilityOffSharpIcon from '@mui/icons-material/VisibilityOffSharp';
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';
import bg from '../assets/medflow.jpeg';
import { FcGoogle } from 'react-icons/fc';
import { Link as RouterLink } from "react-router-dom";

export const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((prev => !prev));
    const handleMouseDownPassword = (event) => event.preventDefault();

  return (

        <Grid container sx={{minHeight: "100vh",
                             minWidth: "100vh",
                             display: 'flex',
                             
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
                        marginLeft: 10,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "90%",
                        maxWidth: "500px",
                        padding: "40px",
                        borderRadius: "10px",
                        boxShadow: "3px 4px 10px rgba(0, 1, 1, 0.33)",
                        gap: '5rem',                     
                        background: 'linear-gradient(180deg, rgba(221, 232, 238, 0.5) 48.5%, rgba(222, 230, 234, 0.5) 100%)',
                        height: '80vh',

                    }}>
                    
                    <Box 
                         sx={{
                            
                            width: "100%",
                            maxWidth: 600,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            }}>

                   
                        <Typography variant="h4" gutterBottom={false} >
                             Login
                        </Typography>
                         

                        <Typography variant="subtitle1" >
                        Olá, Seja Bem vindo!
                        </Typography>

                        <Typography variant="label" 
                                    >
                        email

                        </Typography>

                        <TextField
                        placeholder="Digite Seu Email"
                        color="secondary" 
                        fullWidth
                        margin="none"  />

                        <Typography 
                        variant="label"
                        fullWidth sx={{mt: 3}}>
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
                        
                        <Button variant="contained" >
                            entrar
                        </Button>

                        <Typography 
                        variant="opcoes">
                        Ou entre com:
                        </Typography>
                        
                        <Button variant="outlined" 
                                startIcon={<FcGoogle  />}>
                                  ENTRE COM O GOOGLE
                        </Button>

                        <Box sx={{display: "inline",
                                  mt: 6,
                        }}>
                            <Typography 
                            variant="sing"
                            sx={{
                                mt: 15,
                                alignSelf: 'center',}}>
                            Não tem uma conta? 
                                <Link component={RouterLink} to="/register" href="#" sx={{paddingLeft: "3px"}}>
                                    {'Inscreva-se'}
                                </Link>
                            </Typography>

                            

                        </Box>        
                        


                        
                    </Box>
                </Box>
            </Grid>
            
            <Grid

                item
                xs={0}
                md={7}
                display={{ xs: "none", md: "flex" }} 
                justifyContent="center" 
                alignItems="center"
                    
                    
                    
                    
            >
                <Box sx={{

                    marginLeft:'50px',
                    paddingTop: "70px",
                    backgroundImage: `url(${bg})`,
                    minHeight: "90vh",
                    minWidth: "68vh",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    display: { xs: 'none', md: 'block' },
                    borderRadius: "20px"
                }}>
                 </Box>   
            </Grid>
        </Grid>
        );
        };