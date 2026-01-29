import { Grid, Box, Typography, TextField, IconButton, Link, Button } from "@mui/material";
import { useState } from "react";
import VisibilityOffSharpIcon from '@mui/icons-material/VisibilityOffSharp';
import VisibilitySharpIcon from '@mui/icons-material/VisibilitySharp';
import bg from '../assets/medflow.jpeg';
import { FcGoogle } from 'react-icons/fc';
import { Link as RouterLink } from "react-router-dom";
import { registerRequest } from "../services/authService";

export const SingUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async () => {
        setError("");

        if (password !== confirmPassword) {
            setError("Senhas não coincidem");
            return;
        }

        if (password.length < 6) {
             setError("Senha muito curta");
            return;
        }

    try {
      await registerRequest(email, password);
      alert("Conta criada! Faça login.");
    } catch {
      alert("Erro ao registrar");
    }
  };

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((prev => !prev));
    const handleMouseDownPassword = (event) => event.preventDefault();

  return (

        <Grid container sx={{minHeight: "100vh",
                             minWidth: "100vh",
                             display: 'flex',
                             background: 'linear-gradient(180deg, rgba(221, 232, 238, 0.5) 48.5%, rgba(222, 230, 234, 0.5) 100%)'
                             
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
                        background: 'linear-gradient(180deg, rgb(255, 255, 255) 48.5%, rgba(251, 251, 251, 0.86) 100%)',
                       

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

                   
                        <Typography variant="h4" gutterBottom={false} sx={{fontSize: 40,}} >
                             Crie sua conta
                        </Typography>
                         

                        <Typography variant="subtitle1" >
                        Gerencie melhor, economize mais.
                        </Typography>

                        <Typography variant="nome" 
                                    >
                        Nome Completo

                        </Typography>

                        <TextField
                        placeholder="Digite Seu Nome"
                        color="secondary" 
                        fullWidth
                        margin="none"  />

                        <Typography variant="label" 
                                    >
                        email

                        </Typography>

                        <TextField
                        placeholder="Digite Seu Email"
                        color="secondary" 
                        fullWidth
                        margin="none"
                        onChange={e => setEmail(e.target.value)}   />

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
                        onChange={e => setPassword(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                                        {showPassword ? <VisibilityOffSharpIcon /> : <VisibilitySharpIcon />}
                                    </IconButton>
                                )
                            }}
                        />

                        <Typography 
                        variant="label"
                        fullWidth sx={{mt: 3}}>
                        Confirme sua Senha
                        </Typography>

                        <TextField
                        placeholder="Digite sua Senha"
                        type={showPassword ? "text" : "password"}
                        color="secondary" 
                        fullWidth
                        margin="none"
                        variant="outlined"
                        onChange={e => setConfirmPassword(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                                        {showPassword ? <VisibilityOffSharpIcon /> : <VisibilitySharpIcon />}
                                    </IconButton>
                                )
                            }}
                        sx={{
                            marginBottom: 2,
                        }}
                        />

                        {error && (
                            <Typography color="error" fontSize={14}>
                                {error}
                            </Typography>
                        )}
                        
                        
                        <Button variant="contained"
                                onClick={handleRegister} >
                            Registrar-se
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
                            Já tem uma conta? 
                                <Link   href="#" component={RouterLink} to="/login"
                                        sx={{paddingLeft: "3px",
                                             textDecoration: 'underline',
                                            }}>
                                    {'Faça o login'}
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