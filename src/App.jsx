import React from 'react'
import Navbar from './Components/Navbar'
import { Box } from '@mui/material'
import Home from './Components/Home'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Event from './Components/Event'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Event" element={<Event/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App