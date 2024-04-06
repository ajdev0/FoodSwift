import axios from "axios";
import React, { useEffect, useState } from "react";

const useResturantData = (txtId) => {
  const [resturants, setResturants] = useState([]);

  useEffect(() => {
    resturantList();
  }, []);
  const resturantList = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_API);

      const filteredData = response?.data?.data?.cards?.filter(
        (card) => card?.card?.card?.id === txtId
      );
      setResturants(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  return resturants;
};

export default useResturantData;
