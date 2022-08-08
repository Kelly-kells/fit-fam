import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import weightlift from "../assets/weightlift.png"
import yoga from "../assets/yoga.png"
import abdominal from "../assets/abdominal.png"

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

     const extraDetail=[
        {
          icon: yoga,
          name: bodyPart,
        },

        {
          icon: abdominal,
          name: target,
        },

        {
          icon: weightlift,
          name: equipment,
        }
     ]

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />

      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography varient= "h2">{name}</Typography>
        <Typography varient="h5">
          Exercise keep you strong. {name} {``} is one of the best exercises to
          target your {target} improve your mood and maximise strenght.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Detail;
