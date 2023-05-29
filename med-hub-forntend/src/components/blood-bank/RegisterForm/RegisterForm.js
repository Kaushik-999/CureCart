import React, { useState } from 'react';
import './RegisterForm.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="register-form-container mt-2" >
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
            dateFormat="dd-MM-yyyy"
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={100}
            required
          />
        </div>
        <div className="register-form-group">
        <label htmlFor="bloodGroup">Blood Group:</label>
              <select id="bloodGroup" name="bloodGroup" required>
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
        <div className="join-us-form-group">
          <label htmlFor="city">City in which you wish to volunteer</label>
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
        <button type="submit" className="custom-submit-button">Submit</button>

      </form>
    </div>
  );
};

export default RegisterForm;
