import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import {
  Dashboard,
  Home,
  BackupTable,
  Description,
  ManageAccounts,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Logo from "../../Component/Logo";
const menuItems = [
  {
    item: "Home",
    href: "/home",
    icon: Home,
  },
  {
    item: "Project",
    href: "/project",
    icon: BackupTable,
  },
  {
    item: "Task",
    href: "/task",
    icon: Description,
  },
  {
    item: "Profile",
    href: "/profile",
    icon: ManageAccounts,
  },
];

const NavItem = ({ icon: Icon, label, href }) => {
  const navigate = useNavigate();

  const [active, setActive] = useState(false);
  useEffect(() => {
    if (window.location.pathname === `${href}`) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [navigate]);

  return (
    <>
      <ListItemButton
        className={
          active ? "sidebar-active sidebar-listitem" : "sidebar-listitem"
        }
        onClick={() => {
          navigate(href);
        }}
      >
        <Icon style={{ fontSize: "22px" }} /> &nbsp;&nbsp;
        <div className="font-family-sidebar">{label}</div>
      </ListItemButton>
    </>
  );
};

export const drawer = (
  <>
    <div className="px-3 my-3">
      <Logo />
    </div>
    <Divider />
    <List>
      {menuItems.map((text, index) => {
        return (
          <React.Fragment key={index}>
            <ListItem disablePadding>
              <NavItem icon={text?.icon} label={text?.item} href={text?.href} />
            </ListItem>
          </React.Fragment>
        );
      })}
    </List>
    <Divider />
  </>
);
