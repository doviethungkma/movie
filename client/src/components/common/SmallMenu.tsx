import React from "react";
import { menu } from "../../models/menu";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const SmallMenu = () => {
  const isShowMenu = useSelector((state: RootState) => state.common.isShowMenu);

  return (
    <>
      {isShowMenu && (
        <div className="fixed left-0 top-14 w-1/2 px-4 py-2 h-screen border border-[#000000] bg-background-color ">
          {menu.map((item, index) => (
            <div className="flex gap-2 py-2 cursor-pointer " key={item.id}>
              <img src={item.icon} alt={item.icon} />
              <p className="text-white hover:text-gray-400 transition-all">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SmallMenu;
