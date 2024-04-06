import React from "react";
import FoodCategory from "../components/resturant/FoodCategory";
import Scrollable from "../components/common/Scrollable";
import ResturantCard from "../components/resturant/ResturantCard";
import ResturantList from "../components/resturant/ResturantList";
import useResturantData from "../components/hooks/useResturantData";
import ShimmerUi from "../components/common/shimmerUi/ShimmerUi";

const Resturants = () => {
  const resturants = useResturantData("top_brands_for_you");
  const resturantList =
    resturants[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  const foodCategory = useResturantData("whats_on_your_mind");

  const foodCategories =
    foodCategory[0]?.card?.card?.gridElements?.infoWithStyle?.info;

  if (!resturantList || !foodCategories) return <ShimmerUi />;

  return (
    <div className="container mx-auto py-4">
      <section className="mx-20 flex flex-col gap-6 py-10 ">
        <h1 className="text-3xl font-bold py-3">What's on your mind?</h1>
        <Scrollable data={foodCategories} WComponent={FoodCategory} />
      </section>
      <div className="border-b-2 border-solid border-gray-200  mx-20 "></div>
      <section className="mx-20 flex flex-col gap-6 py-10">
        <h1 className="text-3xl font-bold py-3">
          Top restaurant chains in Bangalore
        </h1>
        <Scrollable data={resturantList} WComponent={ResturantCard} />
      </section>
      <div className="border-b-2 border-solid border-gray-200  mx-20 "></div>
      <section className="mx-20 py-10">
        <h1 className="text-3xl font-bold py-3">
          Restaurants with online food delivery in Bangalore
        </h1>

        <ResturantList />
      </section>
    </div>
  );
};

export default Resturants;
