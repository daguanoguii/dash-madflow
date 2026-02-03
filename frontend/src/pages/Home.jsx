import { useState } from "react"
import { Box, IconButton, Typography, Grid, Card, Select, MenuItem } from "@mui/material"

import { Sidebar } from "../components/layouts/SideBar"



export const Home = () => {
  const [open, setOpen] = useState(false)



  return (
    <Box sx={{ display: "flex"  }}>
      
      <Sidebar open={open} setOpen={setOpen}/>

      {/* HEADER */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
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