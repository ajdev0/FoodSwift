import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black w-full text-slate-100 text-center p-4 font-light rounded-b fixed bottom-0">
      <span>
        Developrd by{" "}
        <Link to="https://github.com/ajdev0" target="_blank">
          Abrar Ibrarhim
        </Link>{" "}
        ©
      </span>
    </div>
  );
};

export default Footer;
