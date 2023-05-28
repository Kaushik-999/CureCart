import React from "react";
import { useState } from "react";
import AddressSection from "./AddressSection";
import OrderedItemsPage from "./OrderedItemsPage";
import { FiLogOut } from 'react-icons/fi';
const UserFile = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

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
              <button className="px-3 py-2 flex bg-blue-700 rounded-md text-white"><span className="mr-2 mt-1"><FiLogOut/></span>
              LOGOUT</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserFile;
