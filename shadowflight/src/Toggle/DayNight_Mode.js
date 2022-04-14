import React from 'react';
import './NightNDay.css'



const DayNight_Mode = ({ toggled, onClick }) => {
    return (
        <>
            <div onClick={onClick} className={`toggle${toggled ? ' night' : ""}`}>
                <div className="notch">
                </div>
            </div>
        </>
    )
}
export default DayNight_Mode;