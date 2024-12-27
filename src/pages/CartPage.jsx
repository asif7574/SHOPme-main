import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartDetail from "../components/CartDetail";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { clearCart } from "../store/cart";

const CartPage = () => {
  const cartData = useSelector((state) => state.cart.cartList);
  const dispatch = useDispatch();

  const [subTotal, setSubtotal] = useState(0);

  useEffect(() => {
    const total = cartData.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    console.log(total);
    setSubtotal(total);
  }, [cartData]);

  function clear() {
    dispatch(clearCart());
  }

  console.log(cartData);
  return (
    <div className="min-h-screen p-10 pt-5  sm:px-10 xl:px-40 2xl:px-60">
      {cartData.length > 0 ? (
        <div>
          <div className="border-b-2 border-b-blue-950 pb-1 pl-1 mb-2 font-bold text-xl text-blue-950">
            Shopping Cart
          </div>

          <div className="hidden lg:grid grid-cols-12 mb-2 font-semibold">
            <div className="col-span-1 pl-1">Product</div>
            <div className="col-span-6 pl-1">Title</div>
            <div className="col-span-1 text-center">Price</div>
            <div className="col-span-1 text-center">Quantity</div>
            <div className="col-span-1 text-center">Total</div>
            <div className="col-span-2 text-end">Remove</div>
          </div>

          <div className="flex flex-col sm:grid grid-cols-12 gap-2 lg:flex lg:flex-col-reverse">
            <div className="bg-white mb-2 p-2 flex justify-between shadow-sm shadow-gray-800 sm:col-start-10  sm:col-span-3 sm:flex-col  items-center sm:h-40 lg:grid grid-cols-12 lg:h-auto gap-1">
              <div className="pl-1 col-span-10 lg:text-end lg:mr-2 font-medium">
                Subtotal : $
                <span className="font-bold">{Math.floor(subTotal)}</span>
              </div>
              <div className="pl-1 mt-1 lg:col-span-2 lg:text-end">
                <button
                  onClick={clear}
                  className="bg-gray-800 hover:bg-gray-900 active:bg-gray-950 text-white p-1 px-2 rounded-sm"
                >
                  Clear Cart
                  <DeleteForeverIcon fontSize="small" className="pb-1" />
                </button>
              </div>
            </div>

            <div className="col-start-1 col-span-9 row-start-1">
              {cartData.map((item, index) => (
                <CartDetail key={index} product={item} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="font-bold text-2xl text-blue-950">
          Your SHOPiT Cart is empty!
        </div>
      )}
    </div>
  );
};

export default CartPage;
