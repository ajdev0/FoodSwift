import React from "react";
import { useSelector } from "react-redux";
import ResturantMenuItem from "../components/resturant/ResturantMenuItem";
import CartItem from "../components/resturant/CartItem";
import { selectCartItems } from "../components/utils/redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  console.log("cart", cartItems);
  return (
    <div className="container w-1/2 mx-auto my-20">
      <div className="flex flex-col ">
        {cartItems.map((item) => (
          <CartItem menu={item} key={item?.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
