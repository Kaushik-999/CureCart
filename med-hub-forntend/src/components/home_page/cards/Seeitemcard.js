import React from 'react'
import RatingStars from "react-rating-stars-component";





const ratingChanged = (newRating) => {
  ratingProps.value = newRating;
};
const ratingProps = {
  size: 20,
  count: 5,
  value: 0,
  onChange: ratingChanged,
  activeColor: "#ffd700",
  inactiveColor: "#c4c4c4",
};



function Seeitemcard(props) {
  return (
    <>
      <div className="flex w-full mt-5">
              <div className=" w-72">
                <img
                className="w-64"
                  src={props.link}
                  alt=""
                />
                <div className="flex justify-center border-2 border-teal-600 hover:bg-teal-600 group">
                  <button className="text-teal-600 p-1  group-hover:text-white">ADD TO CART</button>
                </div>
              </div>
              <div className="ml-20 mt-10 w-full">
                <span className="text-slate-400 text-sm">Personal Care</span>

                <div className="mt-2 text-slate-600 font-semibold text-xl">
                  {props.title}
                </div>
                <div className="flex mt-2">
                  <div className="text-2xl  font-medium text-teal-600">
                    ₹600
                  </div>
                  <del className="pl-2 pt-1 text-base">₹700</del>
                </div>
                <div className="text-xs text-slate-500 mt-2">Mkt : Garnier</div>

                <hr className="text-slate-500 mt-5" />
                <RatingStars {...ratingProps} />
              </div>
            </div>
    </>
  )
}

export default Seeitemcard
