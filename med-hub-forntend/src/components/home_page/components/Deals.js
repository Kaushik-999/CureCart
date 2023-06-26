import React from 'react'

import Cards from '../cards/Cards';
import { Link } from 'react-router-dom';
import { MedicineContext } from '../MedicineContext';
import { useContext } from 'react';
function Deals() {
    
 const [medicine,loading] = useContext(MedicineContext)
 const medis = medicine && medicine.filter((item)=> item.link !== "None")
// console.log(medis)
 const array = [];
for (let i = 0; i < 8; i++) {
   array.push(medis[i]);
}

  return (
    <>
    {
      loading ? (<div className="vendor-invoices-loading-message">Loading...</div>)
    :(
      <>
      <div className="flex mt-16 mb-12 ml-10 mr-10">
        <div className="">
          <span className="pl-5 pt-3 text-3xl font-semibold">
            Fitness Deals
          </span>
        </div>
        <Link to={{pathname : `/productpage/${"_"}`,search : "?v=seeall"}} className="ml-auto text-teal-600">See all</Link>
      </div>

      <div className="flex mt-3 mb-3 ml-14 ">
        <div className="">
          <img
            className="w-fit "
            src="https://demo.wpthemego.com/themes/sw_mallon/wp-content/uploads/2021/06/cat-1.jpg"
            alt=""
          />
        </div>

        <div className=" grid grid-cols-4 gap-1 ">
          { array && array.map((val, index) => (
            <Cards
              link={val.link}
              key={index}
              title={val.title}
              id = {val.id}
              price = {val.price}
              x="30"
            />
          ))}
        </div>
      </div>
      </>
    )}
    

    </>
  )
}

export default Deals
