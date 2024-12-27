import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart";
import { useSelector } from "react-redux";

const BigCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.cartList);
  function addItem() {
    dispatch(addToCart(product));
    console.log(cartList);
    console.log(cartList.length);
  }
  return (
    <>
      <div className="mt-2 border-b-2 border-b-blue-950 pb-1 text-center mb-2 font-bold text-xl text-blue-950">
        PRODUCT DETAILS
      </div>
      <div className="grid grid-cols-12  m-10 mt-4">
        <div className="bg-white border-blue-950 border  md:rounded-l-md shadow-blue-950 col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-4 xl:col-start-2 xl:col-span-4 2xl:col-start-3 2xl:col-span-3 shadow-inner">
          <img src={product.image} className="object-contain h-96 p-4 m-auto" />
        </div>
        <div className="bg-gray-200 border-blue-950 border md:rounded-r-md shadow-md sm:relative col-span-12 sm:col-span-6 md:col-span-7 lg:col-span-8 xl:col-span-6 2xl:col-span-5 p-2">
          <div className="font-bold">{product.title}</div>

          <div className="inline-block">
            <span className="align-top font-thin text-xs">$</span>
            <span className="font-bold text-2xl">{product.price}</span>
          </div>

          <div className="">
            <span className="font-semibold">Description : </span>
            <span className="italic text-xs">{product.description}</span>
          </div>

          <div className="">
            <span className="font-semibold">Category : </span>
            {product.category.toUpperCase()}
          </div>

          <div className="">
            <span className="font-semibold">
              {product.rating.rate}
              <StarIcon fontSize="small" className="pb-1 text-green-500" />{" "}
            </span>
            | {product.rating.count} ratings
          </div>
          <div className="text-center my-2 sm:absolute sm:bottom-4 sm:right-5 lg:right-auto lg:left-5">
            <button
              onClick={addItem}
              className=" bg-blue-300 px-2 rounded-lg py-1 border-2 border-blue-900 font-semibold hover:bg-blue-900 hover:text-white active:bg-blue-950"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BigCard;
