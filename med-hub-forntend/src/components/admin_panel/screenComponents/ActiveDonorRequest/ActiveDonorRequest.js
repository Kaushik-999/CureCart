import React from "react";
import ActiveDonorTable from "./activeDonorRequestComponent/ActiveDonorTable";
import ActiveRequestTable from "./activeDonorRequestComponent/ActiveRequestTable";
import HeaderCard from "./activeDonorRequestComponent/HeaderCards";

function ActiveDonorRequest() {
  return (
    <div className="main">
      {/* header */}
      <div className="fw-bold fs-3 mb-4 title">Active Donor / Requests</div>
      {/* header ends */}

      {/* header cards */}
      <div className="container-fluid">
        <div className="row">
          <HeaderCard cardHead="Active Donors" cardText="21" />
          <HeaderCard cardHead="Active Request" cardText="25" />
          <HeaderCard cardHead="Total Matches" cardText="15" />
          <HeaderCard cardHead="Notofications" cardText="3" />
        </div>
      </div>
      {/* header cards ends  */}

      {/* active donor table */}
      <div className="container-fluid mt-3">
        <ActiveDonorTable/>
      </div>
      {/* active donor table ends */}
      
      {/* active request table */}
      <div className="container-fluid mt-4">
        <ActiveRequestTable/>
      </div>
      {/* active request table ends */}
    </div>
  );
}

export default ActiveDonorRequest;
