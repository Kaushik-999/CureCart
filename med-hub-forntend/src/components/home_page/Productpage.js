import React from "react";

function Productpage() {
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
            <div className="mt-4 h-48 overflow-scroll">
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
          <div className="col-span-2">
            <div className="product-details">
              <div className="flex">
                <a href="/" className="">
                  <img
                    classname=""
                    src="https://demo.wpthemego.com/themes/sw_mallon/wp-content/uploads/2021/06/Vitamin-C-with-Zinc-30-Tablets.jpg"
                    alt=""
                  />
                </a>
                <div className="inline mt-3 mr-3 h-6 px-1 pb-1 align-middle ml-auto bg-teal-500 text-white">
                  -30%
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Productpage;
