import { useState } from "react"
import { Box, IconButton, Typography, Grid, Card, Select, MenuItem, Button   } from "@mui/material"
import { Sidebar } from "../components/layouts/SideBar"
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { ChartCard } from "../components/charts/BoxFinancesCharts";



export const Home = () => {
  const [open, setOpen] = useState(false)



  return (
    <Box sx={{ display: "flex" }}>
      
      <Sidebar open={open} setOpen={setOpen}/>

      
      <Box sx={{ flexGrow: 1, p: 3, display:"flex", flexDirection:"column", background: 'linear-gradient(180deg, rgba(221, 232, 238, 0.5) 48.5%, rgba(222, 230, 234, 0.5) 100%)'}}>
            {/* HEADER */}
        <Box
          component="header"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              
              mb: 3
            }}
        >
          

            <Box>
                <Typography variant="h5" fontWeight="bold">
                    Bem vindo!
                </Typography>

                <Typography color="text.secondary">
                  Aqui está um resumo da saúde financeira do seu empreendimento.
                </Typography>
            </Box>

          

            <Box >
              <Box sx={{ display: "flex", gap: 2 }}>
              
                <Select size="small" defaultValue="2024">
                    <MenuItem value="2024">2024</MenuItem>
                    <MenuItem value="2025">2025</MenuItem>
                </Select>

                <Select size="small" defaultValue="Janeiro">
                    <MenuItem>Janeiro</MenuItem>
                    <MenuItem>Fevereiro</MenuItem>
                </Select>
        
              </Box>
            </Box>
        </Box>
      
            {/*MAIN*/}
          <Grid container spacing={3}>

              <Grid item xs={12} sm={6} md={3} >
                <Box sx={{ justifyContent:"initial",  width:"180px", display: open ? "none" : "block"}} >
                  <TextCard title="Organizar as finanças hoje é o que permite investir com segurança, crescer com inteligência e manter a saúde do seu negócio no futuro." />
                </Box>
                {!open && (
                <Box>
                  <ActionCard/>
                </Box>
                )}
              </Grid>

                <Grid item xs={12} md={9}>
                  <Grid container spacing={3} sx={{marginLeft:"3vh"}}>

                    <Grid item xs={12} sm={6} md={3}>
                      <SummaryCard title="Receita Total" value="R$ 15.000,00" />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                      <SummaryCard title="Despesas Totais" value="R$ 8.000,00" />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                      <SummaryCard title="Lucro Líquido" value="R$ 7.000,00" />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                      <SummaryCard title="Pacientes Ativos" value="120" />
                    </Grid>

                  </Grid>

                  <Box  sx={{ mt: 3, marginLeft: "1vh", height:"500px",}}>
                  <ChartCard/>
                </Box>

                </Grid>
                
          </Grid>

         

          
          
            
      </Box>
    </Box>
           
        
        



  )
}

  const SummaryCard = ({ title, value }) => (
    <Card sx={{ p: 6, borderRadius: 3, position:"relative", width:"250px" }}>
      <TrendingUpIcon sx={{justifyItems:"right", marginLeft:10}}/>
      <Typography color="text.secondary">{title}</Typography>
      <Typography variant="h5" fontWeight="bold">{value}</Typography>
    </Card>
  ) 

  const TextCard = ({ title }) => (
    <Card sx={{ p: 4, borderRadius: 3, 
                fontFamily: 'General Sans Variable, sans-serif', fontWeight:"bold", height:"500px", width:"200px",
                letterSpacing:"0.2px", textAlign:"justify", textShadow: "5px 2px px rgba(0,0,0,6,6)",
                background: 'linear-gradient(90deg, #6d5bd0, #7f6cff)', 
                boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.05)", border: "1px solid rgba(0, 0, 0, 0.05)", backdropFilter: "blur(10px)",  }}>
      <Typography 
          color="#f7f7fb"
          fontWeight="bold" 
          fontStyle="italic" 
          fontFamily="General Sans Variable, sans-serif"
          fontSize="22px">
        {title}
      </Typography>
    </Card> 
  )



const ActionCard = () => (
  <Card
    sx={{  width:"200px", p: 1, borderRadius: 3, mt: "15px"
      
    }}
  >
    <Box>
      <Typography variant="h6" fontWeight={700} mb={1}>
        Quer ver os detalhes?
      </Typography>

      <Typography variant="body2" color="text.secondary">
        Acesse relatórios completos, análises mensais e comparativos para tomar decisões mais estratégicas.
      </Typography>
    </Box>

    <Button
      variant="outlined"
      sx={{ mt: 2, borderRadius: 2 }}
    >
      Ver Relatórios
    </Button>
  </Card>
)


