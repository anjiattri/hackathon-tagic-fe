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

    // Redirect to login page if not authenticated
    if (!email || (!password && router.pathname !== "/login")) {
      router.push("/login");
    }
    // Redirect to dashboard if authenticated and on login page
    else if (email && password && router.pathname === "/login") {
      router.push("/dashboard");
    }
  }, [router]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          background: "linear-gradient(to right, #ffffff, #000)", // White to red gradient
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh", // Full viewport height
        }}
      >
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
};

export default MyApp;
