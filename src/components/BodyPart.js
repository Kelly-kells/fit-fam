import React from "react";
import { Stack, Typography } from "@mui/material";
import ImageData from "./ImageData";

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


      {ImageData.map(({ img }) => (
        <img
          src={img}
          alt=""
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "#ffebee",
          }}
          className="bodypartImg"
        />
      ))}

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
