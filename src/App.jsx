import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Event from './Components/Event'
import Alumni from './Components/Alumni'
import Achivements from './Components/Achivements'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Event" element={<Event/>} />
        <Route path="/Alumni" element={<Alumni/>} />
        <Route path="/Achivements" element={<Achivements/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App