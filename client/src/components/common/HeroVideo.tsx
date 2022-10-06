import { useEffect, useState } from "react";
import { IMovie } from "../../interfaces/movie";
import movieApi from "./../../api/movieApi";

const HeroVideo = () => {
  const [movie, setMovie] = useState<IMovie>();
  const getMovie = async () => {
    const response: any = await movieApi.getById("633ea0b961d50984847bc135");
    setMovie(response.movie);
  };

  console.log(movie);
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      {movie && (
        <div className="relative w-screen bg-gray-500 z-10 m-0 p-0 overflow-clip">
          <video
            width="100%"
            height="auto"
            autoPlay
            loop
            muted
            className="absolute aspect-video bg-black"
          >
            <source src={movie?.trailer} type="video/mp4" />
          </video>

          <div className="w-full aspect-video top-0 left-0">
            <div className="absolute bottom-1/2 translate-y-1/2 left-[50px] max-w-sm lg:max-w-[800px]">
              <img
                src={movie?.nameImage}
                alt=""
                className="w-1/3 max-w-1/3 lg:w-auto"
              />
              <h4 className="mt-4 lg:mt-8  text-white text-[16px] font-bold">
                {movie?.type}
              </h4>
              <p className="mt-4 lg:mt-8  text-white text-lg hidden sm:block max-w-3/4 w-full">
                {movie?.description}
              </p>
              <div className="flex gap-6 mt-4 md:mt8">
                <button className="flex justify-center items-center w-[150px] px-4 py-2 gap-2 bg-white rounded-sm">
                  <i className="bx bx-play text-[28px]"></i>
                  <span className="font-bold">Xem ngay</span>
                </button>
                <button className="flex justify-center items-center gap-2 w-[150px] px-4 py-2 border">
                  <i className="bx bx-info-circle text-[24px] text-white"></i>
                  <span className="text-white">Chi tiet</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroVideo;
