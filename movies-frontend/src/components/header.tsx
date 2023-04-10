import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa";
import logo from "../../public/RottenTomatoes.svg";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-red-600 shadow">
      <div className="flex items-center">
        <Image src={logo} alt="Logo" className="h-8 mr-2" />
        {/* <h1 className="font-bold text-lg text-white">Rotten Tomatoes</h1> */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search movies, TV, actors, more..."
            className="border-2 border-gray-300 text-white bg-red-800 rounded-full py-1 pr-4 pl-10 focus:outline-white focus:border-white transition-colors duration-300 ease-in-out md:w-96 placeholder-white"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FaSearch className="text-white" />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="ml-4 relative">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:text- font-semibold">
                MOVIES
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:font-bold font-semibold">
                TV SHOWS
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:font-bold font-semibold">
                NEWS
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:font-bold font-semibold">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <button className="ml-4 border border-white text-white hover:text-red-700 hover:border-red-700 hover:bg-white  font-bold py-2 px-4 rounded">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
