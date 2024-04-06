import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/common/Header";
import store from "./components/utils/redux/store";
import { Provider } from "react-redux";
import Footer from "./components/common/Footer";
import { Auth0Provider } from "@auth0/auth0-react";

const App = () => {
  return (
    <div>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <Provider store={store}>
          <Header />
          <div className="my-10">
            <Outlet />
          </div>
          <Footer />
        </Provider>
      </Auth0Provider>
    </div>
  );
};

export default App;
