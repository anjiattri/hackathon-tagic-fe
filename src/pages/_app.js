import React, { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const theme = createTheme();

  useEffect(() => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    // If not authenticated, redirect to login page
    if (!email || !password) {
      if (router.pathname !== "/login") {
        router.push("/login");
      }
    } else {
      if (router.pathname === "/login") {
        router.push("/dashboard");
      }
    }
  }, [router]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage:
            'url("https://wallpaperaccess.com/full/2268597.jpg")',

          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
};

export default MyApp;
