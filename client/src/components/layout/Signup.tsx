import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import authApi from "../../api/authApi";
import {
  hideLoginPopup,
  hideSignupPopup,
  showLoginPopup,
} from "../../redux/features/commonSlice";
import Button from "../common/Button";
import Overlay from "../common/Overlay";

interface ISignupState {
  username: string;
  password: string;
  email: string;
}

const Signup = () => {
  const dispatch = useDispatch();
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [auth, setAuth] = useState<ISignupState>({
    username: "",
    password: "",
    email: "",
  });

  const handleSignup = async () => {
    try {
      const response = await authApi.register(auth);
      const { token, status, user } = response.data;
      if (status === "success") {
        localStorage.setItem("token", token);
        localStorage.setItem("id", user.id);
        localStorage.setItem("username", user.username);
        toast.success("Register user successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        dispatch(hideSignupPopup());
      } else {
        toast.error("Register user failed", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      toast.error("Register user failed", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-screen h-screen fixed z-40 text-white">
      <Overlay onClick={() => dispatch(hideLoginPopup())} />
      <div className="w-[90%] max-w-[600px] max-h-[90%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm border-t-4 border-t-green-500 overflow-scroll no-scrollbar bg-background-color">
        <i
          className="bx bx-x absolute top-4 right-4 text-[32px] hover:text-green-500 transition-all cursor-pointer"
          onClick={() => dispatch(hideSignupPopup())}
        ></i>
        <div className="w-full px-8 flex flex-col gap-8 my-14 ">
          <h4 className="text-center text-lg font-bold">Đăng ký</h4>
          <div className="relative w-full flex items-center">
            <i className="bx bxs-user absolute text-[28px] text-gray-500"></i>
            <input
              type="text"
              name="username"
              placeholder="Tên đăng nhập"
              className="w-full py-2 px-9 text-md bg-transparent border-b border-b-thin focus:outline-none focus:border-b-white"
              onChange={handleInputChange}
            />
          </div>
          <div className="relative w-full flex items-center">
            <i className="bx bxs-key absolute text-[28px] text-gray-500"></i>
            <input
              type={isShowPassword ? "text" : "password"}
              name="password"
              placeholder="Mật khẩu"
              className="w-full py-2 px-9 text-md bg-transparent border-b border-b-thin focus:outline-none focus:border-b-white"
              onChange={handleInputChange}
            />
            <i
              className={`${
                isShowPassword ? "bx bx-hide" : "bx bx-show"
              } absolute text-[28px] text-gray-500 right-0 cursor-pointer hover:text-white transition-all`}
              onClick={() => setIsShowPassword(!isShowPassword)}
            ></i>
          </div>
          <div className="relative w-full flex items-center">
            <i className="bx bxs-envelope absolute text-[28px] text-gray-500"></i>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full py-2 px-9 text-md bg-transparent border-b border-b-thin focus:outline-none focus:border-b-white"
              onChange={handleInputChange}
            />
          </div>

          <Button
            width="w-full"
            height="h-12"
            bg="bg-white"
            color="text-gray-800"
            hover="hover:text-white hover:bg-green-500"
            className="rounded-sm font-bold"
            onClick={handleSignup}
          >
            Đăng ký
          </Button>
        </div>
        <div className="py-8 border-t border-t-thin">
          <p className="px-8 text-center text-gray-500 text-md font-bold">
            Bạn đã có tài khoản?{" "}
            <span
              className="text-white cursor-pointer hover:text-green-500 transition-all"
              onClick={() => {
                dispatch(hideSignupPopup());
                dispatch(showLoginPopup());
              }}
            >
              Đăng nhập ngay
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
