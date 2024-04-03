import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/common/Header";
import store from "./components/utils/redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <div className="">
          <Outlet />
        </div>
      </Provider>
    </div>
  );
};

export default App;
