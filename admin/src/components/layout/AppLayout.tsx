import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Sidebar from "./../common/Sidebar";

const AppLayout = () => {
  return (
    <div className="main w-full h-ful z-10 bg-[#2b2b31]">
      <div className="navbar lg:hidden">
        <Navbar />
      </div>
      <Sidebar />
      <div className="content w-[calc(100%-280px)] ml-[280px] px-4 py-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
