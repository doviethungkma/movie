import React from "react";
import { useNavigate } from "react-router-dom";

const Avatar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    navigate("/login");
  };

  return (
    <div className="avatar w-full h-[80px] px-7 py-5 flex justify-between border-b border-thin">
      <div className="w-10 h-10 rounded-full bg-white">
        <img
          src={require("../../assets/icons/user.svg").default}
          alt=""
          className="max-w-full max-h-full object-cover rounded-full"
        />
      </div>
      <div className="text-white flex-grow ml-3">
        <p className="text-[10px] text-gray-400">Admin</p>
        <h4 className="text-[16px] font-bold">John Doe</h4>
      </div>
      <div className="w-10 h-10 rounded bg-[rgba(255,255,255,0.05)] flex items-center justify-center cursor-pointer">
        <img
          src={require("../../assets/icons/logout.svg").default}
          alt=""
          className="w-[70%] cursor-pointer"
          onClick={logout}
        />
      </div>
    </div>
  );
};

export default Avatar;
