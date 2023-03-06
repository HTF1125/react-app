import { AppBar, Badge, IconButton, Toolbar, Box } from "@mui/material";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";

function AppHeader() {
  return (
    <AppBar position="sticky" sx={styles.appBar}>
      <Toolbar>
        <IconButton onClick={() => console.log("clicked")} color="secondary">
          <MenuTwoToneIcon></MenuTwoToneIcon>
        </IconButton>
        <Box
          component={"img"}
          sx={styles.appLogo}
          src="/src/assets/logo.png"
        />
        <IconButton title="Notifiation" color="secondary">
          <Badge badgeContent={4} color="error">
            <NotificationsIcon></NotificationsIcon>
          </Badge>
        </IconButton>
        <IconButton title="Settings" color="secondary">
          <SettingsIcon></SettingsIcon>
        </IconButton>
        <IconButton title="SignOut" color="secondary">
          <LogoutIcon></LogoutIcon>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  appBar: {
    bgcolor: "neutral.main",
  },
  appLogo: {
    borderRadius: 2,
    width: 80,
    marginLeft: 2,
    cursor: "pointer",
  },
};

export default AppHeader;
