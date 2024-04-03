import axios from "axios";
import React, { useEffect, useState } from "react";

const useResturantMenuData = (id) => {
  const [resturants, setResturants] = useState([]);

  useEffect(() => {
    resturantData();
  }, []);
  const resturantData = async () => {
    const response = await axios.get(process.env.REACT_APP_MENU_URL + id);
    setResturants(response?.data?.data?.cards);
    // console.log(response?.data?.data?.cards);
  };

  return resturants;
};

export default useResturantMenuData;
