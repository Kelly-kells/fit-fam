import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Footer = () => (
  <Stack
    bgcolor="#00111c"
    direction={{ sm: "row" }}
    spacing={{ xs: 2 }}
    gap="40px"
   alignItems="center"
    flexWrap="wrap"
    px="40px"
    pt="24px"
    mt="150px"
  >
    <Box>
      <Typography
        variant="h6"
        sx={{ fontSize: { lg: "20px", xs: "20px" } }}
        mt="20px"
        pb="20px"
        ml="20px"
      >
        ABOUT
      </Typography>

      <Typography variant="p" pb="10px">
        We are efficient, and give a robust training effect for body and soul.
        <br /> The endurance activities are described as walking or running,
        <br />
        but feel free to swim, cycle, row or perform any other activity
        <br /> that involves dynamic work with large muscle groups
      </Typography>
    </Box>

    <Box ml="100px">
      <Typography
        variant="h6"
        sx={{ fontSize: { lg: "20px", xs: "20px" } }}
        mt="20px"
        pb="40px"
        
      >
        CATEGORIES
      </Typography>
      <Typography variant="p" pb="10px" >
        Strength
        <br />
        Endurance
        <br /> Balance <br /> Flexibility
      </Typography>
    </Box>
  </Stack>
);

export default Footer;
