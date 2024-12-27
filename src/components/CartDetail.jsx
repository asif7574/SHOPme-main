import React from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch } from "react-redux";
import { increment, decrement, deleteItem } from "../store/cart";

const CartDetail = ({ product }) => {
  console.log(product.title);
  const total = product.price * product.quantity;
  const dispatch = useDispatch();

  function increaseItem() {
    dispatch(increment(product));
  }

  function decreaseItem() {
    dispatch(decrement(product));
  }

  function removeItem() {
    dispatch(deleteItem(product));
  }

  return (
    <>
      <div className="grid py-2 grid-cols-12 grid-rows-4 gap-1 bg-white mb-2 shadow-sm shadow-gray-800 p-1 lg:grid-rows-1">
        <img
          id="cartImg"
          className=" col-span-4 row-span-4 h-20 m-auto  lg:col-span-1 lg:h-10 lg:row-span-1"
          src={product.image}
        />
        <div
          id="cartTitle"
          className=" col-span-8 row-span-2 text-sm lg:self-center lg:col-span-6 lg:row-span-1 font-semibold"
        >
          {product.title}
        </div>
        <div
          id="cartPrice"
          className=" col-span-4 lg:col-span-1 lg:self-center lg:text-center"
        >
          $<span className="font-bold lg:font-normal">{product.price}</span>
        </div>
        <div
          id="cartTotal"
          className=" hidden lg:inline-block lg:col-span-1 lg:self-center lg:text-center"
        >
          ${total.toFixed(2)}
        </div>
        <div
          id="cartQuantity"
          className=" row-start-4 col-start-5 col-span-4 lg:col-span-1 lg:row-start-1 lg:col-start-9 lg:self-center lg:text-center"
        >
          <div className="flex justify-start lg:justify-center gap-0 items-center  rounded-lg">
            {product.quantity > 1 ? (
              <RemoveIcon
                onClick={decreaseItem}
                fontSize="small"
                className="bg-gray-300 rounded-l-md cursor-pointer active:bg-gray-400"
              />
            ) : (
              <DeleteIcon
                onClick={removeItem}
                fontSize="small"
                className="bg-gray-300 rounded-l-md cursor-pointer active:bg-gray-400 "
              />
            )}
            <div className="px-2  text-sm shadow-inner shadow-gray-400">
              {product.quantity}
            </div>
            <AddIcon
              onClick={increaseItem}
              fontSize="small"
              className="bg-gray-300 rounded-r-md cursor-pointer active:bg-gray-400"
            />
          </div>
        </div>

        <div
          id="cartRemove"
          className=" row-start-4 col-start-9 col-span-4 lg:col-span-2 lg:row-start-1 lg:col-start-11 lg:self-center mr-2 text-end"
        >
          <span
            onClick={removeItem}
            className="lg:hidden cursor-pointer hover:text-red-600"
          >
            Delete
          </span>
          <span className="hidden lg:inline-block">
            <ClearIcon
              fontSize="small"
              onClick={removeItem}
              className="cursor-pointer "
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default CartDetail;
