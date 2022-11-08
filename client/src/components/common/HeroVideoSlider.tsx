import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroVideoItem from "./HeroVideoItem";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Lazy, Navigation, Pagination } from "swiper";
import { IMovie } from "../../interfaces/movie";
import { AxiosResponse } from "axios";
import movieApi from "./../../api/movieApi";

const HeroVideo = () => {
  //get list random movie here
  const [movies, setMovies] = useState<IMovie[]>([]);
  console.log(movies);

  const getData = async () => {
    const response: AxiosResponse = await movieApi.getRandomMovie(5);
    setMovies(response.data.movies);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Swiper
        modules={[Lazy, Autoplay, Navigation, Pagination]}
        navigation={{
          nextEl: ".hero-btn-next",
          prevEl: ".hero-btn-prev",
        }}
        slidesPerView={1}
        spaceBetween={10}
        lazy={true}
        autoplay={{ delay: 5000 }}
        className={`mySwiper hero-slider`}
      >
        {movies &&
          movies.map((item, index) => (
            <SwiperSlide key={index}>
              <HeroVideoItem item={item} />
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="flex gap-4 absolute bottom-[100px] right-8 z-40">
        <div className="hero-btn-prev w-10 h-10 flex items-center justify-center rounded-full bg-white">
          <i className="bx bx-chevron-left text-[24px] hover:text-green-500 cursor-pointer transition-all"></i>
        </div>
        <div className="hero-btn-next w-10 h-10 flex items-center justify-center rounded-full bg-white">
          <i className="bx bx-chevron-right text-[24px] hover:text-green-500 cursor-pointer transition-all"></i>
        </div>
      </div>
    </>
  );
};

export default HeroVideo;
