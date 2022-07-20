import React from "react";
import { useEffect, useState } from "react";
import { Box, Stack, TextField, Typography, Button } from "@mui/material";

import { exerciseOptions, fetchData } from "../Utilities/fetchData";

const Search = () => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises]=useState([])
  const handleSearch = async () => {
   if (search) {
    const exerciseData= await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

    const searchExercises=exerciseData.filter(
      (exercise)=> exercise.name.toLowerCase().includes(search)
    ||exercise.target.toLowerCase().includes(search)
    ||exercise.equipment.toLowerCase().includes(search)
   || exercise.bodyparts.toLowerCase().includes(search)
    )
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={600}
        sx={{ fontSize: { lg: "3rem", sx: "2.5rem" } }}
        mb="1rem"
        textAlign="center"
      >
        Check Out These Awesome <br />
        Exercises .
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          className="textfield"
          sx={{
            input: {
              color: "gray",
              fontWeight: "700",
              textAlign: "center",
              border: "none",
              lineHeight: "1.5",
            },
            width: { lg: "1000px", xs: "350px" },
          }}
          height="70px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#f94144",
            height: "57px",
            textTransform: "none",
            color: "#fff",
            width: { lg: "175px", xs: "80px" },

            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>


      <Typography
        fontWeight={600}
        sx={{ fontSize: { lg: "3rem", sx: "2.5rem" } }}
        mb="1rem"
        textAlign="center"
      >
        Check Out These Awesome <br />
        Exercises .
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          className="textfield"
          sx={{
            input: {
              color: "gray",
              fontWeight: "700",
              textAlign: "center",
              border: "none",
              lineHeight: "1.5",
            },
            width: { lg: "1000px", xs: "350px" },
          }}
          height="70px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#f94144",
            height: "57px",
            textTransform: "none",
            color: "#fff",
            width: { lg: "175px", xs: "80px" },

            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default Search;
