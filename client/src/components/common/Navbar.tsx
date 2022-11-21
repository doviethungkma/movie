import React from "react";
import { menu } from "../../models/menu";

const Navbar = () => {
  return (
    <div className="navbar static w-full h-[55px] bg-transparent flex items-center justify-between px-[58px] text-white border-b border-b-thin">
      <div className="flex justify-between">
        <img
          src={require("../../assets/icons/logo.svg").default}
          alt="logo"
          className="w-[90px] h-[28px]"
        />
        <div className="navbar__menu h-full flex gap-8 ml-11 ">
          {menu.map((item, index) => (
            <div
              key={item.id}
              className="flex gap-3 hover:text-gray-400 cursor-pointer transition-all"
            >
              <img src={item.icon} alt="" />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="navbar__icon flex gap-5">
        <i className="bx bx-search text-[28px] cursor-pointer hover:text-gray-400 transition-all"></i>
        <i className="bx bx-user-circle text-[28px] cursor-pointer hover:text-gray-400 transition-all"></i>
      </div>
    </div>
  );
};

export default Navbar;
