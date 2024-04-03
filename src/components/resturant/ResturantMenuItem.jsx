import React, { useEffect, useState } from "react";
import { PiSquareLogoFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/redux/cartSlice";

const ResturantMenuItem = ({ menu }) => {
  const { info } = menu?.card;
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([]);

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };
  useEffect(() => {
    const storedCartState = localStorage.getItem("cartData");
    if (storedCartState) {
      const parsedCartState = JSON.parse(storedCartState);
      setCartItems(parsedCartState);
    }
  }, []);
  console.log(cartItems);
  return (
    <>
      {" "}
      <div className="flex justify-between my-4">
        <div className="flex flex-col gap-2">
          <span className="flex items-center gap-1">
            <PiSquareLogoFill className="text-green-700" />

            {info?.ribbon && (
              <span className="text-orange-400 text-xs font-bold">
                {info?.ribbon?.text}
              </span>
            )}
          </span>
          <p className="font-bold">{info?.name}</p>
          <p className="font-light text-sm">
            ₹{info?.defaultPrice / 100 || info?.price / 100}
          </p>
          <p className="font-light text-xs my-2">{info?.description}</p>
        </div>
        <div className="relative">
          <img
            src={process.env.REACT_APP_IMAGE_URL + info?.imageId}
            alt=""
            className="max-w-48 max-h-44 rounded-lg"
          />
          {cartItems ? (
            <button>+</button>
          ) : (
            <button
              className="absolute bottom-0 left-1/2 transform w-32 shadow-lg -translate-x-1/2 items-center border text-green-600 rounded  text-md font-bold  bg-white py-1 px-4"
              onClick={() => handleAdd(info)}
            >
              Add
            </button>
          )}
        </div>
      </div>
      <div className="border-t border-gray-300 my-6"></div>
    </>
  );
};

export default ResturantMenuItem;
