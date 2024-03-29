import React from "react";

function Footer() {
  return (
    <div className="mt-10 z-50">
      <footer className="bg-teal-700 container text-white pt-3">
        <div className="flex flex-row justify-evenly text-xs ">
          <div className="flex flex-col">
            <h5 className="font-bold">CureCart</h5>
            <ul className="list-unstyled ">
              <li className="pt-2">
                <a className=" hover:text-amber-300" href="/">
                  About Us
                </a>
              </li>
              <li>
                <a className=" hover:text-amber-300" href="/">
                  Contact Us
                </a>
              </li>
              <li>
                <a className=" hover:text-amber-300" href="/">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h5 className="font-bold">Services</h5>
            <ul className="list-unstyled">
              <li className="pt-2">
                <a className=" hover:text-amber-300" href="/">
                  Home Delivery
                </a>
              </li>
              <li>
                <a className=" hover:text-amber-300" href="/">
                  Prescription Refills
                </a>
              </li>
              <li>
                <a className=" hover:text-amber-300" href="/">
                  Online Consultations
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h5 className="font-bold">Social</h5>
            <ul className="list-unstyled">
              <li className="pt-2">
                <a className=" hover:text-amber-300" href="/">
                  <i className="bi bi-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a className=" hover:text-amber-300" href="/">
                  <i className="bi bi-facebook"></i> Facebook
                </a>
              </li>

              <li>
                <a className=" hover:text-amber-300" href="/">
                  <i className="bi bi-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h5 className="font-bold">Legal</h5>
            <ul className="list-unstyled">
              <li className="pt-2">
                <a className=" hover:text-amber-300" href="/">
                  Terms of Use
                </a>
              </li>
              <li>
                <a className=" hover:text-amber-300" href="/">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright text-center text-xs py-3">
          <p>Copyright © 2023 CureCart. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
