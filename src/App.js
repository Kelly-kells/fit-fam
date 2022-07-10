import React from 'react'
import './App.css'
import {Routes,Route}from "react-router-dom"
import {Box} from '@mui/material'
import Home from './components/pages/Home'
import ExerciseDetail from './components/pages/ExerciseDetail'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Box width="400px">
          Navbar
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
          </Routes>
          <Footer/>
      </Box>
        </div>
  )
}

export default App