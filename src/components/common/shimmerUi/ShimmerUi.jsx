import React from "react";
import CardShimmerUi from "./cardShimmerUi";

const ShimmerUi = () => {
  return (
    <div className="container mx-auto py-4">
      <section className="mx-20 flex flex-col gap-10 py-10 ">
        <div className="flex flex-col">
          <div className="flex flex-col gap-3">
            <div className="w-60 h-4 bg-slate-200 rounded animate-pulse"></div>
            <div className="flex gap-4 animate-pulse">
              <div className="w-36 h-36 rounded-full bg-slate-200"></div>
              <div className="w-36 h-36 rounded-full bg-slate-200"></div>
              <div className="w-36 h-36 rounded-full bg-slate-200"></div>
              <div className="w-36 h-36 rounded-full bg-slate-200"></div>
              <div className="w-36 h-36 rounded-full bg-slate-200"></div>
              <div className="w-36 h-36 rounded-full bg-slate-200"></div>
              <div className="w-36 h-36 rounded-full bg-slate-200"></div>
            </div>
          </div>
          <div className="flex flex-col gap-3 py-8">
            <div className="w-60 h-4 bg-slate-200 rounded animate-pulse"></div>

            <div className="flex gap-4">
              <div className="flex flex-col animate-pulse">
                <div className="object-cover drop-shadow-md w-56 h-36 rounded-md bg-slate-400"></div>
                <div className="flex flex-col px-2 py-3 max-w-60">
                  <div className="w-36 h-2 rounded-md bg-slate-200"></div>
                  <div className="flex flex-col items-start gap-1 font-bold text-sm py-3">
                    <div className=" w-24 h-2 rounded-md bg-slate-200"></div>
                    <div className=" w-20 h-2 rounded-md bg-slate-200"></div>
                    <div className=" w-20 h-2 rounded-md bg-slate-200"></div>
                  </div>
                  <p className="font-light text-nowrap overflow-hidden text-ellipsis"></p>
                </div>
              </div>
              <div className="flex flex-col animate-pulse">
                <div className="object-cover drop-shadow-md w-56 h-36 rounded-md bg-slate-400"></div>
                <div className="flex flex-col px-2 py-3 max-w-60">
                  <div className="w-36 h-2 rounded-md bg-slate-200"></div>
                  <div className="flex flex-col items-start gap-1 font-bold text-sm py-3">
                    <div className=" w-24 h-2 rounded-md bg-slate-200"></div>
                    <div className=" w-20 h-2 rounded-md bg-slate-200"></div>
                    <div className=" w-20 h-2 rounded-md bg-slate-200"></div>
                  </div>
                  <p className="font-light text-nowrap overflow-hidden text-ellipsis"></p>
                </div>
              </div>
              <div className="flex flex-col animate-pulse">
                <div className="object-cover drop-shadow-md w-56 h-36 rounded-md bg-slate-400"></div>
                <div className="flex flex-col px-2 py-3 max-w-60">
                  <div className="w-36 h-2 rounded-md bg-slate-200"></div>
                  <div className="flex flex-col items-start gap-1 font-bold text-sm py-3">
                    <div className=" w-24 h-2 rounded-md bg-slate-200"></div>
                    <div className=" w-20 h-2 rounded-md bg-slate-200"></div>
                    <div className=" w-20 h-2 rounded-md bg-slate-200"></div>
                  </div>
                  <p className="font-light text-nowrap overflow-hidden text-ellipsis"></p>
                </div>
              </div>
              <div className="flex flex-col animate-pulse">
                <div className="object-cover drop-shadow-md w-56 h-36 rounded-md bg-slate-400"></div>
                <div className="flex flex-col px-2 py-3 max-w-60">
                  <div className="w-36 h-2 rounded-md bg-slate-200"></div>
                  <div className="flex flex-col items-start gap-1 font-bold text-sm py-3">
                    <div className=" w-24 h-2 rounded-md bg-slate-200"></div>
                    <div className=" w-20 h-2 rounded-md bg-slate-200"></div>
                    <div className=" w-20 h-2 rounded-md bg-slate-200"></div>
                  </div>
                  <p className="font-light text-nowrap overflow-hidden text-ellipsis"></p>
                </div>
              </div>
              <div className="flex flex-col animate-pulse">
                <div className="object-cover drop-shadow-md w-56 h-36 rounded-md bg-slate-400"></div>
                <div className="flex flex-col px-2 py-3 max-w-60">
                  <div className="w-36 h-2 rounded-md bg-slate-200"></div>
                  <div className="flex flex-col items-start gap-1 font-bold text-sm py-3">
                    <div className=" w-24 h-2 rounded-md bg-slate-200"></div>
                    <div className=" w-20 h-2 rounded-md bg-slate-200"></div>
                    <div className=" w-20 h-2 rounded-md bg-slate-200"></div>
                  </div>
                  <p className="font-light text-nowrap overflow-hidden text-ellipsis"></p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-60 h-4 bg-slate-200 rounded animate-pulse"></div>

          <CardShimmerUi />
        </div>
      </section>
    </div>
  );
};

export default ShimmerUi;
