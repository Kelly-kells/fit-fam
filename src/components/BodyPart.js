import React from "react";
import { Stack, Typography } from "@mui/material";
import back from "../assets/back.png"

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
         {
              borderTop:  bodyPart === item ? "7px solid #ff2625" 
              : "",
             
              borderBottomLeftRadius: "20px",
              width: "180px",
              height: "180px",
              cursor: "pointer",
              gap: "47px",
            }
          
      }
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: '1800', left: '100', behavior: 'smooth' });
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
