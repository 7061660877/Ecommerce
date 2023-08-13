import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import your CSS file for footer styling

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="/Producthut.png" alt="Producthut Logo" />
                </div>
                <div className="footer-links">
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

