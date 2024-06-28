import CancelIcon from "@mui/icons-material/Cancel";
import {
  Box,
  Button,
  CardMedia,
  Chip,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Header from "../../components/header";

const Dashboard = () => {
  const [points, setPoints] = useState(20);
  const [searchValue, setSearchValue] = useState([]);
  const [search, setSearch] = useState("");
  const [duration, setDuration] = useState("");
  const [time, setTime] = useState("");

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
  const tags = [
    { name: "Health", label: "# Health" },
    { name: "Insurance", label: "# Insurance" },
    { name: "Vaccation", label: "# Vaccation" },
    { name: "Saving", label: "# Saving" },
    { name: "Movies", label: "# Movies" },
    { name: "security", label: "# security" },
    { name: "Insurance", label: "# Insurance" },
    { name: "Vaccation", label: "# Vaccation" },
    { name: "Saving", label: "# Saving" },
    { name: "Movies", label: "# Movies" },
    { name: "security", label: "# Security" },
  ];

  const handleChipClick = (tag) => {
    // Handle chip click logic here
    console.log(`Clicked on tag: ${tag}`);
  };
  const handleKeyDown = () => {
    if (event.key === "Enter") {
      event.preventDefault();
      // Your logic when Enter is pressed
      handleSearchClick();
      // You can call a function or perform any action here
    }
  };

  return (
    <>
      <Header />

      <Box sx={{ width: "100%", display: "flex" }}>
        <Box
          sx={{
            width: "50%",
            p: 3,
            background: "linear-gradient(to right, #000, #fff)",
          }}
        >
          <Box
            sx={{
              height: "90vh",
            }}
          >
            <Box
              sx={{
                p: 3,
                borderRadius: "10px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                Please select the category you are intrested into
              </Typography>

              <Box
                sx={{
                  my: "2rem",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  mx: 1,
                }}
              >
                {tags.map((tag, index) => (
                  <Chip
                    deleteIcon={
                      <CancelIcon
                        sx={{
                          color: "white",
                        }}
                      />
                    }
                    sx={{ color: "#fff", border: "1px solid #fff" }}
                    label={tag.label}
                    clickable
                    onClick={() => handleChipClick(tag.name)}
                  />
                ))}
              </Box>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    id="outlined-basic"
                    InputProps={{
                      sx: {
                        "& fieldset": {
                          borderColor: "white",
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "white",
                        },
                        color: "white",
                      },
                    }}
                    InputLabelProps={{
                      sx: {
                        color: "white",
                      },
                    }}
                    onKeyDown={search ? handleKeyDown : () => {}}
                    label="Search and press enter"
                    variant="outlined"
                  />
                </Grid>

                <Box
                  sx={{
                    mt: "1rem",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    mx: 1,
                  }}
                >
                  {searchValue?.map((value) => (
                    <Chip
                      key={value.id}
                      deleteIcon={
                        <CancelIcon
                          sx={{
                            color: "white",
                            fill: "#fff",
                            outline: "#fff",
                          }}
                        />
                      }
                      sx={{
                        fontWeight: "2rem",
                        color: "#fff",
                        border: " 1px solid #fff",
                      }}
                      label={value.label}
                      onDelete={() => handleDelete(value.id)}
                    />
                  ))}
                </Box>
              </Grid>

              <Grid container sx={{ my: 2 }} spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    value={duration}
                    fullWidth
                    onChange={(e) => setDuration(e.target.value)}
                    id="outlined-basic"
                    label="Duration"
                    InputProps={{
                      sx: {
                        "& fieldset": {
                          borderColor: "white",
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "white",
                        },
                        color: "white",
                      },
                    }}
                    InputLabelProps={{
                      sx: {
                        color: "white",
                      },
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    value={time}
                    fullWidth
                    onChange={(e) => setTime(e.target.value)}
                    id="outlined-basic"
                    label="Time"
                    InputProps={{
                      sx: {
                        "& fieldset": {
                          borderColor: "white",
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "white",
                        },
                        color: "white",
                      },
                    }}
                    InputLabelProps={{
                      sx: {
                        color: "white",
                      },
                    }}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid container sx={{ mt: "3rem" }}>
                <Grid item xs={12}>
                  <Button
                    onClick={handleSearchClick}
                    fullWidth
                    style={{
                      borderRadius: 20,
                      backgroundColor: "#AEAEAE",
                      padding: "12px 18px",
                      fontSize: "18px",
                    }}
                    variant="contained"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "50%",
            backgroundColor: "#fee3e3",
          }}
        >
          <CardMedia
            component="img"
            height="100%"
            image={
              "https://static.wingify.com/gcp/uploads/sites/3/2023/07/Feature-image_Driving-Business-Success-With-Customer-Engagement_-Why-Is-It-Important-and-What-Are-the-Benefits_-1.png"
            }
            alt={"image"}
          />
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
