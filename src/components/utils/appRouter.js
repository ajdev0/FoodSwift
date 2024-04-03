import { createBrowserRouter } from "react-router-dom";
import Search from "../../pages/Search";
import App from "../../App";
import Help from "../../pages/Help";
import Signin from "../../pages/Signin";
import Cart from "../../pages/Cart";
import Resturants from "../../pages/Resturants";
import Resturant from "../../pages/Resturant";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Resturants /> },
      { path: "/resturant/:id", element: <Resturant /> },
      { path: "search", element: <Search /> },
      { path: "help", element: <Help /> },
      { path: "signin", element: <Signin /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);
