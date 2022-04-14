import React from 'react';
import Typewriter from 'typewriter-effect';

export default () => {
    return (
        <>
            <div class="page_wrap" id='About'>
                <div>
                    <h2>About Us</h2>
                        <p>
                            <Typewriter
                            options={{
                                strings: ['PVP', 'Ratting', 'Mining', 'Exploration', 'Small Gang Roams', 'Planetary Interaction', 'Moon Mining'],
                                autoStart: true,
                                loop: true,
                            }}
                            />
                        </p>
                        <br/>
                        <div id='container-div'>
                            <div id='about-div'>
                                <h3>Who we are</h3>
                                <p>We are a corp that focuses on helping introduce players of all kinds into worm-holing. While our primary focus is on guiding new players into the wormhole life, Eve veterans can also enjoy our laid back atmosphere.
                                <br/>
                                We've been around for 4 years building our community and now reside in a Class 4 wormhole with an easier C3 and a tougher C5 static, so there's gameplay for both newer and more experienced players to enjoy.
                                <br/>
                                We offer most kinds of content and ISK making opportunities, such as Moon and Anom Mining, Gas huffing, Exploration, great Planetary Interaction, c3 and c5 ratting, and of course we relish in a bit of PvP.
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
                                <li>voice comms (discord) required for in game activities.</li>
                                <li>No SP requirement all are welcome</li>
                            </ul>
                        </div>
                        <div id='inner-div'>
                            <h3>Getting Started</h3>
                            <p>We will provide free starter ships to help get players settled and established while also sharing the necessary wormhole knowledge via our active discord</p>
                        </div>
                        <div id='inner-div'>
                            <h3>What we Offer</h3>
                            <ul>
                                <li>A great community</li>
                                <li>Ratting</li>
                                <li>PVP</li>
                                <li>Mining</li>
                                <li>Exploration</li>
                                <li>Small Gang Roams</li>
                                <li>Planetary Interaction</li>
                                <li>Moon Mining</li>
                            </ul>
                        </div>
                    </div>
            </div>          
        </>
    )
}