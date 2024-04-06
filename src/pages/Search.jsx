import React, { useState } from "react";
import useResturantData from "../components/hooks/useResturantData";
import ResturantCard from "../components/resturant/ResturantCard";

const Search = () => {
  const [search, setSerach] = useState("");
  const [searchedResturant, setSearchedResturant] = useState([]);

  const resturants = useResturantData("restaurant_grid_listing");
  const resturantList =
    resturants[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

  const filteredResturants =
    search !== ""
      ? resturantList?.filter((rest) =>
          rest?.info?.name?.toLowerCase().includes(search.toLowerCase())
        )
      : "";
  return (
    <div className="my-28 container mx-auto">
      <div className="flex flex-col">
        <div className="search relative inline-block ">
          <input
            type="text"
            onChange={(e) => setSerach(e.target.value)}
            className="rounder border w-full p-4 rounded-lg shadow px-2  focus:outline-none"
            placeholder="Search"
          />
          <button
            // onClick={searchRest}
            className="absolute right-0 bottom-0 top-0 translate-x-0  my-auto bg-red-400 text-white  rounded-br rounded-tr px-4"
          >
            Search
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4 py-10 justify-stretch">
          {search !== ""
            ? filteredResturants?.map((rest) => (
                <ResturantCard data={rest} key={rest?.info?.id} />
              ))
            : "Search For Resturant"}
        </div>
      </div>
    </div>
  );
};

export default Search;
