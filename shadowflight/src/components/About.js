import React from 'react';
import Typewriter from 'typewriter-effect';

export default () => {
    return (
        <>
            <div class="page_wrap" id='About'>
                <div>
                        <br/>
                        <div id='container-div'>
                            <div id='about-div'>
                                <h2>Who we are</h2>
                                <p>We are a corp that focuses on helping introduce players of all kinds into worm-holing. While our primary focus is on guiding new players into the wormhole life, Eve veterans can also enjoy our laid back atmosphere.
                                <br/>
                                We've been around for 4 years building our community and now reside in a Class 4 wormhole with an easier C3 and a tougher C5 static, so there's gameplay for both newer and more experienced players to enjoy.
                                </p>
                            </div>
                        </div>
                        <br/>
                </div> 
                    <div id='divSplit'>                    
                        <div id='inner-div'>
                            <h3>Requirements</h3>
                            <ul>
                                <li>A good Attitude</li>
                                <li>Willingness to participate</li>
                                <li>If you're new to the game, then a desire to learn</li>
                                <li>Voice comms (discord) required for in game activities</li>
                                <li>No SP requirement all are welcome</li>
                            </ul>
                        </div>
                        <div id='inner-div'>
                            <h3>Getting Started</h3>
                            <p>We will provide free starter ships to help get players settled and established while also sharing the necessary wormhole knowledge via our active discord. <a href='/NewBroLinks'>Helpful links</a></p>
                        </div>
                        <div id='inner-div'>
                            <h3>What we Offer</h3>
                            <Typewriter
                                options={{
                                    strings: ['PVP', 'Ratting', 'Mining', 'Exploration', 'Small Gang Roams', 'Moon Mining'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                            <ul id='whatWeOffer'>
                                <li>Planetary Interaction</li>
                                <li>C3 and C5 Ratting</li>
                                <li>Lots of Industry</li>
                                <li>Small Gang Roams</li>
                                <li>Moon Mining</li>
                                <li>Exploration</li>
                                <li>Gas Huffing</li>
                                <li>Mining</li>
                                <li>PVP</li>
                            </ul>
                        </div>
                    </div>
            </div>          
        </>
    )
}