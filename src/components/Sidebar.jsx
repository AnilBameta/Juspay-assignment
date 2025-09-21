// src/components/Sidebar.jsx
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  IconButton,
  useMediaQuery,
  Avatar,
  Typography,
  Box,
  Collapse,
} from "@mui/material";
import Person4Icon from "@mui/icons-material/Person4";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import BasicTabs from "./BasicTabs";
import sidebarConfig from "../../config/sidebarConfig";
import { KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;
const collapsedWidth = 72;

export default function Sidebar() {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [openMenus, setOpenMenus] = useState({});
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  const handleToggle = (title) => {
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  console.log(location.pathname);

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      open={open}
      onClose={toggleDrawer}
      sx={{
        width: open ? drawerWidth : collapsedWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : collapsedWidth,
          transition: "width 0.3s",
          overflowX: "hidden",
        },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: open ? "space-between" : "center",
          px: 1,
        }}
      >
        {open && (
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Avatar sx={{ width: "24px", height: "24px" }} src={Person4Icon} />
            <Typography fontSize={"0.875rem"}>Anil</Typography>
          </Box>
        )}
        <IconButton onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      {open && <BasicTabs />}
      <List>
        {sidebarConfig.map((section, index) => (
          <div key={section.header} style={{ paddingTop: "6px" }}>
            {open && <Typography
              sx={{
                pl: 2,
                pt: index === 1 ? 1 : 0,
                color: "text.secondary",
                opacity: "40%",
              }}
            >
              {section.header}
            </Typography>}

            {section.items.map((item) => (
              <div
                key={item.title}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "90%",
                  marginLeft: "5%",
                }}
              >
                <ListItemButton
                  onClick={() => {
                    item.expandable && handleToggle(item.title);
                    if (item.title === "Default") navigate("/");
                  }}
                  sx={{
                    borderRadius: "8px",
                    padding: 0,
                    paddingBlock: "4px",
                    transition: "all 0.3s ease", // smooth animation
                    backgroundColor:
                      (location.pathname === "/orders-list" ||
                        location.pathname === "/") &&
                      item.title === "Default" &&
                      theme.palette.action.hover,
                    "&:hover": {
                      width: "100%",
                      ml: "auto", // shrink to 80% of parent
                      backgroundColor: (theme) => theme.palette.action.hover, // optional
                    },
                  }}
                >
                  {item.expandable ? (
                    openMenus[item.title] ? (
                      <KeyboardArrowDown
                        sx={{
                          color: "text.secondary",
                          opacity: "40%",
                          fontSize: "18px",
                        }}
                      />
                    ) : (
                      <KeyboardArrowRight
                        sx={{
                          color: "text.secondary",
                          opacity: "40%",
                          fontSize: "18px",
                        }}
                      />
                    )
                  ) : (
                    <Box minWidth={"24px"} />
                  )}
                  {item.icon && (
                    <ListItemIcon
                      sx={{
                        justifyContent: "end",
                        paddingRight: "5px",
                        minWidth: "30px",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                  )}
                  {open && <ListItemText primary={item.title} />}
                </ListItemButton>

                {item.expandable && (
                  <Collapse
                    in={openMenus[item.title]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {item.children.map((child) => (
                        <ListItemButton
                          key={child.title}
                          sx={{ pl: 6, paddingBlock: "4px" }}
                        >
                          <ListItemText primary={child.title} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}
              </div>
            ))}
          </div>
        ))}
      </List>
    </Drawer>
  );
}
