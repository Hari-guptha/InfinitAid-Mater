import React from 'react'
import Event from '../assets/img/Event-Home.png'

//icons
import Redirect from '../assets/img/icons/037-share.svg'
import Trophy from '../assets/img/icons/028-trophy.svg'
import Job from '../assets/img/icons/002-briefcase.svg'
import Project from '../assets/img/icons/022-personal-computer.svg'
import Play from '../assets/img/icons/Play.svg'

const Home = () => {
    return (
        <div style={{ margin: "5% 5%" }}>
            <div id='HomeTopSection'>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h1 id='HomeTitle'>WELCOME TO INFINITAID</h1>
                    <div id='HomeMidSection'>
                        <h5>Students Elevating Through Endless Support</h5>
                        <h5 id='Button1'>Join</h5>
                    </div>
                </div>
                <div id='EventsSection'>
                    <h4>Events and Hackathon</h4>
                    <img id='EventHomeImg' src={Event} alt="Event" />
                    <img id='Redirect-icon' src={Redirect} alt="redirect" />
                </div>
            </div>
            <div id='HomeBottomSection'>
                <div id='HomeBottomSection1'>
                    <div>
                        <img src={Play} alt="play" />
                        <div id='playcontent'>
                            <h5>Scholarly Junction</h5>
                            <h6>Join, Learn, Thrive with Curious Students</h6>
                        </div>
                    </div>
                    <div id='playitem'>Video 1</div>
                    <div id='playitem' >Video 2</div>
                    <div id='playitem' >Video 3</div>
                </div>
                <div id='HomeBottomSection2' >
                    <div id='Homecard' >
                        <h4>Students Achivements</h4>
                        <div id='HomeCardBottom'>
                            <img id='HomecardIcon' src={Trophy} alt="achivement" />
                            <h1>51 +</h1>
                        </div>
                    </div>
                    <div id='Homecard' >
                        <h4>Placed Students</h4>
                        <div id='HomeCardBottom'>
                            <img id='HomecardIcon' src={Job} alt="job" />
                            <h1>42 +</h1>
                        </div>
                    </div>
                    <div id='Homecard' >
                        <h4>Students Projects</h4>
                        <div id='HomeCardBottom'>
                            <img id='HomecardIcon' src={Project} alt="Project" />
                            <h1>99 +</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home