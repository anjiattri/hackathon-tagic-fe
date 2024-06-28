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
            id: "the-times-of-india",
            name: "The Times of India",
          },
          author: "ETMarkets.com",
          title:
            "Sensex extends record rally to 3rd session, ends above 79K, Nifty tops 24,000 - The Economic Times",
          description:
            "Heavyweights RIL, HDFC Bank, and ICICI Bank were among the biggest contributors to Nifty's rise. Sectorally, buying was noticed in banks, FMCG, metals, and pharma. For Nifty50, the latest 1,000-point gain from 23,000 to 24,000 has been the 2nd fastest ever. N…",
          url: "https://economictimes.indiatimes.com/markets/stocks/news/nifty-nearing-24000-milestone-after-4-day-rally-sensex-crosses-79000/articleshow/111303115.cms",
          urlToImage:
            "https://img.etimg.com/thumb/msid-111303057,width-1200,height-630,imgsize-96960,overlay-etmarkets/photo.jpg",
          publishedAt: "2024-06-27T10:48:28Z",
          content:
            "The domestic equity market on Thursday rallied for the fourth consecutive day amid buying in heavyweight bluechips, which took Nifty past the 24,000 milestone. Sensex also touched a new record high a… [+3150 chars]",
        },
        {
          source: {
            id: null,
            name: "Moneycontrol",
          },
          author: "Moneycontrol News",
          title:
            "Banks continue to post robust credit growth, asset quality improves, says RBI’s Financial Stability... - Moneycontrol",
          description:
            "Asset quality of the banks has continued to improve, said the FSR report",
          url: "https://www.moneycontrol.com/news/business/banks-continue-to-post-robust-credit-growth-asset-quality-improves-says-rbis-financial-stability-report-12757522.html",
          urlToImage:
            "https://images.moneycontrol.com/static-mcnews/2023/03/big-to-fail-banks_pic.jpg",
          publishedAt: "2024-06-27T10:36:12Z",
          content:
            "Indian scheduled commercial banks (SCBs) continue to report robust credit growth and asset quality of the banks also continue to improve, the Reserve Bank of Indias (RBI) Financial Stability Report (… [+675 chars]",
        },
        {
          source: {
            id: null,
            name: "Moneycontrol",
          },
          author: "Hiral Thanawala",
          title:
            "HDFC Bank has revised terms for credit cards: Here are the key changes - Moneycontrol",
          description:
            "One significant takeaway from the revised terms is that HDFC Bank credit cardholders should henceforth avoid rental and educational transaction payments through third-party apps and platforms to reduce the burden of additional charges.",
          url: "https://www.moneycontrol.com/news/business/personal-finance/hdfc-bank-has-revised-terms-for-credit-cards-here-are-the-key-changes-12757377.html",
          urlToImage:
            "https://images.moneycontrol.com/static-mcnews/2021/12/bank_cards_banking_financial-services1-2.jpg",
          publishedAt: "2024-06-27T09:48:29Z",
          content:
            "HDFC Bank is back with more revised terms for its credit card portfolio, effective August 1. These revised terms are in line with those of other banks, which have introduced charges on rental and edu… [+4556 chars]",
        },
        {
          source: {
            id: null,
            name: "Benzinga",
          },
          author: "Utkarsh Roshan",
          title:
            "RVNL Receives LoA For ₹72 Cr Order From North Central Railways - Benzinga India",
          description:
            "The company was declared the lowest bidder for this order in May. The ₹72.73 crore order is expected to be completed in 455 days.",
          url: "https://in.benzinga.com/content/39518882/rvnl-receives-loa-for-72-cr-order-from-north-central-railways",
          urlToImage:
            "https://cdn.benzinga.com/files/images/story/2024/06/27/railway-train.png?width=1200&height=800&fit=crop",
          publishedAt: "2024-06-27T09:01:05Z",
          content: null,
        },
        {
          source: {
            id: "google-news",
            name: "Google News",
          },
          author: "FXStreet",
          title: "Gold bounces off $2,300 as traders take profit - FXStreet",
          description: null,
          url: "https://news.google.com/rss/articles/CBMiW2h0dHBzOi8vd3d3LmZ4c3RyZWV0LmNvbS9uZXdzL2dvbGQtYm91bmNlcy1vZmYtMi0zMDAtYWZ0ZXItdHJhZGVycy10YWtlLXByb2ZpdC0yMDI0MDYyNzA4NTPSAV9odHRwczovL3d3dy5meHN0cmVldC5jb20vYW1wL25ld3MvZ29sZC1ib3VuY2VzLW9mZi0yLTMwMC1hZnRlci10cmFkZXJzLXRha2UtcHJvZml0LTIwMjQwNjI3MDg1Mw?oc=5",
          urlToImage: null,
          publishedAt: "2024-06-27T08:53:30Z",
          content: null,
        },
        {
          source: {
            id: "google-news",
            name: "Google News",
          },
          author: "MotorOctane",
          title: "Exciting Tata Nexon Launch Confirmed! - MotorOctane",
          description: null,
          url: "https://news.google.com/rss/articles/CBMiSGh0dHBzOi8vbW90b3JvY3RhbmUuY29tL25ld3MvMjc1MDU5LWV4Y2l0aW5nLXRhdGEtbmV4b24tbGF1bmNoLWNvbmZpcm1lZNIBSGh0dHBzOi8vbW90b3JvY3RhbmUuY29tL25ld3MvMjc1MDU5LWV4Y2l0aW5nLXRhdGEtbmV4b24tbGF1bmNoLWNvbmZpcm1lZA?oc=5",
          urlToImage: null,
          publishedAt: "2024-06-27T08:36:59Z",
          content: null,
        },
        {
          source: {
            id: "the-times-of-india",
            name: "The Times of India",
          },
          author: "Nishtha Awasthi",
          title:
            "Titagarh Rail shares rally 17% in 2 days as BlackRock buys over 9 lakh shares - The Economic Times",
          description:
            "RVNL's stock surged by 3% on BSE following the KRDCL-RVNL JV securing a project worth Rs 156.47 crore from Southern Railway, showcasing a positive trend in the railway sector.",
          url: "https://economictimes.indiatimes.com/markets/stocks/news/titagarh-rail-shares-rally-17-in-2-days-as-blackrock-buys-over-9-lakh-shares/articleshow/111308483.cms",
          urlToImage:
            "https://img.etimg.com/thumb/msid-111308356,width-1200,height-630,imgsize-12650,overlay-etmarkets/photo.jpg",
          publishedAt: "2024-06-27T08:04:31Z",
          content:
            "Shares of Kolkata-based private railway stock Titagarh Rail Systems have rallied 17% in the last 2 days on BSE to its new all-time high of Rs 1,896.50 as BlackRock Global Emerging Markets Fund bought… [+1774 chars]",
        },
        {
          source: {
            id: null,
            name: "Cardekho.com",
          },
          author: "CarDekho",
          title:
            "Tata Altroz Racer Beats The Hyundai i20 N Line And Maruti Fronx On A Track - CarDekho",
          description: null,
          url: "https://www.cardekho.com/india-car-news/tata-altroz-racer-beats-the-hyundai-i20-n-line-and-maruti-fronx-on-a-track-32731.htm",
          urlToImage: null,
          publishedAt: "2024-06-27T07:51:00Z",
          content: null,
        },
        {
          source: {
            id: null,
            name: "CNBCTV18",
          },
          author: "Meghna Sen",
          title:
            "IREDA shares may rally to ₹250 after a 540% surge from IPO price, as per this analyst - CNBCTV18",
          description:
            "Technical Analyst Rajesh Satpute believes IREDA will establish a range between ₹200 to ₹215 and eventually move towards ₹250 within the next eight months to a year.",
          url: "https://www.cnbctv18.com/market/ireda-share-price-may-rally-to-rs-250-after-a-17-times-surge-from-ipo-price-2024-returns-psu-stock-19434540.htm",
          urlToImage:
            "https://images.cnbctv18.com/uploads/2022/12/buy-sell.jpg?im=FitAndFill,width=500,height=300",
          publishedAt: "2024-06-27T07:49:53Z",
          content:
            "Shares of IREDA or Indian Renewable Energy Development Agency Ltd. were trading with gains of 5% on Thursday, June 27. With today's move, the stock is up 540% from its IPO price.IREDA, a multi-bagger… [+1844 chars]",
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
                          boxSizing: "border-box",
                        }}
                      >
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{
                            fontWeight: "bold",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {article.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="inherit"
                          sx={{
                            maxHeight: "4em",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {article.description}
                        </Typography>

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            marginTop: 2,
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
