import React from 'react'
import './App.css'
import {Routes,Route}from "react-router-dom"
import {Box} from "@material-ui/core"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Box width="400px" sx={ {width:{xl:'1448px'}}}>
         <Navbar/>
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