import Dashboard from "./pages/dashboard";
import Securities from "./pages/securities";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const routeContent = {
  Dashboard: {
    Dashboard: {
      icon: HomeOutlinedIcon,
      to: "/dashboard",
      page: <Dashboard />,
    },
  },
  Market: {
    Overview: {
      icon: MonitorHeartOutlinedIcon,
      to: "/markets/overview",
      page: <Securities />,
    },
  },
  Strategy: {
    Performance: {
      icon: AutoGraphOutlinedIcon,
      to: "/strategies/performances",
      page: <Securities />,
    },
  },
  Goal: {
    Report: {
      icon: AssessmentOutlinedIcon,
      to: "/goals/report",
    },
    Design: {
      icon: DesignServicesOutlinedIcon,
      to: "/goals/design",
    },
  },
};

export default routeContent;
