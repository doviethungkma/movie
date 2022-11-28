import { IEpisode, IMovie } from "../../interfaces/movie";

interface IEpisodeCardProps {
  episode?: IEpisode;
  movie?: IMovie;
  type?: string;
  onItemClick?: () => void;
}

const EpisodeCard = (props: IEpisodeCardProps) => {
  const { episode, movie, type, onItemClick } = props;
  return (
    <div
      className="flex flex-col  overflow-hidden cursor-pointer"
      onClick={onItemClick}
    >
      <img
        src={type === "episode" ? episode?.thumb : movie?.thumb}
        alt=""
        className="w-full aspect-video object-cover"
      />
      <h4 className="min-h-[48px] text-md text-white mt-1 hover:text-green-500 transition-all">
        {type === "episode"
          ? episode?.title
          : `${movie?.year} | ${movie?.country ? movie?.country : ""}`}
      </h4>
      <p className="text-xs text-justify mt-3 text-gray-500">
        {type === "episode"
          ? episode?.description?.substring(0, 100)
          : movie?.description?.substring(0, 100)}
      </p>
    </div>
  );
};

export default EpisodeCard;
