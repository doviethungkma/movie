import React from "react";
import { menu } from "../../models/menu";

const LargeMenu = () => {
  return (
    <div className="flex items-center h-full gap-7">
      {menu.map((item, index) => (
        <div className="flex gap-2 cursor-pointer " key={item.id}>
          <img src={item.icon} alt={item.icon} />
          <p className="text-white hover:text-green-500 transition-all">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default LargeMenu;
