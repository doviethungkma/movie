// import required modules

import { useEffect } from "react";
import Hero from "../components/layout/Home/Hero";
import HomeMovieSlider from "../components/layout/Home/HomeMovieSlider";
import useMovie from "./../hooks/useMovie";

const Home = () => {
  const { randomMovies, getRandomMovie } = useMovie();

  useEffect(() => {
    getRandomMovie(20);
  }, []);

  return (
    <>
      <div className="home absolute w-full top-0 left-0 -z-10 bg-background-color">
        <Hero />
        <div className="w-full absolute text-white top-[88vh] px-[30px]  md:pl-[58px] md:px-0 z-10">
          <HomeMovieSlider title="Thịnh hành" movies={randomMovies} />
          <HomeMovieSlider title="Mới nhất" movies={randomMovies} />
          <HomeMovieSlider title="Mới nhất" movies={randomMovies} />
        </div>
      </div>
    </>
  );
};

export default Home;
