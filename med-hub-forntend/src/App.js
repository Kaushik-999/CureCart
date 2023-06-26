import NavBar from "./components/Navbar";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
// import AdminDashboard from "./components/admin_panel/screenComponents/AdminDashboard/AdminDashboard";
// import MedicalSales from "./components/admin_panel/screenComponents/MedicineSales/MedicalSales";
// import MedicineStock from "./components/admin_panel/screenComponents/MedicineStock/MedicineStock";
// import BloodDonation from "./components/admin_panel/screenComponents/BloodDonation/BloodDonation";
// import ActiveDonorRequest from "./components/admin_panel/screenComponents/ActiveDonorRequest/ActiveDonorRequest";
import SignUp from "./components/authentication/sign-up/SignUp";
import SignIn from "./components/authentication/sign-in/SignIn";
import Homepage from "./components/home_page/Homepage";
import Productpage from "./components/home_page/Productpage";
// import Footer from "./components/home_page/components/Footer";
import Cart from "./components/home_page/components/Cart";

import ScrollToTop from "./components/ScrollToTop";
import Checkout from "./components/home_page/components/Checkout";
import UserFile from "./components/home_page/components/UserFile";

import VendorAccount from "./components/pharamacy-vendor/pharmacyVendorComponents/vendorAccount/vendorAccountMain/VendorAccount";
import VendorRegistration from "./components/pharamacy-vendor/pharmacyVendorComponents/vendorRegistration/VendorRegistration";
import VendorAddMedicine from "./components/pharamacy-vendor/pharmacyVendorComponents/vendorAddMedicine/VendorAddMedicine";
import VendorInvoices from "./components/pharamacy-vendor/pharmacyVendorComponents/vendorInvoices/VendorInvoices";
import VendorFeeback from "./components/pharamacy-vendor/pharmacyVendorComponents/vendorFeedback/VendorFeeback";
import BlogPageMain from "./components/blog_page/BlogPageMain";
import BloodBank from "./components/blood-bank/bloodBankMain/BloodBank";
import OrderPlaced from "./components/home_page/components/OrderPlaced";
import Footer from "./Footer/Footer";
function App() {
  const location = useLocation();
  const hideNavbarFooterRoutes = ["/sign-in", "/sign-up"];

  const shouldHideNavbarFooter = hideNavbarFooterRoutes.includes(
    location.pathname
  );

  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <div className="App">
      <div className="min-h-screen flex flex-col">
      <ScrollToTop/>

      {!shouldHideNavbarFooter && <NavBar />}
      {/* <NavBar /> */}
      <Routes>
        {/* Authentication */}
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/sign-up" element={<SignUp />} />

        {/* Homepage */}
        <Route
          exact
          path="/"
          element={isAuthenticated ? <Homepage /> : <Navigate to="/sign-in" />}
        />

        {/* Admin Dashboard
        <Route exact path="/admin" element={<AdminDashboard />} />
        <Route exact path="/admin/medical-sales" element={<MedicalSales />} />
        <Route exact path="/admin/medicine-stock" element={<MedicineStock />} />
        <Route exact path="/admin/blood-donation" element={<BloodDonation />} />
        <Route
          exact
          path="/admin/active-donor-request"
          element={<ActiveDonorRequest />}
        /> */}

        {/* Pharmacy Vendor */}
        <Route
          exact
          path="/pharmacy-vendor"
          element={
            isAuthenticated ? (
              <VendorRegistration />
            ) : (
              <Navigate to="/sign-in" />
            )
          }
        />
        <Route
          exact
          path="/pharmacy-vendor/vedor-account"
          element={
            isAuthenticated ? <VendorAccount /> : <Navigate to="/sign-in" />
          }
        />
        <Route
          exact
          path="/pharmacy-vendor/add-medicine"
          element={
            isAuthenticated ? <VendorAddMedicine /> : <Navigate to="/sign-in" />
          }
        />
        <Route
          exact
          path="/pharmacy-vendor/vednor-invoices"
          element={
            isAuthenticated ? <VendorInvoices /> : <Navigate to="/sign-in" />
          }
        />
        <Route
          exact
          path="/pharmacy-vendor/feeback"
          element={
            isAuthenticated ? <VendorFeeback /> : <Navigate to="/sign-in" />
          }
        />

        {/* Blood Bank */}
        <Route
          exact
          path="/blood-bank"
          element={isAuthenticated ? <BloodBank /> : <Navigate to="/sign-in" />}
        />

        {/* product */}
        <Route
          exact
          path="/cart"
          element={isAuthenticated ? <Cart /> : <Navigate to="/sign-in" />}
        />
        <Route
          exact
          path="/productpage/:productId"
          element={
            isAuthenticated ? <Productpage /> : <Navigate to="/sign-in" />
          }
        />
        <Route
          exact
          path="/checkout"
          element={isAuthenticated ? <Checkout /> : <Navigate to="/sign-in" />}
        />
        <Route
          exact
          path="/user"
          element={isAuthenticated ? <UserFile /> : <Navigate to="/sign-in" />}
        />
        <Route
          exact
          path="/orderplaced"
          element={
            isAuthenticated ? <OrderPlaced /> : <Navigate to="/sign-in" />
          }
        />

        {/* Blog Page */}
       
        <Route
          exact
          path="/blogs"
          element={
            isAuthenticated ? <BlogPageMain /> : <Navigate to="/sign-in" />
          }
        />
      </Routes>
      </div>
      
      {/* Client */}
      
        <div className="pt-4">
        {!shouldHideNavbarFooter && <Footer />}
        </div>
        
     
    </div>
  );
}

export default App;
