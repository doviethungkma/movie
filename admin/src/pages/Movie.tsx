import { useEffect, useState } from "react";
import Button from "../components/common/Button";
import AddMoviePopup from "../components/layout/AddMoviePopup";
import EditMoviePopup from "../components/layout/EditMoviePopup";
import EpisodePopup from "../components/layout/EpisodePopup";
import MoviePopup from "../components/layout/MoviePopup";
import { IMovie } from "../interfaces/movie";
import {
  getAllMovie,
  getMovieById,
  showAddMovie,
  showEditMovie,
  showEpisodePopup,
  showMoviePopup,
} from "../redux/features/movieSlice";
import { useAppDispatch, useAppSelector } from "./../hooks/useTypedSelector";
import { IEpisode } from "./../interfaces/movie";
import TableTitle from "./../components/common/TableTitle";

const Movie = () => {
  let i = 1;
  const listTableTitle = [
    "ID",
    "Name",
    "Thumb",
    "Total Ep",
    "Year",
    "Acceptable",
    "Current Ep",
  ];
  const dispatch = useAppDispatch();
  const {
    movies,
    isShowMoviePopup,
    isShowAddMovie,
    isShowEditMovie,
    isShowEpisodePopup,
  } = useAppSelector((state) => state.movie);

  const [movie, setMovie] = useState<IMovie>();

  useEffect(() => {
    dispatch(getAllMovie());
  }, [dispatch]);

  return (
    <>
      <div className="w-full h-[66px] border-b border-thin">
        <div className="title flex items-center justify-between">
          <div className="h-full flex items-center gap-2 text-white">
            <h4 className="text-[30px]">Movies</h4>
            <p className="text-[14px] text-gray-500 pt-2">14,452 Total</p>
          </div>
          <div className="h-full flex items-center gap-4">
            <div>
              <p className="text-xs text-gray-500">Sort by:</p>
              <div className="text-white">Date created</div>
            </div>
            <div className="relative h-full">
              <input
                type="text"
                placeholder="Find movie/tv series..."
                className=" bg-[#28282D] py-1 px-3 rounded placeholder:text-sm text-gray-500"
              />
              <i className="bx bx-search absolute right-2 top-1/2 -translate-y-1/2 text-xl text-gray-500"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="table w-full py-6">
        <table className="w-full">
          <thead>
            <tr>
              <TableTitle listTitle={listTableTitle} />
              <th className="text-xs text-left text-gray-500 uppercase font-normal px-2 py-4 ">
                <Button
                  name="Add Movie"
                  px={4}
                  py={2}
                  color="bg-green-500"
                  onClick={() => dispatch(showAddMovie())}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {movies &&
              movies.map((item, index) => (
                <tr key={index}>
                  <td className=" px-2 py-4 text-white bg-[#212529]">{i++}</td>
                  <td
                    className=" px-2 py-4 text-white cursor-pointer hover:text-green-500 transition-all bg-[#212529]"
                    onClick={() => {
                      setMovie(item);
                      dispatch(showMoviePopup());
                    }}
                  >
                    {item.name}
                  </td>
                  <td className=" px-2 py-4 text-white bg-[#212529]">
                    <img src={item.thumb} alt="" className="w-[80px]" />
                  </td>
                  <td className=" px-2 py-4 text-white bg-[#212529]">
                    {item.totalEp}
                  </td>
                  <td className=" px-2 py-4 text-white bg-[#212529]">
                    {item.year}
                  </td>
                  <td className=" px-2 py-4 text-white bg-[#212529]">
                    {item.acceptable}
                  </td>
                  <td
                    className=" px-2 py-4 bg-[#212529] text-blue-500 cursor-pointer hover:text-green-500 transition-all"
                    onClick={() => {
                      dispatch(getMovieById(item._id as string));
                      dispatch(showEpisodePopup());
                    }}
                  >
                    {item.episodes?.length}
                  </td>
                  <td className="px-2 py-4 text-white bg-[#212529]">
                    <div className="flex gap-3">
                      <div
                        className="w-[30px] h-[30px] rounded bg-red-300 flex items-center justify-center"
                        onClick={() => {
                          setMovie(item);
                          dispatch(showMoviePopup());
                        }}
                      >
                        <i className="bx bxs-show text-lg text-red-500"></i>
                      </div>
                      <div
                        className="w-[30px] h-[30px] rounded bg-blue-300 flex items-center justify-center"
                        onClick={() => {
                          setMovie(item);
                          dispatch(showEditMovie());
                        }}
                      >
                        <i className="bx bx-edit-alt text-lg text-blue-500"></i>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {isShowMoviePopup && <MoviePopup item={movie as IMovie} />}
      {isShowAddMovie && <AddMoviePopup />}
      {isShowEditMovie && <EditMoviePopup item={movie as IMovie} />}
      {isShowEpisodePopup && <EpisodePopup />}
    </>
  );
};

export default Movie;
