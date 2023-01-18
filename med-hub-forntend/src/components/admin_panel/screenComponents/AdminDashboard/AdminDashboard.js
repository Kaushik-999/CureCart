import React from "react";
import SideBar from "../../SideBar";
import "./AdminDashboard.css"
import AddAdminCard from "./adminDashboardComponents/AddAdminCard";
import AdminTable from "./adminDashboardComponents/AdminTable";
import AnnunalSalesChart from "./adminDashboardComponents/AnnunalSalesChart";
import DeleteAdminCard from "./adminDashboardComponents/DeleteAdminCard";
import HeaderCards from "./adminDashboardComponents/HeaderCards";
import RevenueChart from "./adminDashboardComponents/RevenueChart";
import UpdateAdminCard from "./adminDashboardComponents/UpdateAdminCard";

function AdminDashboard() { 
  return (
    <div className="main_screen">

      {/* sidebar */}
      <SideBar/>
      {/* sidebar ends */}

      {/* header */}
      <div className="fw-bold fs-3 mb-4 mt-5 title">Admin Dashboard</div>
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

export default AdminDashboard;
