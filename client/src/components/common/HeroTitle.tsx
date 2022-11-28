import { IMovie } from "../../interfaces/movie";
import Button from "./Button";
import { useDispatch } from "react-redux";
import {
  hideMoviePopup,
  setMovie,
  showMoviePopup,
} from "../../redux/features/movieSlice";
import { useNavigate } from "react-router-dom";

interface IHeroTitleProps {
  movie: IMovie;
}

const HeroTitle = (props: IHeroTitleProps) => {
  const { movie } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 absolute w-[90%] max-w-[746px] bottom-[212px] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[58px] z-10">
      <img
        src={movie.nameImage}
        alt=""
        className="mb-8 w-full h-auto object-cover"
      />
      <p className="text-white mb-4 text-lg">{movie.tags}</p>
      <p className="text-white mb-8 text-lg text-justify max-h-[84px] break-words overflow-hidden text-ellipsis">
        {movie.description}
      </p>
      <div className="flex gap-4">
        <Button
          width="w-[178px]"
          height="h-[48px]"
          color="text-black"
          bg="bg-white"
          borderRadius="rounded-[2px]"
          hover="hover:text-green-500 transition-all"
          onClick={() => {
            const firstEp = movie.episodes?.filter(
              (item: any) => parseInt(item.id) === 1
            );
            console.log(firstEp);
            navigate(`movie/watch/${movie._id}/${firstEp && firstEp[0]._id}`);
            dispatch(hideMoviePopup());
          }}
        >
          <i className="bx bxs-right-arrow text-[22px] mr-5"></i>{" "}
          <span className="text-md font-medium">Xem ngay</span>
        </Button>
        <Button
          width="w-[156px]"
          height="h-[48px]"
          color="text-white"
          bg="transparent"
          border="border border-thin"
          borderRadius="rounded-[2px]"
          hover="hover:text-green-500 transition-all"
          onClick={() => {
            dispatch(setMovie(movie));
            dispatch(showMoviePopup());
          }}
        >
          <i className="bx bxs-right-arrow text-[22px] mr-4"></i>{" "}
          <span className="text-md font-medium">Chi tiết</span>
        </Button>
      </div>
    </div>
  );
};

export default HeroTitle;
