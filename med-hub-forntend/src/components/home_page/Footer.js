import React from "react";
import "./Footer.css";

function Footer() {
  return (
<footer className="bg-dark text-white py-3">
  <div className="container-fluid text-center text-md-left">
  <div class="medhub-logo-description">
      <img src="medhub-logo.png" alt="MedHub logo" class="img-responsive" width="200px"/>
      <p class="text-white">MedHub is a reliable online medicine delivery service.</p>
    </div>
    <hr class="clearfix w-100 d-md-none pb-3"/>
    <div className="row mt-3">
      <div className="col-md-3">
        <h5>MedHub</h5>
        <ul className="list-unstyled">
          <li><a href="/">About Us</a></li>
          <li><a href="/">Contact Us</a></li>
          <li><a href="/">FAQ</a></li>
        </ul>
      </div>
      <div className="col-md-3">
        <h5>Services</h5>
        <ul className="list-unstyled">
          <li><a href="/">Home Delivery</a></li>
          <li><a href="/">Prescription Refills</a></li>
          <li><a href="/">Online Consultations</a></li>
        </ul>
      </div>
      <div className="col-md-3">
        <h5>Social</h5>
        <ul className="list-unstyled">
        <li><a href="/"><i class="bi bi-twitter"></i> Twitter</a></li>
          <li><a href="/"><i class="bi bi-facebook"></i> Facebook</a></li>
          
          <li><a href="/"><i class="bi bi-instagram"></i> Instagram</a></li>
        </ul>
      </div>
      <div className="col-md-3">
        <h5>Legal</h5>
        <ul className="list-unstyled">
          <li><a href="/">Terms of Use</a></li>
          <li><a href="/">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer-copyright text-center py-3">
    <p>Copyright © 2023 MedHub. All rights reserved.</p>
  </div>
</footer>
  );
}

export default Footer;
