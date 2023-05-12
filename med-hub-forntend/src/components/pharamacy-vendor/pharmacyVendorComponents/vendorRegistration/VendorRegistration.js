import React from "react";
import SideBar from "../../pharamacyVendorSideBar/SideBar";
import "./VendorRegistration.css";
function VendorRegistration() {
  return (
    <> 
      <SideBar /> 
      <div className="vendor-registration-main">
        <div className="vendor-registration-form-container">
          <form>
            <h2>Pharmacy Vendor Registration</h2>
            <div className="vendor-registration-form-content">
              <div className="vendor-registration-input-box">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="" id="fistName" />
              </div>

              <div className="vendor-registration-input-box">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="" id="lastName" />
              </div>

              <div className="vendor-registration-input-box">
                <label htmlFor="workEmail">Work Email</label>
                <input type="text" name="" id="workEmail" />
              </div>

              <div className="vendor-registration-input-box">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" name="" id="phoneNumber" />
              </div>

              <div className="vendor-registration-input-box">
                <label htmlFor="organizationName">Organization Name</label>
                <input type="text" name="" id="organizationName" />
              </div>

              <div className="vendor-registration-input-box">
                <label htmlFor="gstin">GSTIN</label>
                <input type="text" name="" id="gstin" />
              </div>

              <div className="vendor-registration-input-box">
                <label htmlFor="address1">House Number / Street / Locality</label>
                <input type="text" name="" id="address1" />
              </div>

              <div className="vendor-registration-input-box">
                <label htmlFor="district">District</label>
                <input type="text" name="" id="district" />
              </div>

              <div className="vendor-registration-input-box">
                <label htmlFor="state">State</label>
                <input type="text" name="" id="state" />
              </div>

              <div className="vendor-registration-input-box">
                <label htmlFor="zipCode">Zip Code</label>
                <input type="text" name="" id="zipCode" />
              </div>
            </div>
            <div className="vendor-registration-button-container">
              <button>Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default VendorRegistration;
