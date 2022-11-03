import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import { checkAuth } from "./../../utils/authUtils";
import { useNavigate } from "react-router-dom";
import userApi from "./../../api/user";
import { toast } from "react-toastify";

const AuthLayout = () => {
  const [loading, setLoading] = useState(false);
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
      } else if (response.role === "user") {
        navigate("/login");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log("catch");
      navigate("login");
    }
  };

  useEffect(() => {
    checkAuth();
  }, [navigate]);

  return (
    <>
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default AuthLayout;
