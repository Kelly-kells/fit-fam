import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Footer = () => (
  <Stack
    className="footer"
    bgcolor="#001523"
    direction={{ sm: "row", xs: "column" }}
    spacing={2}
    mt="150px"
    justifyContent="space-around"
    alignItems="center"
    color="#fdf0d5"
  >
    <Box xs={4} justifyContent="center" p="10px">
      <Typography variant="h6" fontSize="1rem" p="">
        About
      </Typography>
      <Typography variant="p" fontSize="0.9rem">
        Being physically active can benefit your physical
        <br />
        It can strengthen your muscles and bones, lower
        <br /> your risk of chronic health conditions.
      </Typography>
    </Box>

    <Box xs={4}>
      <Typography variant="h6" fontSize="1rem">
        Categories
      </Typography>
      <Typography variant="p" fontSize="0.9rem">
        Strength Training. <br />
        Aerobic Training.
        <br />
        Balance and Stability Training. <br />
      </Typography>
    </Box>
  </Stack>
);

export default Footer;
