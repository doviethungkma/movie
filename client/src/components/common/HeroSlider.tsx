import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IMovie } from "../../interfaces/movie";
import HeroTitle from "./HeroTitle";

interface IHeroSliderProps {
  listMovie: Array<IMovie>;
}

const HeroSlider = (props: IHeroSliderProps) => {
  return (
    <Swiper
      navigation={{
        prevEl: ".hero__prev",
        nextEl: ".hero__next",
      }}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      {props.listMovie?.map((item: IMovie, index: number) => (
        <SwiperSlide key={index}>
          {item.trailer ? (
            <>
              <video
                src={item.trailer}
                autoPlay
                muted
                className="aspect-video w-screen h-screen object-cover"
                preload={item.thumb}
              />
              <HeroTitle movie={item} />
            </>
          ) : (
            <>
              <img
                src={item.thumb}
                alt={item.thumb}
                className="w-full h-full object-cover"
              />
              <HeroTitle movie={item} />
            </>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
