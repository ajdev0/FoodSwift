import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/common/Header";

const App = () => {
  return (
    <div>
      <Header />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
