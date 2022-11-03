import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import userApi from "../../api/user";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  const navigate = useNavigate();

  const checkAuth = async () => {
    const isAuth = localStorage.getItem("token");
    if (!isAuth) navigate("/login");
    //check token is valid
    try {
      const response: any = await userApi.verifyToken();
      console.log(response);
      if (response.status === "inactive") {
        toast.error("User is blocked", { position: toast.POSITION.TOP_RIGHT });
        navigate("/login");
      }
    } catch (error) {
      console.log("catch");
      navigate("login");
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className="main w-full h-ful z-10 bg-[#2b2b31]">
      <div className="navbar lg:hidden">
        <Navbar />
      </div>
      <Sidebar />
      <div className="content w-full lg:w-[calc(100%-280px)] lg:ml-[280px] px-4 py-4">
        <Outlet />
      </div>
      <ToastContainer />
    </div>
  );
};

export default AppLayout;
