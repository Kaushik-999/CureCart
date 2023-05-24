import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaGooglePlus, FaYoutube } from "react-icons/fa";
import "./Navbar1.css";

export default function Navbar1() {
  return (
    <nav className="navbar1">
      <div className="navbar1-container">
        <h1 className="navbar1-logo">Welcome to Blood Donation Centre!</h1>
        <div className="social-icons">
        <a href="https://www.facebook.com/"><FaFacebook className="social-icon" /></a>
          <a href="https://www.instagram.com/"><FaInstagram className="social-icon" /></a>
          <a href="https://twitter.com/"><FaTwitter className="social-icon" /></a>
          <a href="https://plus.google.com/"><FaGooglePlus className="social-icon" /></a>
          <a href="https://www.youtube.com/"><FaYoutube className="social-icon" /></a>
        </div>
      </div>
    </nav>
  );
}
