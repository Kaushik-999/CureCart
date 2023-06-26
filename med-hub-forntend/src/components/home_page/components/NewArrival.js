import {React,useRef} from "react";
import { Link } from "react-router-dom";


function NewArrival(props) {

    const ref = useRef(null);

  const btnpressprev = () => {
    let width = ref.current.clientWidth;
    console.log(ref);
    ref.current.scrollLeft = ref.current.scrollLeft - width / 4;
    console.log(width);
  };

  const btnpressnext = () => {
    let width = ref.current.clientWidth;
    ref.current.scrollLeft = ref.current.scrollLeft + width / 4;
    console.log(width);
  };
 


  return (
    <>
      <div className="flex mt-16 mb-8 ml-10 mr-32">
        <div className="">
          <span className="pl-7 pt-3 text-3xl font-semibold">
            {props.title}
          </span>
        </div>
        <Link to={{pathname : `/productpage/${"_"}`,search : "?v=seeall"}} className="ml-12 pt-2 text-teal-600">See all</Link>
        <div className="flex ml-auto mt-2">
          <button
            className="inline-flex absolute z-10 mr-5"
            onClick={btnpressprev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            className="inline-flex absolute z-10 ml-5"
            onClick={btnpressnext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`overflow-x-hidden ml-${props.l} mr-${props.r} scroll-smooth snap-x mb-8`}
        ref={ref}
      >
        <div className="flex w-fit">
          {props.func}
        </div>
      </div>
    </>
  );
}

export default NewArrival;
