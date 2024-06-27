import React, { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

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

  return <Component {...pageProps} />;
};

export default MyApp;
