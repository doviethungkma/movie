import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../common/Navbar";

const AppLayout = () => {
  return (
    <div className="relative">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
