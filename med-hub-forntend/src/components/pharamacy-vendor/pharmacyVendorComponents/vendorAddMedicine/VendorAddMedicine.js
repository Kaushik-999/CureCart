import React from "react";
import SideBar from "../../pharamacyVendorSideBar/SideBar";
import "./VendorAddMedicine.css";
function VendorAddMedicine() {
  return (
    <>
      <SideBar />
      <div className="vendor-add-medicine-main">
        <div className="vendor-add-medicine-form-container">
          <h2>Enter the details Below</h2>
          <form>
            <div className="vendor-add-medicine-form-content">
              <div className="vendor-add-medicine-input-box">
                <label htmlFor="medicineName">Medicine Name</label>
                <input type="text" name="" id="medicineName" />
              </div>
              <div className="vendor-add-medicine-input-box">
                <label htmlFor="pricePerStrip">Price Per Strip(in ₹)</label>
                <input type="number" name="" id="pricePerStrip" />
              </div>
              <div className="vendor-add-medicine-input-box">
                <label htmlFor="composition">Composition</label>
                <input type="text" name="" id="composition" />
              </div>
              <div className="vendor-add-medicine-input-box"> 
                <label htmlFor="tabletPerStrips">Tablet Per Strips</label>
                <input type="number" name="" id="tabletPerStrips" />
              </div>
              <div className="vendor-add-medicine-input-box">
                <label htmlFor="numberOfStrips">Number Per Strips</label>
                <input type="number" name="" id="numberOfStrips" />
              </div>
              <div className="vendor-add-medicine-input-box">
                <label htmlFor="manufacturer">Manufacturer</label>
                <input type="text" name="" id="manufacturer" />
              </div>
              <div className="vendor-add-medicine-input-box">
                <label htmlFor="manufacturingDate">Manufacturing Date</label>
                <input type="date" name="" id="manufacturingDate" />
              </div>
              <div className="vendor-add-medicine-input-box">
                <label htmlFor="expiringDate">Expiring Date</label>
                <input type="date" name="" id="expiringDate" />
              </div>
            </div>
            <div className="vendor-add-medicine-button-container">
              <button>Add Medicine</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default VendorAddMedicine;
