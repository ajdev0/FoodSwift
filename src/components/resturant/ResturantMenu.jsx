import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import ResturantMenuItem from "./ResturantMenuItem";

const ResturantMenu = ({ menuData }) => {
  const [showItem, setShowItem] = useState(false);
  const { card } = menuData?.card;
  return (
    <>
      <div
        className="flex justify-between font-bold text-xl cursor-pointer p-4"
        onClick={() => setShowItem(!showItem)}
      >
        <span className="capitalize">
          {card?.title} ({card?.itemCards?.length})
        </span>
        <span>
          <MdKeyboardArrowDown size={24} />
        </span>
      </div>
      <div className={showItem ? "visible" : "hidden"}>
        {card?.itemCards?.map((item) => (
          <ResturantMenuItem key={item?.card?.card?.info?.id} menu={item} />
        ))}
      </div>
    </>
  );
};

export default ResturantMenu;
