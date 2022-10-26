// import required modules
import HeroVideo from "../components/common/HeroVideo";
import Slider from "../components/common/Slider";
import VideoPopup from "../components/common/VideoPopup";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import movieApi from "../api/movieApi";
import { useEffect } from "react";
import { useState } from "react";
import { IMovie } from "../interfaces/movie";

const Home = () => {
  const isShowVideoPopup = useSelector(
    (state: RootState) => state.common.isShowVideoPopup
  );
  const movie = useSelector((state: RootState) => state.movie.movie);
  const [movieList, setMovieList] = useState() as any;

  const fetchData = async () => {
    const response = (await movieApi.getAll()) as any;
    setMovieList(response.movies);
    console.log(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="-z-10 bg-background-color">
      <HeroVideo />
      <div className="w-full absolute top-full flex flex-col gap-10 mt-4 xl:top-[85%] z-20 px-8">
        <Slider title={"Thinh hanh"} class={"first-slider"} list={movieList} />

        <Slider title={"Mới nhất"} list={movieList} />
        {/* <Slider
              title={"Sôi động cùng ngoại hạng anh"}
              list={()=>get_random(movieList)}
            />
            <Slider title={"Phim hay mỗi ngày"} list={()=>get_random(movieList)} />
            <Slider title={"Sắp phát sóng"} list={()=>get_random(movieList)} />
            <Slider title={"Siêu phẩm Disney"} list={()=>get_random(movieList)} /> */}
      </div>
      {isShowVideoPopup.status && <VideoPopup movie={movie} />}
    </div>
  );
};

export default Home;
