import React from "react";
import { Box, Typography } from "@mui/material";
import OrdersList from "../components/OrderList";

export default function Order() {
  return (
    <Box>
      <Typography fontWeight={"bold"} gutterBottom>
        Orders list
      </Typography>
      <OrdersList />
    </Box>
  );
}
