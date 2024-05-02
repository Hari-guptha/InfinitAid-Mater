import img1 from '../assets/img/logo.png';
import { Link, Outlet, Route, Routes } from "react-router-dom";

const DashBoard = () => {
  return (
    <div id="MainContainer">
      <div id="sidebar">
        <img id='sidebarlogo' src={img1} alt="logo" />
        <div id='sideitems'>
          <Link to='/Admin' id='sideitem'>Home</Link>
          <Link to='/Admin/EditEvent' id='sideitem'>Events</Link>
          <Link to='/Admin/EditAlumni' id='sideitem'>Alumni</Link>
          <Link to='/Admin/AchivementsDashBoard' id='sideitem'>Achievements</Link>
          <Link to='/Admin/ProjectDashboard'  id='sideitem'>Projects</Link >
          <Link to='/Admin/LearnDashboard'  id='sideitem'>Learn</Link >
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <div id="upperbar">
          <h5 style={{ color: "white", fontSize: "20px", marginLeft: "5%" }}>ADMIN</h5>
          <h5 style={{ background: "white", color: "black" }} id='UserName'>Hari Guptha</h5>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
