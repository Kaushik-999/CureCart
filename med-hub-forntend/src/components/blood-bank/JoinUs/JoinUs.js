import React, { useState } from "react";
import "./JoinUs.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JoinUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here

    if (processing) return; //prevent multiple submission
    const token = localStorage.getItem("token");

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(organization);
    console.log(city);
    console.log(address);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/pharmacy-vendor/add-medicine/",
        {
          name: name,
          email: email,
          phone: phone,
          organization: organization,
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
    <div className="join-us-form-container">
      <h2>Join With Us</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="join-us-form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="join-us-form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="example@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="join-us-form-group">
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
          <label htmlFor="organization">Organization</label>
          <input
            type="text"
            id="organization"
            placeholder="Workplace/Institute you are part of"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
          />
        </div>
        <div className="join-us-form-group">
          <label htmlFor="city">
            City in which you wish to become a member
          </label>
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

export default JoinUs;
