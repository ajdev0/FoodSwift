import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BiCartAlt } from "react-icons/bi";
import CartItem from "../components/resturant/CartItem";
import {
  clearItem,
  removeItem,
  selectCartItems,
} from "../components/utils/redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  console.log("cart", cartItems);

  const clearCart = () => {
    dispatch(clearItem());
  };

  return (
    <div className="container w-1/2 mx-auto my-20">
      {cartItems.length === 0 ? (
        <div className="flex flex-col justify-center items-center min-h-[500px] ">
          <div className="bg-teal-100 rounded-full p-20 animate-bounce text-teal-500">
            <BiCartAlt size={120} />
          </div>
          <div className="text-2xl capitalize font-semibold text-gray-500">
            {" "}
            your Cart is empty!
          </div>
        </div>
      ) : (
        <div className="flex flex-col ">
          <button
            onClick={clearCart}
            className="bg-teal-700 text-white text-lg p-2 rounded shadow cursor-pointer hover:bg-teal-500 transition-opacity"
          >
            Clear Cart
          </button>
          {cartItems.map((item) => (
            <CartItem menu={item} key={item?.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
