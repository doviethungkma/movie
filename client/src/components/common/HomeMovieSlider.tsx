import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { IMovie } from "../../interfaces/movie";

interface IHomeMovieSliderProps {
  title: string;
  movies?: IMovie[];
}

const HomeMovieSlider = (props: IHomeMovieSliderProps) => {
  return (
    <div className="w-full mb-[30px]">
      <h3 className="text-[28px] text-white uppercase font-medium mb-4">
        {props.title}
      </h3>
      <div className="h-[165px]">
        <Swiper
          spaceBetween={5}
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
            1440: {
              slidesPerView: 6,
              slidesPerGroup: 6,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {props.movies &&
            props.movies.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  src={item.thumb}
                  alt={item.thumb}
                  className=" w-full h-full object-cover cursor-pointer"
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeMovieSlider;
