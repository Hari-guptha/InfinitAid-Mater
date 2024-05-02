import React from 'react'
import EventImg1 from '../assets/img/Appathon.png'
import EventImg2 from '../assets/img/Dataathon.png'
import EventImg3 from '../assets/img/chatathon.png'

const Event = () => {
    return (
        <div style={{ margin: "100px 5%" }} >
            <h1 id='PageTitle'>Event</h1>
            <div id='filterBox2'>
                <div id='SearchCont'>
                    <input id='Search' style={{width:"150%"}} type="text" placeholder='Enter the Name' />
                    <h5 id='SearchBtn'>Search</h5>
                </div>
                <div id='SearchCont'>
                    <input list='browsers' id='Search' type="text" placeholder='Enter the domain Name' />
                    <datalist id="browsers">
                        <option value="ML"></option>
                        <option value="ML"></option>
                        <option value="ML"></option>
                    </datalist>
                    <h5 id='SearchBtn'>Set</h5>
                </div>
            </div>
            <div id='EventCards'>
                <div id='EventCard'>
                    <img id='CardImage' src={EventImg1} alt="img" />
                    <div id='EventCardBody'>
                        <div id='EventCardTitle'>
                            <h2>Appathon</h2>
                            <h4>Hard</h4>
                        </div>
                        <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </h5>
                        <div id='EventCardBottom'>
                            <h4>Certificates will be provided</h4>
                            <h5 id='Button2'>Join</h5>
                        </div>
                    </div>
                </div>
                <div id='EventCard'>
                    <img id='CardImage' src={EventImg2} alt="img" />
                    <div id='EventCardBody'>
                        <div id='EventCardTitle'>
                            <h2>Appathon</h2>
                            <h4>Hard</h4>
                        </div>
                        <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </h5>
                        <div id='EventCardBottom'>
                            <h4>Certificates will be provided</h4>
                            <h5 id='Button2'>Join</h5>
                        </div>
                    </div>
                </div>
                <div id='EventCard'>
                    <img id='CardImage' src={EventImg3} alt="img" />
                    <div id='EventCardBody'>
                        <div id='EventCardTitle'>
                            <h2>Appathon</h2>
                            <h4>Hard</h4>
                        </div>
                        <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </h5>
                        <div id='EventCardBottom'>
                            <h4>Certificates will be provided</h4>
                            <h5 id='Button2'>Join</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event