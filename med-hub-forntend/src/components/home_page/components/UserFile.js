import React from "react";
import { useState } from "react";

const UserFile = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <>
      <div className="ml-16 mr-16 mt-2 mb-10">
        <div className="text-neutral-400 text-sm">Home/Cart</div>
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
              <p>This is the address view.</p>
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
              <p>This is the ordered items view.</p>
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
              <p>This is the logout view.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserFile;
