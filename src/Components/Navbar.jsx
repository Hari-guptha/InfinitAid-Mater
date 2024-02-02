import React, { useState } from 'react'
import '../assets/css/Style.css'
import Logo from '../assets/img/Logo.png'
import Logout from '../assets/img/icons/025-exit.svg'
import { Box, Drawer, Stack } from '@mui/material'


//Icon
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const [NavControl, setNavControl] = useState(false)
    return (
        <div>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <div id='NavBar' sx={{ display: { xs: "none", sm: "block" } }}>
                    <div id='NavFirstRow' >
                        <img id='Logo' src={Logo} alt="Logo" />
                        <div id='NavContent'>
                            <h5 id='NavItem'>Home</h5>
                            <h5 id='NavItem'>Achivements</h5>
                            <h5 id='NavItem'>Alumni</h5>
                            <h5 id='NavItem'>Contact</h5>
                            <h5 id='NavItem'>Learn</h5>
                            <h5 id='NavItem'>Events</h5>
                            <h5 id='NavItem'>Project</h5>
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
                    <img id="Logo-phone" src={Logo} alt="logo" />
                    <MenuIcon id="menuicon" onClick={e => (setNavControl(true))} />
                </div>
            </Box>
            <Drawer
                anchor={'left'}
                open={NavControl}
                onClose={e => (setNavControl(false))} >
                <div style={{overflow:"hidden"}}>
                    <div style={{ display: "flex" }}>
                        <img src={Logo} id="Logo-SideBar" alt="logo" />
                        <CloseIcon id="closeicon" onClick={e => (setNavControl(false))} />
                    </div>
                    <div id='sideBarContainer'>
                        <h5 id='SideItem'>Home</h5>
                        <h5 id='SideItem'>Achivements</h5>
                        <h5 id='SideItem'>Alumni</h5>
                        <h5 id='SideItem'>Contact</h5>
                        <h5 id='SideItem'>Learn</h5>
                        <h5 id='SideItem'>Events</h5>
                        <h5 id='SideItem'>Project</h5>
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