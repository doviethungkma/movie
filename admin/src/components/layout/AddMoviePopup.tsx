import { useState } from "react";
import PopupTitle from "../common/PopupTitle";
import Overlay from "./../common/Overlay";
import { useDispatch } from "react-redux";
import { hideAddMovie } from "../../redux/features/commonSlice";
import Input from "../common/Input";
import Dropdown from "../common/Dropdown";
import { listAcceptableValue, listMovieStatus } from "../../utils/constant";
import Button from "../common/Button";
import { IMovie } from "../../interfaces/movie";
import movieApi from "./../../api/movieApi";

const AddMoviePopup = () => {
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState("");
  const [movie, setMovie] = useState({
    name: "",
    type: "",
    country: "",
    year: "",
    totalEp: 1,
    thumb: "",
    trailer: "",
    actor: "",
    tag: "",
    acceptable: "",
    status: "",
  });

  const handleChange = (e: any) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const onSave = async () => {
    const response = await movieApi.create(movie);
    console.log(response);
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50">
      <Overlay />
      <div className="popup__content w-full h-full max-w-[90%] max-h-[90%] lg:max-w-[70%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-[#212529] overflow-y-scroll no-scrollbar">
        <PopupTitle
          title="Add Movie"
          onClose={() => dispatch(hideAddMovie())}
        />
        <div className="grid grid-cols-1 md:grid-cols-2  p-4 gap-4">
          <Input name="name" placeholder="Movie name" onChange={handleChange} />
          <Input name="type" placeholder="Type" onChange={handleChange} />
          <Input name="country" placeholder="Country" onChange={handleChange} />
          <Input name="year" placeholder="Year" onChange={handleChange} />
          <Input
            name="currentEp"
            placeholder="1"
            disabled
            onChange={handleChange}
          />
          <Input
            name="totalEp"
            placeholder="Total Ep"
            onChange={handleChange}
          />
          <Input name="thumb" placeholder="Thumb" onChange={handleChange} />
          <Input name="trailer" placeholder="Trailer" onChange={handleChange} />
          <Input name="actor" placeholder="Actor" onChange={handleChange} />
          <Input name="tags" placeholder="Tags" onChange={handleChange} />
          <div className="md:col-span-2">
            <Input
              name="description"
              placeholder="Description"
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
            onClick={() => dispatch(hideAddMovie())}
          />
          <Button
            name="Save"
            px={4}
            py={2}
            color="bg-green-500"
            onClick={() => {
              onSave();
              dispatch(hideAddMovie());
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AddMoviePopup;
