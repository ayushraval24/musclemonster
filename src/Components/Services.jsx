import React from 'react';
import Navbar from './Navbar.jsx'
import './Services.css'
import weightLifting from '../Images/img12.jpg'
import yoga from '../Images/img7.jpg'
import locker from '../Images/img8.jpg'
import pt from '../Images/img9.jpg'
import cardio from '../Images/img13.jpg'
import power from '../Images/img6.png'
import './Navbar.css'
import Footer from './Footer.jsx'

const Services = () => {
    return (
        <div className="container2">
            <Navbar />
            <div className="services-container">
                <h1 className="title">Services</h1>
                <ul className="services">
                    <li className="service">
                        <img className="service-img" src={weightLifting} alt="tis" />
                        <p className="name">WeightLift</p>
                        <p className="details">Weight Lifting is very good exercise</p>
                    </li>
                    <li className="service">
                        <img className="service-img" src={pt} alt="tis" />
                        <p className="name">Personal Trainer</p>
                        <p className="details">Personal Trainers are available who will help for personal training and every planning</p>
                    </li>
                    <li className="service">
                        <img className="service-img" src={cardio} alt="tis" />
                        <p className="name">Cardio</p>
                        <p className="details">All the cardio equipments are available</p>
                    </li>
                    <li className="service">
                        <img className="service-img" src={yoga} alt="tis" />
                        <p className="name">Yoga</p>
                        <p className="details">Yoga trainers and equipments are available</p>
                    </li>
                    <li className="service">
                        <img className="service-img" src={locker} alt="tis" />
                        <p className="name">Lockers</p>
                        <p className="details">Locker facility is there for your valuables.</p>
                    </li>
                    <li className="service">
                        <img className="service-img" src={power} alt="tis" />
                        <p className="name">Power Lifting</p>
                        <p className="details">You can learn powerlifting and can shape your body</p>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Services