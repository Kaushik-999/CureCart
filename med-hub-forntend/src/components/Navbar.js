import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
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

          <Link
            className="navbar-brand fw-bolder text-uppercase me-auto"
            to="/admin"
          >
            Med-Hub
          </Link>

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
            <ul className="dropdown-menu  dropdown-menu-dark dropdown-menu-end">
              <li>
                <Link className="dropdown-item" to="/sign-in">
                  Sign In
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/sign-up">
                  Sign Up
                </Link>
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
