import React, { useState } from 'react';
import './BecomeVolunteer.css';

const BecomeVolunteer = () => {
  const [age, setAge] = useState('');

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (age >= 18) {
      // Volunteer application logic here (submit the form, show success message, etc.)
      console.log('Volunteer application submitted successfully');
    } else {
      alert('You must be 18 years or older to become a volunteer.');
    }
  };

  return (
    <div className="become-volunteer-page">
      <h1>Become a Volunteer</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={handleAgeChange}
            required
          />
        </div>
        <div>
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
        {/* Add more form inputs as needed */}
        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default BecomeVolunteer;
