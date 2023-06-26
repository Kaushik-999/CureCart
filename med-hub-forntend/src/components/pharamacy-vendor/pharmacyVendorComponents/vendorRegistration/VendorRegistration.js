import React, { useState } from "react";
import SideBar from "../../pharamacyVendorSideBar/SideBar";
import "./VendorRegistration.css";
// import jwt_decode from "jwt-decode";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function VendorRegistration() {
  const [vendorRegistrationData, setVendorRegistrationData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    phoneNumber: "",
    organizationName: "",
    gstin: "",
    address: "",
    district: "",
    state: "",
    zipcode: "",
  });

  const [processing, setProcessing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendorRegistrationData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (processing) return; // Prevent multiple form submissions
    setProcessing(true);

    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/pharmacy-vendor/register/",
        vendorRegistrationData,
        {
          headers: {
            "Content-Type": "application/json",
            token: token,
          },
        }
      );
      console.log(response.data);
      if (response.data.success) {
        // Display success toast notification
        toast.success("Vendor Registered", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
        setVendorRegistrationData({
          firstName: "",
          lastName: "",
          workEmail: "",
          phoneNumber: "",
          organizationName: "",
          gstin: "",
          address: "",
          district: "",
          state: "",
          zipcode: "",
        });
      } else {
        toast.error(response.data.error, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000, // Duration in milliseconds
        });
      }
    } catch (error) {
      console.error(error);
    }

    setProcessing(false);
  };

  return (
    <>
      <SideBar />
      <div className="vendor-registration-main">
        <div className="vendor-registration-form-container">
          <form onSubmit={handleSubmit}>
            <h2>Pharmacy Vendor Registration</h2>
            <div className="vendor-registration-form-content">
              <div className="vendor-registration-input-box">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={vendorRegistrationData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="vendor-registration-input-box">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={vendorRegistrationData.lastName}
                  onChange={handleChange}
                />
              </div>

              <div className="vendor-registration-input-box">
                <label htmlFor="workEmail">Work Email</label>
                <input
                  type="text"
                  name="workEmail"
                  id="workEmail"
                  value={vendorRegistrationData.workEmail}
                  onChange={handleChange}
                />
              </div>

              <div className="vendor-registration-input-box">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={vendorRegistrationData.phoneNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="vendor-registration-input-box">
                <label htmlFor="organizationName">Organization Name</label>
                <input
                  type="text"
                  name="organizationName"
                  id="organizationName"
                  value={vendorRegistrationData.organizationName}
                  onChange={handleChange}
                />
              </div>

              <div className="vendor-registration-input-box">
                <label htmlFor="gstin">GSTIN</label>
                <input
                  type="text"
                  name="gstin"
                  id="gstin"
                  value={vendorRegistrationData.gstin}
                  onChange={handleChange}
                />
              </div>

              <div className="vendor-registration-input-box">
                <label htmlFor="address">
                  House Number / Street / Locality
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={vendorRegistrationData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="vendor-registration-input-box">
                <label htmlFor="district">District</label>
                <input
                  type="text"
                  name="district"
                  id="district"
                  value={vendorRegistrationData.district}
                  onChange={handleChange}
                />
              </div>

              <div className="vendor-registration-input-box">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  value={vendorRegistrationData.state}
                  onChange={handleChange}
                />
              </div>

              <div className="vendor-registration-input-box">
                <label htmlFor="zipcode">Zip Code</label>
                <input
                  type="text"
                  name="zipcode"
                  id="zipcode"
                  value={vendorRegistrationData.zipcode}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="vendor-registration-button-container">
              <button>{processing ? "Processing..." : "Register"}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default VendorRegistration;
