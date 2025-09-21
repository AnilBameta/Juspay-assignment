// ProjectionsChart.jsx
import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, Typography } from "@mui/material";

const data = [
  { name: "Jan", actual: 18, projection: 22 },
  { name: "Feb", actual: 21, projection: 25 },
  { name: "Mar", actual: 19, projection: 24 },
  { name: "Apr", actual: 23, projection: 27 },
  { name: "May", actual: 14, projection: 18 },
  { name: "Jun", actual: 20, projection: 23 },
];

const BarGraph = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        borderRadius: 3,
        background:theme.palette.container.default,
        boxShadow: 'none'
      }}
    >
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom mb={2}>
          Projections vs Actuals
        </Typography>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data} barGap={0}>
  <CartesianGrid stroke={theme.palette.divider} vertical={false} strokeDasharray="0" />
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

  {/* Projection bar (lighter, background) */}
  <Bar
    dataKey="projection"
    fill={'#A8C5DA'}
    // radius={[4, 4, 0, 0]}
    stackId="a"   // 👈 same stackId
    barSize={40} // controls thickness
  />

  {/* Actual bar (darker, foreground) */}
  <Bar
    dataKey="actual"
    fill={'#A8C5DA'}
    opacity={'50%'}
    radius={[4, 4, 0, 0]}
    stackId="a"   // 👈 same stackId
    barSize={40}
  />
</BarChart>

        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default BarGraph;
