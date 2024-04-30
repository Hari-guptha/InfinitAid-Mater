import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import Event from './Components/Event';
import Alumni from './Components/Alumni';
import Achievements from './Components/Achivements';
import Project from './Components/Project';
import Learn from './Components/Learn';
import DashBoard from './Components/DashBoard';
import HomeDashBoard from './Components/HomeDashBoard';
import EventDashBoard from './Components/EventDashBoard';

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/Admin');
  if (isAdminRoute) {
    document.body.style.overflow = 'hidden';
  }
  return (
    <div>
      {isAdminRoute ? (
        <Routes>
          <Route path="/Admin" element={<DashBoard />} >
            <Route path="EditHome" element={<HomeDashBoard />} />
            <Route path="EditEvent" element={<EventDashBoard />} />
          </Route>
        </Routes>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Event" element={<Event />} />
            <Route path="/Alumni" element={<Alumni />} />
            <Route path="/Achievements" element={<Achievements />} />
            <Route path="/Projects" element={<Project />} />
            <Route path="/Learn" element={<Learn />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
