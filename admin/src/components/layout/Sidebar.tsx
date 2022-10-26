import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { rootState } from "../../redux/store";
import Avatar from "./Avatar";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
import { toggleSideBar } from "../../redux/features/commonSlice";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isShowSidebar = useSelector(
    (state: rootState) => state.common.isShowSideBar
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      {(isShowSidebar || windowWidth >= 1024) && (
        <div className="fixed w-[280px] h-screen top-0 left-0 bg-[#28282d] shadow-menu z-30">
          <div
            className="logo w-full h-[70px] flex items-center px-7 text-white font-bold text-[24px] tracking-widest border-b-2 border-lime-500 cursor-pointer"
            onClick={() => {
              navigate("/");
              dispatch(toggleSideBar());
            }}
          >
            VIE<span className="text-green-500">ON</span>
          </div>
          <Avatar />
          <Menu />
        </div>
      )}
    </>
  );
};

export default Sidebar;
