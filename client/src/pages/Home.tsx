// import required modules

import HomeMovieSlider from "../components/layout/Home/HomeMovieSlider";
import Hero from "../components/layout/Home/Hero";
import { useEffect, useState } from "react";
import { IMovie } from "../interfaces/movie";
import { AxiosResponse } from "axios";
import movieApi from "./../api/movieApi";
import Overlay from "../components/common/Overlay";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import MoviePopup from "../components/layout/Home/MoviePopup";

const Home = () => {
  const [movies, setMovies] = useState<IMovie[]>();
  const isShowMoviePopup: boolean = useSelector(
    (state: RootState) => state.movie.isShowMoviePopup
  );
  const movie = useSelector((state: RootState) => state.movie.movie);

  const getData = async () => {
    const response: AxiosResponse = await movieApi.getRandomMovie(20);
    setMovies(response.data.movies);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="home absolute w-full top-0 left-0 -z-10 bg-background-color">
        <Hero />
        <div className="w-full absolute text-white top-[88vh] px-[30px]  md:pl-[58px] md:px-0 z-10">
          <HomeMovieSlider title="Thịnh hành" movies={movies} />
          <HomeMovieSlider title="Mới nhất" movies={movies} />
          <HomeMovieSlider title="Mới nhất" movies={movies} />
        </div>
      </div>
      {isShowMoviePopup && <MoviePopup movie={movie as IMovie} />}
    </>
  );
};

export default Home;
