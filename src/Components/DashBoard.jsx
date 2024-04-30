import HomeDashBoard from "./HomeDashBoard";
import img1 from '../assets/img/logo.png';
import { Link, Outlet, Route, Routes } from "react-router-dom";

const DashBoard = () => {
  return (
    <div id="MainContainer">
      <div id="sidebar">
        <img id='sidebarlogo' src={img1} alt="logo" />
        <div id='sideitems'>
          <Link to='/Admin/EditHome' id='sideitem'>Home</Link>
          <Link to='/Admin/EditEvent' id='sideitem'>Events</Link>
          <h5 id='sideitem'>Alumni</h5>
          <h5 id='sideitem'>Achievements</h5>
          <h5 id='sideitem'>Projects</h5>
          <h5 id='sideitem'>Learn</h5>
          <h5 id='sideitem'>News</h5>
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
