import React from 'react'
import Navbar from './Components/Navbar'
import { Box } from '@mui/material'
import Home from './Components/Home'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App