import CancelIcon from "@mui/icons-material/Cancel";
import {
  Box,
  Button,
  CardMedia,
  Chip,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Header from "../../components/header";

const Dashboard = () => {
  const [points, setPoints] = useState(20);
  const [searchValue, setSearchValue] = useState([]);
  const [search, setSearch] = useState("");
  const [duration, setDuration] = useState(1);
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
            background: "linear-gradient(to right, #000, #233333)",
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
                  <Typography sx={{ color: "#fff", mb: 1 }}>
                    Select duration for Subscription
                  </Typography>
                  <Select
                    labelId="duration-label"
                    id="duration"
                    value={duration}
                    onChange={(e) => {
                      setDuration(e.target.value);
                    }}
                    fullWidth
                    label="Duration"
                    sx={{
                      color: "white",
                      ".MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                      },
                      ".MuiSvgIcon-root ": {
                        fill: "white !important",
                      },
                    }}
                  >
                    <MenuItem value="1">1 month</MenuItem>
                    <MenuItem value="3">3 months</MenuItem>
                    <MenuItem value="6">6 months</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ color: "#fff", mb: 1 }}>
                    Time at which you want mails
                  </Typography>
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
                    fullWidth
                    style={{
                      borderRadius: 20,
                      backgroundColor: "#AEAEAE",
                      padding: "12px 18px",
                      fontSize: "18px",
                    }}
                    variant="contained"
                    disabled={searchValue.length === 0}
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
              "https://img.freepik.com/free-vector/brand-loyalty-concept-illustration_114360-11553.jpg?size=626&ext=jpg&ga=GA1.1.1933058075.1719570426&semt=ais_user"
            }
            alt={"image"}
          />
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
