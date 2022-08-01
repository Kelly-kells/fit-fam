import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import Banner from "../components/Banner";
import Exercises from "../components/Exercises";
import Search from "../components/Search";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <Banner />
      <Search
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises 
      exercises={exercises}
      setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}/>
    </Box>
  );
};

export default Home;
