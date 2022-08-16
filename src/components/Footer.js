import React from "react";
import { Box, Stack, Typography } from "@mui/material";


const Footer = () => (
  <Stack
    className="footer"
    bgcolor="#001523"
    direction={{ sm: "row", xs: "row" }}
    spacing={2}
    mt="200px"
    justifyContent="space-around"
    alignItems="center"
    color="gray"
  >
    <Box xs={4} justifyContent="center" p="10px">
      <Typography variant="h6" fontSize="1rem" p="">
        About
      </Typography>
      <Typography variant="p" fontSize={{sm:"0.9rem", xs: "0.8rem"}}>
        Being physically active can benefit your physical
        <br />
        It can strengthen your muscles and bones.
        
      </Typography>
    </Box>

    <Box xs={4}>
      <Typography variant="h6" fontSize="1rem">
        Categories
      </Typography>
      <Typography variant="p" fontSize={{sm:"0.9rem", xs: "0.8rem"}}>
        Strength Training. <br />
        Aerobic Training.
        <br />
        Balance and Stability Training. <br />
      </Typography>
    </Box>

    <Box xs={4}>
      <Typography variant="h6" fontSize="1rem">
        Contact
      </Typography>
      <Typography variant="p" fontSize={{sm:"0.9rem", xs: "0.8rem"}}>
        Facebook <br />
        Instagram
        <br />
       Twitter
      </Typography>
    </Box>
  </Stack>
);

export default Footer;
