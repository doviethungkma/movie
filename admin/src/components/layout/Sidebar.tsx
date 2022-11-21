import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { rootState } from "../../redux/store";
import Avatar from "./Avatar";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
import { toggleSideBar } from "../../redux/features/commonSlice";
import userApi from "./../../api/user";

interface IUserState {
  username?: string;
  role?: string;
  status?: string;
  id?: string;
}

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [user, setUser] = useState({
    username: "",
    role: "",
    status: "",
    id: "",
  });
  console.log(user);

  const isShowSidebar = useSelector(
    (state: rootState) => state.common.isShowSideBar
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    const getUser = async () => {
      const userId = localStorage.getItem("id");
      const response: any = await userApi.getById(userId as string);
      setUser(response.user);
    };
    getUser();
  }, []);

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
          <Avatar username={user.username} role={user.role} />
          <Menu accessRole={user.role} />
        </div>
      )}
    </>
  );
};

export default Sidebar;
