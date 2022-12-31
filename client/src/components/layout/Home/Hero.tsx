import { useEffect } from "react";
import useMovie from "../../../hooks/useMovie";
import { IMovie } from "../../../interfaces/movie";
import HeroSlider from "../../common/HeroSlider";
import NavigationButton from "../../common/NavigationButton";

const Hero = () => {
  const { randomMovies, getRandomMovie } = useMovie();

  useEffect(() => {
    getRandomMovie(20);
  }, []);

  return (
    <div className="herovideo w-full h-screen">
      <HeroSlider listMovie={randomMovies as IMovie[]} />
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
