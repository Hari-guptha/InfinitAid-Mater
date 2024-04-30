import React, { useState } from 'react'
import '../assets/css/Style.css'
import Logo from '../assets/img/Logo.png'
import Logout from '../assets/img/icons/025-exit.svg'
import { Box, Drawer, Stack } from '@mui/material'


//Icon
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [NavControl, setNavControl] = useState(false)
    return (
        <div >
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <div id='NavBar' sx={{ display: { xs: "none", sm: "block" } }}>
                    <div id='NavFirstRow' >
                        <Link className='Link' to="/"><img id='Logo' src={Logo} alt="Logo" /></Link>
                        <div id='NavContent'>
                        <Link className='Link' to="/"><h5 id='NavItem'>Home</h5></Link>
                            <Link className='Link' to="/Achievements"><h5 id='NavItem'>Achivements</h5></Link>
                            <Link className='Link' to="/Alumni"><h5 id='NavItem'>Alumni</h5></Link>
                            <h5 id='NavItem'>Contact</h5>
                            <Link className='Link' to="/Learn"><h5 id='NavItem'>Learn</h5></Link>
                            <Link className='Link' to="/Event"><h5 id='NavItem'>Events</h5></Link>
                            <Link className='Link' to="/Projects"><h5 id='NavItem'>Project</h5></Link>
                        </div>
                    </div>
                    <div id='UserName'>
                        <h5>Hari Guptha</h5>
                        <img id='Logout-icon' src={Logout} alt="" />
                    </div>
                </div>
            </Box>
            <Box sx={{ display: { sm: "none", xs: "block" } }}>
                <div id='PhoneNav' >
                    <Link className='Link' to="/"><img id="Logo-phone" src={Logo} alt="logo" /></Link>
                    <MenuIcon id="menuicon" onClick={e => (setNavControl(true))} />
                </div>
            </Box>
            <Drawer
                anchor={'left'}
                open={NavControl}
                onClose={e => (setNavControl(false))} >
                <div style={{overflow:"hidden"}}>
                    <div style={{ display: "flex" }}>
                        <Link className='Link' to="/"><img src={Logo} id="Logo-SideBar" onClick={e => (setNavControl(false))} alt="logo" /></Link>
                        <CloseIcon id="closeicon" onClick={e => (setNavControl(false))} />
                    </div>
                    <div id='sideBarContainer'>
                    <Link className='Link' to="/"><h5 id='SideItem' onClick={e => (setNavControl(false))}>Home</h5></Link>
                        <Link className='Link' to="/Achievements"><h5 id='SideItem' onClick={e => (setNavControl(false))}>Achivements</h5></Link>
                        <Link className='Link' to="/Alumni"><h5 id='SideItem' onClick={e => (setNavControl(false))}>Alumni</h5></Link>
                        <h5 id='SideItem' onClick={e => (setNavControl(false))}>Contact</h5>
                        <Link className='Link' to="/learn"><h5 id='SideItem' onClick={e => (setNavControl(false))}>Learn</h5></Link>
                        <Link className='Link' to="/Event"><h5 id='SideItem' onClick={e => (setNavControl(false))}>Events</h5></Link>
                        <Link className='Link' to="/Projects"><h5 id='SideItem' onClick={e => (setNavControl(false))}>Project</h5></Link>
                        <div id='UserName-sidebar'>
                            <h5>Hari Guptha</h5>
                            <img id='Logout-icon' src={Logout} alt="" />
                        </div>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default Navbar