import React from "react";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../../redux/features/commonSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="w-full h-[70px] px-4 flex items-center justify-between bg-[#212529] shadow-menu">
      <div
        className="logo text-white text-[28px] font-bold tracking-widest cursor-pointer"
        onClick={() => navigate("/")}
      >
        VIE<span className="text-green-500">ON</span>
      </div>
      <i
        className="bx bx-menu text-[32px] text-white cursor-pointer"
        onClick={() => {
          dispatch(toggleSideBar());
        }}
      ></i>
    </div>
  );
};

export default Navbar;
