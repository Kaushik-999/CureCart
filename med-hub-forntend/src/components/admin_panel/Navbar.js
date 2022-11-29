import React from "react";
import "./css/NavBar.css"
function Navbar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          {/* sidebar button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* BrandName */}

          <a
            className="navbar-brand fw-bolder text-uppercase me-auto"
            href="/"
          >
            Med-Hub
          </a>

          {/* SearchBar */}

          <form className="d-flex me-auto " role="search">
            <input
              className="form-control me-1 search-bar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>

          {/* Authentication Dropdown */}
          <div className="nav-item dropdown">
            <a
              href="/"
              className="btn dropdown-toggle authentication-button"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-person"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="/">
                  Sign In
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/.">
                  Sign Up
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
