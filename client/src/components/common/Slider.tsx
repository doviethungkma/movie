import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay, Navigation, Lazy } from "swiper";
import MovieCard from "./MovieCard";
import { IMovie, IEpisode } from "../../interface/movie";

interface IProps {
  list?: Array<IMovie> | Array<IEpisode>;
  autoPlay?: boolean;
  title?: string;
  class?: string;
}

const Slider = (props: IProps) => {
  return (
    <div className="w-full ">
      <h2 className="text-white text-[24px] font-bold uppercase mb-6">
        {props.title}
      </h2>
      <Swiper
        navigation={true}
        slidesPerView={6}
        spaceBetween={10}
        lazy={true}
        modules={[Lazy, Autoplay, Navigation, Pagination]}
        autoplay={
          props.autoPlay && {
            delay: 2500,
          }
        }
        breakpoints={{
          375: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        className={`mySwiper ${props.class}`}
      >
        <SwiperSlide>
          <MovieCard image={require("../../assets/images/thumb1.webp")} />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard image={require("../../assets/images/thumb2.webp")} />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard image={require("../../assets/images/thumb3.webp")} />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard image={require("../../assets/images/thumb4.webp")} />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard image={require("../../assets/images/thumb5.webp")} />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard image={require("../../assets/images/thumb1.webp")} />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard image={require("../../assets/images/thumb4.webp")} />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard image={require("../../assets/images/thumb5.webp")} />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard image={require("../../assets/images/thumb1.webp")} />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard image={require("../../assets/images/thumb4.webp")} />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard image={require("../../assets/images/thumb5.webp")} />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard image={require("../../assets/images/thumb1.webp")} />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard image={require("../../assets/images/thumb4.webp")} />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard image={require("../../assets/images/thumb5.webp")} />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard image={require("../../assets/images/thumb1.webp")} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
