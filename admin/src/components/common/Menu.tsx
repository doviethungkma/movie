import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { menu } from "../../models/menu";

const Menu = () => {
  const [activeItem, setActiveItem] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="menu w-full h-full p-7">
      <ul>
        {menu &&
          menu.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-start gap-2 py-3 cursor-pointer"
              onClick={() => {
                setActiveItem(index);
                navigate(item.path);
              }}
            >
              <i
                className={`${item.icon} text-lg  ${
                  index === activeItem ? "text-green-500" : "text-gray-300"
                }`}
              />
              <h3
                className={`text-[14px] uppercase ${
                  index === activeItem ? "text-green-500" : "text-gray-300"
                }`}
              >
                {item.name}
              </h3>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Menu;
