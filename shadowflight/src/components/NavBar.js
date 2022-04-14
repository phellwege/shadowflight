import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Toggle from '../Toggle/DayNight_Mode';
import "../NavBar.css";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import Stratios from '../static/stratios.gif';
import Discord from '../static/discord.png';

const NavBar = () => {
        const [toggled, setToggled] = useState(false);
        const [theme, setTheme] = useState({mode: 'light'})
        const handleClick =() => {
            setToggled((s)=>!s);
            setTheme(theme.mode === 'dark' ? {mode: 'light'}: {mode:'dark'})
        }
            const [navbarOpen, setNavbarOpen] = useState(false)
        const handleToggle = () => {
            setNavbarOpen(prev => !prev)
        }
        const closeMenu = () => {
            setNavbarOpen(false)
        }

// the first set is dark mode the second is light mode
// dark contrast color b1b1b3
// light contrast color #111
    const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => 
            props.theme.mode === 'dark' ? '#2a2a2e' : 'none'};
        color: ${props => 
            props.theme.mode === 'dark' ? '#b1b1b3' : '#111' };
        transition: ${props => 
            props.theme.mode === 'dark' ? 'all 0.3s ease-in-out': 'all 0.5s ease-in-out'};
    }
    h1 {
        text-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 0 2px whitesmoke' : 'none'};
        color: ${props => 
            props.theme.mode === 'dark' ? 'whitesmoke' : 'lightgrey' };
    }
    h2 {
        text-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 0 2px whitesmoke' : 'none'};
        color: ${props => 
            props.theme.mode === 'dark' ? 'whitesmoke' : '#111' };
    }
    h3 {
        color: ${props => 
            props.theme.mode === 'dark' ? '#E5E8E8' : '#111' };
    }
    nav {
        box-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 0 15px #56f981' : '0 0 8px rgba(55,55,55,1)'};
        background-color: ${props =>
            props.theme.mode === 'dark' ? '#2a292d' : '#EAF2F8'};
        transition: ${props => 
            props.theme.mode === 'dark' ? 'all 0.3s ease-in-out': 'all 0.5s ease-in-out'};
    };
    nav li a:hover:not(.active) {
        background-color: ${props =>
            props.theme.mode === 'dark' ? '#1ABC9C' : '#5499C7'};
        color: ${props =>
            props.theme.mode === 'dark' ? '#AD1457' : 'white'};
        border: ${props =>
            props.theme.mode === 'dark' ? '1px solid darkgreen' : '1px solid black'};
    };
    #footer_links a {
        color: ${props =>
            props.theme.mode === 'dark' ? '#56f981' : '#222222'};
        text-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 0 1px #56f981' : 'none'};
    }
    #nav li a.active {
        box-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 0 5px #56f981' : 'none'};
    }
    #nav li a {
        color: ${props =>
            props.theme.mode === 'dark' ? 'white' : 'none'};
    }
    .page_wrap a {
        color: ${props =>
            props.theme.mode === 'dark' ? '#1ABC9C' : '#222222'};
        text-shadow: ${props =>
            props.theme.mode === 'dark' ? '0 0 1px #56f981' : 'none'};
    }
    #headspace background-image {
        box-shadow: ${props =>
        props.theme.mode === 'dark' ? 'whitesmoke' : 'none'};
    }
    .menuNav {
        background: ${props =>
            props.theme.mode === 'dark' ? '#34495E ' : '#1F618D'};
    }
    #discordLogoDay {
        display: ${props =>
            props.theme.mode === 'dark' ? 'none' : ''};
    }
    #discordLogoNight {
        display: ${props =>
            props.theme.mode === 'dark' ? '' : 'none'};
    }
    #in_game {
        color: ${props =>
            props.theme.mode === 'dark' ? '#1ABC9C' : 'royalblue'};
    }
    };
`

    return (
        <>
        <ThemeProvider theme={theme}>
        <GlobalStyle />
            <div id="Hamburger_Menu">
                <nav className="navBar">
                    <button onClick={handleToggle}>{navbarOpen ? (
                    <MdClose style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
                    ) : (
                    <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
                    )}
                    </button>
                        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                            <li><a class="active" href="#headspace" onClick={() => closeMenu()}>Home</a></li>
                            <div className="Mode" id='menu_toggle' onClick={() => closeMenu()}>
                                <Toggle toggled={toggled} onClick={handleClick} />
                                {theme.mode === 'dark' ? "Dark Mode" : "Light Mode"}
                            </div>
                            <li><a href="https://seat.seachest.net/home" target="_blank" onClick={() => closeMenu()}>Seat Login</a></li>
                            <li><a href="https://path.shadowflight.org/map/MQ%3D%3D" target="_blank" onClick={() => closeMenu()}>Pathfinder</a></li>
                            <li><a href="#About" onClick={() => closeMenu()}>About</a></li>
                            <li><a href="#Contact" onClick={() => closeMenu()}>Contact Us</a></li>
                            <a href='https://discord.gg/xUnv7yZV'><img src={Discord} id='discordLogo'/><br/>Discord</a>
                            <img src={Stratios} id='Stratios'/>
                        </ul>
                </nav>
            </div>
            </ThemeProvider>
        </>
    )
}
export default NavBar;