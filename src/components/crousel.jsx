import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
// import axiosInstance from "@/axios";
import URLS from "@/helpers/urls";

const Carousel = () => {
  // const fetchArticles = async () => {
  //   try {
  //     const reponse = await axiosInstance.post("/kush", {});
  //     console.log(reponse);
  //   } catch (e) {
  //     console.log("Error", e);
  //   }
  // };

  // useEffect(() => {
  //   fetchArticles();
  // }, []);

  const data = [
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Becky Ferreira",
      title: "Pooping on the Moon Is a Messy Business",
      description:
        "If humans are to return to the moon, space agencies and governments need to figure out the legal, ethical, and practical dimensions of extraterrestrial waste management.",
      url: "https://www.wired.com/story/pooping-on-the-moon-is-a-messy-business/",
      urlToImage:
        "https://media.wired.com/photos/6669b081f985efeacd4c9496/191:100/w_1280,c_limit/WI-0624-03-Human-Waste-On-Moon-1.jpg",
      publishedAt: "2024-06-25T10:30:00Z",
      content:
        "In addition to raising these legal and ethical quandaries, the Apollo waste bags have also inspired exciting scientific questions. How long did those bagged microbes last on the Moon? Did exposure to… [+3884 chars]",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Justin Pot",
      title: "How to Spot a Business Email Compromise Scam",
      description:
        "In this common email scam, a criminal pretending to be your boss or coworker emails you asking for a favor involving money. Here's what do to when a bad actor lands in your inbox.",
      url: "https://www.wired.com/story/how-to-spot-business-email-compromise-scam/",
      urlToImage:
        "https://media.wired.com/photos/666cbb59eb9db3a3e95c6533/191:100/w_1280,c_limit/How-to-Spot-a-Business-Email-Compromise-Scam-Security-GettyImages-1287456786.jpg",
      publishedAt: "2024-06-16T12:00:00Z",
      content:
        "So this is the first step: take control of your emotions. Yes, it can be difficult if you work in a demanding field. But it's your best first defense, and your employer will thank you for it (or, at … [+3030 chars]",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Justin Pot",
      title: "How to Spot a Business Email Compromise Scam",
      description:
        "In this common email scam, a criminal pretending to be your boss or coworker emails you asking for a favor involving money. Here's what do to when a bad actor lands in your inbox.",
      url: "https://www.wired.com/story/how-to-spot-business-email-compromise-scam/",
      urlToImage:
        "https://media.wired.com/photos/666cbb59eb9db3a3e95c6533/191:100/w_1280,c_limit/How-to-Spot-a-Business-Email-Compromise-Scam-Security-GettyImages-1287456786.jpg",
      publishedAt: "2024-06-16T12:00:00Z",
      content:
        "So this is the first step: take control of your emotions. Yes, it can be difficult if you work in a demanding field. But it's your best first defense, and your employer will thank you for it (or, at … [+3030 chars]",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Justin Pot",
      title: "How to Spot a Business Email Compromise Scam",
      description:
        "In this common email scam, a criminal pretending to be your boss or coworker emails you asking for a favor involving money. Here's what do to when a bad actor lands in your inbox.",
      url: "https://www.wired.com/story/how-to-spot-business-email-compromise-scam/",
      urlToImage:
        "https://media.wired.com/photos/666cbb59eb9db3a3e95c6533/191:100/w_1280,c_limit/How-to-Spot-a-Business-Email-Compromise-Scam-Security-GettyImages-1287456786.jpg",
      publishedAt: "2024-06-16T12:00:00Z",
      content:
        "So this is the first step: take control of your emotions. Yes, it can be difficult if you work in a demanding field. But it's your best first defense, and your employer will thank you for it (or, at … [+3030 chars]",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Justin Pot",
      title: "How to Spot a Business Email Compromise Scam",
      description:
        "In this common email scam, a criminal pretending to be your boss or coworker emails you asking for a favor involving money. Here's what do to when a bad actor lands in your inbox.",
      url: "https://www.wired.com/story/how-to-spot-business-email-compromise-scam/",
      urlToImage:
        "https://media.wired.com/photos/666cbb59eb9db3a3e95c6533/191:100/w_1280,c_limit/How-to-Spot-a-Business-Email-Compromise-Scam-Security-GettyImages-1287456786.jpg",
      publishedAt: "2024-06-16T12:00:00Z",
      content:
        "So this is the first step: take control of your emotions. Yes, it can be difficult if you work in a demanding field. But it's your best first defense, and your employer will thank you for it (or, at … [+3030 chars]",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleArticles = () => {
    if (data.length <= 3) return data;
    const prevIndex = (currentIndex - 1 + data.length) % data.length;
    const nextIndex = (currentIndex + 1) % data.length;
    return [data[prevIndex], data[currentIndex], data[nextIndex]];
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      mt={4}
      pb={4}
    >
      <IconButton
        onClick={handlePrev}
        style={{ position: "absolute", left: 0, color: "#000" }}
      >
        <ArrowBackIos />
      </IconButton>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
      >
        <Grid container spacing={4}>
          {getVisibleArticles().map((article, index) => (
            <Grid item key={index} xs={4} sm={4} md={4}>
              <Card
                sx={{
                  borderRadius: "20%",
                }}
              >
                {article.urlToImage && (
                  <CardMedia
                    component="img"
                    height="200"
                    image={article.urlToImage}
                    alt={article.title}
                  />
                )}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {article.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <IconButton
        onClick={handleNext}
        style={{ position: "absolute", right: 0, color: "#000" }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default Carousel;
