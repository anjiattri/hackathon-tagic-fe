import { useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to login page if trying to access the home page
    router.push("/login");
  }, [router]);

  return null;
};

export default Home;
