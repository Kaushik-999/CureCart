import React from "react";

import "./AppointmentForm.css";

function AppointmentForm(props) {
  return (
    <div className="request-appointment-form-main" ref={props.formfunc}>
      <div className="request-appointment-form-header">
        <h3>Request Appointment</h3>
      </div>
      <form className="request-appointment-form">
        <div className="request-appointment-form-content">
          <div className="request-appointment-form-row">
            <div className="request-appointment-form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="request-appointment-form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          <div className="request-appointment-form-row">
            <div className="request-appointment-form-group">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="request-appointment-form-group">
              <label htmlFor="blood-group">Blood Group:</label>
              <select id="blood-group" name="blood-group" required>
                <option value="">Select</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>
          <div className="request-appointment-form-row">
            <div className="request-appointment-form-group">
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" name="date" required />
            </div>
            <div className="request-appointment-form-group">
              <label htmlFor="time">Time:</label>
              <input type="time" id="time" name="time" required />
            </div>
          </div>
          <div className="request-appointment-form-row">
            <div className="request-appointment-form-group  full-width">
              <label htmlFor="message">Your message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
          </div>
          <div className="request-appointment-button-container">
            <button type="submit">Get Appointment</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AppointmentForm;
