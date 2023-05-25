import React from 'react';
import { FaEnvelope, FaArrowRight, FaFacebookF, FaTwitter, FaWhatsapp, FaPinterestP } from 'react-icons/fa';
import './Footer1.css';
// import "../FooterImages/footer_logo.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-column">
         <h4>BLOOD DONATION</h4>
          <p>We are the world's largest and most trusted blood donation centre. We have been working since 1973 with a prestigious vision of helping patients provide blood. We are working all over the world, organising blood donation campaigns to raise awareness among people about donating blood.</p>
        </div>
        <div className="footer-column">
          <h3>Office<div className="footer-underline"><span></span></div></h3>
          <p>Civil Hospital</p>
          <p>Hospital Road, Silchar</p>
          <p>Assam, PIN 78005, India</p>
          <a href="mailto:surajitshome@gmail.com" className="footer-email-id">surajitshome@gmail.com</a>
          <p>+91-9435071059</p>
        </div>
        <div className="footer-column">
          <h3>Links<div className="footer-underline"><span></span></div></h3>
          {/* <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/contacts">Contacts</a></li>
          </ul> */}
        </div>
        <div className="footer-column">
          <h3>Newsletter<div className="footer-underline"><span></span></div></h3>
          <form>
            <FaEnvelope className="footer-icon" />
            <input type="email" placeholder="Enter your email id" required />
            <button type="submit">
              <FaArrowRight className="footer-icon" />
            </button>
          </form>
          <div className="footer-social-icons">
            <FaFacebookF className="footer-social-icon" />
            <FaTwitter className="footer-social-icon" />
            <FaWhatsapp className="footer-social-icon" />
            <FaPinterestP className="footer-social-icon" />
          </div>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright © 2017, All Rights Reserved - by xenioushk
      </p>
    </footer>
  );
};

export default Footer;
