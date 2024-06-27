import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/router";
import { Favorite as FavoriteIcon } from "@mui/icons-material";

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
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, cursor: "pointer" }}
          onClick={() => {
            router.push("/dashboard");
          }}
        >
          Dashboard
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="body1"
            sx={{ mr: 2, cursor: "pointer" }}
            onClick={() => {
              router.push("/newsFeed");
            }}
          >
            NEWS FEED
          </Typography>
          <IconButton color="inherit" aria-label="points" disabled>
            <FavoriteIcon />
          </IconButton>
          <Typography variant="body1" sx={{ mr: 2 }}>
            {points}
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
