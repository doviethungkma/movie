import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import movieApi from "./../api/movieApi";
import { IMovie } from "../interfaces/movie";

const Movie = () => {
  const params = useParams();
  const movieId = params.movieId as string;
  const [movie, setMovie] = useState<IMovie>();
  const [currentEp, setcurrentEp] = useState(0);
  const playbackImg = require("../assets/images/playbackImg.jpg");
  const movieNameImg = require("../assets/images/title-image2.webp");
  const navigate = useNavigate();

  //hide navbar on load
  useEffect(() => {
    const navbar = document.getElementById("navbar") as any;
    navbar.style.display = "none";

    const handleScroll = () => {
      if (window.pageYOffset < 1080) {
        const navbar = document.getElementById("navbar") as any;
        navbar.style.display = "none";
      } else {
        const navbar = document.getElementById("navbar") as any;
        navbar.style.display = "flex";
        navbar.style.backgroundColor = "#000";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await movieApi.getById(movieId);
      setMovie(response.movie);
    };
    fetchData();
  }, []);

  console.log(movie);
  return (
    <>
      <div className="w-screen h-auto aspect-video lg:h-screen relative">
        <div className="flex items-center gap-2 absolute top-4 left-8 z-30">
          <i
            className="bx bx-chevron-left text-white text-[36px] cursor-pointer hover:text-gray-500 transition-all"
            onClick={() => navigate("/")}
          ></i>
          <h2 className="text-white text-[28px]">
            {movie?.episodes && movie?.episodes[currentEp]?.title}
          </h2>
        </div>
        <ReactPlayer
          url={movie?.episodes && movie.episodes[currentEp].url}
          width="100%"
          height="100%"
          playing={true}
          controls
          light={movie?.thumb}
        />
      </div>
      <div className="max-w-full grid grid-cols-1 md:grid-cols-60/40 gap-x-12 p-4 md:p-8 text-white">
        <div className="md:col-span-2">
          <img src={movieNameImg} alt="" />
        </div>
        <div>
          <h2 className="text-[28px] mt-4">{movie?.name}</h2>
          <div className="flex items-center gap-4">
            <p className="text-sm">28.466.921 lượt xem</p>
            <div className="flex items-center gap-2">
              <span className="text-sm">4.5</span>
              <div>
                <i className="bx bxs-star text-yellow-500 text-sm"></i>
                <i className="bx bxs-star text-yellow-500 text-sm"></i>
                <i className="bx bxs-star text-yellow-500 text-sm"></i>
                <i className="bx bxs-star text-yellow-500 text-sm"></i>
                <i className="bx bxs-star text-yellow-500 text-sm"></i>
              </div>
            </div>
          </div>
          {movie?.episodes && movie.episodes.length > 1 && (
            <h3 className="font-bold text-lg mt-4">
              {movie.episodes[currentEp].title}
            </h3>
          )}

          <p className="mt-2 text-justify">{movie?.description}</p>
        </div>
        <div>
          <div className="flex gap-6 mt-6">
            <div className="flex flex-col items-center hover:text-gray-500 transition-all cursor-pointer">
              <i className="bx bxs-comment text-[28px] text-gray-200"></i>
              <p>Bình luận</p>
            </div>
            <div className="flex flex-col items-center hover:text-gray-500 transition-all cursor-pointer">
              <i className="bx bx-paper-plane text-[28px] text-gray-200"></i>
              <p>Chia sẻ</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-gray-500 ">
              Diễn viên: <span className="text-white">{movie?.actor}</span>
            </p>
            <p className="text-gray-500 ">
              Đạo diễn: <span className="text-white">Đạo diễn 1</span>
            </p>
            <p className="text-gray-500 ">
              Thể loại: <span className="text-white">{movie?.type}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
