import React from "react";
import "./css/Screen.css";
import AddAdminCard from "./screenCoponents/AddAdminCard";
import AdminTable from "./screenCoponents/AdminTable";
import AnnunalSalesChart from "./screenCoponents/AnnunalSalesChart";
import DeleteAdminCard from "./screenCoponents/DeleteAdminCard";
import HeaderCards from "./screenCoponents/HeaderCards";
import RevenueChart from "./screenCoponents/RevenueChart";
import UpdateAdminCard from "./screenCoponents/UpdateAdminCard";

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
          <div className="col-lg-7 col-md-12">
            <AnnunalSalesChart />
          </div>
          <div className="col-lg-5 col-md-12">
            <RevenueChart />
          </div>
        </div>
      </div>
      {/* Chart Ends */}

      {/* Admins Details */}
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-lg-3 col-md-12">
            <div className="row">
              <div className="col-lg-12 col-md-4">
                <AddAdminCard />
              </div>
              <div className="col-lg-12 col-md-4">
                <DeleteAdminCard />
              </div>
              <div className="col-lg-12 col-md-4">
                <UpdateAdminCard />
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-12">
            <AdminTable />
          </div>
        </div>
      </div>

      {/* Admin Details Ends */}
    </div>
  );
}

export default Screen;
