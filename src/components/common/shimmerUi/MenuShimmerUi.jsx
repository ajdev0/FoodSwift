import React from "react";

const MenuShimmerUi = () => {
  return (
    <div>
      <div className="container w-1/2 mx-auto my-20 animate-pulse">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <p className="capitalize font-extrabold text-xl border-slate-200 border-t-4 w-28"></p>
            <div className="font-extralight text-sm capitalize">
              <p className=" border-slate-200 border-t-4 p-4 w-12"></p>
              <p className=" border-slate-200 border-t-4 p-3 w-10"></p>
            </div>
          </div>
        </div>
        <div className="font-extralight text-sm capitalize my-2">
          <p className=" border-slate-200 border-t-4 w-24"></p>
        </div>
        <div className="border-t border-dashed border-gray-300 my-4"></div>
        <div className="flex gap-4">
          <span className="flex items-center gap-1 font-bold">
            <p className=" border-slate-200 border-t-4 w-4"></p>
          </span>
        </div>
        <div className="border-t border-gray-300 my-6"></div>
        <div className="list flex flex-col gap-4">
          <p className=" bg-slate-200 p-8 w-100 h-20 rounded"></p>
          <p className=" bg-slate-200 p-8 w-100 h-20 rounded"></p>
          <p className=" bg-slate-200 p-8 w-100 h-20 rounded"></p>
          <p className=" bg-slate-200 p-8 w-100 h-20 rounded"></p>
        </div>
      </div>
    </div>
  );
};

export default MenuShimmerUi;
