import React from "react";
import Avatar from "./Avatar";
import Menu from "./Menu";

const Sidebar = () => {
  return (
    <div className="fixed w-[280px] h-screen top-0 left-0 bg-[#28282d] shadow-menu z-30">
      <div className="logo w-full h-[70px] flex items-center px-7 text-white font-bold text-[24px] tracking-widest border-b-2 border-lime-500 cursor-pointer">
        VIE<span className="text-green-500">ON</span>
      </div>
      <Avatar />
      <Menu />
    </div>
  );
};

export default Sidebar;
