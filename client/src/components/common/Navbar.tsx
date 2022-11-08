import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showLogin, toggleMenu } from "../../redux/features/commonSlice";
import LargeMenu from "./LargeMenu";
import SmallMenu from "./SmallMenu";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  });

  return (
    <div
      className="fixed flex justify-between items-center w-full h-14 px-4 lg:px-14 border-b border-b-[#ffffff1A] bg-transparent z-50"
      id="navbar"
    >
      <div className="flex items-center h-full gap-7 cursor-pointer">
        <i
          className="bx bx-menu text-[24px] text-white cursor-pointer hover:text-green-500 transition-all sm:hidden"
          onClick={() => {
            dispatch(toggleMenu());
          }}
        ></i>
        <img
          src={require("../../assets/icons/logo.svg").default}
          alt="logo"
          className="h-7"
          onClick={() => navigate("/")}
        />
        {windowWidth > 640 ? <LargeMenu /> : <SmallMenu />}
      </div>
      <div className="flex gap-4">
        <i className="bx bx-search text-[24px] text-white cursor-pointer hover:text-green-500 transition-all"></i>
        <i className="bx bx-cloud-download text-[24px] text-white cursor-pointer hover:text-green-500 transition-all"></i>
        <i
          className="bx bx-user-circle text-[24px] text-white cursor-pointer hover:text-green-500 transition-all"
          onClick={() => {
            if (token === null || token === undefined) dispatch(showLogin());
          }}
        ></i>
      </div>
    </div>
  );
};

export default Navbar;
