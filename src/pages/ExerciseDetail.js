import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { exerciseOptions, fetchData } from "../Utilities/fetchData";
import Details from "../components/Details";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);
    };
    fetchExercisesData();
  }, [id]);

  return (
    <div>
      <Details exerciseDetail={exerciseDetail} />
    </div>
  );
};

export default ExerciseDetail;
