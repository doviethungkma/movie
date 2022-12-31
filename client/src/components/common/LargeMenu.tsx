import React from "react";
import { menu } from "../../models/menu";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const LargeMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar__menu h-full flex gap-8 ml-11 hidden md:flex">
      {menu.map((item, index) => (
        <div
          key={item.id}
          className="flex gap-3  items-center hover:text-gray-400 cursor-pointer transition-all"
          onClick={() =>
            navigate(item._id === "" ? `/` : `/movie/list/${item._id}`, {
              state: { title: item.name },
            })
          }
        >
          <Icon icon={item.icon} className="text-[20px]" />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default LargeMenu;
