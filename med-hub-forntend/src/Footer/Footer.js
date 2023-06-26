import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaPinterestP,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-column">
          <div className="logo-wrapper">
            {/* <img src="../FooterImages/footer_logo.jpg" alt="Logo" className="footer-logo" /> */}
            <h4>CURE CART</h4>
            <p>
              An Integrated Health Hub for Medicine Delivery and Blood Services
            </p>
          </div>
        </div>
        <div className="footer-column">
          <h3>
            Office - SmileFoundation
            <div className="footer-underline">
              <span></span>
            </div>
          </h3>
          <div className="address-box">
            <p>Civil Hospital</p>
            <p>Hospital Road, Silchar</p>
            <p>Assam, PIN 78005, India</p>
            <a href="mailto:surajitshome@gmail.com" className="footer-email-id">
              surajitshome@gmail.com
            </a>
            <p>+91-9435071059</p>
          </div>
        </div>
        <div className="footer-column">
          <h3>
            Links
            <div className="footer-underline">
              <span></span>
            </div>
          </h3>
          <ul class="your-ul-class">
            <li>
              <a href="/" class="your-a-class">
                Home
              </a>
            </li>
            <li>
              <a href="/services" class="your-a-class">
                Services
              </a>
            </li>
            <li>
              <a href="/about" class="your-a-class">
                About Us
              </a>
            </li>
            <li>
              <a href="/features" class="your-a-class">
                Features
              </a>
            </li>
            <li>
              <a href="/contacts" class="your-a-class">
                Contacts
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>
            Newsletter
            <div className="footer-underline">
              <span></span>
            </div>
          </h3>
          <form className="footer-form">
            <FaEnvelope className="footer-icon" />
            <input type="email" placeholder="Enter your email id" required />
            <button type="submit" className="footer-submit-button">
              Submit
            </button>
          </form>
          <div className="footer-social-icons-box">
            <FaFacebookF className="footer-social-icon" />
            <FaTwitter className="footer-social-icon" />
            <FaWhatsapp className="footer-social-icon" />
            <FaPinterestP className="footer-social-icon" />
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <p className="footer-copyright">
        Copyright © 2023, All Rights Reserved - by CureCart
      </p>
    </footer>
  );
};

export default Footer;
