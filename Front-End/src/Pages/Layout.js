import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../Assets/websafe-logo.svg";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import ArrowDropDownTwoToneIcon from "@mui/icons-material/ArrowDropDownTwoTone";
import DashboardCustomizeTwoToneIcon from "@mui/icons-material/DashboardCustomizeTwoTone";
import WebTwoToneIcon from "@mui/icons-material/WebTwoTone";
import PollTwoToneIcon from "@mui/icons-material/PollTwoTone";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";
import ExitToAppTwoToneIcon from "@mui/icons-material/ExitToAppTwoTone";

const drawerWidth = 240;

function Layout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const name = "User Name";

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  function handleDropdown() {
    console.log("Opened Dropdown menu");
  }

  const drawerItems = [
    {
      item: "Dashboard",
      icon: <DashboardCustomizeTwoToneIcon />,
    },
    {
      item: "Websites",
      icon: <WebTwoToneIcon />,
    },
    {
      item: "Analytics",
      icon: <PollTwoToneIcon />,
    },
  ];

  const drawerItemsBottom = [
    {
      item: "Settings",
      icon: <SettingsTwoToneIcon />,
    },
    {
      item: "Logout",
      icon: <ExitToAppTwoToneIcon />,
    },
  ];

  const drawer = (
    <div>
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        <img src={Logo} alt="Logo-Img" style={{ height: "60px" }} />
      </Toolbar>
      <Divider />
      <List>
        {drawerItems.map((object) => (
          <ListItem key={object.item} disablePadding color="#004587">
            <ListItemButton>
              <ListItemIcon>{object.icon}</ListItemIcon>
              <ListItemText primary={object.item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {drawerItemsBottom.map((object) => (
          <ListItem key={object.item} disablePadding>
            <ListItemButton>
              <ListItemIcon>{object.icon}</ListItemIcon>
              <ListItemText primary={object.item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "#004587",
          color: "white",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" fontSize="16px">
              {name}
            </Typography>
            <Avatar alt={name} sx={{ width: 24, height: 24, marginLeft: 1 }} />
            <IconButton color="inherit" onClick={handleDropdown}>
              <ArrowDropDownTwoToneIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          bgcolor: "#F7F7F7",
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
