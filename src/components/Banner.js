import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Button } from "@mui/material";
import BannerImage from "../assets/BannerImage.png";


const Banner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" },  }}
      position="relative"
      p="20px"
    >
      <Typography color="#f94144" fontWeight="600" fontSize="5rem">
        Stay Fit!
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "3.2rem", sx: "2.8rem" } }}
      >
        We Can Give A Shape Of <br /> Your Body Here!
      </Typography>
      <Typography lineHeight="2" fontSize="1.5rem" mb={3}>
        Check out various exercises
      </Typography>
      <Button variant="contained" color="error" href="#exercise" padding='10px'>
        Explore
      </Button>
    <Typography fontWeight={600} color="ff2625" sx={{
      opacity:0.1, display:{lg: 'block', xs:'none' }

    }} fontSize="250px">
      Exercise
    </Typography>

      <img src={BannerImage} alt="Banner" className="bannerImg" />
    </Box>
  );
};

export default Banner;
