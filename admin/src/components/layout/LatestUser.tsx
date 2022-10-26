import React from "react";

const LatestUser = () => {
  return (
    <div className="w-full bg-[#28282d] mt-10">
      <div className="title flex justify-between items-center px-5 py-4 border-b border-thin">
        <div className="flex items-center justify-start gap-2">
          <img
            src={require("../../assets/icons/user-circle.svg").default}
            alt=""
          />
          <h4 className="text-lg text-white">Latest user</h4>
        </div>
        <div className="flex items-center justify-start gap-2">
          <i className="bx bx-refresh text-lg text-gray-300"></i>
          <div className="bg-[rgba(255,255,255,0.05)] text-xs text-gray-300 p-1 rounded">
            View all
          </div>
        </div>
      </div>
      <div className="table w-full px-5 py-2">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-xs text-gray-400 text-left">Id</th>
              <th className="text-xs text-gray-400 text-left">Fullname</th>
              <th className="text-xs text-gray-400 text-left">Email</th>
              <th className="text-xs text-gray-400 text-left">Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-white text-[14px] py-3">23</td>
              <td className="text-white text-[14px] py-3">John Doe</td>
              <td className="text-white text-[14px] py-3">johndoe@gmail.com</td>
              <td className="text-white text-[14px] py-3">johndoe</td>
            </tr>
            <tr>
              <td className="text-white text-[14px] py-3">23</td>
              <td className="text-white text-[14px] py-3">John Doe</td>
              <td className="text-white text-[14px] py-3">johndoe@gmail.com</td>
              <td className="text-white text-[14px] py-3">johndoe</td>
            </tr>
            <tr>
              <td className="text-white text-[14px] py-3">23</td>
              <td className="text-white text-[14px] py-3">John Doe</td>
              <td className="text-white text-[14px] py-3">johndoe@gmail.com</td>
              <td className="text-white text-[14px] py-3">johndoe</td>
            </tr>
            <tr>
              <td className="text-white text-[14px] py-3">23</td>
              <td className="text-white text-[14px] py-3">John Doe</td>
              <td className="text-white text-[14px] py-3">johndoe@gmail.com</td>
              <td className="text-white text-[14px] py-3">johndoe</td>
            </tr>
            <tr>
              <td className="text-white text-[14px] py-3">23</td>
              <td className="text-white text-[14px] py-3">John Doe</td>
              <td className="text-white text-[14px] py-3">johndoe@gmail.com</td>
              <td className="text-white text-[14px] py-3">johndoe</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestUser;
