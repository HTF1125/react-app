import Dashboard from "./pages/dashboard";
import Securities from "./pages/securities";
import Strategies from "./pages/strategies";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";


const routeContent = {
  Dashboard: {
    icon: <HomeOutlinedIcon fontSize="large" />, //
    to: "/dashboard",
    page: <Dashboard />,
  },
  Strategy: {
    icon: <AutoGraphOutlinedIcon fontSize="large" />,
    to: "/strategies",
    page: <Strategies />,
  },
  GoalReport: {
    icon: <AssessmentOutlinedIcon fontSize="large"/>,
    to: "/goals",
  },
  GoalDesign: {
    icon: <DesignServicesOutlinedIcon fontSize="large" />,
    to: "/design",
  },
  Metadata: {
    icon: <MonitorHeartOutlinedIcon fontSize="large" />,
    to: "/securities",
    page: <Securities />,
  }
}

export default routeContent;
