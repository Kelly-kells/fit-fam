import React from "react";
import { Stack, Typography } from "@mui/material";

import dumbellIcon from "../assets/dumbellIcon.png";


const BodyPart = ({ item, setBodypart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="boypart-card"
      sx={
        bodyPart === item
          ? {
              borderTop: "4px solid #ff2625",
              backgroundColor: "#ffebee",
              borderBottomLeftRadius: "20px",
              width: "200px",
              height: "200px",
              cursor: "pointer",
              gap: "47px",
            }
          : {
              
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "200px",
              cursor: "pointer",
              gap: "47px",
            }
      }
    >
      <img
        src={dumbellIcon}
        alt="dumbell"
        style={{ width: "100px", height: "100px",backgroundColor: "#ffebee" }}
        className="bodypartImg"
      />

      <Typography fontSize="24px" fontWeight="bold" color="#ffebee" textTransform="capitalize">{item}</Typography>
    </Stack>
  );
};

export default BodyPart;
