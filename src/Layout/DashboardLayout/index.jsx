import * as React from "react";
import Footer from "./Footer";
import { AppBar, Box, CssBaseline, Drawer, IconButton } from "@mui/material";
import { drawer } from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function DashboardLayout(props) {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [fullSideNav, setFullSideNav] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerWidth = 175;
  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          className="tool_bar"
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Header handleDrawerToggle={handleDrawerToggle} />
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            // container={container}
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
            <div className="drawer-toggle">
              <div className="">{drawer}</div>
            </div>
          </Drawer>
        </Box>
        <div className="w-100" style={{ overflow: "hidden" }}>
          <Box
            component="main"
            sx={{
              marginTop: "65px",
              padding: "5px 8px",
              flexGrow: 1,
              height: "calc(100vh - 94px)",
              // width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Outlet />
          </Box>
          <div className="dash-footer">
            <Footer />
          </div>
        </div>
      </Box>
    </>
  );
}

export default DashboardLayout;
