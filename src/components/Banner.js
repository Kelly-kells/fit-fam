import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Button } from "@mui/material";
import BannerImage from '../assets/BannerImage.jpg'

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
      <Typography fontWeight={700}
      sx={{fontSize:{lg:'40px', sx: "36px"}}} >
        We Can Give A Shape Of <br /> Your Body Here!
      </Typography >
      <Typography lineHeight='2' fontSize='1.5rem' mb={3}>Check out various exercises</Typography>
      <Button variant="contained" color="error" href="#exercise">
  Explore
</Button>
<img  src={BannerImage} alt="Banner"   className="BannerImg"/>
    </Box>
  );
};

export default Banner;
