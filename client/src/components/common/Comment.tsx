import React from "react";

const Comment = () => {
  return (
    <div className="w-full">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          alert("test");
        }}
      >
        <div className="flex gap-4 items-center mb-8">
          <img
            src={require("../../assets/images/avatar.jpg")}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <input
            type="text"
            name="comment"
            id="comment"
            placeholder="Them binh luan"
            className="w-full py-4 text-gray-500 bg-transparent focus:outline-none focus:border-b focus:border-thin"
          />
          <button type="submit" className="h-full flex items-center">
            <i className="bx bxs-send text-white text-[28px] cursor-pointer hover:text-green-500 transition-all"></i>
          </button>
        </div>
      </form>
      <div className="w-full mb-8">
        <div className="flex gap-4">
          <img
            src={require("../../assets/images/avatar.jpg")}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="w-full text-sm text-gray-500">
            <div className="flex justify-between">
              <p className="text-white">098***919</p>
              <p className="text-xs">2 ngày trước</p>
            </div>
            <p className="text-justify">
              Phim hay lắm nha Phim hay lắm nhaPhim hay lắm nhaPhim hay lắm
              nhaPhim hay lắm nhaPhim hay lắm nha Phim hay lắm nhaPhim hay lắm
              nhaPhim hay lắm nhaPhim hay lắm nhaPhim hay lắm nha Phim hay lắm
              nhaPhim hay lắm nhaPhim hay lắm nhaPhim hay lắm nhaPhim hay lắm
              nha Phim hay lắm nhaPhim hay lắm nhaPhim hay lắm nhaPhim hay lắm
              nha
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
