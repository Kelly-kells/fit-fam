import React,{useEffect, UseState} from 'react'
import {useParam} from "react-router-dom"
import {Box} from "@mui/material"
import {exerciseOptions, fetchData} from "../utilities/fetchData"
import Details from '../components/Detail'
import ExerciseVideo from '../components/ExerciseVideo'
import SimillarExercises from '../components/SimillarExercises'

const ExerciseDetail = () => {
  return (
    <div>
      <Details/>
      <ExerciseVideo/>
      <SimillarExercises/>
    </div>
  )
}

export default ExerciseDetail;