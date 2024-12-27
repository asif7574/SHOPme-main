import React from "react";
import { useDispatch } from "react-redux";
import { updateLoginStatus } from "../store/authentication";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function submitLogin(event) {
    event.preventDefault();
    dispatch(updateLoginStatus());
    navigate("/home");
  }
  return (
    <div className="flex min-h-screen items-center justify-center my-10 ">
      <form
        onSubmit={submitLogin}
        className="border-2 bg-white border-gray-600 py-10 px-6 flex flex-col gap-2 font-medium rounded-sm "
      >
        <label htmlFor="userName">Enter your name:</label>
        <input
          type="text"
          id="userName"
          name="userName"
          className=" pl-1 border-2 border-gray-600 rounded-md"
          required
        />
        <label htmlFor="userEmail">Enter your email:</label>
        <input
          type="email"
          id="userEmail"
          name="userEmail"
          className="pl-1 border-2 border-gray-600 rounded-md"
          required
        />
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-400 mt-2 rounded-md px-2 border-2 border-green-500 hover:bg-green-500 active:bg-green-600 text-white"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
