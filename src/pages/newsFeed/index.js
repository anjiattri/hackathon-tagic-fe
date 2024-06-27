import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Pagination,
} from "@mui/material";
import Header from "../../components/header";

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const articlesPerPage = 5;

  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://newsapi.org/v2/everything?q=tesla&from=2024-05-27&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`;
      const response = await fetch(url);
      const result = await response.json();
      console.log("Result", result);
      if (result.articles) {
        setArticles(result.articles);
      }
    };
    fetchNews();
  }, []);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const indexOfLastArticle = page * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  return (
    <>
      <Header />
      <Container component="main" maxWidth="lg">
        <Box sx={{ marginTop: 8 }}>
          <Grid container spacing={4}>
            {currentArticles.map((article, index) => (
              <Grid item xs={12} key={index}>
                <Card sx={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 200, objectFit: "cover" }}
                    image={article.urlToImage}
                    alt={article.title}
                  />
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
          <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
            <Pagination
              count={Math.ceil(articles.length / articlesPerPage)}
              page={page}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default NewsFeed;
