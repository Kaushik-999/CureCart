import React, { useState } from "react";
import "./RegisterForm.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  function formatDate(dateString) {
    const originalDate = new Date(dateString);

    const year = originalDate.getFullYear();
    const month = String(originalDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so adding 1
    const day = String(originalDate.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // Handle form submission logic here
    setProcessing(true);
    if (processing) return; //prevent multiple submission
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/blood-bank/become-donor/",
        {
          name: name,
          email: email,
          bloodGroup: "O-",
          dateOfBirth: formatDate(dob),
          phone: phone,
          organization: "abcd",
          address: address,
          operatingCity: city,
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
      toast.success("Data Sent", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send data", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    }

    setProcessing(false);
  };

  return (
    <div className="register-form-container mt-2">
      <h2>Register as a Donor</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="register-form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="register-form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="example@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="register-form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            placeholder="9999xxxxxx"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="register-form-group">
          <label htmlFor="dob">Date of Birth</label>
          <DatePicker
            id="dob"
            selected={dob}
            onChange={(date) => setDob(date)}
            placeholderText="dd-mm-yyyy"
            dateFormat="yyyy-MM-dd"
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={100}
            required
          />
        </div>
        <div className="register-form-group">
          <label htmlFor="bloodGroup">Blood Group:</label>
          <select
            id="bloodGroup"
            name="bloodGroup"
            required
            value={bloodGroup}
            onChange={(event) => setBloodGroup(event.target.value)}
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
        <div className="register-form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="join-us-form-group">
          <label htmlFor="city">City in which you wish to donate</label>
          <select
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="Silchar">Silchar</option>
            <option value="Guwahati">Guwahati</option>
            <option value="Sibsagar">Sibsagar</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Tinsukia">Tinsukia</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button type="submit" className="custom-submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
