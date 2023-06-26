import {React,useState,useEffect,useRef} from 'react'
// import { bestselldata } from '../cards/trendingdata';
import Cards from '../cards/Cards';
import gift from '../cards/gift.png';
import { Link } from 'react-router-dom';
import { MedicineContext } from '../MedicineContext';
import { useContext } from 'react';

function Dotd() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    const deadline = "December, 31, 2023";
  
    const getTime = () => {
      const time = Date.parse(deadline) - Date.now();
  
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };
    useEffect(() => {
      const interval = setInterval(() => getTime(deadline), 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    //for card carousel buttons
    const ref = useRef(null);
  
    const btnpressprev = () => {
      let width = ref.current.clientWidth;
      // console.log(ref);
      ref.current.scrollLeft = ref.current.scrollLeft - width / 4;
      // console.log(width);
    };
  
    const btnpressnext = () => {
      let width = ref.current.clientWidth;
      ref.current.scrollLeft = ref.current.scrollLeft + width / 4;
      // console.log(width);
    };
    // eslint-disable-next-line
    const [medicine,loading] = useContext(MedicineContext)
    const medis = medicine && medicine.filter((item)=> item.link !== "None")
    // console.log(medis)
  return (
    <div className="flex flex-row p-0 ">
        <div className="group w-4/5 relative bg-white mt-3 mb-3 ml-4 h-auto rounded-md border-teal-600 border-2">
          <div className="flex h-14 m-5">
            <img className="" src={gift} alt="" />
            <span className="pl-5 pt-3 text-2xl font-semibold">
              Deal of the Day
            </span>
            <span className="text-teal-600  text-2xl pl-7 pt-3">|</span>
            <span className="text-teal-600  text-sm pl-7 pt-4">End in:</span>
            <span className="text-teal-600  text-2xl pl-7 pt-3">
              {days}:{hours}:{minutes}:{seconds}
            </span>
            <Link to={{pathname : `/productpage/${"_"}`,search : "?v=seeall"}} className="ml-auto text-teal-600">See all</Link>
            
          </div>
          <button
            className="hidden group-hover:inline-flex absolute left-0 bottom-1/2 z-10 shadow-xl justify-center items-center rounded-full w-12 h-12 group-hover:visible "
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
            className="hidden group-hover:inline-flex absolute right-0 bottom-1/2 z-10 shadow-xl justify-center items-center rounded-full w-12 h-12 "
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
          <div
            className="overflow-x-hidden m-11 scroll-smooth snap-x"
            ref={ref}
          >
            <div className=" flex w-fit ">
              {medis && medis.map((val, index) => (
                <Cards
                  link={val.link}
                  key={index}
                  title={val.title}
                  id = {val.id}
                  price = {val.price}
                  x="20"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="basis-1/5 bg-slate-100 m-3 rounded-md">
          <h1 className="p-3 font-semibold text-xl">
            How to order Medicines Online?
          </h1>
          <div className="flex items-center m-3">
            <span className="inline-flex rounded-full border-teal-500 justify-center items-center border-2 w-10 h-10 bg-gray-100">
              1
            </span>
            <div className="pl-3">
              <h6 className="text-base ">Search your meds</h6>
              <span className="text-slate-500 text-xs pt-0">
                Compare prices & brands
              </span>
            </div>
          </div>
          <div className="flex items-center m-3">
            <span className="inline-flex rounded-full border-teal-500 justify-center items-center border-2 w-10 h-10 bg-gray-100">
              2
            </span>
            <div className="pl-3">
              <h6 className="text-base">Place your order</h6>
              <span className="text-slate-500 text-xs pt-0">
                We'll get your prescription.
              </span>
            </div>
          </div>

          <div className="flex items-center m-3">
            <span className="inline-flex rounded-full border-teal-500 justify-center items-center border-2 w-10 h-10 bg-gray-100">
              3
            </span>
            <div className="pl-3 pt-2">
              <h6 className="text-base ">Sastifaction Guaranteed</h6>
              <p className="text-slate-500 text-xs p-0">
                Meds delivered on your teams.
              </p>
            </div>
          </div>
          <div className="m-4 pt-6">
            <h2 className="text-lg text-teal-500">
              Already have a Prescription?
            </h2>
            <p className="text-slate-500 text-sm pt-1">
              Upload your prescription here and fill your infomation on the
              field. We will contact you right away.
            </p>
          </div>
        </div>
      </div>

  )
}

export default Dotd
