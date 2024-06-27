import React, { useEffect, useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import Header from "../../components/header";

const Dashboard = () => {
  const [points, setPoints] = useState(20);

  // useEffect(() => {
  //   const email = localStorage.getItem("email");
  //   const userPoints = localStorage.getItem(email);
  //   setPoints(userPoints);
  //   const fetchProfile = async () => {
  //     const response = await fetch(`/api/profile?email=${email}`);

  //     const result = await response.json();
  //     if (response.ok) {
  //       setPoints(result.profile.points);
  //     }
  //   };
  //   // localStorage.setItem(email, points);

  //   fetchProfile();
  // }, []);

  return (
    <>
      <Header />
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
    </>
  );
};

export default Dashboard;
