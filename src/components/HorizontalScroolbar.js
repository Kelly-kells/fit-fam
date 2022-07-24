import React from "react";
import { Box } from "@mui/system";

const HorizontalScroolbar = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <Box></Box>
      ))}
    </div>
  );
};

export default HorizontalScroolbar;
