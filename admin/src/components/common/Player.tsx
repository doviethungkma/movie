import ReactPlayer from "react-player";

interface IProps {
  url: string;
  width: number | string;
  heigt: number | string;
  controls?: boolean;
}

const Player = (props: IProps) => {
  return (
    <ReactPlayer
      url={props.url}
      width={props.width}
      height={props.heigt}
      controls={props.controls}
    />
  );
};

export default Player;
