import React from "react";
import logo from "../components/img/Design.png";
import FoodCategory from "../components/resturant/FoodCategory";
import Scrollable from "../components/common/Scrollable";
import ResturantCard from "../components/resturant/ResturantCard";

const Home = () => {
  const list = [
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
    logo,
  ];
  return (
    <div className="container mx-auto py-4">
      <section className="mx-20 flex flex-col gap-6 py-10 ">
        <h1 className="text-3xl font-bold p-3">What's on your mind?</h1>
        <Scrollable data={list} WComponent={FoodCategory} />
      </section>
      <div class="border-b-2 border-solid border-gray-200  mx-20 "></div>
      <section className="mx-20 flex flex-col gap-6 py-10">
        <h1 className="text-3xl font-bold p-3">
          Top restaurant chains in Bangalore
        </h1>
        <Scrollable data={list} WComponent={ResturantCard} />
      </section>
    </div>
  );
};

export default Home;
