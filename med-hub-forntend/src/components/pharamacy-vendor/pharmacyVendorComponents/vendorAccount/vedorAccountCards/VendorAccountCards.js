import React from "react";
import "./VendorAccountCards.css";
function VendorAccountCards() {
  return (
    <div className="vendor-account-cards-main">
      <div className="vendor-account-cards">
        <div className="vendor-account-card-single">
          <div>
            <h3>600</h3>
            <span>Customers</span>
          </div>
          <div>
            <i className="fa-solid fa-wallet"></i>
          </div>
        </div>
        <div className="vendor-account-card-single">
          <div>
            <h3>50</h3>
            <span>Total Medicines</span>
          </div>
          <div>
            <i className="fa-solid fa-wallet"></i>
          </div>
        </div>
        <div className="vendor-account-card-single">
          <div>
            <h3>₹ 40,400</h3>
            <span>Profit</span>
          </div>
          <div>
            <i className="fa-solid fa-wallet"></i>
          </div>
        </div>
        <div className="vendor-account-card-single">
          <div>
            <h3>₹ 4,04,000</h3>
            <span>Total Sales</span>
          </div>
          <div>
            <i className="fa-solid fa-wallet"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorAccountCards;
