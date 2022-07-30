import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import Banner from "../components/Banner";
import Exercise from "../components/Exercise";
import Search from "../components/Search";

const Home = () => {
  const [bodyPart, setBodypart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <Banner />
      <Search
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodypart}
      />
      <Exercise 
      exercises={exercises}
      setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodypart}/>
    </Box>
  );
};

export default Home;
