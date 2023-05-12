import React from "react";
import SideBar from "../../../pharamacyVendorSideBar/SideBar";
import VendorAccountCards from "../vedorAccountCards/VendorAccountCards";
import "./VendorAccount.css";
import VendorAccountCharts from "../vendorAccountCharts/vendorAccountChartsMain/VendorAccountCharts"
import VendorAccountOrdersTable from "../vendorAccountOrdersTable/vendorAccountOrdersTableMain/VendorAccountOrdersTable";

function VendorAccount() {
  return (
    <> 
      <SideBar />
      <div className="vendor-accout-main">
        <h3>Vendor Account</h3>
        <VendorAccountCards />
        <VendorAccountCharts/>
        <VendorAccountOrdersTable/>
      </div>
    </>
  );
}

export default VendorAccount;
