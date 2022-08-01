import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../Utilities/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const exercisePerPage = 9;

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: "1800px", behavior: "smooth" });
  };
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography varient="h4" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}

        <Stack mt="100px" alignItems="center">
          {exercises.length > { exercisePerPage } && (
            <Pagination
              color="standard"
              shape="rounded"
              count={Math.ceil(exercises.length / 9)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Exercises;