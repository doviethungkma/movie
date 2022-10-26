import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <div className="main w-full h-ful z-10 bg-[#2b2b31]">
      <div className="navbar lg:hidden">
        <Navbar />
      </div>
      <Sidebar />
      <div className="content w-full lg:w-[calc(100%-280px)] lg:ml-[280px] px-4 py-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
