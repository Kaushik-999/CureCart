import React from "react";
import VedorAccountMonthlySalesChart from "../vedorAccountMonthlySalesChart/VedorAccountMonthlySalesChart";
import VendorAccountRevenueChart from "../vendorAccountRevenueChart/VendorAccountRevenueChart";
import "./VendorAccountCharts.css";

function VendorAccountCharts() { 
  return (
    <div className="vendor-account-charts-main">
      <div className="vendor-account-chart-container">
        {/* five month card */}
        <div className="chart-card">
          <div className="chart-card-head">Last Five Months Sales</div>
          <div className="chart-card-body">
            <VedorAccountMonthlySalesChart />
          </div>
        </div>
        {/* five month card ends*/}

        {/* revenue breadk-down card */}
        <div className="chart-card">
          <div className="chart-card-head">Revenue Breakdown</div>
          <div className="chart-card-body">
            <VendorAccountRevenueChart/>
          </div>
        </div>
        {/* revenue card ends*/}
      </div>
    </div>
  );
}

export default VendorAccountCharts;
