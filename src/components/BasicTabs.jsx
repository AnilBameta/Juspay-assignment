import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  List,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="text.secondary"
        TabIndicatorProps={{ style: { display: "none" } }}
        sx={{ minHeight: "20px" }}
      >
        <Tab
          sx={{
            paddingBottom: 0,
            minHeight: "40px",
            opacity: "20%",
            "&.Mui-selected": {
              color: "text.secondary",
              borderRadius: "8px",
              opacity: '40%',
            },
          }}
          fontSize={"0.875rem"}
          label="Favourites"
        />
        <Tab
          sx={{
            paddingBottom: 0,
            minHeight: "20px",
            opacity: "20%",
            "&.Mui-selected": {
              color: "text.secondary",
              borderRadius: "8px",
              opacity: '40%',
            },
          }}
          fontSize={"0.875rem"}
          label="Recently"
        />
      </Tabs>
      <List sx={{ paddingLeft: 3 }}>
        <ListItemText>
          <ListItemIcon sx={{ minWidth: 15 }}>
            <FiberManualRecordIcon sx={{ fontSize: 8 }} />
          </ListItemIcon>
          Overview
        </ListItemText>
        <ListItemText>
          <ListItemIcon sx={{ minWidth: 15 }}>
            <FiberManualRecordIcon sx={{ fontSize: 8 }} />
          </ListItemIcon>
          Projects
        </ListItemText>
      </List>
    </Box>
  );
}
