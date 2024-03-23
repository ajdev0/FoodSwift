import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaArrowLeftLong } from "react-icons/fa6";

const Scrollable = ({ data, WComponent }) => {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      const maxScrollValue =
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      setMaxScroll(maxScrollValue);
      setScrollPosition(scrollRef.current.scrollLeft);
    }
  }, [data]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 100;
      setScrollPosition(scrollRef.current.scrollLeft);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 100;
      setScrollPosition(scrollRef.current.scrollLeft);
    }
  };

  return (
    <div className="relative">
      <div className="flex gap-3 absolute right-0 top-0  ">
        <button
          onClick={scrollLeft}
          className={
            scrollPosition === 0
              ? "transform -translate-y-1/2 bg-slate-100 p-2 rounded-full text-gray-600"
              : "transform -translate-y-1/2 bg-gray-200 p-2 rounded-full text-gray-600"
          }
        >
          <FaArrowLeftLong />
        </button>
        <button
          onClick={scrollRight}
          className={
            scrollPosition === maxScroll
              ? "transform -translate-y-1/2 bg-slate-100 p-2 rounded-full text-gray-600"
              : "transform -translate-y-1/2 bg-gray-200 p-2 rounded-full text-gray-600"
          }
        >
          {" "}
          <FaArrowRight />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex items-center overflow-x-auto"
        style={{
          scrollBehavior: "smooth",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "20px",
        }}
      >
        {data.map((data, index) => (
          <div className="shrink-0">
            <WComponent data={data} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scrollable;
