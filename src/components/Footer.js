import React from 'react'
import { Link } from "react-router-dom";
import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <div className="page-footer pt-4">
        <hr />
        <div className="container-fluid">
            <div className="footer_links_container">
                <div>
                    <h5 className="text-uppercase">Watch</h5>
                    <ul className="list-unstyled">
                        <li className="footer_li"><Link to="/home">Spotlight</Link></li>
                        <li className="footer_li"><Link to="/movies">Movie</Link></li>
                        <li className="footer_li"><Link to="/tv">TV</Link></li>
                    </ul>
                </div>
                <div >
                    <h5 className="text-uppercase">My Account</h5>
                    <ul className="list-unstyled">
                        <li className="footer_li"><Link to="/login">My Video</Link></li>
                        <li className="footer_li"><Link to="/login">Account</Link></li>
                        <li className="footer_li"><Link to="/login">Settings</Link></li>
                    </ul>
                </div>
                <div >
                    <h5 className="text-uppercase">Help</h5>
                    <ul className="list-unstyled">
                        <li className="footer_li"><Link to="/about">About Us</Link></li>
                        <li className="footer_li"><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer-copyright text-center">
            <p>© 2020 Copyright: CJV Assignment 1 - Digital Video Store </p>
        </div>

    </div>
  )
}

export default Footer
