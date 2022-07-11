import React from 'react'
import { Link } from 'react-router-dom'
import  {Stack}  from "@material-ui/core"
import{CgGym } from "react-icons/Cg"

const Navbar = () => {
  return (
    <Stack>
     <Link to="/">
     <CgGym  color="white" fontSize="1.5em"/>
     </Link>
    </Stack>
  )
}


export default Navbar