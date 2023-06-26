import React, { useState } from "react";
import SideBar from "../../pharamacyVendorSideBar/SideBar";
import "./VendorAddMedicine.css";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function VendorAddMedicine() {
  const [medicineData, setMedicineData] = useState({
    medicine_name: "",
    price_per_strip: "",
    composition_name: "",
    tablet_per_strip: "",
    number_of_strips: "",
    manufacturer_name: "",
    manufacturing_date: "",
    expiry_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicineData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (processing) return; // Prevent multiple form submissions
    setProcessing(true);

    // console.log(medicineData);

    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/pharmacy-vendor/add-medicine/",
        medicineData,
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
        toast.success("Medicine Added!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
        setMedicineData({
          medicine_name: "",
          price_per_strip: "",
          composition_name: "",
          tablet_per_strip: "",
          number_of_strips: "",
          manufacturer_name: "",
          manufacturing_date: "",
          expiry_date: "",
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
      <div className="vendor-add-medicine-main">
        <div className="vendor-add-medicine-form-container">
          <h2>Enter the details Below</h2>
          <form onSubmit={handleSubmit}>
            <div className="vendor-add-medicine-form-content">
              <div className="vendor-add-medicine-input-box">
                <label htmlFor="medicineName">Medicine Name</label>
                <input
                  type="text"
                  name="medicine_name"
                  id="medicineName"
                  value={medicineData.medicine_name}
                  onChange={handleChange}
                />
              </div>
              <div className="vendor-add-medicine-input-box">
                <label htmlFor="pricePerStrip">Price Per Strip(in ₹)</label>
                <input
                  type="number"
                  name="price_per_strip"
                  id="pricePerStrip"
                  value={medicineData.price_per_strip}
                  onChange={handleChange}
                />
              </div>
              <div className="vendor-add-medicine-input-box">
                <label htmlFor="composition">Composition</label>
                <input
                  type="text"
                  name="composition_name"
                  id="composition"
                  value={medicineData.composition_name}
                  onChange={handleChange}
                />
              </div>
              <div className="vendor-add-medicine-input-box">
                <label htmlFor="tabletPerStrips">Tablet Per Strips</label>
                <input
                  type="number"
                  name="tablet_per_strip"
                  id="tabletPerStrips"
                  value={medicineData.tablet_per_strip}
                  onChange={handleChange}
                />
              </div>
              <div className="vendor-add-medicine-input-box">
                <label htmlFor="numberOfStrips">Number of Strips</label>
                <input
                  type="number"
                  name="number_of_strips"
                  id="numberOfStrips"
                  value={medicineData.number_of_strips}
                  onChange={handleChange}
                />
              </div>
              <div className="vendor-add-medicine-input-box">
                <label htmlFor="manufacturer">Manufacturer</label>
                <input
                  type="text"
                  name="manufacturer_name"
                  id="manufacturer"
                  value={medicineData.manufacturer_name}
                  onChange={handleChange}
                />
              </div>
              <div className="vendor-add-medicine-input-box">
                <label htmlFor="manufacturingDate">Manufacturing Date</label>
                <input
                  type="date"
                  name="manufacturing_date"
                  id="manufacturingDate"
                  value={medicineData.manufacturing_date}
                  onChange={handleChange}
                />
              </div>
              <div className="vendor-add-medicine-input-box">
                <label htmlFor="expiringDate">Expiring Date</label>
                <input
                  type="date"
                  name="expiry_date"
                  id="expiringDate"
                  value={medicineData.expiry_date}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="vendor-add-medicine-button-container">
              <button>{processing ? "Processing..." : "Add Medicine"}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default VendorAddMedicine;
