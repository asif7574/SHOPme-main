import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Logo from "../assets/logo.png"

import ListIcon from "@mui/icons-material/List";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateLoginStatus } from "../store/authentication";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showCategory, setShowCategory] = useState(false);

  function toggleCategory() {
    setShowCategory(!showCategory);
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = useSelector((state) => state.auth.loginStatus);
  const cartCount = useSelector((state) => state.cart.cartCount);

  function getLogin() {
    navigate("/login");
  }

  function logout() {
    navigate("/");
    dispatch(updateLoginStatus());
  }

  function showCart() {
    navigate("/cart");
  }

  return (
    <>
      <div className=" z-50 bg-blue-950 flex justify-between items-end pt-2 pb-3 px-4 shadow-md sticky top-0">
        <div id="logo" className="flex items-end mx-1 ml-2">
          <div className="w-10">
            <img
              src={Logo}
              alt="Logo"
              className="object-contain"
            />
          </div>
          <h1 className="text-xl font-bold ml-1 text-cyan-500 hidden sm:block">
            SHOPiT
          </h1>
        </div>
        {login && (
          <div className="hidden md:block mx-1">
            <ul
              id="categories"
              className="flex items-center justify-center text-white border-white font-normal gap-2"
            >
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    `border-cyan-500 text-cyan-500 font-bold ${
                      isActive ? "border-b-2" : ""
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/men's clothing"
                  className={({ isActive }) => (isActive ? "border-b-2" : "")}
                >
                  Men
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/women's clothing"
                  className={({ isActive }) => (isActive ? "border-b-2" : "")}
                >
                  Women
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/jewelery"
                  className={({ isActive }) => (isActive ? "border-b-2" : "")}
                >
                  Jewelery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/electronics"
                  className={({ isActive }) => (isActive ? "border-b-2" : "")}
                >
                  Electronics
                </NavLink>
              </li>
            </ul>
          </div>
        )}

        {login && (
          <div className="relative cursor-pointer group md:hidden mx-1">
            <div
              className="bg-cyan-500 pl-1 pr-1 rounded-md py-1"
              onClick={toggleCategory}
            >
              <span className="hidden sm:inline-block pl-1">
                Categories
                <ArrowDropDownIcon />
              </span>
              <span className="sm:hidden">
                <ListIcon fontSize="medium" />
              </span>
            </div>
            {showCategory && (
              <div
                onClick={toggleCategory}
                className="absolute bg-white left-0  text-center rounded-sm min-w-full shadow-md mt-1 flex flex-col"
              >
                <NavLink
                  className="hover:bg-gray-100 px-1 font-medium"
                  to="/home"
                >
                  Home
                </NavLink>
                <NavLink
                  className="hover:bg-gray-100 px-1"
                  to="/men's clothing"
                >
                  Men
                </NavLink>
                <NavLink
                  className="hover:bg-gray-100 px-1"
                  to="/women's clothing"
                >
                  Women
                </NavLink>
                <NavLink className="hover:bg-gray-100 px-1" to="/jewelery">
                  Jewelery
                </NavLink>
                <NavLink className="hover:bg-gray-100 px-1" to="/electronics">
                  Electronics
                </NavLink>
              </div>
            )}
          </div>
        )}

        {login && (
          <div id="cart" className="mx-1 relative">
            {cartCount > 0 && (
              <div className="bg-cyan-500 text-white text-sm rounded-full px-1 absolute -right-2 -top-4">
                {cartCount}
              </div>
            )}
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `bg-white p-2  rounded-md hover:bg-gray-50 active:bg-gray-100 text-gray-800  ${
                  isActive ? "shadow-inner  shadow-black" : ""
                }`
              }
            >
              <ShoppingCartIcon fontSize="medium" />
            </NavLink>
          </div>
        )}

        <div id="log" className="flex items-center mx-1 mr-2">
          {login ? (
            <button
              onClick={logout}
              className="border-2 border-cyan-500 px-1 rounded-md bg-cyan-300 hover:text-white hover:bg-cyan-500 active:bg-cyan-600 text-sm"
            >
              <span className="hidden sm:block">Log out</span>
              <span className="sm:hidden">
                <LogoutIcon fontSize="small" />
              </span>
            </button>
          ) : (
            <button
              onClick={getLogin}
              className="border-2 border-cyan-500 px-1 rounded-md bg-cyan-300 hover:text-white hover:bg-cyan-500 active:bg-cyan-600 text-sm"
            >
              <span className="hidden sm:block">Log in</span>
              <span className="sm:hidden">
                <LoginIcon fontSize="small" />
              </span>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
