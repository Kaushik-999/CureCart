import React from "react";
import Productdetails from "./components/Productdetails";

import Seeitemcard from "./cards/Seeitemcard";
import { useLocation,useParams } from "react-router-dom";

import { MedicineContext } from './MedicineContext';
import { useContext } from 'react';

function Productpage() {
  //Quantity buttons
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const component = queryParams.get('v');
  const { productId } = useParams();
// eslint-disable-next-line
  const [medicine,loading] = useContext(MedicineContext)
 const medis = medicine && medicine.filter((item)=> item.link !== "None")
  const item =medis.find((p) => p.id === productId);

  // console.log(productId);
  // console.log(item);


  return (
    <>
      <div className="ml-16 mr-16 mt-2">
        <div className="text-neutral-400 text-sm">
          Home/Fitness/Honey Tulsi 300g
        </div>
        <hr className="mt-4" />
        <div className="grid grid-cols-5 gap-2 mt-6">
          <div className="">
            <div className="text-lg font-medium">PRODUCT CATEGORIES</div>
            <div className="mt-4 h-48 overflow-scroll scrollbar">
              <ul>
                <a href="/">
                  <li className="flex mt-3">
                    <span className="h-3 w-3 mt-2 rounded-full border-2 border-slate-500"></span>
                    <span className="ml-2 text-slate-500">
                      Covid Essentials
                    </span>
                  </li>
                </a>
                <a href="/">
                  <li className="flex mt-3">
                    <span className="h-3 w-3 mt-2 rounded-full border-2 border-slate-500"></span>
                    <span className="ml-2 text-slate-500">Hair Loss</span>
                  </li>
                </a>
                <a href="/">
                  <li className="flex mt-3">
                    <span className="h-3 w-3 mt-2 rounded-full border-2 border-slate-500"></span>
                    <span className="ml-2 text-slate-500">Hair Loss</span>
                  </li>
                </a>

                <a href="/">
                  <li className="flex mt-3">
                    <span className="h-3 w-3 mt-2 rounded-full border-2 border-slate-500"></span>
                    <span className="ml-2 text-slate-500">Hot deal</span>
                  </li>
                </a>
                <a href="/">
                  <li className="flex mt-3">
                    <span className="h-3 w-3 mt-2 rounded-full border-2 border-slate-500"></span>
                    <span className="ml-2 text-slate-500">
                      Healthy and Beauty
                    </span>
                  </li>
                </a>
                <a href="/">
                  <li className="flex mt-3">
                    <span className="h-3 w-3 mt-2 rounded-full border-2 border-slate-500"></span>
                    <span className="ml-2 text-slate-500">
                      Magraine & Headache
                    </span>
                  </li>
                </a>
                <a href="/">
                  <li className="flex mt-3">
                    <span className="h-3 w-3 mt-2 rounded-full border-2 border-slate-500"></span>
                    <span className="ml-2 text-slate-500">Stomach Pain</span>
                  </li>
                </a>
                <a href="/">
                  <li className="flex mt-3">
                    <span className="h-3 w-3 mt-2 rounded-full border-2 border-slate-500"></span>
                    <span className="ml-2 text-slate-500">Personal Care</span>
                  </li>
                </a>
                <a href="/">
                  <li className="flex mt-3">
                    <span className="h-3 w-3 mt-2 rounded-full border-2 border-slate-500"></span>
                    <span className="ml-2 text-slate-500">Depression</span>
                  </li>
                </a>
                <a href="/">
                  <li className="flex mt-3">
                    <span className="h-3 w-3 mt-2 rounded-full border-2 border-slate-500"></span>
                    <span className="ml-2 text-slate-500">Fitness</span>
                  </li>
                </a>
              </ul>
            </div>
          </div>

          <div className="col-span-4 mb-10">

          {component === 'seeall' && medis.map((val, index) => (
            < Seeitemcard
            id={val.id}
              link={val.link}
              key={index}
              title={val.title}
              price={val.price}
              quantity={1}
              
            />
          ))}
      {component === 'product' && <Productdetails id={productId} title = {item.title} link = {item.link} price={item.price} />}
  
          </div>
        </div>
      </div>
    </>
  );
}

export default Productpage;
