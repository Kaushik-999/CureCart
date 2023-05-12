import "./App.css";
import NavBar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./components/admin_panel/screenComponents/AdminDashboard/AdminDashboard";
import MedicalSales from "./components/admin_panel/screenComponents/MedicineSales/MedicalSales";
import MedicineStock from "./components/admin_panel/screenComponents/MedicineStock/MedicineStock";
import BloodDonation from "./components/admin_panel/screenComponents/BloodDonation/BloodDonation";
import ActiveDonorRequest from "./components/admin_panel/screenComponents/ActiveDonorRequest/ActiveDonorRequest";
import SignUp from "./components/authentication/sign-up/SignUp";
import SignIn from "./components/authentication/sign-in/SignIn";
import Homepage from "./components/home_page/userpanel/Homepage";

import VendorAccount from "./components/pharamacy-vendor/pharmacyVendorComponents/vendorAccount/vendorAccountMain/VendorAccount";
import VendorRegistration from "./components/pharamacy-vendor/pharmacyVendorComponents/vendorRegistration/VendorRegistration";
import VendorAddMedicine from "./components/pharamacy-vendor/pharmacyVendorComponents/vendorAddMedicine/VendorAddMedicine";
import VendorInvoices from "./components/pharamacy-vendor/pharmacyVendorComponents/vendorInvoices/VendorInvoices";
import VendorFeeback from "./components/pharamacy-vendor/pharmacyVendorComponents/vendorFeedback/VendorFeeback";
import BloodBank from "./components/blood-bank/bloodBankComponents/bloodBankMain/BloodBank";


function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        {/* HomePage */}
        <Route exact path="/" element={<Homepage />} />

        {/* Admin Dashboard */}
        <Route exact path="/admin" element={<AdminDashboard />} />
        <Route exact path="/admin/medical-sales" element={<MedicalSales />} />
        <Route exact path="/admin/medicine-stock" element={<MedicineStock />} />
        <Route exact path="/admin/blood-donation" element={<BloodDonation />} />
        <Route
          exact
          path="/admin/active-donor-request"
          element={<ActiveDonorRequest />}
        />

        {/* Pharmacy Vendor */}
        <Route exact path="/pharmacy-vendor" element={<VendorRegistration />} />
        <Route
          exact
          path="/pharmacy-vendor/vedor-account"
          element={<VendorAccount />}
        />
        <Route
          exact
          path="/pharmacy-vendor/add-medicine"
          element={<VendorAddMedicine />}
        />
        <Route
          exact
          path="/pharmacy-vendor/vednor-invoices"
          element={<VendorInvoices />}
        />
        <Route exact path="/pharmacy-vendor/feeback" element={<VendorFeeback/>}/>

        {/* Authentication */}
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/sign-up" element={<SignUp />} />

        {/* Blood Bank */}
        <Route exact path="/blood-bank" element={<BloodBank/>}/>

      </Routes>
    </div>
  );
}

export default App;
