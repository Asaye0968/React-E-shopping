import React from 'react';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Us Section */}
        <div className="footer-section about-us">
          <h4>About Us</h4>
          <p>
            We are a leading eCommerce platform, offering a wide range of products for all your needs. 
            Our mission is to provide quality products at affordable prices.
          </p>
        </div>
        
        {/* Services Section */}
        <div className="footer-section services">
          <h4>Services</h4>
          <ul>
            <li>Order Tracking</li>
            <li>Wishlist</li>
            <li>Customer Support</li>
            <li>Gift Cards</li>
          </ul>
        </div>
        
        {/* Quick Links Section */}
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
          <li>
          <Link to="/" className='links'>Home</Link>
        </li>
        <li>
          <Link to="/All_products" className='links'>Shop</Link>
        </li>
        <li>
          <Link to="/about" className='links'>About</Link>
        </li>
        <li>
          <Link to="/" className='links'>Contact us</Link>
        </li>
          </ul>
        </div>
        
        {/* Social Media Section */}
        <div className="footer-section social-media">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2024 Ase shopping. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
