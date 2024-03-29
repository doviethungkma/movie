// import required modules

import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Hero from "../components/layout/Home/Hero";
import HomeMovieSlider from "../components/layout/Home/HomeMovieSlider";
import { IMovie } from "../interfaces/movie";
import movieApi from "./../api/movieApi";

const Home = () => {
  const [movies, setMovies] = useState<IMovie[]>();

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
    </>
  );
};

export default Home;
