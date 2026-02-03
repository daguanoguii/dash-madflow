import { useState } from "react"
import { Box, IconButton, Typography, Grid, Card, Select, MenuItem, TextField } from "@mui/material"
import { Sidebar } from "../components/layouts/SideBar"



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
      
          <Grid container spacing={2} flexDirection="row">
            <Grid item xs={12} sm={6} md={3} >
              <Box sx={{ justifyContent:"initial", height: "100%", width:"150px", backgroundColor:"#ff0000"}}>
                <Typography variant="h5" fontWeight="bold">
                    Organizar as finanças hoje é o que permite investir com segurança, crescer com inteligência e manter a saúde do seu negócio no futuro.
                </Typography>
              </Box>
            </Grid>
            
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
        

      </Box>
    </Box>

        
        



  )
}

  const SummaryCard = ({ title, value }) => (
  <Card sx={{ p: 2, borderRadius: 3 }}>
    <Typography color="text.secondary">{title}</Typography>
    <Typography variant="h5" fontWeight="bold">{value}</Typography>
  </Card>
)


