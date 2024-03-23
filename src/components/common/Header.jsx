import React from "react";
import logo from "../img/Design.png";
import { Link } from "react-router-dom";
import {
  IoSearchSharp,
  IoHelpCircleOutline,
  IoLogInOutline,
  IoCartOutline,
} from "react-icons/io5";

const Header = () => {
  return (
    <div className=" shadow-md">
      <div className="flex justify-between items-center container mx-auto">
        <div>
          <Link to="/">
            <img src={logo} className="w-16" />
          </Link>
        </div>
        <div className="flex gap-10">
          <Link to="/search" className="hover:text-red-400">
            <span className="flex justify-center items-center gap-1 ">
              <IoSearchSharp /> Search
            </span>
          </Link>
          <Link to="/help" className="hover:text-red-400">
            <span className="flex justify-center items-center gap-1">
              <IoHelpCircleOutline />
              Help
            </span>
          </Link>
          <Link to="/signin" className="hover:text-red-400">
            <span className="flex justify-center items-center gap-1">
              <IoLogInOutline />
              Signin
            </span>
          </Link>
          <Link to="/cart" className="hover:text-red-400">
            <span className="flex justify-center items-center gap-1">
              <IoCartOutline />
              Cart
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
