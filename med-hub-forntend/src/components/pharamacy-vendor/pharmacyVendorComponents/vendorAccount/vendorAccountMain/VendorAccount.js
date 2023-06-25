import React, { useState, useEffect } from "react";
import SideBar from "../../../pharamacyVendorSideBar/SideBar";
import VendorAccountCards from "../vedorAccountCards/VendorAccountCards";
import "./VendorAccount.css";
import VendorAccountCharts from "../vendorAccountCharts/vendorAccountChartsMain/VendorAccountCharts";
import VendorAccountOrdersTable from "../vendorAccountOrdersTable/vendorAccountOrdersTableMain/VendorAccountOrdersTable";
import axios from "axios";

function VendorAccount() {
  const [vendorData, setVendorData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllVednorData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        const header = {
          token: token,
        };

        const response = await axios.get(
          "http://127.0.0.1:8000/pharmacy-vendor/get-dashboard-data/",
          {
            headers: header,
          }
        );
        // console.log(response.data.header_data);
        setVendorData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getAllVednorData();
  }, []);

  return (
    <>
      <SideBar />

      {loading ? (
        <div className="vendor-account-loading-message">Loading...</div>
      ) : (
        <div className="vendor-accout-main">
          <h3>Vendor Account</h3>
          {vendorData && (
            <>
              <VendorAccountCards header_data={vendorData.header_data} />
              <VendorAccountCharts
                last_five_months_sales={vendorData.last_five_months_sales}
                categories={vendorData.categories}
              />
              <VendorAccountOrdersTable invoices={vendorData.invoices} />
            </>
          )}
        </div>
      )}
    </>
  );
}

export default VendorAccount;
