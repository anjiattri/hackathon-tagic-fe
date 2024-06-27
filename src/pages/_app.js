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
          backgroundImage:
            'url("https://wallpaperaccess.com/full/2268597.jpg")',
          backgroundAttachment: "fixed",

          // background: "linear-gradient(to right bottom, #430089, #82ffa1)",
          // backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
};

export default MyApp;
