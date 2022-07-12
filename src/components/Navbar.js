import React from "react";
import { Link } from "react-router-dom";

import { CgGym } from "react-icons/cg";
import { Stack } from "@mui/material";

const Navbar = () => {
  return (
    <Stack>
      <Link to="/">
        <CgGym color="green" fontSize="4rem" />
      </Link>

      <Stack direction="row" gap="40px" fontSize="24px" alignItem="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
            borderBottom: "3px solid green",
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
