import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  hideLogin,
  hideSignup,
  showLogin,
} from "../../redux/features/commonSlice";
import { IUser } from "../../interfaces/auth";
import authApi from "./../../api/authApi";

const Signup = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState<IUser>();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    const value = e.target.value;
    setUser({ ...(user as IUser), [key]: value });
  };

  const signup = async () => {
    try {
      const response: any = await authApi.register(user);
      if (response && response.status === "success") {
        localStorage.setItem("token", response.token);
        localStorage.setItem("username", response.user.username);
        localStorage.setItem("_id", response.user.id);
        toast.success("Đăng ký tài khoản thành công");
        dispatch(hideLogin());
        dispatch(hideSignup());
      } else {
        toast.error(response.error.msg);
      }
    } catch (error: any) {
      toast.error(error.data.error[0].msg);
    }
  };

  return (
    <>
      <div className="w-screen h-screen fixed top-0 left-0 bg-black opacity-60"></div>
      <div className="h-5/6 max-h-[600px] w-5/6 max-w-[600px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  overflow-y-scroll no-scrollbar z-50 rounded-sm">
        <div className="flex-column px-6 border-t-4 border-t-primary-color bg-modal-background-color">
          <div className="flex justify-end mt-6">
            <i
              className="bx bx-x text-[32px] text-white cursor-pointer hover:text-primary-color transition-all"
              onClick={() => {
                dispatch(hideLogin());
                dispatch(hideSignup());
              }}
            ></i>
          </div>
          <h2 className="text-[28px] font-bold text-white text-center mb-8">
            Đăng ký
          </h2>
          <div className="relative w-full flex items-center">
            <i className="bx bx-user absolute text-[24px] text-gray-500"></i>
            <input
              type="text"
              name="username"
              placeholder="Tên đăng nhập"
              className="w-full px-8 py-2 bg-transparent border-b border-b-[#646464] text-white focus:outline-none focus:border-b-white "
              onChange={handleInput}
            />
          </div>
          <div className="relative w-full flex items-center mt-8">
            <i className="bx bxs-key absolute text-[24px] text-gray-500"></i>
            <input
              type="password"
              name="password"
              placeholder="Mật khẩu"
              className="w-full px-8 py-2 bg-transparent border-b border-b-[#646464] text-white focus:outline-none focus:border-b-white "
              onChange={handleInput}
            />
          </div>
          <button
            className={`w-full mt-8 py-2 text-[#646464] ${
              user?.username === "" ||
              user?.password === "" ||
              user?.username === undefined ||
              user?.password === undefined
                ? "bg-[#454545]"
                : "bg-white"
            }`}
            onClick={signup}
          >
            Đăng ký
          </button>
          <p className="mt-8 text-[#9b9b9b] text-sm text-center ">
            Bằng cách đăng ký, bạn đã đồng ý với{" "}
            <span className="text-white cursor-pointer hover:text-primary-color transition-all">
              {" "}
              Điều khoản sử dụng{" "}
            </span>{" "}
            của VieON
          </p>
          <p className="mt-8 text-[#9b9b9b] font-bold text-center ">Hoặc</p>

          <div className="py-8">
            <p className="text-white text-center">
              Bạn đã có tài khoản?{" "}
              <b
                className="cursor-pointer hover:text-primary-color"
                onClick={() => {
                  dispatch(showLogin());
                  dispatch(hideSignup());
                }}
              >
                Đăng nhập ngay
              </b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
