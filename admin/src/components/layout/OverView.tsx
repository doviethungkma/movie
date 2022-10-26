import React from "react";
import { overviewModel } from "../../models/overviewModel";

const OverView = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
      {overviewModel.map((item, index) => (
        <div
          key={index}
          className="w-full px-4 py-2 bg-[#28282d] border-t-4 border-lime-500"
        >
          <p className="text-[14px] text-gray-400">{item.title}</p>
          <div className="flex items-center justify-between mt-2">
            <h3 className="text-[36px] text-white">{item.value}</h3>
            <img src={item.icon} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverView;
