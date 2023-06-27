import React, { useState } from "react";

import "./AppointmentForm.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function AppointmentForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here

    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/blood-bank/request-appointment/",
        {
          name,
          email,
          phone,
          bloodType: bloodGroup,
          date,
          time,
          message,
        },
        {
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        }
      );

      console.log(response.data);
      // Display success toast notification
      toast.success("Data Added successfully!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    } catch (error) {
      console.error(error);
      toast.error("Error Occured!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    }
  };

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
              <input
                type="text"
                id="name"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="request-appointment-form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="request-appointment-form-row">
            <div className="request-appointment-form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="request-appointment-form-group">
              <label htmlFor="blood-group">Blood Group:</label>
              <select
                id="blood-group"
                name="blood-group"
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                required
              >
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
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="request-appointment-form-group">
              <label htmlFor="time">Time:</label>
              <input
                type="time"
                id="time"
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="request-appointment-form-row">
            <div className="request-appointment-form-group  full-width">
              <label htmlFor="message">Your message:</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
          </div>
          <div className="request-appointment-button-container">
            <button type="submit" onClick={handleSubmit}>Get Appointment</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AppointmentForm;
