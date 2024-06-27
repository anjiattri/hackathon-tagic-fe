import React, { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

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

  return <Component {...pageProps} />;
};

export default MyApp;
