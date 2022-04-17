import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Harbinger from '../static/harbinger.gif'
import Abaddon from '../static/abaddon.gif'
import Drake from '../static/drake.gif'
import Hurricane from '../static/hurricane.gif'
import Typhoon from '../static/typhoon.gif'

const handleDragStart = (e) => e.preventDefault();
const ships = [
    <img src={Abaddon} onDragStart={handleDragStart} />,
    <img src={Drake} onDragStart={handleDragStart} />,
    <img src={Hurricane} onDragStart={handleDragStart} />,
    <img src={Typhoon} onDragStart={handleDragStart} />,
    <img src={Harbinger} onDragStart={handleDragStart} />,
];

export default () => {
    return (
        <>
            <div class="page_wrap" id='About'>
                <div>
                        <br/>
                        <div id='container-div'>
                            <div id='about-div'>
                                <h2>zKillBoard</h2>
                                <div id='shipImg'>
                                <AliceCarousel mouseTracking items={ships} autoPlay={true} autoPlayInterval={3000} infinite={true} innerWidth={570}/>
                                </div>
                                <a href='https://zkillboard.com/corporation/98504902/'>
                                    <br/>
                                    ZkillBoard
                                </a>
                            </div>
                        </div>
                        <br/>
                </div> 
                    <div id='divSplit'>                    
                        <div id='inner-div'>
                            <h3>Industry</h3>
                            <ul id='whatWeOffer'>
                                <li><a href='https://www.evecookbook.com' target="_blank">EVE Cook Book</a></li>
                                <li><a href='https://evepraisal.com/' target="_blank">EvePraisal</a></li>
                                <li><a href='https://wiki.eveuniversity.org/Gas_cloud_harvesting' target="_blank">Gas Cloud Harvesting</a></li>
                                <li><a href='https://ore.cerlestes.de/ore#site:ore' target="_blank">ORE Tables</a></li>
                                <li><a href='https://wiki.eveuniversity.org/Reactions' target="_blank">Reactions</a></li>
                                <li><a href='https://www.youtube.com/watch?v=qNzvrDrPtcg' target="_blank">Reaction Tutorial</a></li>
                            </ul>
                        </div>
                        <div id='inner-div'>
                            <h3>Wormhole Life</h3>
                                <ul id='whatWeOffer'>
                                    <li><a href='https://docs.google.com/document/d/18Izmfii3oWAoBwu87xjiq-ayNKa5fyReX5wHp-T8KDw/edit' target="_blank">Bookmarking Guide</a></li>
                                    <li><a href='https://www.ellatha.com/eve/wormholelist.asp' target="_blank">WH List</a></li>
                                    <li><a href='https://wiki.eveuniversity.org/Implants' target="_blank">Implants</a></li>
                                </ul>                        
                        </div>
                        <div id='inner-div'>
                            <h3>PVE Survival Guides</h3>
                            <ul id='whatWeOffer'>
                                <li><a href='https://eve-survival.org/wikka.php?wakka=HomePage' target="_blank">EVE Survival</a></li>
                                <li><a href='https://eve-survival.org/wikka.php?wakka=WormholeSpaceClass3' target="_blank">C3</a></li>
                                <li><a href='https://eve-survival.org/wikka.php?wakka=WormholeSpaceClass4' target="_blank">C4</a></li>
                                <li><a href='https://eve-survival.org/wikka.php?wakka=WormholeSpaceClass5' target="_blank">C5</a></li>
                            </ul>
                        </div>
                    </div>
            </div>          
        </>
    )
}