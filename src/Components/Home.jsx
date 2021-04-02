import React from 'react'
import './Home.css';
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

const Home = () => {

    return (
        <div className="container1">
            <Navbar />
            <div className="home-container">
                <h2 className="first">STEP UP YOUR</h2>
                <h1 className="second"><span>FITNESS</span> WITH US</h1>
                <h3 className="third">Build Your Body And Fitness With Professionals</h3>
            </div>
            <Footer />
        </div>
    )
}

export default Home