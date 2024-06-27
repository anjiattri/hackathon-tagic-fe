import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Chip,
} from "@mui/material";
import Header from "../../components/header";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

const Dashboard = () => {
  const [points, setPoints] = useState(20);
  const [searchValue, setSearchValue] = useState([]);
  const [search, setSearch] = useState("");
  const [duration, setDuration] = useState("");

  const handleSearchClick = () => {
    const newValue = {
      id: searchValue.length + 1,
      label: search,
      value: search,
    };
    setSearchValue([...searchValue, newValue]);
    setSearch("");
  };

  const handleDelete = (id) => {
    const list = searchValue.filter((item) => {
      return item.id !== id;
    });

    setSearchValue(list);
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          mt: "3rem",
          width: "50%",
          height: "90vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 3,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: "10px",
          }}
        >
          <Typography sx={{ fontSize: "2rem", textAlign: "center", mb: 4 }}>
            Search
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={10}>
              <TextField
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                id="outlined-basic"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderRadius: "0.8rem",
                    },
                  },
                }}
                label="Search"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                sx={{ borderRadius: "10%" }}
                onClick={search ? handleSearchClick : () => {}}
              >
                <AddIcon /> Add
              </Button>
            </Grid>

            <Box
              sx={{
                mt: "2rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                mx: 1,
              }}
            >
              {searchValue?.map((value) => (
                <Chip
                  key={value.id}
                  sx={{ fontWeight: "2rem" }}
                  label={value.label}
                  onDelete={() => handleDelete(value.id)}
                />
              ))}
            </Box>
          </Grid>

          <Grid container sx={{ my: 2 }}>
            <Grid item xs={10}>
              <TextField
                value={duration}
                fullWidth
                onChange={(e) => setDuration(e.target.value)}
                id="outlined-basic"
                label="Duration"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderRadius: "0.8rem",
                    },
                  },
                }}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container sx={{ my: 2 }}>
            <Grid item xs={10}>
              <Button fullWidth variant="contained" onClick={handleSearchClick}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
