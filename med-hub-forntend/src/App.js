import "./App.css";
import NavBar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import AdminDashboard from "./components/admin_panel/screenComponents/AdminDashboard/AdminDashboard";
import MedicalSales from "./components/admin_panel/screenComponents/MedicineSales/MedicalSales";
import MedicineStock from "./components/admin_panel/screenComponents/MedicineStock/MedicineStock";
import BloodDonation from "./components/admin_panel/screenComponents/BloodDonation/BloodDonation";
import ActiveDonorRequest from "./components/admin_panel/screenComponents/ActiveDonorRequest/ActiveDonorRequest";
import { useState } from "react";
import SignUp from "./components/authentication/sign-up/SignUp";
import SignIn from "./components/authentication/sign-in/SignIn";
import SideBar from "./components/admin_panel/SideBar";

function App() {

  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <div className="App">
      <NavBar />
      
      {isAdmin && <SideBar/>}
      
      <Routes>
        <Route exact path="/admin" element={<AdminDashboard />} />
        <Route exact path="/admin/medical-sales" element={<MedicalSales />} />
        <Route exact path="/admin/medicine-stock" element={<MedicineStock />} />
        <Route exact path="/admin/blood-donation" element={<BloodDonation />} />
        <Route
          exact
          path="/admin/active-donor-request"
          element={<ActiveDonorRequest />}
        />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/sign-up" element={<SignUp/>}/>
      </Routes>
      {/* Client */}
    </div>
  );
}

export default App;
