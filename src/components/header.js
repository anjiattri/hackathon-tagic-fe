import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/router";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet"; // Importing wallet icon

const Header = () => {
  const router = useRouter();
  const [points, setPoints] = useState(20);

  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem("email");
    localStorage.removeItem("password");

    // Redirect to login page
    router.push("/login");
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundImage: `url("https://tse1.mm.bing.net/th?id=OIP.7QF3J3JCwVcEsOHjIY-WHQHaEK&pid=Api&P=0&h=220")`,
        backgroundSize: "cover",
        color: "#fff", // White text color
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        borderRadius: 2,
        margin: 1,
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            cursor: "pointer",
            fontWeight: "bold",
            transition: "color 0.3s ease-in-out",
            "&:hover": {
              color: "#ddd", // Lighter color on hover
            },
          }}
          onClick={() => {
            router.push("/dashboard");
          }}
        >
          Dashboard
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="body1"
            sx={{
              mr: 2,
              cursor: "pointer",
              transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: "#ddd", // Lighter color on hover
              },
            }}
            onClick={() => {
              router.push("/newsFeed");
            }}
          >
            NEWS FEED
          </Typography>
          <IconButton color="inherit" aria-label="points" disabled>
            <AccountBalanceWalletIcon sx={{ color: "#fff" }} />{" "}
            {/* Displaying white filled wallet icon */}
          </IconButton>
          <Typography variant="body1" sx={{ mr: 2, color: "#fff" }}>
            {points}
          </Typography>
          <Button
            color="inherit"
            onClick={handleLogout}
            sx={{
              backgroundColor: "#000", // Red background
              color: "#ffffff", // White text color
              fontWeight: "bold",
              borderRadius: "20px",
              padding: "6px 16px",
              transition:
                "background-color 0.3s ease-in-out, transform 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#000", // Lighter red on hover
                transform: "scale(1.05)",
              },
            }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
