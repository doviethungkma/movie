import { useState } from "react";
import Input from "../components/common/Input";
import { useAppDispatch } from "../hooks/useTypedSelector";
import userApi from "./../api/user";
import { IAuth } from "./../interfaces/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<IAuth>({
    username: "",
    password: "",
  });

  console.log(user);
  const handleOnChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const loginHandle = async () => {
    try {
      const response: any = await userApi.login(user);
      if (response.user.role === "user") {
        navigate("/login");
        toast.error("Your user cannot access this page", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else if (response.user.status === "inactive") {
        toast.error("User is blocked", { position: toast.POSITION.TOP_RIGHT });
        navigate("/login");
      } else {
        localStorage.setItem("token", response.token);
        localStorage.setItem("id", response.user.id);
        toast.success("Login successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate("/");
      }
    } catch (error) {
      toast.error("Login failed", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className="bg-login w-screen h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center">
      <div className="w-[90%] max-w-[400px] p-12 flex flex-col items-center  border-t-2 border-green-500 bg-[#28282d] shadow-lg">
        <h3 className="text-[32px] text-white font-bold mt-10">
          VIE<span className="text-green-500">ON</span>
        </h3>
        <div className="w-full mt-5">
          <Input
            name="username"
            placeholder="Username"
            height="h-[50px]"
            width="w-full"
            noTitle
            onChange={handleOnChange}
          />
        </div>
        <div className="w-full mt-5">
          <Input
            name="password"
            placeholder="Password"
            height="h-[50px]"
            width="w-full"
            type="password"
            noTitle
            onChange={handleOnChange}
          />
        </div>
        <div className="w-full flex justify-start items-center mt-5">
          <input
            type="checkbox"
            className="w-4 h-4 accent-green-500 bg-[#252529]"
          />
          <p className="text-gray-500 flex-grow ml-4">Remember Me</p>
        </div>
        <button
          className="w-full h-[50px] mt-10 bg-gradient-to-br from-green-500 to-green-400 rounded-lg text-white font-medium text-sm hover:bg-none hover:bg-gradient-to-br hover:from-green-500 hover:to-green-500 transition-all"
          onClick={loginHandle}
        >
          SIGN IN
        </button>
        <p className="text-green-500 mt-5 cursor-pointer hover:text-green-300 transition-all">
          Forgot password?
        </p>
      </div>
    </div>
  );
};

export default Login;
