import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../common/Navbar";
import Login from "../common/Login";

import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const AppLayout = () => {
  const isShowLogin = useSelector(
    (state: RootState) => state.common.isShowLogin
  );
  const isShowSignup = useSelector(
    (state: RootState) => state.common.isShowSignup
  );

  return (
    <div className="relative">
      <Navbar />
      <Outlet />
      {isShowLogin && <Login />}

      <ToastContainer theme="dark" position={toast.POSITION.TOP_CENTER} />
    </div>
  );
};

export default AppLayout;
