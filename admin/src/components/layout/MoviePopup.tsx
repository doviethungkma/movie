import { useDispatch } from "react-redux";
import { IMovie } from "../../interfaces/movie";
import { hideMoviePopup } from "../../redux/features/commonSlice";
import Button from "../common/Button";
import ListTag from "../common/ListTag";
import Overlay from "../common/Overlay";
import Paragraph from "../common/Paragraph";
import Player from "../common/Player";
import PopupTitle from "../common/PopupTitle";
import Image from "./../common/Image";

interface IProps {
  item: IMovie;
}

const MoviePopup = (props: IProps) => {
  const dispatch = useDispatch();
  console.log(props.item);

  const onClose = () => {
    dispatch(hideMoviePopup());
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50">
      <Overlay />
      <div className="popup__content w-full h-full max-w-[90%] max-h-[90%] lg:max-w-[70%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-[#212529]  overflow-y-scroll">
        <PopupTitle
          title="Movie Detail"
          onClose={() => dispatch(hideMoviePopup())}
        />
        <div className="content grid grid-cols-1 md:grid-cols-2  p-4 gap-4">
          <Paragraph name="Name" text={props.item.name} />
          <ListTag name="Type" list={props.item.type} />
          <Paragraph name="Country" text={props.item.country} />
          <Paragraph name="Year" text={props.item.year} />
          <Paragraph
            name="Current EP"
            text={props.item.episodes?.length.toString()}
          />
          <Paragraph name="Total Ep" text={props.item.totalEp.toString()} />
          <Image src={props.item.thumb} width="w-full" height="h-full" />
          {props.item.trailer ? (
            <Player
              url={props.item.trailer}
              width="100%"
              heigt="100%"
              controls
            />
          ) : (
            <Image
              src={require("../../assets/images/no-preview-available.png")}
              width="w-full"
              height="h-full"
            />
          )}
          <ListTag name="Actor" list={props.item.actor} />
          <ListTag name="Tags" list={props.item.tags} />
          <Paragraph name="Acceptable" text={props.item.acceptable} />
          <Paragraph name="Status" text="Active" textColor="text-green-500" />
          <div className="md:col-span-2">
            <Paragraph name="Description" text={props.item.description} />
          </div>
        </div>
        <div className="flex justify-end p-4">
          <Button
            name="Close"
            onClick={onClose}
            color="bg-red-500"
            px={4}
            py={2}
          />
        </div>
      </div>
    </div>
  );
};

export default MoviePopup;
