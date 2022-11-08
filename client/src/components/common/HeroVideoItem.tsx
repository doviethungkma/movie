import React from "react";
import { IMovie } from "../../interfaces/movie";
import { useDispatch } from "react-redux";
import { showVideoPopup } from "../../redux/features/commonSlice";
import { setMovie } from "../../redux/features/movieSlice";
import { useNavigate } from "react-router-dom";

interface IProps {
  item: IMovie;
}

const HeroVideoItem = (props: IProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="relative w-screen h-screen bg-gray-500 z-10 m-0 p-0 overflow-clip">
      {props.item.trailer ? (
        <video
          width="100%"
          height="auto"
          autoPlay
          loop
          muted
          className="absolute aspect-video bg-black"
        >
          <source src={props.item.trailer} type="video/mp4" />
        </video>
      ) : (
        <img
          src={props.item.thumb}
          alt={props.item.thumb}
          className="w-full h-full object-cover"
        />
      )}

      <div className="w-full aspect-video top-0 left-0">
        <div className="absolute bottom-1/2 translate-y-1/2 left-[50px] max-w-sm lg:max-w-[800px]">
          <img
            src={props.item.nameImage}
            alt=""
            className="w-1/3 max-w-1/3 lg:w-auto"
          />
          <h4 className="mt-4 lg:mt-8  text-white text-[16px] font-bold">
            {props.item.type}
          </h4>
          <p className="mt-4 lg:mt-8  text-white text-lg hidden sm:block max-w-3/4 w-full">
            {props.item.description}
          </p>
          <div className="flex gap-6 mt-4 md:mt8">
            <button
              className="flex justify-center items-center w-[150px] px-4 py-2 gap-2 bg-white rounded-sm"
              onClick={() => {
                navigate(`/movie/watch/${props.item._id}`);
              }}
            >
              <i className="bx bx-play text-[28px]"></i>
              <span className="font-bold">Xem ngay</span>
            </button>
            <button
              className="flex justify-center items-center gap-2 w-[150px] px-4 py-2 border"
              onClick={() => {
                dispatch(setMovie({ movie: props.item }));
                dispatch(showVideoPopup());
              }}
            >
              <i className="bx bx-info-circle text-[24px] text-white"></i>
              <span className="text-white">Chi tiet</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVideoItem;
