import { useState } from "react";
import {
  getMovieById,
  hideEpisodePopup,
} from "../../redux/features/movieSlice";
import { IEpisode, IMovie } from "./../../interfaces/movie";
import Overlay from "./../common/Overlay";
import PopupTitle from "./../common/PopupTitle";
import { useAppDispatch, useAppSelector } from "./../../hooks/useTypedSelector";
import Button from "../common/Button";
import Input from "../common/Input";
import movieApi from "./../../api/movieApi";
import { getAllMovie } from "./../../redux/features/movieSlice";

const EpisodePopup = () => {
  let i = 1;
  const dispatch = useAppDispatch();
  const [isShowAdd, setIsShowAdd] = useState<boolean>(false);
  const { movie } = useAppSelector((state) => state.movie);
  console.log(movie?.episodes);

  const [episode, setEpisode] = useState<IEpisode>({
    id: 1,
    title: "",
    thumb: "",
    description: "",
    url: "",
  });

  const clearData = () => {
    setEpisode({
      id: 1,
      title: "",
      thumb: "",
      description: "",
      url: "",
    });
  };

  const handleChange = (e: any) => {
    setEpisode({ ...episode, [e.target.name]: e.target.value });
  };

  const onSave = async () => {
    const data = [...(movie?.episodes as Array<IEpisode>)];
    data && data.push(episode);
    const response = await movieApi.update(movie?._id as string, {
      episodes: data,
    });
    setIsShowAdd(false);
    dispatch(getMovieById(movie?._id as string));
  };

  const onDelete = async (id: string) => {
    const data = [...(movie?.episodes as Array<IEpisode>)];
    const filteredData = data.filter((item) => item._id != id);
    const response = await movieApi.update(movie?._id as string, {
      episodes: filteredData,
    });
    dispatch(getMovieById(movie?._id as string));
  };

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50">
      <Overlay />
      <div className="popup__content w-full h-auto max-w-[90%] max-h-[90%] lg:max-w-[70%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-[#212529]  overflow-y-scroll no-scrollbar">
        <PopupTitle
          title="List Episode"
          onClose={() => {
            dispatch(hideEpisodePopup());
            dispatch(getAllMovie());
          }}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 py-4 gap-4">
          <img
            src={movie?.thumb}
            alt=""
            className="px-4 h-full w-full object-cover"
          />
          <div className="flex flex-col gap-4">
            <Input name="Name" value={movie?.name} disabled />
            <Input name="Total Ep" value={movie?.totalEp.toString()} disabled />
            <Input name="Description" value={movie?.description} disabled />
          </div>
        </div>
        <div className="table w-full py-6 px-4">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-xs text-left text-gray-500 uppercase font-normal px-2 py-4">
                  ID
                </th>
                <th className="text-xs text-left text-gray-500 uppercase font-normal px-2 py-4">
                  Episode Number
                </th>
                <th className="text-xs text-left text-gray-500 uppercase font-normal px-2 py-4">
                  Title
                </th>
                <th className="text-xs text-left text-gray-500 uppercase font-normal px-2 py-4 ">
                  Thumb
                </th>
                <th className="text-xs text-left text-gray-500 uppercase font-normal px-2 py-4 ">
                  Description
                </th>
                <th className="text-xs text-left text-gray-500 uppercase font-normal px-2 py-4 ">
                  Url
                </th>
              </tr>
            </thead>
            <tbody>
              {movie?.episodes?.map((item, index) => (
                <tr key={index}>
                  <td className=" px-2 py-4 text-white bg-[#212529] w-[5%]">
                    {i++}
                  </td>
                  <td className=" px-2 py-4 text-white bg-[#212529] w-[5%]">
                    {item.id}
                  </td>
                  <td className=" px-2 py-4 text-white bg-[#212529] w-[25%]">
                    {item.title}
                  </td>
                  <td className="px-2 py-4 text-white bg-[#212529] w-[15%]">
                    <img src={item.thumb} alt="" />
                  </td>
                  <td className=" px-2 py-4 text-white bg-[#212529] w-[30%]">
                    {item.description}
                  </td>
                  <td
                    className=" px-2 py-4 text-white bg-[#212529] w-[20%] break-all text-blue-500 cursor-pointer hover:underline"
                    onClick={() => openInNewTab(item.url as string)}
                  >
                    {item.url?.slice(0, 50)}
                  </td>
                  <td>
                    <div
                      className="w-8 h-8 flex items-center justify-center rounded-lg text-white bg-red-500 cursor-pointer hover:bg-red-600 hover:text-gray-300 transition-all"
                      onClick={() => onDelete(item._id as string)}
                    >
                      <i className="bx bx-x"></i>
                    </div>
                  </td>
                </tr>
              ))}
              {isShowAdd && (
                <tr>
                  <td>{i++}</td>
                  <td>
                    <Input
                      name="id"
                      noTitle
                      placeholder="Id"
                      onChange={(e: any) =>
                        setEpisode({ ...episode, id: parseInt(e.target.value) })
                      }
                    />
                  </td>
                  <td>
                    <Input
                      name="title"
                      noTitle
                      placeholder="Title"
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <Input
                      name="thumb"
                      noTitle
                      placeholder="Thumb"
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <Input
                      name="description"
                      noTitle
                      placeholder="Description"
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <Input
                      name="url"
                      noTitle
                      placeholder="Url"
                      onChange={handleChange}
                    />
                  </td>
                  <td className="flex gap-2">
                    <Button
                      name="Save"
                      px={2}
                      py={2}
                      color="bg-green-500"
                      onClick={() => {
                        onSave();
                      }}
                    />
                    <Button
                      name="Cancel"
                      px={2}
                      py={2}
                      color="bg-red-500"
                      onClick={() => {
                        clearData();
                        setIsShowAdd(false);
                      }}
                    />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="p-4 flex justify-end gap-4">
          {movie?.episodes && movie?.episodes?.length < movie?.totalEp && (
            <Button
              name="Add Episode"
              px={4}
              py={2}
              color="bg-green-500"
              onClick={() => setIsShowAdd(!isShowAdd)}
            />
          )}
          <Button
            name="Close"
            px={4}
            py={2}
            color="bg-red-500"
            onClick={() => {
              dispatch(hideEpisodePopup());
              dispatch(getAllMovie());
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EpisodePopup;
