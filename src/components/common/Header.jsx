import React from "react";
import logo from "../img/Design.png";
import { Link } from "react-router-dom";
import {
  IoSearchSharp,
  IoHelpCircleOutline,
  IoLogInOutline,
  IoLogOut,
  IoHome,
} from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
import { selectCartItems } from "../utils/redux/cartSlice";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const cartItems = useSelector(selectCartItems);
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
  console.log(isAuthenticated);

  return (
    <div className=" shadow-md fixed top-0 w-full z-10 bg-white">
      <div className="flex justify-between items-center container mx-auto">
        <div>
          <Link to="/">
            <img src={logo} className="w-16" />
          </Link>
        </div>
        <div className="flex gap-10 items-center">
          <Link to="/" className="hover:text-red-400">
            <span className="flex justify-center items-center gap-1">
              <IoHome />
              Home
            </span>
          </Link>
          <Link to="/search" className="hover:text-red-400">
            <span className="flex justify-center items-center gap-1 ">
              <IoSearchSharp /> Search
            </span>
          </Link>
          {!isAuthenticated ? (
            <Link
              onClick={() => loginWithRedirect()}
              className="hover:text-red-400"
            >
              <span className="flex justify-center items-center gap-1">
                <IoLogInOutline />
                Signin
              </span>
            </Link>
          ) : (
            <Link className="hover:text-red-400">
              <span className="flex justify-center items-center capitalize">
                {user?.name}
              </span>
            </Link>
          )}

          <Link to="/cart" className="hover:text-red-400">
            <span className="flex justify-center items-center gap-1">
              <div
                className={
                  cartItems.length !== 0
                    ? "relative inline-block text-red-400"
                    : "relative inline-block"
                }
              >
                <span className="">
                  <CiShoppingCart size={32} />
                </span>
                <span className="absolute text-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-0.5 py-2  ">
                  {cartItems.length}
                </span>
              </div>
              Cart
            </span>
          </Link>
          {isAuthenticated && (
            <Link
              onClick={() =>
                logout({
                  logoutParams: { returnTo: "http://localhost:1234" },
                  clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
                })
              }
              className="hover:text-red-400"
            >
              <span className="flex justify-center items-center gap-1">
                <IoLogOut />
                Log Out
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
