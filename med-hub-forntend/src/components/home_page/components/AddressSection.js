import React, { useState } from 'react';

const AddressSection = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: 'John Doe',
      address: '123 Main Street',
      city: 'City',
      state: 'State',
      postalCode: '12345',
      country: 'Country',
    },
    // Add more addresses if needed
  ]);

  const [editingAddress, setEditingAddress] = useState(null);

  const handleEditAddress = (address) => {
    setEditingAddress(address);
  };

  const handleSaveAddress = (id, updatedAddress) => {
    setAddresses((prevAddresses) =>
      prevAddresses.map((address) =>
        address.id === id ? updatedAddress : address
      )
    );
    setEditingAddress(null);
  };

  const handleDeleteAddress = (id) => {
    setAddresses((prevAddresses) =>
      prevAddresses.filter((address) => address.id !== id)
    );
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Addresses</h2>
      {addresses.map((address) => (
        <div
          key={address.id}
          className="p-4 mb-4 border rounded-lg shadow-sm"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">{address.name}</h3>
            <div>
              <button
                className="text-blue-500 hover:text-blue-700 mr-2"
                onClick={() => handleEditAddress(address)}
              >
                Edit
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDeleteAddress(address.id)}
              >
                Delete
              </button>
            </div>
          </div>
          {editingAddress && editingAddress.id === address.id ? (
            <AddressForm
              address={address}
              onSave={(updatedAddress) =>
                handleSaveAddress(address.id, updatedAddress)
              }
              onCancel={() => setEditingAddress(null)}
            />
          ) : (
            <AddressDetails address={address} />
          )}
        </div>
      ))}
    </div>
  );
};

const AddressDetails = ({ address }) => {
  return (
    <div>
      <p>{address.address}</p>
      <p>
        {address.city}, {address.state}, {address.postalCode}
      </p>
      <p>{address.country}</p>
    </div>
  );
};

const AddressForm = ({ address, onSave, onCancel }) => {
  const [formData, setFormData] = useState({ ...address });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
    [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name"
        className="mb-2"
      />
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
        className="mb-2"
      />
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="City"
        className="mb-2"
      />
      <input
        type="text"
        name="state"
        value={formData.state}
        onChange={handleChange}
        placeholder="State"
        className="mb-2"
      />
      <input
        type="text"
        name="postalCode"
        value={formData.postalCode}
        onChange={handleChange}
        placeholder="Postal Code"
        className="mb-2"
      />
      <input
        type="text"
        name="country"
        value={formData.country}
        onChange={handleChange}
        placeholder="Country"
        className="mb-4"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Save
      </button>
      <button
        type="button"
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded ml-2"
        onClick={onCancel}
      >
        Cancel
      </button>
    </form>
  );
};

export default AddressSection;