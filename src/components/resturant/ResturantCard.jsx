import React from "react";
import { MdStars } from "react-icons/md";

const ResturantCard = ({ data }) => {
  const { info } = data;
  //console.log(info);
  return (
    <>
      <div className="flex flex-col">
        <div className="relative">
          <img
            src={process.env.REACT_APP_IMAGE_URL + info?.cloudinaryImageId}
            className="object-cover drop-shadow-md w-60 h-36 rounded-md"
          />
          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black w-60  rounded-b-md pt-6 px-3 pb-2 text-xl">
            {info?.aggregatedDiscountInfoV3 && (
              <>
                {" "}
                <span className="font-extrabold text-white">
                  {info?.aggregatedDiscountInfoV3?.header}
                </span>
                <span className="font-extrabold text-white">
                  {info?.aggregatedDiscountInfoV3?.subHeader}
                </span>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col px-2 py-3 max-w-64">
          <h4 className="font-bold truncate">{info?.name}</h4>
          <div className="flex items-center gap-1 font-bold text-sm">
            <span>
              <MdStars className="text-green-700" />
            </span>
            <span>{info?.avgRating}• </span>
            <span>{info?.sla?.slaString}</span>
          </div>
          <p className="font-light truncate">{info?.cuisines?.join(", ")}</p>
        </div>
      </div>
    </>
  );
};

export default ResturantCard;
