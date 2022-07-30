import React from "react";
import { Stack, Typography } from "@mui/material";
import back from "../assets/back.png"

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
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
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >


<img src={back} alt="dumbbell" style={{ width: '50%', height: '100%' }} />

      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#ffebee"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
