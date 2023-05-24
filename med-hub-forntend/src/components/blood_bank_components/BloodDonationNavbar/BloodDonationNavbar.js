import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaGooglePlus, FaYoutube } from "react-icons/fa";
import "./BloodDonationNavbar.css";

export default function BloodDonationNavbar() {
  return (
    <nav className="blood-donation-navbar">
      <div className="blood-donation-navbar-container">
        <h1 className="navbar-logo">SMILE</h1>
        <ul className="blood-donation-navbar-menu">
          <li className="blood-donation-navbar-item">
            <a href="/" className="blood-donation-navbar-link">
              Home
            </a>
          </li>
          <li className="blood-donation-navbar-item">
            <a href="/" className="blood-donation-navbar-link">
              About Us
            </a>
          </li>
          <li className="blood-donation-navbar-item">
            <a href="/" className="blood-donation-navbar-link">
              CAMPAIGN
            </a>
          </li>
          <li className="blood-donation-navbar-item">
            <a href="/" className="blood-donation-navbar-link">
              PAGES
            </a>
          </li>
          <li className="blood-donation-navbar-item">
            <a href="/" className="blood-donation-navbar-link">
              BLOG
            </a>
          </li>
          <li className="blood-donation-navbar-item">
            <a href="/" className="blood-donation-navbar-link">
              CONTACT
            </a>
          </li>
        </ul>
        <div className="bd-navbar-social-icons">
          <FaFacebook className="bd-navbar-social-icon" />
          <FaInstagram className="bd-navbar-social-icon" />
          <FaTwitter className="bd-navbar-social-icon" />
          <FaGooglePlus className="bd-navbar-social-icon" />
          <FaYoutube className="bd-navbar-social-icon" />
        </div>
      </div>
    </nav>
  );
}
