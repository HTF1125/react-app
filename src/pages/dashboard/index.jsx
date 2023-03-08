import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard"></Header>
      </Box>
      {/* GRID */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="20px"
        gap="20px"
      >
        {/* Row 1 */}
        <Box gridColumn="span 12" backgroundColor={colors.primary[400]}>

        </Box>

      </Box>
    </Box>
  );
};

export default Dashboard;
