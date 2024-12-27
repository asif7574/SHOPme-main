import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

const SmallCard = ({ category, productId, title, image, rating, price }) => {
  const navigate = useNavigate();

  function productClicked(id) {
    console.log(id);
    navigate(`/${category}/${id}`);
  }

  return (
    <div
      onClick={() => productClicked(productId)}
      className="border col-span-6 sm:col-span-4 lg:col-span-3 2xl:col-span-2 rounded-sm cursor-pointer transform transition-transform hover:scale-105 hover:shadow-md hover:shadow-blue-950  bg-gray-200  relative"
    >
      <div className="  bg-white rounded-t-sm">
        <img src={image} className="h-60 p-4 m-auto object-contain " />
      </div>
      <div className="p-2 ">
        <h1 className="font-bold truncate">{title}</h1>
        <h2 className="">
          $ <span className="font-light">{price}</span>
        </h2>
        <div className="absolute opacity-90 top-2 right-2 bg-gray-200 rounded-lg pl-1 text-sm">
          {rating}
          <StarIcon
            fontSize="small"
            className="text-green-500 text-sm pb-1 opacity-100"
          />
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
