import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
function SideBar() {
  return (
    <div className="pharmacy-sidebar">
      <div className="pharmacy-sidebar-header">
        <h5>Pharmacy Vendor</h5>
      </div>

      {/* Registration */}
      <Link to="/pharmacy-vendor" className="link">
        <div className="pharmacy-sidebar-items">
          <i className="fa-regular fa-address-card"></i>
          <span>Registration</span>
        </div>
      </Link>
      <hr />

      {/* Account */}
      <Link to="/pharmacy-vendor/vedor-account" className="link">
        <div className="pharmacy-sidebar-items">
          <i className="fa-regular fa-user"></i>
          <span>Account</span>
        </div>
      </Link>
      <hr />

      {/* Add Medicine */}
      <Link to="/pharmacy-vendor/add-medicine" className="link">
        <div className="pharmacy-sidebar-items">
          <i className="fa fa-plus"></i>
          <span>Add Medicine</span>
        </div>
      </Link>
      <hr />

      {/* Invoice */}
      <Link to="/pharmacy-vendor/vednor-invoices" className="link">
        <div className="pharmacy-sidebar-items">
          <i className="fa fa-thin fa-file-invoice"></i>
          <span>Invoices</span>
        </div>
      </Link>
      <hr />
 
      {/* Raise Complaint */}
      <Link to="/pharmacy-vendor/feeback" className="link">
        <div className="pharmacy-sidebar-items">
          <i class="fa-light fa-bug"></i>
          <span>Feeback</span>
        </div>
      </Link>
      <hr />
    </div>
  );
}

export default SideBar;
