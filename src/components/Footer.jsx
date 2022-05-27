import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-center">
            <ul class="footer-icons">
            <li>
                <a href="#" class="footer-icon">
                    <FaFacebook />
                </a>
            </li>
            <li>
                <a href="#" class="footer-icon">
                    <FaTwitter />
                </a>
            </li>
            <li>
                <a href="#" class="footer-icon">
                    <FaInstagram />
                </a>
            </li>
            <li>
                <a href="#" class="footer-icon">
                    <FaLinkedin />
                </a>
            </li>
            <li>
                <a href="#" class="footer-icon">
                    <FaYoutube />
                </a>
            </li>
        </ul>
        <p>&copy; beach resort. all rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer