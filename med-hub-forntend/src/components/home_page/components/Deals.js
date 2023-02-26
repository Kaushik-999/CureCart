import React from 'react'
import { bestselldata } from '../cards/trendingdata';
import Cards from '../cards/Cards';
function Deals() {
    const array = [];
for (let i = 0; i < 8; i++) {
  array.push(bestselldata[i]);
}


  return (
    <>
      <div className="flex mt-16 mb-12 ml-10 mr-10">
        <div className="">
          <span className="pl-5 pt-3 text-3xl font-semibold">
            Fitness Deals
          </span>
        </div>
        <button className="ml-12 pt-2 text-teal-600">See all</button>
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
          {array.map((val, index) => (
            <Cards
              link={val.link}
              key={index}
              title={"Vitamin C With Zinc – 30 Tablets"}
              x="30"
            />
          ))}
        </div>
      </div>

    </>
  )
}

export default Deals
