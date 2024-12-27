import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MiniCard = ({ image, title, productId }) => {
  const navigate = useNavigate();
  const loginStatus = useSelector((state) => state.auth.loginStatus);
  function productClicked(id) {
    if (loginStatus === false) {
      window.alert("Please Login First");
    } else {
      navigate(`${id}`);
    }
  }

  return (
    <div
      onClick={() => productClicked(productId)}
      className="border  col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2 xl:col-span-1 bg-gray-200 rounded-sm hover:shadow-md hover:scale-105 transform transition-transform  cursor-pointer hover:shadow-blue-950 "
    >
      <div className="bg-white rounded-t-sm">
        <img src={image} className="h-24 m-auto p-2 object-contain" />
      </div>

      <h1 className="truncate pl-1 font-medium">{title}</h1>
    </div>
  );
};

export default MiniCard;
