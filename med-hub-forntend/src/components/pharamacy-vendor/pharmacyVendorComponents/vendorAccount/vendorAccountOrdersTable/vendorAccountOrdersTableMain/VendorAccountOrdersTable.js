import React from "react";
import VendorAccountTable from "../vendorAccountTable/VendorAccountTable";
import "./VendorAccountOrdersTable.css";
function VendorAccountOrdersTable() {
  return (
    <div className="vendor-account-orders-table-main">
      <div className="vendor-account-orders-table-container">
        <div className="orders-table-card">
          <div className="orders-table-head">Recent Orders</div>
          <div className="orders-table-body">
            <VendorAccountTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorAccountOrdersTable;
