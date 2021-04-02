import React from 'react'
import Navbar from './Navbar.jsx'
import './About.css'
import img from '../Images/img2.jpg'
import Footer from './Footer.jsx'

const About = () => {
    return (
        <div className="container5">
            <Navbar />
            <div className="about-container">
                <img src={img} alt="Image"></img>
                <div className="about">
                    <p className="about-title">LEARN MORE ABOUT US</p>
                    <p className="about-details">MUSCLE-MONSTER IS ESTABLISHED SINCE 2001. WE PROVIDE ALL TYPE OF SERVICES RELATED GYM LIKE CARDIO, WEIGHTLIFTING, YOGA, LOCKERS, PERSONAL-TRAINER ETC... WE ARE TRYING TO SHAPE OUR YOUTH AND MAKE THEM FIT AND HEALTHY</p>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default About