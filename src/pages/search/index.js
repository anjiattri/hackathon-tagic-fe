import { Box, Button, Chip, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const Search = () => {
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
    <Box
      sx={{
        width: "50%",
        mx: "auto",
        p: 4,
        mt: 10,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
      }}
    >
      <Typography sx={{ fontSize: "2rem", textAlign: "center" }}>
        Search
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mt: "2rem" }}
      ></Box>

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
            onClick={handleSearchClick}
          >
            <AddIcon /> Add
          </Button>
        </Grid>
        <Box sx={{ display: "flex" }}>
          {searchValue?.map((value) => {
            return (
              <Box key={value.id} sx={{ mt: "2rem", display: "flex", mx: 1 }}>
                <Chip
                  sx={{ fontWeight: "2rem" }}
                  label={value.label}
                  onDelete={() => handleDelete(value.id)}
                />
              </Box>
            );
          })}
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
      <Grid container sx={{ mt: 4 }}>
        <Grid item xs={10}>
          <Button fullWidth variant="contained" onClick={handleSearchClick}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Search;
