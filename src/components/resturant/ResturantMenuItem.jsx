import React, { useEffect, useState } from "react";
import { PiSquareLogoFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, selectCartItems } from "../utils/redux/cartSlice";
import logo from "../img/Design.png";
const ResturantMenuItem = ({ menu }) => {
  const { info } = menu?.card;
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const storedItem = cartItems.find((item) => item.id === info.id);
    if (storedItem) {
      setQuantity(storedItem.quantity);
    }
  }, []);

  const handleAdd = (item) => {
    dispatch(addItem(item));
    setQuantity(quantity + 1); // Update local state
  };
  const handleRemove = (item) => {
    dispatch(removeItem(item));
    setQuantity(quantity - 1); // Update local state
  };

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
            src={
              info?.imageId !== undefined
                ? process.env.REACT_APP_IMAGE_URL + info?.imageId
                : logo
            }
            alt=""
            className="max-w-48 max-h-44 rounded-lg"
          />
          {quantity === 0 ? (
            <button
              className="absolute bottom-0 left-1/2 transform w-32 shadow-lg -translate-x-1/2 items-center border text-green-600 rounded  text-md font-bold  bg-white py-1 px-4"
              onClick={() => handleAdd(info)}
            >
              Add
            </button>
          ) : cartItems.find((item) => item.id == info?.id) ? (
            <div className="absolute bottom-0 left-1/2 transform w-32 shadow-lg -translate-x-1/2 items-center border text-green-600 rounded  text-md font-bold  bg-white py-1 px-4">
              <span className=" flex justify-between items-center ">
                <span
                  onClick={() => handleRemove(info)}
                  className="cursor-pointer hover:bg-slate-100 hover:animate-pulse px-2 rounded"
                >
                  -
                </span>
                <input
                  readOnly
                  className="w-1/2 text-center "
                  value={quantity}
                  placeholder="0"
                />
                <span
                  className="cursor-pointer hover:bg-slate-100 hover:animate-pulse px-2 rounded "
                  onClick={() => handleAdd(info)}
                >
                  +
                </span>
              </span>
            </div>
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
