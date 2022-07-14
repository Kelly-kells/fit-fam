import React from "react";
import { Link } from "react-router-dom";

import { CgGym } from "react-icons/cg";
import { Stack } from "@mui/material";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{ gap: { sm: "122px", xs: "40px" }, 
      mt: { sm: "25px", xs: "20px" }, justifyContent:'none' } }px='20px'
    >
      <Link to="/">
        <CgGym color="#f94144" fontSize="4rem" />
      </Link>

      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
            borderBottom: "3px solid #f94144",
          }}
        >
          Home
        </Link>
        <a href="#exercises" style={{ textDecoration: "none", color: "white" }}>
          {" "}
          Exercise
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
