import React from "react";
import { menu } from "../../models/menu";

const LargeMenu = () => {
  return (
    <div className="navbar__menu h-full flex gap-8 ml-11 hidden md:flex">
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
  );
};

export default LargeMenu;
