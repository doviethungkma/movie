import { IEpisode, IMovie } from "../../interfaces/movie";

interface IEpisodeCardProps {
  episode?: IEpisode;
  movie?: IMovie;
  type?: string;
}

const EpisodeCard = (props: IEpisodeCardProps) => {
  return (
    <div className="flex flex-col  overflow-hidden cursor-pointer">
      <img
        src={
          props.type === "episode" ? props.episode?.thumb : props.movie?.thumb
        }
        alt=""
        className="w-full aspect-video object-cover"
      />
      <h4 className="min-h-[48px] text-md text-white mt-1 hover:text-green-500 transition-all">
        {props.type === "episode"
          ? props.episode?.title
          : `${props.movie?.year} | ${
              props.movie?.country ? props.movie?.country : ""
            }`}
      </h4>
      <p className="text-xs text-justify mt-3 text-gray-500">
        {props.type === "episode"
          ? props.episode?.description?.substring(0, 100)
          : props.movie?.description?.substring(0, 100)}
      </p>
    </div>
  );
};

export default EpisodeCard;
