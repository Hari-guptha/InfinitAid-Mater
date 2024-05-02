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
import AlumniDashBoard from './Components/AlumniDashboard';
import AchivementsDashBoard from './Components/AchivementsDashboard';
import ProjectDashboard from './Components/ProjectDashboard';
import LearnDashboard from './Components/LearnDashboard';
import AdminLogin from './Components/AdminLogin';

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
            <Route path="/Admin" element={<HomeDashBoard />} />
            <Route path="EditEvent" element={<EventDashBoard />} />
            <Route path="EditAlumni" element={<AlumniDashBoard />} />
            <Route path="AchivementsDashBoard" element={<AchivementsDashBoard />} />
            <Route path="ProjectDashboard" element={<ProjectDashboard />} />
            <Route path="LearnDashboard" element={<LearnDashboard />} />
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
            <Route path="/AdminLogin" element={<AdminLogin />} />
            <Route path="*" element={<>
              <div style={{ textAlign: 'center', padding: '50px',margin:"20% 0" }}>
                <h2>Something went wrong.</h2>
                <p>The page encountered an error and cannot be displayed.</p>
              </div></>} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
