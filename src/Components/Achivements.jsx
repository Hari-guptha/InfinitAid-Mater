import React from 'react'
import Kore from '../assets/img/kore.png'
import git from '../assets/img/icons/git.png'
import Youtube from '../assets/img/icons/youtube.png'


const Achivements = () => {
    return (
        <div style={{ margin: "0px 5%" }} >
            <h1 id='PageTitle'>Achivements</h1>
            <div id='AchiveCards'>
                <div id='achiveCard'>
                    <img id="achiveImg" src={Kore} alt="" />
                    <div id='AchiveCardInner'>
                        <div id='AchiveCardInnerchild' >
                            <h1>KORE.AI BOTATHON</h1>
                            <h6>FIRST PLACE</h6>
                        </div>
                        <h4>Design, test, and deploy conversational experiences across multiple channels and languages.</h4>
                        <div id='Achivebtns'>
                            <div>Watch
                                <img id='achiveicons' src={Youtube} alt="" />
                            </div>
                            <div>Download
                                <img id='achiveicons' src={git} alt="" />
                            </div>
                        </div>
                        <h5>REDIRECT TO RESULTS PAGE</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achivements