import React from 'react'
import './Offers.css'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

const Offers = () => {
    return (
        <div className="container3">
            <Navbar />
            <div className="offer-container">
                <p className="offer">
                    EXCITING <span>OFFER</span> IS COMING <br />FOR <span>SUMMER 2021</span>
                </p>
                <p className="offer-details">
                    30% flat discount on 1 or more year membership and 10% discount <br />on six month member ship for this summer
                    </p>
            </div>
            <Footer />
        </div>
    )
}

export default Offers