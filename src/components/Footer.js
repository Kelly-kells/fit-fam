import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import { CgGym } from "react-icons/cg";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <CgGym color="#f94144" fontSize="4rem" />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      Made with ❤️ by JavaScript Mastery
    </Typography>
  </Box>
);

export default Footer;
