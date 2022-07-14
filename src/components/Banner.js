import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{ mt: { lg: "200px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="200px"
    >
      <Typography color="#f94144" fontWeight="600" fontSize="26px">
        Stay Fit
      </Typography>
      <Typography fontWeight={700} >
        We Can Give A Shape Of <br /> Your Body Here!
      </Typography>
      <Typography>Check out various exercises</Typography>
    </Box>
  );
};

export default Banner;
