import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';  // Importing 4 icons

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                {/* Left Side - Social Icons */}
                <div className="social-icons">
                    <a><FaFacebook size={30} /></a>
                    <a><FaTwitter size={30} /></a>
                    <a><FaInstagram size={30} /></a>
                    <a><FaLinkedin size={30} /></a>
                </div>
                
                {/* Center Heading */}
                <div className="footer-center-heading">
                    <h2><i>@2024 HILALPLAY COPYRIGHT RESERVED</i></h2>
                </div>

                {/* Right Side - Footer Columns */}
                <div className="footer-columns">
                    <div className="column">
                        <ul>
                            <li><b><i>About Us</i></b></li>
                            <li><b><i>Help Centre</i></b></li>
                            <li><b><i>Social Responsibility</i></b></li>
                        </ul>
                    </div>
                    <div className="column">
                        <ul>
                            <li><b><i>Contact Us:</i></b></li>
                            <li><b><i>hilalplay</i></b></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
