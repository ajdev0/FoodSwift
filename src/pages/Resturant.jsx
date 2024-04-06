import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
import { MdTimelapse } from "react-icons/md";
import { RiMoneyCnyCircleLine } from "react-icons/ri";
import ResturantMenu from "../components/resturant/ResturantMenu";
import { useParams } from "react-router-dom";
import useResturantMenuData from "../components/hooks/useResturantMenuData";
import MenuShimmerUi from "../components/common/shimmerUi/MenuShimmerUi";

const Resturant = () => {
  const { id } = useParams();

  const resturants = useResturantMenuData(id);

  const resturantDetails = resturants[2]?.card?.card?.info;

  const resturantMenu =
    resturants[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //console.log(resturants);
  if (resturants.length === 0) {
    return <MenuShimmerUi />;
  }

  return (
    <div className="container w-1/2 mx-auto my-20">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className="capitalize font-extrabold text-xl">
            {resturantDetails?.name}
          </p>
          <div className="font-extralight text-sm capitalize">
            <p>{resturantDetails?.cuisines?.join(", ")}</p>
            <p>{resturantDetails?.areaName}</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col border rounded justify-center p-1">
            <span className="flex justify-center items-center gap-1 text-green-700">
              <IoStar /> {resturantDetails?.avgRatingString}
            </span>
            <span className="border-t border-gray-300 my-2"></span>
            <span className="font-extralight text-sm capitalize">
              {resturantDetails?.totalRatingsString}
            </span>
          </div>
        </div>
      </div>
      <div className="font-extralight text-sm capitalize my-2">
        {resturantDetails?.feeDetails?.message}
      </div>
      <div className="border-t border-dashed border-gray-300 my-4"></div>
      <div className="flex gap-4">
        <span className="flex items-center gap-1 font-bold">
          <MdTimelapse size={20} />
          {resturantDetails?.sla?.slaString}
        </span>
        <span className="flex items-center gap-1 font-bold">
          <RiMoneyCnyCircleLine size={20} />{" "}
          {resturantDetails?.costForTwoMessage}
        </span>
      </div>
      <div className="border-t border-gray-300 my-6"></div>
      <div className="list flex flex-col gap-4">
        {resturantMenu?.map((menu) => {
          return (
            <div key={menu?.card?.card?.title}>
              <ResturantMenu menuData={menu} key={menu?.card?.card?.title} />
              <p className="border border-t-8 border-zinc-200 rounded"></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Resturant;
