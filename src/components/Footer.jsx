import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-blue-950 text-white py-8">
      <div className="flex flex-col items-center justify-around">
        <div className="">
          <h1 className="text-2xl text-cyan-500 font-bold">SHOPiT</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-1 md:gap-4 mt-4 md:mb-0 text-gray-400">
          <NavLink to="/home" className="hover:text-cyan-500 cursor-pointer">
            Home
          </NavLink>
          <p className="hover:text-cyan-500 cursor-pointer">About</p>
          <p className="hover:text-cyan-500 cursor-pointer">Services</p>
          <p className="hover:text-cyan-500 cursor-pointer">Contact</p>
        </div>

        <div className="mt-8 text-sm text-gray-400">
          <p>&copy; {year} SHOPiT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
