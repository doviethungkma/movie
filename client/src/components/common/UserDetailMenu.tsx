import React from "react";
import { userDetailMenu } from "../../models/userDetaiMenu";
import { useDispatch } from "react-redux";
import { toggleUserMenuPopup } from "../../redux/features/commonSlice";
import { useNavigate } from "react-router-dom";

const UserDetailMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onItemClicked = (action: any) => {
    dispatch(toggleUserMenuPopup());
    dispatch(action);
  };
  return (
    <div className="absolute top-[55px] right-[58px] bg-background-color ">
      <div className="px-4 py-2 border-b border-thin">Hello</div>
      {userDetailMenu.map((item) => (
        <div
          className="px-4 py-2 border-b border-thin flex items-center gap-4 cursor-pointer hover:text-green-500 transition-all"
          onClick={() => onItemClicked(item.action)}
        >
          <i className={`${item.icon} text-xl`} />
          <h4>{item.name}</h4>
        </div>
      ))}

      <div
        className="px-4 py-2 border-b border-thin flex items-center gap-4 cursor-pointer hover:text-green-500 transition-all"
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("id");
          localStorage.removeItem("username");
          dispatch(toggleUserMenuPopup());
          navigate("/");
        }}
      >
        <i className={`bx bx-log-out text-xl`} />
        <h4>Đăng xuất</h4>
      </div>
    </div>
  );
};

export default UserDetailMenu;
