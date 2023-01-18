import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-danger">
          <div className="container-fluid">
            {/*Name */}

            <a
              className="navbar-brand fw-bolder text-uppercase me-auto"
              href="/"
            >
              Blood Bank
            </a>

          
            <div className="ms-5">
              <form className="d-flex ms-auto" role="search">

              

             


                <input
                  className="form-control me-1 search-bar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />

                <button type="submit" className="btn btn-outline-light m-1">
                  <i className="bi bi-search"></i>
                </button>
              </form>
              
  </div>  


  {/*
<input type="text" class="search-hover" name="" placeholder="search here..." />

<i className="bi bi-search"></i>

*/}
            
            
            {/*Features*/}

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/">
                    FAQ
                  </a>
                </li>

                {/*Dropdowns*/}

                {/*(1)*/}

                <li className="nav-item dropdown">
                  <a
                    className="btn dropdown-toggle contact-us"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Contact us
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        <i className="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        <i className="bi bi-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        <i className="bi bi-twitter"></i>
                      </a>
                    </li>

                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        <i className="bi bi-telephone-fill"></i>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        <i className="bi bi-envelope-at-fill"></i>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        <i className="bi bi-telegram"></i>
                      </a>
                    </li>
                  </ul>
                </li>

                {/*Dropdowns*/}

                {/*(2)*/}

                <li className="nav-item dropdown">
                  <a
                    className="btn dropdown-toggle support-us"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Support us
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/">
                        <i className="bi bi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        <i className="bi bi-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        <i className="bi bi-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        <i className="bi bi-currency-rupee">-DONATE</i>
                        {/* <i className="bi bi-google-play"></i>*/}
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              {/*SearchBar*/}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
