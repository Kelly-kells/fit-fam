import React from "react";
import { useEffect, useState } from "react";
import { Box, Stack, TextField, Typography, Button } from "@mui/material";
import { height } from "@mui/system";

const Search = () => {
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
            },
            width: { lg: "1000px", xs: "350px" },
          }}
          height="76px"
          value=""
          onChange={(e) => {}}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="serch-btn"
          sx={{
            bgcolor: "#f94144",
            height: "50px",
            textTransform: "none",
            color: "#fff",
            width: { lg: "175px", xs: "80px" },
            borderRadius: "15px",
          }}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default Search;
