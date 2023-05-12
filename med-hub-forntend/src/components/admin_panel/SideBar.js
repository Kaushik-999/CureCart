import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
function SideBar() {
  return (
    <div>
      <div
        className="offcanvas offcanvas-start sidebar-nav text-white"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        {/* Admin Panel Title  */}
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Admin Panel
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <nav className="navbar">
            <ul className="navbar-nav">
              <li className="small fw-bold text-uppercase tags">CORE</li>
              <li>
                <Link to="/admin" className="nav-link active text-white">
                  <span>
                    <i className="bi bi-speedometer2"></i>
                  </span>
                  <span className="ms-2">Admin Dashboard</span>
                </Link>
              </li>
              <li className="my-2">
                <hr className="dropdown-divider" />
              </li>

              {/* Medicine */}
              <li className="small fw-bold text-uppercase tags my-2">
                Medicine Store
              </li>
              <li>
                <Link
                  to="/admin/medical-sales"
                  className="nav-link active text-white"
                >
                  <span>
                    <i className="bi bi-currency-rupee"></i>
                  </span>
                  <span className="ms-2">Medicine Sales</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/medicine-stock"
                  className="nav-link active text-white"
                >
                  <span>
                    <i className="bi bi-capsule-pill"></i>
                  </span>
                  <span className="ms-2">Medicine Stock</span>
                </Link>
              </li>
              <li className="my-2">
                <hr className="dropdown-divider" />
              </li>

              {/* Blood Bank */}
              <li className="small fw-bold text-uppercase tags my-2">
                Blood Bank
              </li>
              <li>
                <Link
                  to="/admin/blood-donation"
                  className="nav-link active text-white"
                >
                  <i className="bi bi-droplet"></i>
                  <span className="ms-2">Blood Donation</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/active-donor-request"
                  className="nav-link active text-white"
                >
                  <i className="bi bi-moisture"></i>
                  <span className="ms-2">Active Donor / Request</span>
                </Link>
              </li>
              <li className="my-2">
                <hr className="dropdown-divider" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
