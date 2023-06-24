import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FormComponents.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormComponents() {
  const navigate = useNavigate();
  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
  });

  const [processing, setProcessing] = useState(false); // State for tracking request processing

  const handleChange = (e) => {
    setSigninData({ ...signinData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here

    if (processing) return; // Prevent multiple form submissions
    setProcessing(true); // Set processing state to true

    const { email, password } = signinData;

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/user/auth/signin/",
        {
          email,
          password,
        }
      );
      console.log(response.data);
      // Save token to local storage
      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/");
      // Display success toast notification
      toast.success("Login successful!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000, // Duration in milliseconds
      });
    } catch (error) {
      console.error("error occured");
      console.error(error);
      // Display error toast notification
      toast.error("Login failed!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    }

    setProcessing(false); // Reset processing state to false after request completion
  };

  return (
    <div className="signin-form-component">
      <div className="signin-form-component-header">
        <h1>SIGN IN FORM</h1>
      </div>
      <form className="signin-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={signinData.email}
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
            value={signinData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">{processing ? "Processing..." : "Log In"}</button>
      </form>
    </div>
  );
}

export default FormComponents;
