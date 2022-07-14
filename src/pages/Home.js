import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import Banner from '../components/Banner'
import Exercise from '../components/Exercise'
import Search from '../components/Search'


const Home = () => {
  return (
    <Box>
 
  <Banner/>
 <Exercise/>
 <Search/>
   
    </Box>
  )
}

export default Home