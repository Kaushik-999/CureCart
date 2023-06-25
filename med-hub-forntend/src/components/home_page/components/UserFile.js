import React from "react";
import { useState } from "react";
import AddressSection from "./AddressSection";
import OrderedItemsPage from "./OrderedItemsPage";
import { FiLogOut } from 'react-icons/fi';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const UserFile = () => {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleLogout = (e) =>{
    e.preventDefault();

    // remove jwt token
    localStorage.removeItem("token")
    navigate("/sign-in")

    // Display success toast notification
    toast.success('Logout successful!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000, // Duration in milliseconds
    });
  }
  return (
    <>
      <div className="ml-16 mr-16 mt-2 mb-10">
        <div className="text-neutral-400 text-sm">Home/User</div>
        <div className="space-y-4">
          <button
            className="w-full text-left bg-gray-200 p-4 rounded-md"
            onClick={() => toggleSection("address")}
          >
            Address
          </button>
          {activeSection === "address" && (
            <div className="bg-white p-4 rounded-md">
              {/* Address View */}
              <AddressSection/>
            </div>
          )}

          <button
            className="w-full text-left bg-gray-200 p-4 rounded-md"
            onClick={() => toggleSection("orderedItems")}
          >
            Ordered Items
          </button>
          {activeSection === "orderedItems" && (
            <div className="bg-white p-4 rounded-md">
              {/* Ordered Items View */}
              
              <OrderedItemsPage/>
            </div>
          )}

          <button
            className="w-full text-left bg-gray-200 p-4 rounded-md"
            onClick={() => toggleSection("logout")}
          >
            Logout
          </button>
          {activeSection === "logout" && (
            <div className="bg-white p-4 rounded-md">
              {/* Logout View */}
              <button className="px-3 py-2 flex bg-blue-700 rounded-md text-white" onClick={handleLogout}><span className="mr-2 mt-1"><FiLogOut/></span>
              LOGOUT</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserFile;
