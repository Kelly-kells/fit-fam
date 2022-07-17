import React from "react";
import { useEffect, useState } from "react";
import { Box, Stack, TextField, Typography, Button } from "@mui/material";

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
        <TextField />
      </Box>
    </Stack>
  );
};

export default Search;
