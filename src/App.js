import { ThemeProvider, Box, Typography, CssBaseline } from "@mui/material";
import theme from "./config/theme";
import SideNav from "./components/SideNav";
import AppHeader from "./components/AppHeader";

import React from "react";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppHeader></AppHeader>
        <Box sx={styles.container}>
          <SideNav></SideNav>
          <Typography variant="h8">Hello World</Typography>
          <Box component={"main"} sx={styles.mainSection}></Box>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  container: {
    display: "flex",
    bgcolor: "neutral.light",
    height: "calc(100%-64px)",
  },
  mainSection: {
    p: 20
  }
};

export default App;
