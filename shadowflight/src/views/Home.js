import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Head';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import About from '../components/About';
import '../Main.css'
import '../App.css'

export default () => {

    return (
        <div id="background">
            <NavBar />
            <Header />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}

