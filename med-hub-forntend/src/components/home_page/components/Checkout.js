import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

function Checkout() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phoneNumber: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form data, e.g. submit to server
    console.log(formData);
  };

  const list = useSelector((state) => state.cartReducer.list);
  console.log(list);

  return (
    <div className="ml-16 mr-16 mt-2 mb-10">
      <div className="text-neutral-400 text-sm">Home/Cart</div>
      <hr className="mt-2" />
      <div className="mt-10 text-xl ">
        <h2>Billing Details</h2>
      </div>
      <hr className="mt-2" />

      <form onSubmit={handleSubmit}>
        <div className="flex mt-10">
          <div>
            <div className="text-gray-500 ">
              <label htmlFor="firstName">
                First Name <span className="text-red-600">*</span>
              </label>
            </div>
            <div className="mt-2">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-gray-200 w-80 h-8"
                required
              />
            </div>
          </div>

          {/* Last Name */}
          <div className="ml-5">
            <div className="text-gray-500 ">
              <label htmlFor="lastName">
                Last Name <span className="text-red-600">*</span>
              </label>
            </div>
            <div className="mt-2">
              <input
                type="text"
                id="lasttName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-gray-200 w-80 h-8"
                required
              />
            </div>
          </div>
        </div>
        <div className=" mt-3">
          <div className="text-gray-500">
            <label htmlFor="email">
              Email<span className="text-red-600">*</span>
            </label>
          </div>
          <div className="mt-2 pr-20">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-200 w-1/2 h-8"
              required
            />
          </div>
        </div>
        <div className="mt-3">
          <div className="text-gray-500">
            <label htmlFor="address">
              Street Address<span className="text-red-600">*</span>
            </label>
          </div>
          <div className="mt-2 pr-20">
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="bg-gray-200 w-1/2 h-8"
              required
            />
          </div>
        </div>
        <div className="mt-3">
          <div className="text-gray-500">
            <label htmlFor="city">
              City<span className="text-red-600">*</span>
            </label>
          </div>
          <div className="mt-2 pr-20">
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="bg-gray-200 w-1/2 h-8"
              required
            />
          </div>
        </div>
        <div className="mt-3">
          <div className="text-gray-500">
            <label htmlFor="state">
              State<span className="text-red-600">*</span>
            </label>
          </div>
          <div className="mt-2 pr-20">
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="bg-gray-200 w-1/2 h-8"
              required
            />
          </div>
        </div>
        <div className="mt-3">
          <div className="text-gray-500">
            <label htmlFor="zip">
              Pincode<span className="text-red-600">*</span>
            </label>
          </div>
          <div className="mt-2 pr-20">
            <input
              type="text"
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className="bg-gray-200 w-1/2 h-8"
              required
            />
          </div>
        </div>

        <div className="mt-3">
          <div className="text-gray-500">
            <label htmlFor="country">
              Country<span className="text-red-600">*</span>
            </label>
          </div>
          <div className="mt-2 pr-20">
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="bg-gray-200 w-1/2 h-8"
              required
            />
          </div>
        </div>
        <div className="mt-3">
          <div className="text-gray-500">
            <label htmlFor="PhoneNumber">
              Mobile Number<span className="text-red-600">*</span>
            </label>
          </div>
          <div className="mt-2 pr-20">
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="bg-gray-200 w-1/2 h-8"
              required
            />
          </div>
        </div>

        <div className="mt-3">
          <div className="mt-10 text-xl ">
            <h2>YOUR ORDER</h2>
          </div>
          <hr className="mt-2" />
          <div className="mt-4">
            <table className="border-2 w-4/5">
              <thead className="border-2 ">
                <tr>
                  <th className="font-semibold border-2 w-4/5 ">Products</th>
                  <th className="w-1/5">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {list.map((val, index) => (
                  <Productlist
                    key={index}
                    title={val.title}
                    quantity={val.quantity}
                  />
                ))}
                <tr>
                  <td className="font-semibold border-2 w-4/5 pl-2">
                    Subtotal
                  </td>
                  <td className="font-semibold border-2 w-1/5 pl-2">{600}</td>
                </tr>
                <tr>
                  <td className="font-semibold border-2 w-4/5 pl-2">Total</td>
                  <td className="font-semibold border-2 w-1/5 pl-2">{600}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gray">
          <div>
            
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

const Productlist = (item) => {
  return (
    <tr className="ml-2">
      <td className="text-gray-500 border-2 w-4/5 pl-2">
        {item.title} <span className="ml-2 font-bold">x {item.quantity}</span>
      </td>
      <td className="text-gray-500 border-2 w-4/5 pl-2">{600}</td>
    </tr>
  );
};

export default Checkout;
