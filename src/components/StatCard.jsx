import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import Arrowup from "../assets/svgs/arrowup";
import Arrowdown from "../assets/svgs/arrowdown";

export default function StatCard({ title, value, percentage,background,indx }) {
  return (
    <motion.div whileHover={{ translateY: -6 }} style={{ height: "100%" }}>
      <Card
        sx={{
          height: "100%",
          borderRadius: "16px",
          padding: "20px",
          paddingBottom: "15px",
          paddingTop: "20px",
          background
        }}
      >
        <Typography fontWeight={"bold"} gutterBottom color={(indx === 0 || indx === 3) && '#1C1C1C'}>
          {title}
        </Typography>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 0,
          }}
        >
          <Typography color={(indx === 0 || indx === 3) && '#1C1C1C'} fontSize={"1.5rem"} fontWeight={"bold"}>
            {value}
          </Typography>
          <Box display={"flex"} gap={1}>
            <Typography color={(indx === 0 || indx === 3) && '#1C1C1C'}>{percentage}%</Typography>
            
                {percentage > 0 ? <Arrowup shouldChange={(indx === 0 || indx === 3) ? false : true} /> : <Arrowdown />}
              
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}
