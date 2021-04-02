import React from 'react'
import './Contact.css'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

const Contact = () => {
    return (
        <div className="container4">
            <Navbar />
            <div className="contact-container">
                <h1 className="contact-title">CONTACT US</h1>
                <form className="form" action="/home">
                    <input className="text" type="text" placeholder="Full Name"></input>
                    <input className="text" type="text" placeholder="Email Address"></input>
                    <textarea className="text" type="text" placeholder="Write here..."></textarea>
                    <button type="submit" className="submit">SEND</button>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact