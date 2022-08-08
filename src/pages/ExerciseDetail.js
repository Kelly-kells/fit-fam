import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, fetchData } from "../Utilities/fetchData";
import Details from "../components/Details";
import ExerciseVideo from "../components/ExerciseVideo";
import SimillarExercises from "../components/SimillarExercises";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";

      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        exerciseOptions
      );
    };
    fetchExercisesData();
  }, [id]);

  return (
    <div>
      <Details />
      <ExerciseVideo />
      <SimillarExercises />
    </div>
  );
};

export default ExerciseDetail;
