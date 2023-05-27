import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-teal-700 sticky top-0 z-20">
        <ul className="flex px-16 py-4 text-lg">
          <li className="px-2 cursor-pointer text-white text-xl font-bold font-sans">
            <Link to="/" className=" hover:text-slate-200">
              CureCart
            </Link>
          </li>
          <li className="ml-96">
            <div className=" bg-slate-200 rounded-full pr-2">
              <form className="">
                <input
                  type="text"
                  placeholder="Search for medicines"
                  className="search-bar rounded-l-full focus:outline-none focus:border-none py-1 px-3"
                />

                <button type="submit" className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 pt-2 pl-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </li>
          <li className="ml-auto pl-10 text-white">
            <Link to="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg>
            </Link>
          </li>
          <li className="mr-3 ml-5  text-sm ">
            <div className="nav-links">
              <div className="group">
                <Link to="/user">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <ul className="absolute hidden z-10 text-gray-700 pt-1 group-hover:block">
                  <li className="">
                    <Link
                      className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      to="/sign-in"
                    >
                      Sign In
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      to="/sign-up"
                    >
                      Sign Up
                    </Link>
                  </li>
                  <li className="">
                    <a
                      className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="/"
                    >
                      Sign in as Admin
                    </a>
                  </li>
                  <li>
                    <Link
                      className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      to="/pharmacy-vendor"
                    >
                      Pharmacy Vendor
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="flex px-80 py-1 bg-white ">
          <li className="mx-14 text-sm font-bold my-2">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="mx-14 text-sm  my-2">
            <div className="group">
              <Link className="font-bold">Categories</Link>
              <ul className="absolute hidden z-10 text-gray-700 pt-1 group-hover:block">
                <li className="">
                  <a
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="/"
                  >
                    Aurvedic
                  </a>
                </li>
                <li className="">
                  <a
                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="/"
                  >
                    Covid Essentials
                  </a>
                </li>
                <li className="">
                  <a
                    className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="/"
                  >
                    Homeopathy
                  </a>
                </li>
                <li className="">
                  <a
                    className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="/"
                  >
                    Mom & Baby
                  </a>
                </li>
                <li className="">
                  <a
                    className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="/"
                  >
                    Orthopaedics
                  </a>
                </li>
                <li className="">
                  <a
                    className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="/"
                  >
                    Fitness
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="mx-14 flex text-sm font-bold my-2">
            <svg
              fill="red"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M5.3,11.214A6.791,6.791,0,0,0,10.792,22h2.416A6.791,6.791,0,0,0,18.7,11.214L12,2Zm5.946,8.036a5.24,5.24,0,0,1-4.631-2.779,1,1,0,1,1,1.766-.942,3.239,3.239,0,0,0,2.865,1.721,1,1,0,0,1,0,2Z"></path>
              </g>
            </svg>
            <Link to="/blood-bank">
              <span className="mx-0">Smile</span>
            </Link>
          </li>
          <li className="mx-14 text-sm font-bold my-2">
            <Link to="/blogs">
              Blogs
            </Link>
          </li>
          <li className="mx-14 text-sm font-sans my-2">
            <div className="group">
              <Link className="font-bold">Pages</Link>
              <ul className="absolute hidden z-10 text-gray-700 pt-1 group-hover:block">
                <li className="font-sans">
                  <a
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="/"
                  >
                    About
                  </a>
                </li>
                <li className="font-sans">
                  <a
                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="/"
                  >
                    Contact Us
                  </a>
                </li>
                <li className="font-sans">
                  <a
                    className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="/"
                  >
                    FAQ!
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="ml-4">
            <Link>
              <div className="w-32 h-10 bg-teal-700 rounded-full flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mx-2 my-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                  />
                </svg>
                <span className="text-xs text-white px-1 py-1">
                  Upload Prescription
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
