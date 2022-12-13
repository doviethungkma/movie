import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { menu } from "../../models/menu";
import { hideMenu } from "../../redux/features/commonSlice";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";

const SmallMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isShowMenu = useSelector((state: RootState) => state.common.isShowMenu);

  return (
    <>
      {isShowMenu && (
        <div className="w-full xs:w-[50%] h-screen fixed top-0 left-0 flex flex-col bg-[#111111] opacity-95 md:hidden">
          <div className="w-full hover:text-green-400 cursor-pointer transition-all px-6 py-3">
            <i
              className="bx bx-x float-right text-[28px]"
              onClick={() => dispatch(hideMenu())}
            ></i>
          </div>
          {menu.map((item, index) => (
            <div
              key={item.id}
              className="w-full flex gap-3 hover:text-gray-400 cursor-pointer transition-all px-6 py-3"
              onClick={() =>
                navigate(item._id === "" ? `/` : `/movie/list/${item._id}`)
              }
            >
              <img src={item.icon} alt="" />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SmallMenu;
