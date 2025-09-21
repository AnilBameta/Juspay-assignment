import React, { useState } from "react";
import { Grid, Box, Typography, useTheme } from "@mui/material";
import StatCard from "../components/StatCard";
import { motion } from "framer-motion";
import Bargraph from "../components/Bargraph";
import RevenueChart from "../components/RevenueChart";
import TopSellingProducts from "../components/TopSellingProducts";
import PieGraphSection from "../components/PieGraphSection";
import MapSection from "../components/MapSection";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const theme = useTheme();
  const navigate = useNavigate();
  const stats = [
    { title: "Customers", value: "12.4k", percentage: 11.01 },
    { title: "Orders", value: "$92.3k", percentage: -0.03 },
    { title: "Revenue", value: "1.2k", percentage: 15.03 },
    { title: "Growth", value: "3.2%", percentage: 6.08 },
  ];

  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <Typography fontWeight={"bold"} gutterBottom>
          eCommerce
        </Typography>
      </motion.div>       
        <Grid
          container
          sx={{ mt: 1, rowGap: 6, columnGap: 0 }}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Grid xl={6} xs={12} display={'flex'} flexWrap={'wrap'} spacing={3} gap={4}>
          {stats.map((s, indx) => (
            <Grid
              key={s.title}
              item
              xs={12}
              sm={5}
              onClick={() => {
                indx === 1 && navigate('/orders-list');
              }}
            >
              <StatCard
                title={s.title}
                value={s.value}
                percentage={s.percentage}
                background={
                  indx === 0
                    ? "#E3F5FF"
                    : indx === 1 || indx === 2
                    ? theme.palette.container.default
                    : "#E5ECF6"
                }
                indx={indx}
              />
            </Grid>
          ))}
          </Grid>
          <Grid xl={6} xs={12}>
            <Box background={theme.palette.container.default}>
              <Bargraph />
            </Box>
          </Grid>
          <Grid xl={8} xs={12}>
            <RevenueChart />
          </Grid>
          <Grid xl={4} xs={12}>
            <MapSection />
          </Grid>
          <Grid xl={8} xs={12}>
            <TopSellingProducts />
          </Grid>
          <Grid xl={4} xs={12} display={"flex"} justifyContent={"center"}>
            <PieGraphSection />
          </Grid>
        </Grid>
    </Box>
  );
}
