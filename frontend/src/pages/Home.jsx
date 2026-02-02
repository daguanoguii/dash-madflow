import { useState } from "react"
import { Box, IconButton, Typography, Grid, Card } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import HomeIcon from "@mui/icons-material/Home"
import EventIcon from "@mui/icons-material/Event"
import PeopleIcon from "@mui/icons-material/People"
import BarChartIcon from "@mui/icons-material/BarChart"
import SettingsIcon from "@mui/icons-material/Settings"
import LogoutIcon from "@mui/icons-material/Logout"
import AssignmentIcon from '@mui/icons-material/Assignment'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import { getDiaMesAtual } from '../hooks/home_page/DiaeMes'


export const Home = () => {
  const [open, setOpen] = useState(false)



  return (
    <Box sx={{ display: "flex" }}>
      {/* SIDEBAR */}
      <Box
        sx={{
          width: open ? 220 : 80,
          height: "100vh",
          backgroundColor: "#3e3283fc",
          transition: "width 0.3s",
          display: "flex",
          flexDirection: "column",
          p: 1
        }}
      >
        {/* Botão menu */}
        <IconButton onClick={() => setOpen(!open)} sx={{ color: "white", mb: 2 }}>
          <MenuIcon />
        </IconButton>

        <SidebarItem icon={<HomeIcon />} label="Home" open={open} />
        <SidebarItem icon={<EventIcon />} label="Consultas" open={open} />
        <SidebarItem icon={<PeopleIcon />} label="Pacientes" open={open} />
        <SidebarItem icon={<AssignmentIcon />} label="Protuários" open={open} />
        <SidebarItem icon={<BarChartIcon />} label="Relatórios" open={open} />
        <SidebarItem icon={<AttachMoneyIcon />} label="Financeiro" open={open} />
        

        <Box sx={{ flexGrow: 1 }} />
            <SidebarItem icon={<SettingsIcon />} label="Configurações" open={open} />
            <SidebarItem icon={<LogoutIcon />} label="Sair" open={open} />
        </Box>

      {/* CONTEÚDO */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        
        <Typography variant="h5" fontWeight="bold">
            Dashboard
        </Typography>

        <Typography color="text.secondary">
            {getDiaMesAtual()}
        </Typography>
      </Box>

        <Grid container spacing={2} mb={3}>
            <Grid item xs={12} md={3}>
                <SummaryCard title="Consultas Hoje" value="18" />
            </Grid>

            <Grid item xs={12} md={3}>
                <SummaryCard title="Pacientes Atendidos" value="12" />
            </Grid>

            <Grid item xs={12} md={3}>
                <SummaryCard title="Cancelamentos" value="2" />
            </Grid>

            <Grid item xs={12} md={3}>
                <SummaryCard title="Faturamento" value="R$ 3.200" />
            </Grid>
        </Grid> 

        <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
                <Card sx={{ p: 2 }}>
                <Typography variant="h6" mb={2}>Consultas de Hoje</Typography>
                            {/* tabela aqui */}
                </Card>
        </Grid>

         <Grid item xs={12} md={4}>
            <Card sx={{ p: 2 }}>
            <Typography variant="h6">Hoje na Clínica</Typography>

            <Typography mt={2} fontWeight="bold">Próxima consulta</Typography>
            <Typography>10:00 - Marcos Silva</Typography>

            <Typography mt={2} fontWeight="bold">Aguardando</Typography>
            <Typography>Maria - 09:00</Typography>

            <Typography mt={2} fontWeight="bold" color="error">Cancelamentos</Typography>
            <Typography>João - 14:00</Typography>
            </Card>
         </Grid>
        </Grid>
        <Card sx={{ p: 2, mt: 3 }}>
        <Typography variant="h6">Consultas nos últimos 7 dias</Typography>
                {/* gráfico depois */}
        </Card>
    </Box>
  )
}

  const SummaryCard = ({ title, value }) => (
  <Card sx={{ p: 2, borderRadius: 3 }}>
    <Typography color="text.secondary">{title}</Typography>
    <Typography variant="h5" fontWeight="bold">{value}</Typography>
  </Card>
)

const SidebarItem = ({ icon, label, open }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 2,
      p: 1,
      borderRadius: 2,
      cursor: "pointer",
      color: "white",
      "&:hover": { backgroundColor: "#6d5bd03f",
                    transition:
                      "background-color 0.3s"
       }
    }}
  >

    {icon}
    {open && <Typography>{label}</Typography>}
  </Box>
)