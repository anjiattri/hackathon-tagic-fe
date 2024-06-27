import { useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    // Redirect to login page if not authenticated
    if (!email || !password) {
      router.push("/login");
    }
    // Redirect to dashboard page if authenticated
    else {
      router.push("/dashboard");
    }
  }, [router]);

  return null;
};

export default Home;
