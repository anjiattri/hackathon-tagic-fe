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
        backgroundSize: "cover",
        color: "#fff",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        backgroundColor: "#000",
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
              color: "#ddd",
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
                color: "#ddd",
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
          </IconButton>
          <Typography variant="body1" sx={{ mr: 2, color: "#fff" }}>
            {points}
          </Typography>
          <Button
            color="inherit"
            onClick={handleLogout}
            sx={{
              backgroundColor: "#000",
              color: "#ffffff",
              fontWeight: "bold",
              borderRadius: "20px",
              padding: "6px 16px",
              transition:
                "background-color 0.3s ease-in-out, transform 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#000",
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
