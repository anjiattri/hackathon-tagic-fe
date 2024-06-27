import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          Dashboard
        </Typography>
        <Typography component="p" variant="body1">
          Welcome to your dashboard!
        </Typography>
      </Box>
    </Container>
  );
};

export default Dashboard;
