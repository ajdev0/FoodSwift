import React from "react";
import { MdStars } from "react-icons/md";

const ResturantCard = ({ data }) => {
  return (
    <div className="flex flex-col">
      <div>
        <img src={data} className="object-cover drop-shadow-md" />
      </div>
      <h3>Title</h3>
      <div className="flex items-center gap-1 font-bold">
        <span>
          <MdStars className="text-green-700" />
        </span>
        <span>4.4 • </span>
        <span>30-35 min</span>
      </div>
      <div>Burgers, American</div>
    </div>
  );
};

export default ResturantCard;
