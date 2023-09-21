import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className=":bg-gray-900">
      <div className="container mx-auto relative">
        <div className="py-4 mx-4 md:mx-6">
          <div className="flex items-center justify-between border-b border-gray-200 :border-gray-700 py-4">
            <Link to="/">
              <div>
                <h1 className="text-xl font-bold uppercase">Fotheby's</h1>
              </div>
            </Link>
            <div className="hidden md:block">
              <ul className="flex items-center space-x-6">
                <li>
                  <Link
                    to="/auctions"
                    className=":text-white :hover:text-gray-300 text-base text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    Auctions{" "}
                  </Link>
                </li>
                <li>
                  <a className=":text-white :hover:text-gray-300 text-base text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                    {" "}
                    Create Bid{" "}
                  </a>
                </li>
                <li>
                  <a className=":text-white :hover:text-gray-300 text-base text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                    {" "}
                    Your Bids{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a
                aria-label="my account"
                className="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100 p-0.5 rounded"
              >
                <svg
                  className="fill-stroke text-gray-800 :text-white"
                  width={18}
                  height={20}
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className="md:hidden">
              <button
                aria-label="open menu"
                onClick={() => setShowMenu(true)}
                className="focus:outline-none focus:ring-2 focus:ring-gray-800 rounded"
              >
                <svg
                  className="fill-stroke text-gray-800 :text-white"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6H20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 12H20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 18H20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          id="mobile-menu"
          className={`${
            showMenu ? "flex" : "hidden"
          } :bg-gray-900 md:hidden absolute inset-0 z-10 flex-col w-full h-screen bg-white pt-6`}
        >
          <div className="w-full">
            <div className="flex items-center justify-between border-b border-gray-200 :border-gray-700 pb-3 mx-4">
              <Link to="/">
                <h1 className="text-lg font-bold uppercase">FOTHEBY'S</h1>
              </Link>
              <button
                aria-label="close menu"
                onClick={() => setShowMenu(false)}
                className="text-gray-800 :text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
              >
                <svg
                  className="fill-stroke"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5L5 15"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 5L15 15"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-4 mx-4">
            <ul className="flex flex-col space-y-4">
              <li className="border-b border-gray-200 :border-gray-700 :text-gray-700 pb-4 px-1 flex items-center justify-between">
                <Link
                  to="/auctions"
                  className=":text-white focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline"
                >
                  {" "}
                  Auctions{" "}
                </Link>
                <button
                  aria-label="Add"
                  className=":text-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 :hover:bg-gray-700"
                >
                  <svg
                    className="fill-stroke"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 3.3335V12.6668"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.33203 8H12.6654"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
              <li className="border-b border-gray-200 :border-gray-700 :text-gray-700 pb-4 px-1 flex items-center justify-between">
                <a className=":text-white focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline">
                  {" "}
                  Create Bid{" "}
                </a>
                <button
                  aria-label="Add"
                  className=":text-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 :hover:bg-gray-700"
                >
                  <svg
                    className="fill-stroke"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 3.3335V12.6668"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.33203 8H12.6654"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
              <li className="border-b border-gray-200 :border-gray-700 :text-gray-700 pb-4 px-1 flex items-center justify-between">
                <a className=":text-white focus:outline-none focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline">
                  {" "}
                  Your Bids{" "}
                </a>
                <button
                  aria-label="Add"
                  className=":text-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 :hover:bg-gray-700"
                >
                  <svg
                    className="fill-stroke"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 3.3335V12.6668"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.33203 8H12.6654"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
          <div className="w-full h-full flex items-end">
            <ul className="bg-gray-50 :bg-gray-800 py-10 px-4 flex flex-col space-y-8 w-full">
              <li>
                <a className="flex items-center space-x-2 focus:outline-none text-gray-800 :text-white focus:ring-2 focus:ring-gray-800 hover:underline">
                  <div>
                    <svg
                      className="fill-stroke"
                      width={18}
                      height={20}
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-base">My account</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
