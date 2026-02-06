import { Box, IconButton } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import HomeIcon from "@mui/icons-material/Home"
import EventIcon from "@mui/icons-material/Event"
import PeopleIcon from "@mui/icons-material/People"
import BarChartIcon from "@mui/icons-material/BarChart"
import SettingsIcon from "@mui/icons-material/Settings"
import LogoutIcon from "@mui/icons-material/Logout"
import AssignmentIcon from '@mui/icons-material/Assignment'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import SidebarItem from "./SideBarItem"

export const Sidebar = ({ open, setOpen }) => {
  return (
    <Box
      sx={{
        width: open ? 220 : 80,
        minHeight: "100vh",
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
  )
}