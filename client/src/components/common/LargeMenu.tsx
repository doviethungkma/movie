import React from "react";
import { menu } from "../../models/menu";
import { useNavigate } from "react-router-dom";

const LargeMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar__menu h-full flex gap-8 ml-11 hidden md:flex">
      {menu.map((item, index) => (
        <div
          key={item.id}
          className="flex gap-3 hover:text-gray-400 cursor-pointer transition-all"
          onClick={() => navigate("/")}
        >
          <img src={item.icon} alt="" />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default LargeMenu;
