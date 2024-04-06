import axios from "axios";
import React from "react";
import useResturantData from "../hooks/useResturantData";
import ResturantCard from "./ResturantCard";
import CardShimmerUi from "../common/shimmerUi/cardShimmerUi";

const ResturantList = () => {
  //const [resturantList, setResturantList] = useState([]);
  const resturants = useResturantData("restaurant_grid_listing");
  const resturantList =
    resturants[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  if (!resturantList)
    return (
      <>
        <CardShimmerUi />
      </>
    );
  return (
    <div className="grid grid-cols-4 gap-4 py-10 justify-stretch">
      {resturantList?.map((resturant) => (
        <ResturantCard data={resturant} key={resturant?.info?.id} />
      ))}
    </div>
  );
};

export default ResturantList;
