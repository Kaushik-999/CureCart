import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './BloodDonationContactUs.css';

const BloodDonationContactUs = () => {
  return (
    <div className="blood-donation-contact-us-main">
      <section className="blood-donation-contact">
        <div className="contact-us-content">
          <h2>Contact Us</h2>
          <p>If you have any questions, suggestions, or would like to get involved in our blood donation efforts, we would love to hear from you. Our team is dedicated to promoting and facilitating blood donation to save lives. Whether you want to inquire about organizing a blood drive, join as a volunteer, or learn more about our initiatives, please don't hesitate to reach out. We are here to provide you with the information and support you need. Together, we can make a difference in the lives of those in need. Please fill out the contact form below or use the provided email address and phone number to get in touch with us. Thank you for your interest in contributing to this lifesaving cause!</p>
        </div>
        <div className="contact-us-container">
          <div className="contactInfo">
            <div className="contact-us-box">
              <div className="contact-us-icon"><FaMapMarkerAlt className="contact-us-icon-style" /></div>
              <div className="contact-us-text">
                <h3>Address</h3>
                <p>Civil Hospital,<br/>Hospital Road,<br/>Silchar, 788005</p>
              </div>
            </div>
            <div className="contact-us-box">
              <div className="contact-us-icon"><FaPhoneAlt className="contact-us-icon-style" /></div>
              <div className="contact-us-text">
                <h3>Phone</h3>
                <p>+91-9435071059</p>
              </div>
            </div>
            <div className="contact-us-box">
              <div className="contact-us-icon"><FaEnvelope className="contact-us-icon-style" /></div>
              <div className="contact-us-text">
                <h3>Email</h3>
                <p>surajitshome@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="blood-donation-contact-form">
            <form>
              <h2>Send Messages</h2>
              <div className="contact-us-inputBox">
                <input type="text" name="fullName" required />
                <span>Full Name</span>
</div>
<div className="contact-us-inputBox">
<input type="text" name="email" required />
<span>Email</span>
</div>
<div className="contact-us-inputBox">
<input type="text" name="message" required />
<span>Type your Message...</span>
</div>
<div className="contact-us-inputBox">
<input type="submit" value="Send" />
</div>
</form>
</div>
</div>
</section>
</div>
);
}

export default BloodDonationContactUs;
