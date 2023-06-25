import React from "react";
import "./VendorAccountCards.css";
function VendorAccountCards(props) {
  // const {customerCount, medicineCount, totalSales, profit} = props.header_data[2]
  const customerCount = props.header_data[0].customerCount;
  const medicineCount = props.header_data[1].medicineCount;
  const totalSales = props.header_data[2].totalSales;
  const profit = props.header_data[3].profit;

  return (
    <div className="vendor-account-cards-main">
      <div className="vendor-account-cards">
        <div className="vendor-account-card-single">
          <div>
            <h3>{customerCount}</h3>
            <span>Customers</span>
          </div>
          <div>
            <i className="fa-solid fa-wallet"></i>
          </div>
        </div>
        <div className="vendor-account-card-single">
          <div>
            <h3>{medicineCount}</h3>
            <span>Total Medicines</span>
          </div>
          <div>
            <i className="fa-solid fa-wallet"></i>
          </div>
        </div>
        <div className="vendor-account-card-single">
          <div>
            <h3>₹ {profit}</h3>
            <span>Profit</span>
          </div>
          <div>
            <i className="fa-solid fa-wallet"></i>
          </div>
        </div>
        <div className="vendor-account-card-single">
          <div>
            <h3>₹ {totalSales}</h3>
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
