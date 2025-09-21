import React from "react";
import { LinearProgress, Box, Typography, useTheme, styled } from "@mui/material";

// Styled LinearProgress to apply theme colors
const ThemedLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  backgroundColor: theme.palette.container.default, // background track color
  "& .MuiLinearProgress-bar": {
    borderRadius: 5,
    backgroundColor: theme.palette.primary.main, // filled bar color
  },
}));

export default function ProgressBar({ value }) {
  const theme = useTheme();

  return (
    <Box width="100%">
      <Box display="flex" justifyContent="space-between" mb={0.5}>
        <Typography variant="body2" color="textSecondary">
          {`${value}%`}
        </Typography>
      </Box>
      <ThemedLinearProgress variant="determinate" value={value} />
    </Box>
  );
}
