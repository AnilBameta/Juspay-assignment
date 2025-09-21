import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useTheme, Box, Typography, Stack } from "@mui/material";

const data = [
  { name: "Direct", value: 300.56 },
  { name: "Affiliate", value: 135.18 },
  { name: "Sponsored", value: 154.02 },
  { name: "E-mail", value: 48.96 },
];

export default function PieGraphSection() {
  const theme = useTheme();

  const COLORS = [
    theme.palette.text.primary, // Direct
    theme.palette.success.light, // Affiliate
    theme.palette.primary.light, // Sponsored
    theme.palette.info.light, // E-mail
  ];

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        bgcolor: theme.palette.container.default,
        width: 300,
      }}
    >
      {/* Title */}
      <Typography variant="subtitle1" fontWeight={600}>
        Total Sales
      </Typography>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            paddingAngle={4}
            dataKey="value"
            cornerRadius={8} // 🎯 makes the slice ends rounded
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: "8px",
              boxShadow: theme.shadows[3],
            }}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* Legend */}
      <Stack spacing={1.2} mt={2} paddingInline={6}>
        {data.map((entry, index) => (
          <Stack
            key={entry.name}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: COLORS[index % COLORS.length],
                }}
              />
              <Typography variant="body2">{entry.name}</Typography>
            </Stack>
            <Typography variant="body2" fontWeight={500}>
              ${entry.value.toFixed(2)}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}
