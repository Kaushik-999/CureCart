import React from "react";
import "./css/ScreenCSS.css";
import AnnunalSalesChart from "./screenCoponents/AnnunalSalesChart";
import HeaderCards from "./screenCoponents/HeaderCards";
import RevenueChart from "./screenCoponents/RevenueChart";

function Screen() {
  return (
    <div className="main_screen">
      {/* header */}
      <div className="fw-bold fs-3 mb-4 mt-5">Admin Dashboard</div>
      {/* header ends */}

      {/* header cards */}
      <div className="container-fluid">
        <div className="row">
          <HeaderCards cardHead="Earnings (Monthly)" cardText="₹ 40,000" />
          <HeaderCards cardHead="Earnings (Annual)" cardText="₹ 4,00,000" />
          <HeaderCards cardHead="Pharmachy Request" cardText="5" />
          <HeaderCards cardHead="Notifications" cardText="9" />
        </div>
      </div>
      {/* header cards ends */}

      {/* Charts */}
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <AnnunalSalesChart />
          </div>
          <div className="col-lg-4 col-md-12">
            <RevenueChart />
          </div>
        </div>
      </div>

      {/* Chart Ends */}
    </div>
  );
}

export default Screen;
