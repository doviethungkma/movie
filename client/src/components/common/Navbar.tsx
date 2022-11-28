import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showLoginPopup, showMenu } from "../../redux/features/commonSlice";
import LargeMenu from "./LargeMenu";
import SmallMenu from "./SmallMenu";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const token = localStorage.getItem("token");
  console.log(token);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar fixed w-full h-[55px] bg-transparent flex items-center justify-between px-6 md:px-[58px] text-white border-b border-b-thin z-10">
      <div className="flex justify-between gap-4 items-center">
        <div className=" text-[28px] cursor-pointer md:hidden">
          <i
            className="bx bx-menu-alt-left"
            onClick={() => dispatch(showMenu())}
          ></i>
        </div>
        <img
          src={require("../../assets/icons/logo.svg").default}
          alt="logo"
          className="w-[90px] h-[28px] cursor-pointer"
          onClick={() => navigate("/")}
        />
        {windowWidth > 768 ? <LargeMenu /> : <SmallMenu />}
      </div>
      <div className="navbar__icon flex gap-5">
        <i className="bx bx-search text-[28px] cursor-pointer hover:text-gray-400 transition-all"></i>
        {token === undefined || token === null ? (
          <i
            className="bx bx-user-circle text-[28px] cursor-pointer hover:text-gray-400 transition-all"
            onClick={() => dispatch(showLoginPopup())}
          ></i>
        ) : (
          <p className="cursor-pointer hover:text-green-500 transition-all capitalize">
            {localStorage.getItem("username")}
          </p>
        )}
      </div>
    </div>
  );
};

export default Navbar;
