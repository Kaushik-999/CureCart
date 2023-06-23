import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



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

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form data, e.g. submit to server
    console.log(formData);
  };

  const list = useSelector((state) => state.cartReducer.list);
  console.log(list);
  
  
  
  
  const total = (list) =>{
    let sum = 0;
    for (var key in list) {
     if (list.hasOwnProperty(key)) {
        sum += list[key].price * list[key].quantity;
     }
  }
    return sum;
   }

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
                    price = {val.price}
                  />
                ))}
                <tr>
                  <td className="font-semibold border-2 w-4/5 pl-2">
                    Subtotal
                  </td>
                  <td className="font-semibold border-2 w-1/5 pl-2">{total(list)}</td>
                </tr>
                <tr>
                  <td className="font-semibold border-2 w-4/5 pl-2">Total</td>
                  <td className="font-semibold border-2 w-1/5 pl-2">{total(list)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gray-200 mt-3 w-4/5">
          <div className="pt-4 ml-2">Payment Method</div>
          <div className="space-y-2 mt-3 ml-2">
            <label className="flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="paymentOption"
                value="phonepe"
                checked={selectedOption === "phonepe"}
                onChange={handleOptionChange}
              />
              <span className="ml-2 text-gray-600">PhonePe</span>
            </label>

            <label className="flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="paymentOption"
                value="paytm"
                checked={selectedOption === "paytm"}
                onChange={handleOptionChange}
              />
              <span className="ml-2 text-gray-600">Paytm</span>
            </label>

            <label className="flex items-center">
              <input
                type="radio"
                className="form-radio "
                name="paymentOption"
                value="upi"
                checked={selectedOption === "upi"}
                onChange={handleOptionChange}
              />
              <span className="ml-2 text-gray-600">UPI</span>
            </label>

            <label className="flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="paymentOption"
                value="cod"
                checked={selectedOption === "cod"}
                onChange={handleOptionChange}
              />
              <span className="ml-2 text-gray-600">COD</span>
            </label>
          </div>
          <div className="flex justify-end">
            <Link to="/orderplaced">
          <button className="mx-3 mb-3 px-5 py-2 bg-teal-500 rounded-sm text-white font-semibold" type="submit">Place Order</button>
          </Link>
          </div>
          
        </div>

        
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
      <td className="text-gray-500 border-2 w-4/5 pl-2">{item.price*item.quantity}</td>
    </tr>
  );
};

export default Checkout;
