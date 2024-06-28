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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  IconButton,
} from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Header from "../../components/header";
import Carousel from "@/components/crousel";

const categories = ["Science", "Sports", "Business", "Travel"];

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Science");
  const [nudge, setNudge] = useState({ open: false, message: "" });

  useEffect(() => {
    const fetchNews = async () => {
      let dummy = [
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
      ];

      console.log("Dummy Data", dummy);
      setNews(dummy);
    };
    fetchNews();
  }, [selectedCategory]);

  useEffect(() => {
    const nudges = {
      Science: "Are you interested in the latest scientific discoveries?",
      Sports: "Planning to watch any sports events soon?",
      Business: "Want to stay updated on the latest business trends?",
      Travel: "Are you planning to travel soon?",
    };

    const selectedCategories =
      JSON.parse(localStorage.getItem("selectedCategories")) || [];

    selectedCategories.push(selectedCategory);
    localStorage.setItem(
      "selectedCategories",
      JSON.stringify(selectedCategories)
    );
    setNudge({ open: true, message: nudges[selectedCategory] });
  }, [selectedCategory]);

  const handleNudgeResponse = (response) => {
    console.log(`User responded with: ${response}`);
    setNudge({ ...nudge, open: false });
  };

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
            {news.map((article, index) => (
              <Grid
                item
                key={index}
                xs={12}
                sm={index === 0 ? 12 : 6}
                md={index === 0 ? 12 : 4}
              >
                <Card sx={{ position: "relative" }}>
                  {article.urlToImage && (
                    <>
                      <CardMedia
                        component="img"
                        height={index === 0 ? "400" : "200"}
                        image={article.urlToImage}
                        alt={article.title}
                        sx={{
                          filter: "blur(0px)",
                          objectFit: "cover",
                        }}
                      />
                      <CardContent
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          width: "100%",
                          background: "rgba(0, 0, 0, 0.6)",
                          color: "#ffffff",
                          padding: (theme) => theme.spacing(2),
                        }}
                      >
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ fontWeight: "bold" }}
                        >
                          {article.title}
                        </Typography>
                        <Typography variant="body2" color="inherit">
                          {article.description}
                        </Typography>
                        {/* 
                        <Typography variant="body2" color="inherit">
                          {trimDescription(article.description, 150)}
                          {article.description.length > 150 && (
                            <span
                              style={{
                                cursor: "pointer",
                                textDecoration: "underline",
                                marginLeft: "4px",
                              }}
                            >
                              See more
                            </span>
                          )}
                        </Typography> */}
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            marginTop: 2,
                            marginRight: 2,
                          }}
                        >
                          <IconButton aria-label="chat" sx={{ color: "#fff" }}>
                            <ChatBubbleOutlineIcon />
                          </IconButton>
                          <IconButton aria-label="like" sx={{ color: "#fff" }}>
                            <ThumbUpAltOutlinedIcon />
                          </IconButton>
                          <IconButton aria-label="share" sx={{ color: "#fff" }}>
                            <ShareOutlinedIcon />
                          </IconButton>
                        </Box>
                      </CardContent>
                    </>
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold", paddingTop: "1rem" }}
          >
            Articles
          </Typography>
          <Carousel />
        </Box>
        <Dialog
          open={nudge.open}
          onClose={() => handleNudgeResponse("No")}
          aria-labelledby="nudge-dialog-title"
          aria-describedby="nudge-dialog-description"
        >
          <DialogTitle id="nudge-dialog-title">Quick Question</DialogTitle>
          <DialogContent>
            <DialogContentText id="nudge-dialog-description">
              {nudge.message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleNudgeResponse("No")} color="primary">
              No
            </Button>
            <Button
              onClick={() => handleNudgeResponse("Yes")}
              color="primary"
              autoFocus
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
};

export default NewsFeed;
