import { LegendTooltipComposition } from "./FinancesCharts"
import { Card, Typography, Box } from "@mui/material"

export const ChartCard = () => (
  <Card sx={{ p: 3, borderRadius: 3, height: "100%", }}>
    <Typography variant="h6" fontWeight={700} mb={2}>
      Evolução Financeira
    </Typography>

    {/* Aqui entra Recharts / Chart.js */}
    <Box sx={{ height: 300 }}>
      <LegendTooltipComposition/>
    </Box>
  </Card>
)