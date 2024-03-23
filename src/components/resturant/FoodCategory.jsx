import React from "react";

const FoodCategory = ({ data }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={data} className="inline-block w-24 h-auto mr-2" />
      <p>img</p>
    </div>
  );
};

export default FoodCategory;
