import React from 'react';
import discordCustom from '../static/discordCustom.png'
import discordBlue from '../static/discordBlue.png'
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
                        <p>We've got a really great community, if you're interested in seeing if we're the right fit. contact: Cookadile Dundee (EU Time Zone) or Lal (US Time Zone) in game.</p>
                    </div>
                    <div id='inner-div'>
                        <h3>Diplomacy</h3>
                        <p>If you would like to reach us regarding a diplomacy issue, please reach out to _____________ in game</p>
                    </div>
                </div>
                <br/>
                <p>Join our discord channel</p>
                <a href ='https://discord.gg/xUnv7yZV' id='discordLogoNight'><img src={discordCustom}/><br/>Discord</a>
                <a href ='https://discord.gg/xUnv7yZV' id='discordLogoDay'><img src={discordBlue}/><br/><span id='royal_blue'>Discord</span></a>
            </div>
        </>
    )
}