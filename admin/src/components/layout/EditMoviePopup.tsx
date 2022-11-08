import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IMovie } from "../../interfaces/movie";
import { hideEditMovie } from "../../redux/features/movieSlice";
import { listAcceptableValue, listMovieStatus } from "../../utils/constant";
import Button from "../common/Button";
import Dropdown from "../common/Dropdown";
import Input from "../common/Input";
import Overlay from "../common/Overlay";
import PopupTitle from "../common/PopupTitle";
import movieApi from "./../../api/movieApi";
import { useAppDispatch } from "./../../hooks/useTypedSelector";
import { getAllMovie } from "./../../redux/features/movieSlice";

interface IProps {
  item: IMovie;
}

const EditMoviePopup = (props: IProps) => {
  const dispatch = useAppDispatch();
  const [strType, setStrType] = useState(props.item.type?.toString());
  const [strTags, setStrTags] = useState(props.item.tags?.toString());
  const [strActor, setStrActor] = useState(props.item.actor?.toString());
  const [movie, setMovie] = useState<IMovie>({
    name: props.item.name,
    type: props.item.type,
    actor: props.item.actor,
    country: props.item.country,
    year: props.item.year,
    totalEp: 1,
    thumb: props.item.thumb,
    trailer: props.item.trailer,
    tags: props.item.tags,
    acceptable: props.item.acceptable,
    status: props.item.status,
    description: props.item.description,
  });

  useEffect(() => {
    const toTypeArray = setTimeout(() => {
      const arrType = strType?.split(",");
      setMovie({ ...movie, type: arrType });
    });

    return () => clearTimeout(toTypeArray);
  }, [strType]);

  useEffect(() => {
    const toTagsArray = setTimeout(() => {
      const arrTags = strTags?.split(",");
      setMovie({ ...movie, tags: arrTags });
    });

    return () => clearTimeout(toTagsArray);
  }, [strTags]);

  useEffect(() => {
    const toActorArray = setTimeout(() => {
      const arrActor = strActor?.split(",");
      setMovie({ ...movie, actor: arrActor });
    });

    return () => clearTimeout(toActorArray);
  }, [strActor]);

  const handleChange = (e: any) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const onSave = async () => {
    try {
      const response = await movieApi.update(props.item._id as string, movie);
      dispatch(getAllMovie());
      toast.success("Edit movie successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      toast.error("Edit movie failed", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50">
      <Overlay />
      <div className="popup__content w-full h-full max-w-[90%] max-h-[90%] lg:max-w-[70%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-[#212529] overflow-y-scroll no-scrollbar">
        <PopupTitle
          title="Edit Movie"
          onClose={() => dispatch(hideEditMovie())}
        />
        <div className="grid grid-cols-1 md:grid-cols-2  p-4 gap-4">
          <Input name="name" value={movie.name} onChange={handleChange} />
          <Input
            name="type"
            value={strType}
            onChange={(e: any) => setStrType(e.target.value)}
          />
          <Input name="country" value={movie.country} onChange={handleChange} />
          <Input name="year" value={movie.year} onChange={handleChange} />
          <Input name="currentEp" value="1" disabled onChange={handleChange} />
          <Input
            name="totalEp"
            value={movie.totalEp.toString()}
            onChange={handleChange}
          />
          <Input name="thumb" value={movie.thumb} onChange={handleChange} />
          <Input name="trailer" value={movie.trailer} onChange={handleChange} />
          <Input
            name="actor"
            value={strActor}
            onChange={(e: any) => setStrActor(e.target.value)}
          />
          <Input
            name="tags"
            value={strTags}
            onChange={(e: any) => setStrTags(e.target.value)}
          />
          <div className="md:col-span-2">
            <Input
              name="description"
              value={movie.description}
              height="h-[150px]"
              onChange={handleChange}
            />
          </div>
          <Dropdown
            title="Acceptable"
            list={listAcceptableValue}
            selectedItem={movie.acceptable}
            onItemClick={(e: any) =>
              setMovie({ ...movie, acceptable: e.target.dataset.value })
            }
          />
          <Dropdown
            title="Status"
            list={listMovieStatus}
            selectedItem={movie.status}
            onItemClick={(e: any) =>
              setMovie({ ...movie, status: e.target.dataset.value })
            }
          />
        </div>
        <div className="w-full px-4 flex justify-end gap-4 mb-4">
          <Button
            name="Cancel"
            px={4}
            py={2}
            color="bg-red-500"
            onClick={() => dispatch(hideEditMovie())}
          />
          <Button
            name="Save"
            px={4}
            py={2}
            color="bg-green-500"
            onClick={() => {
              onSave();
              dispatch(hideEditMovie());
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EditMoviePopup;
