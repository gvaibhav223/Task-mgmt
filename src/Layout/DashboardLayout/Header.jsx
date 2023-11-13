import React, { useState } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Badge,
  Modal,
  Box,
  Avatar,
} from "@mui/material";
import { Notifications, PowerSettingsNew } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  borderRadius: 2,
  // p: 4,
};
const Header = (props) => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const settings = [
    {
      id: 1,
      label: "Logout",
      href: "/",
    },
    // {
    //   id: 2,
    //   label: "Logout",
    //   href: "/",
    // },
  ];
  return (
    <>
      <Toolbar className="dash-toolbar justify-content-between">
        <div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => props?.handleDrawerToggle()}
            sx={{ mr: 2, display: { sm: "none" }, color: "#000" }}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div className="">
          <Tooltip title="Profile">
            <IconButton onClick={handleOpenUserMenu}>
              <Box
                className="avatar-container"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                <Avatar sx={{ width: 35, height: 35 }} />
              </Box>
            </IconButton>
          </Tooltip>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="card">
                <div className="card-header">Logout</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Are you sure you want to logout ?
                  </li>
                </ul>
                <div className="card-footer" align="right">
                  <button className="btn btn-secondary" onClick={handleClose}>
                    No
                  </button>
                  &nbsp;&nbsp;
                  <button className="btn main-color-bg main-bg-text-color">
                    Yes
                  </button>
                </div>
              </div>
            </Box>
          </Modal>
          <Menu
            sx={{ mt: "45px", width: "200px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting}
                onClick={() => {
                  navigate(`${setting?.href}`);
                }}
              >
                <h6 align="center">{setting?.label}</h6>
              </MenuItem>
            ))}
            {/* {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <h6 textAlign="center">{setting?.label}</h6>
              </MenuItem>
            ))} */}

            {/* <MenuItem onClick={handlelogout}>
              <h6 textAlign="center">Logout</h6>
            </MenuItem> */}
          </Menu>
        </div>
      </Toolbar>
    </>
  );
};

export default Header;
