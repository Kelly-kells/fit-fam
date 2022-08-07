import React from "react";
import { Typography, Stack, Button } from "@mui/material";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  console.log(exerciseDetail);

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail image" />

      <Stack></Stack>
    </Stack>
  );
};

export default Detail;
