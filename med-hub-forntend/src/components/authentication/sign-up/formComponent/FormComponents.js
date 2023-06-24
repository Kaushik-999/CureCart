import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FormComponents.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormComponents() {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [processing, setProcessing] = useState(false); // State for tracking request processing

  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (processing) return; // Prevent multiple form submissions
    setProcessing(true); // Set processing state to true

    const { username, email, password, confirmPassword } = signupData;

    if (password !== confirmPassword) {
      console.log("Password and Confirm Password do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/user/auth/signup/",
        {
          username,
          email,
          password,
        }
      );
      console.log(response.data);

      // Save token to local storage
      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/")

      // Display success toast notification
      toast.success("Account Created successful!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    } catch (error) {
      console.error("error occured");
      console.error(error);
      
      // Display error toast notification
      toast.error("Account Creation Failed!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000, // Duration in milliseconds
      });
    }
    setProcessing(false); // Reset processing state to false after request completion
  };

  return (
    <div className="signup-form-component">
      <div className="signup-form-component-header">
        <h1>SIGN UP FORM</h1>
      </div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          {/* <p className="signup-form-header-text">Fill Up Credentials</p> */}
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={signupData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={signupData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={signupData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={signupData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">
          {processing ? "Processing..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}

export default FormComponents;
