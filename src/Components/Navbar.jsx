import './Navbar.css';
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
    }

    const closeMobileMenu = () => {
        setClick(false)
    }

    return (

        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    MUSCLE<br /> MONSTERS  <i className="fas fa-dumbbell"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "far fa-window-close" : "fas fa-bars"} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="" className="nav-links" onClick={closeMobileMenu} to="/">HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="" className="nav-links" onClick={closeMobileMenu} to="/services">SERVICES</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="" className="nav-links" onClick={closeMobileMenu} to="/offers">OFFERS</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="" className="nav-links" onClick={closeMobileMenu} to="/contact">CONTACT</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="" className="nav-links" onClick={closeMobileMenu} to="/about">ABOUT</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar