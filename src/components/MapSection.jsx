import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import WorldMap from "../assets/images/World-Map.svg";
import ProgressBar from "./ProgressBar";

const MapSection = () => {
  const theme = useTheme();
  const locationsData = [
    {
      name: "New York",
      amount: "72K",
      percentage: 85,
    },
    {
      name: "San Francisco",
      amount: "39K",
      percentage: 33,
    },
    {
      name: "Sydney",
      amount: "25K",
      percentage: 20,
    },
    {
      name: "Singapore",
      amount: "61K",
      percentage: 75,
    },
  ];
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        background: theme.palette.container.default,
        borderRadius: "8px",
        height: '100%',
        paddingBlock: '18px',
        marginleft: '20px'
      }}
    >
      <Typography fontWeight={"bold"}>Revenue by Location</Typography>
      <img src={WorldMap} alt="world-map" />
      <Grid width={"100%"}>
        {locationsData.map((location) => {
          const { name, amount, percentage } = location || {};
          return (
            <Grid mb={1}>
              <Box display="flex" justifyContent="space-between">
                <Typography>{name}</Typography>
                <Typography>{amount}</Typography>
              </Box>
              <ProgressBar value={percentage} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default MapSection;
