import { AxiosResponse } from "axios";
import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IMovie } from "../../interfaces/movie";
import {
  showLoginPopup,
  showMenu,
  toggleUserMenuPopup,
} from "../../redux/features/commonSlice";
import { RootState } from "../../redux/store";
import movieApi from "./../../api/movieApi";
import LargeMenu from "./LargeMenu";
import SearchResultBox from "./SearchResultBox";
import SmallMenu from "./SmallMenu";
import UserDetailMenu from "./UserDetailMenu";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isShowSearch, setIsShowSearch] = useState(false);
  const token = localStorage.getItem("token");
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchResult, setSearchResult] = useState<IMovie[]>([]);
  const isShowUserDetailMenu = useSelector(
    (state: RootState) => state.common.isShowUserMenu
  );

  //search movie
  useEffect(() => {
    const getData = setTimeout(async () => {
      const response: AxiosResponse = await movieApi.searchMovie(searchInput);
      setSearchResult(response.data.result);
    }, 1000);

    return () => clearTimeout(getData);
  }, [searchInput]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const clearInput = () => {
    setSearchInput("");
    setIsShowSearch(false);
  };

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
        {windowWidth >= 768 ? <LargeMenu /> : <SmallMenu />}
      </div>
      <div className="navbar__icon flex gap-5 items-center">
        {isShowSearch && (
          <form
            onSubmit={() => alert("submit")}
            className="absolute right-[140px]"
          >
            <input
              type="text"
              className="w-[400px] pl-4 pr-8  h-9 bg-background-color outline-none focus:outline-white focus:outline-1 z-10"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchInput(e.target.value)
              }
            />
          </form>
        )}
        <i
          className="bx bx-search text-[24px] cursor-pointer hover:text-gray-400 transition-all z-20"
          onClick={() => {
            setSearchInput("");
            setIsShowSearch(!isShowSearch);
          }}
        ></i>
        {token === undefined || token === null ? (
          <i
            className="bx bx-user-circle text-[28px] cursor-pointer hover:text-gray-400 transition-all"
            onClick={() => dispatch(showLoginPopup())}
          ></i>
        ) : (
          <p
            className="cursor-pointer hover:text-green-500 transition-all capitalize"
            onClick={() => dispatch(toggleUserMenuPopup())}
          >
            {localStorage.getItem("username")}
          </p>
        )}
      </div>
      {searchInput !== "" && (
        <SearchResultBox listItem={searchResult} clearInput={clearInput} />
      )}
      {isShowUserDetailMenu && <UserDetailMenu />}
    </div>
  );
};

export default Navbar;
