import { useDispatch } from "react-redux";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMovie } from "../../../interfaces/movie";
import { setMovie, showMovieModal } from "../../../redux/features/movieSlice";

interface IHomeMovieSliderProps {
  title: string;
  movies?: IMovie[];
}

const HomeMovieSlider = (props: IHomeMovieSliderProps) => {
  const { title, movies } = props;
  const dispatch = useDispatch();

  return (
    <div className="w-full mb-[30px]">
      <h3 className="text-[28px] text-white uppercase font-medium mb-4">
        {title}
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
          {movies &&
            movies.map((item: IMovie, index: number) => (
              <SwiperSlide key={index}>
                <div className="relative w-full aspect-video hover:scale-110 transition-all">
                  <img
                    src={item.thumb}
                    alt={item.thumb}
                    className="absolute w-full h-full  duration-400 cursor-pointer"
                    onClick={() => {
                      dispatch(setMovie(item));
                      dispatch(showMovieModal());
                    }}
                  />
                  {item.acceptable !== "all" && (
                    <div className="flex items-center absolute top-4 py-[1px] px-3 bg-green-500 rounded-tr-md rounded-br-md">
                      <p className="text-xs uppercase text-white">
                        {item.acceptable}
                      </p>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeMovieSlider;
