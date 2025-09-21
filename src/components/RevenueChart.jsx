import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "@mui/material/styles";
import { Box, Card, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const rawData = [
  { name: "Jan", current: 12, previous: 8 },
  { name: "Feb", current: 9, previous: 18 },
  { name: "Mar", current: 11, previous: 14 },
  { name: "Apr", current: 15, previous: 12 },
  { name: "May", current: 20, previous: 17 },
  { name: "Jun", current: 19, previous: 22 },
];

export default function RevenueChart() {
  const theme = useTheme();

  const currentMonth = "Apr";
  const splitIndex = rawData.findIndex((d) => d.name === currentMonth);

  // enrich the original dataset with solid and dotted versions
  const data = rawData.map((d, i) => ({
    ...d,
    currentSolid: i <= splitIndex ? d.current : null,
    currentDotted: i >= splitIndex ? d.current : null,
  }));

  return (
    <Card
      sx={{
        borderRadius: 3,
        background:theme.palette.container.default,
        boxShadow: 'none',
        padding: '25px 20px 20px 0px',
        maxWidth: {xl:'95%'}
      }}
    >
      <Box display='flex' gap={2}>
      <Typography fontWeight={'bold'} pb={3} pl={4} color={theme.palette.text.primary}>Revenue</Typography>
      |
      <Typography> <CircleIcon sx={{ fontSize: 8, color: theme.palette.text.primary }} /> Current Week  $58,211</Typography>
      <Typography> <CircleIcon sx={{ fontSize: 8, color: theme.palette.primary.light }} /> Previous Week  $68,768</Typography>
      </Box>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid
          stroke={theme.palette.divider}
          vertical={false}
          strokeDasharray="0"
        />
        <XAxis
          dataKey="name"
          tick={{ fill: theme.palette.text.secondary }}
          axisLine={false}
          tickLine={false}
          opacity={'40%'}
        />
        <YAxis
          tick={{ fill: theme.palette.text.secondary }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(val) => `${val}M`}
          opacity={'40%'}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: theme.palette.background.paper,
            border: `1px solid ${theme.palette.divider}`,
          }}
          labelStyle={{ color: theme.palette.text.primary }}
        />

        {/* Previous week */}
        <Line
          type="monotone"
          dataKey="previous"
          stroke={theme.palette.primary.light}
          strokeWidth={3}
          dot={false}
        />

        {/* Current week solid part */}
        <Line
          type="monotone"
          dataKey="currentSolid"
          stroke={theme.palette.text.primary}
          strokeWidth={3}
          dot={false}
          connectNulls
        />

        {/* Current week dotted continuation */}
        <Line
          type="monotone"
          dataKey="currentDotted"
          stroke={theme.palette.text.primary}
          strokeWidth={3}
          dot={false}
          strokeDasharray="5 5"
          connectNulls
        />
      </LineChart>
    </ResponsiveContainer>
    </Card>
  );
}
