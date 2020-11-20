import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../image/Illustration/athena.png'
import './Navbar.css'


const Navbar = () => {
    return (
        
        <div className="row ">
            <nav className="navbar navbar-expand-lg navbar-light w-100">
                <Link to="/"><img style={{ width: '100px' }} src={logo} alt="" /></Link>
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item font-weight-bold p-2 mr-5">
                            <Link to="/" className="font-weight-bold text-dark">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item font-weight-bold p-2 mr-5">
                            <Link to="about" className="font-weight-normal text-secondary">
                                About
                            </Link>
                        </li>
                        <li className="nav-item font-weight-bold p-2 mr-5">
                            <Link to="services" className="font-weight-normal text-secondary">
                                Services
                            </Link>
                        </li>
                        <li className="nav-item font-weight-bold p-2 mr-5">
                            <Link to="pricing" className="font-weight-normal text-secondary">
                                Pricing
                            </Link>
                        </li>
                        <li className="nav-item font-weight-bold p-2 mr-5">
                            <Link to="ourteam" className="font-weight-normal text-secondary">
                                Our Team
                            </Link>
                        </li>
                        <li className="nav-item text-white font-weight-bold p-2 contact-btn">
                            <Link to="contact" className="font-weight-normal">
                                <span className="text-white">Contact us</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    );
};

export default Navbar;