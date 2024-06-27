import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
} from "@mui/material";
import Header from "../../components/header";

const categories = ["Science", "Sports", "Business"];

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Science");

  useEffect(() => {
    const fetchNews = async () => {
      // Use the local API if needed, but currently using dummy data
      // const url = "http://localhost:3000/news";
      // const response = await fetch(url, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ data: selectedCategory }),
      // });
      // const result = await response.json();
      // console.log("Result", result);

      let dummy = [
        {
          source: {
            id: "the-times-of-india",
            name: "The Times of India",
          },
          author: "Shivendra Kumar",
          title:
            "ITC, Bharti Airtel’s weight may go up in Nifty rejig. $95 million passive inflows expected - The Economic Times",
          description:
            "ITC and Bharti Airtels weights in Nifty is expected to go up in the quarterly rejig which gets into effect on Thursday, triggering combined inflows of $95 million according to estimates by Nuvama.",
          url: "https://economictimes.indiatimes.com/markets/stocks/news/itc-bharti-airtels-weight-may-go-up-in-nifty-rejig-95-million-passive-inflows-expected/articleshow/111283585.cms",
          urlToImage:
            "https://img.etimg.com/thumb/msid-111283577,width-1200,height-630,imgsize-14900,overlay-etmarkets/photo.jpg",
          publishedAt: "2024-06-26T09:29:58Z",
          content:
            "ITC and Bharti Airtels weights in Nifty is expected to go up in the quarterly rejig which gets into effect on Thursday, triggering combined inflows of $95 million according to estimates by Nuvama. In… [+2026 chars]",
        },
        {
          source: {
            id: null,
            name: "CNBCTV18",
          },
          author: "https://www.cnbctv18.com",
          title:
            "InCred forecasts Indian steel spreads will slip in the June quarter, sees boost for pellet makers - CNBCTV18",
          description:
            "InCred predicted pellet makers stocks to surge, listing NMDC as its top pick. The firm has given a buy rating to the stocks of the company, which is also India's largest iron ore producer.",
          url: "https://www.cnbctv18.com/market/incred-forecasts-indian-steel-spreads-will-slip-in-june-quarter-sees-boost-for-pellet-makers-19433906.htm",
          urlToImage:
            "https://images.cnbctv18.com/uploads/2023/04/earnings-shutterstock.jpg?im=FitAndFill,width=500,height=300",
          publishedAt: "2024-06-26T08:48:01Z",
          content:
            "Analyst firm InCred has forecast a further decline in the Indian domestic steel spreads during the first quarter of FY25 in comparison to the year-ago period. InCred said the profit after tax (PAT) f… [+1541 chars]",
        },
      ];

      console.log("Dummy Data", dummy);
      setNews(dummy);
    };
    fetchNews();
  }, [selectedCategory]);

  return (
    <>
      <Header />
      <Container component="main" maxWidth="lg">
        <Stack direction="row" spacing={2} sx={{ marginTop: 2 }}>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              onClick={() => setSelectedCategory(category)}
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                backgroundColor:
                  selectedCategory === category ? "black" : "white",
                color: selectedCategory === category ? "white" : "black",
                "&:hover": {
                  backgroundColor:
                    selectedCategory === category ? "darkgray" : "lightgray",
                },
              }}
            />
          ))}
        </Stack>
        <Box sx={{ marginTop: 4 }}>
          <Grid container spacing={4}>
            {console.log("News Data", news)}
            {news.map((article, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card>
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
      </Container>
    </>
  );
};

export default NewsFeed;
