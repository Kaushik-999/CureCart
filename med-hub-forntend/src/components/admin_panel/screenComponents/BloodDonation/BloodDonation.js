import React from "react";
import HeaderCard from "./bloodDonationComponent/HeaderCard";
import "./BloodDonation.css";
import AvailableBloodTypeChart from "./bloodDonationComponent/AvailableBloodTypeChart";
import AddBloodCard from "./bloodDonationComponent/AddBloodCard";
import UpdateBloodCard from "./bloodDonationComponent/UpdateBloodCard";
import DeleteBloodCard from "./bloodDonationComponent/DeleteBloodCard";
import GetBloodReportCard from "./bloodDonationComponent/GetBloodReportCard";
import MemebersTable from "./bloodDonationComponent/MemebersTable";

function BloodDonation() {
  return (
    <div className="main">
      {/* header */}
      <div className="fw-bold fs-3 mb-4 title">Blood Donation</div>
      {/* header ends */}

      {/* header card  */}
      <div className="container-fluid ms-1">
        <div className="row">
          <HeaderCard cardHead="Donations (Today)" cardText="5" />
          <HeaderCard cardHead="Donations (This Month)" cardText="36" />
          <HeaderCard cardHead="Donations (Last Month)" cardText="₹500000" />
          <HeaderCard cardHead="Notifications" cardText="5" />
        </div>
      </div>
      {/* header card ends */}

      {/* members table */}
      <div className="container-fluid mt-3">
        <MemebersTable />
      </div>
      {/* members table end */}
      
      {/* available blood types chart */}
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-lg-9 col-md-12">
            <AvailableBloodTypeChart />
          </div>
          <div className="col-lg-3">
            <div className="row">
              <AddBloodCard />
              <UpdateBloodCard />
              <DeleteBloodCard />
              <GetBloodReportCard />
            </div>
          </div>
        </div>
      </div>
      {/* available blood types chart ends */}
    </div>
  );
}

export default BloodDonation;
