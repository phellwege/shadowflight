import React from 'react';
import discordCustom from '../static/discordCustom.png'
import discordBlue from '../static/discordBlue.png'
import cookadile from '../static/cookadile.jpeg'
import lall from '../static/lall.jpeg'

export default () => {
    return (
        <>
            <div class="page_wrap" id='Contact'>
                <div>
                    <h2>Contact</h2>
                </div>
                <div id='divSplitContact'>
                    <div id='inner-div'>
                        <h3>Recruitment</h3>
                        <p>
                            We've got a really great community, if you're interested in seeing if we're the right fit.
                            <br/>
                            Contact in-game:
                        </p> 
                        <div id='divSplitRecruit'>
                            <div>
                                <img src={cookadile} id='portrait'/>
                                <br/>
                                <span id='in_game'>Cookadile Dundee</span>
                                <p>(EU Time Zone)
                                <br/>
                                in-game</p>
                            </div>
                            <div>
                                <img src={lall} id='portrait'/>
                                <br/>
                                <span id='in_game'>Lall</span>
                                <p>(US Time Zone)
                                <br/>
                                in-game</p>
                            </div>
                        </div>
                    </div>
                    <div id='inner-div'>
                        <h3>Diplomacy</h3>
                        <p>If you would like to reach us regarding a diplomacy issue, please follow this link to our discord or join the <a href='https://discord.gg/xUnv7yZV'>"Shadow Flight Diplo"</a> channel in-game.</p>
                    </div>
                </div>
                <br/>
                <h3>OR</h3>
                <p>Join our discord channel</p>
                <a href ='https://discord.gg/xUnv7yZV' id='discordLogoNight'><img src={discordCustom}/><br/>Discord</a>
                <a href ='https://discord.gg/xUnv7yZV' id='discordLogoDay'><img src={discordBlue}/><br/><span id='royal_blue'>Discord</span></a>
            </div>
        </>
    )
}