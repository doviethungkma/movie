import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { IMovie } from "../../../interfaces/movie";
import HeroSlider from "../../common/HeroSlider";
import NavigationButton from "../../common/NavigationButton";
import movieApi from "./../../../api/movieApi";

const Hero = () => {
  const [movies, setMovies] = useState<IMovie[]>();
  const getData = async () => {
    const response: AxiosResponse = await movieApi.getRandomMovie(5);
    setMovies(response.data.movies);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="herovideo w-full h-screen">
      <HeroSlider listMovie={movies as IMovie[]} />
      <div className="flex w-auto gap-4 absolute bottom-32 right-16">
        <NavigationButton className="hero__prev">
          <i className="bx bx-chevron-left text-[32px] text-white"></i>
        </NavigationButton>
        <NavigationButton className="hero__next">
          <i className="bx bx-chevron-right text-[32px] text-white"></i>
        </NavigationButton>
      </div>
    </div>
  );
};

export default Hero;
