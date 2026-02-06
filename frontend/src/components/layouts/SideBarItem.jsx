import { Box, Typography } from "@mui/material"

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
      "&:hover": { 
        backgroundColor: "#6d5bd03f",
        transition: "background-color 0.3s"
      }
    }}
  >
    {icon}
    {open && <Typography>{label}</Typography>}
  </Box>
)

export default SidebarItem