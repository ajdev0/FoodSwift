import React from "react";
import { Link } from "react-router-dom";

const FoodCategory = ({ data }) => {
  //console.log(data);
  return (
    <Link>
      <img
        src={process.env.REACT_APP_BANNER_IMAGE_URL + data?.imageId}
        className="inline-block w-36 h-auto mr-2"
      />
    </Link>
  );
};

export default FoodCategory;
