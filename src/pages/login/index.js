import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  CssBaseline,
  CardMedia,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as Components from "../../components/input";

const theme = createTheme();

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Store email and password in local storage (not secure for production)
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    router.push("/dashboard");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="main"
        sx={{
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CssBaseline />

        <Box sx={{ width: "100%", display: "flex" }}>
          <Box
            sx={{
              width: "50%",
              height: "100%",
            }}
          >
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h4">
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <Components.Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
                <Components.Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, p: 1, backgroundColor: "#ff4b2b" }}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "50%",
            }}
          >
            <CardMedia
              component="img"
              height="100%"
              image={
                "https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?w=740&t=st=1719570495~exp=1719571095~hmac=4f2684c1da62ad2f35a052163dbaf8c1b31bab57535a6cf873b4203caf8692d9"
              }
              alt={"image"}
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Login;
