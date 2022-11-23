import React from "react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

interface IMoviePopupSliderProps {
  children: React.ReactNode;
  title: string;
}

const MoviePopupSlider = (props: IMoviePopupSliderProps) => {
  return (
    <div className="text-white">
      <h3 className="text-[28px] font-bold mb-4">{props.title}</h3>
      <Swiper
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1280: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="moviePopupSwiper h-auto"
      >
        {props.children}
      </Swiper>
    </div>
  );
};

export default MoviePopupSlider;
