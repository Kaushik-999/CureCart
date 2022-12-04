import React from "react";
import SideBar from "./SideBar";
import { Routes, Route } from "react-router-dom";

import AdminDashboard from "./screenComponents/AdminDashboard/AdminDashboard";
import MedicalSales from "./screenComponents/MedicineSales/MedicalSales";
import MedicineStock from "./screenComponents/MedicineStock/MedicineStock";
import BloodDonation from "./screenComponents/BloodDonation/BloodDonation";
import ActiveDonorRequest from "./screenComponents/ActiveDonorRequest/ActiveDonorRequest";

function Admin() {
  return (
    <div>
      <SideBar />
      <Routes>
        <Route exact path="/" element={<AdminDashboard />} />
        <Route exact path="/medical-sales" element={<MedicalSales />} />
        <Route exact path="/medicine-stock" element={<MedicineStock />} />
        <Route exact path="/blood-donation" element={<BloodDonation />} />
        <Route
          exact
          path="/active-donor-request"
          element={<ActiveDonorRequest />}
        />
      </Routes>
    </div>
  );
}

export default Admin;
