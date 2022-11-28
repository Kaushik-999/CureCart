import React from "react";
import "./css/SideBarCSS.css";

function SideBar() {
  return (
    <div>
      <div
        className="offcanvas offcanvas-start sidebar-nav text-white"
        tabindex="-1"
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
                <a href="..." className="nav-link active text-white">
                  <span>
                    <i className="bi bi-speedometer2"></i>
                  </span>
                  <span className="ms-2">Admin Dashboard</span>
                </a>
              </li>
              <li className="my-2">
                <hr className="dropdown-divider" />
              </li>

              {/* Medicine */}
              <li className="small fw-bold text-uppercase tags my-2">
                Medicine Store
              </li>
              <li>
                <a href="..." className="nav-link active text-white">
                  <span>
                    <i className="bi bi-currency-rupee"></i>
                  </span>
                  <span className="ms-2">Medicine Sales</span>
                </a>
              </li>
              <li>
                <a href="..." className="nav-link active text-white">
                  <span>
                    <i className="bi bi-capsule-pill"></i>
                  </span>
                  <span className="ms-2">Medicine Stock</span>
                </a>
              </li>
              <li className="my-2">
                <hr className="dropdown-divider" />
              </li>

              {/* Blood Bank */}
              <li className="small fw-bold text-uppercase tags my-2">
                Blood Bank
              </li>
              <li>
                <a href="..." className="nav-link active text-white">
                  <i className="bi bi-droplet"></i>
                  <span className="ms-2">Donations</span>
                </a>
              </li>
              <li>
                <a href="..." className="nav-link active text-white">
                <i className="bi bi-moisture"></i>
                  <span className="ms-2">Active Donor / Request</span>
                </a>
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
