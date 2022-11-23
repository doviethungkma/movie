import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { toast, ToastContainer } from "react-toastify";
import Navbar from "../common/Navbar";

const AppLayout = () => {
  return (
    <div className="relative">
      <Navbar />
      <Outlet />
      <ToastContainer theme="dark" position={toast.POSITION.TOP_CENTER} />
    </div>
  );
};

export default AppLayout;
