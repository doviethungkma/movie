import React from "react";
import { IMovie } from "../../interfaces/movie";
import { useDispatch } from "react-redux";
import { setMovie, showMovieModal } from "../../redux/features/movieSlice";
import { useNavigate } from "react-router-dom";

interface ISearchResultBoxProps {
  listItem?: IMovie[];
  clearInput: () => void;
}

const SearchResultBox = (props: ISearchResultBoxProps) => {
  const { listItem, clearInput } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="w-[400px] absolute right-[140px] top-[55px] bg-background-color">
      <div className="px-4 py-3 border-b border-thin">Search result</div>
      {listItem && listItem?.length > 0 ? (
        <div className="max-h-[500px] overflow-y-scroll no-scrollbar">
          {listItem?.map((item) => (
            <div
              className="h-[100px] w-full px-4 py-3 flex items-center justify-start gap-4 border-b border-thin"
              onClick={() => {
                clearInput();
                dispatch(setMovie(item));
                navigate("/");
                dispatch(showMovieModal());
              }}
            >
              <img
                src={item.thumb}
                alt={item.thumb}
                className="w-[110px] cursor-pointer"
              />
              <h4 className="max-h-full block overflow-hidden text-ellipsis cursor-pointer hover:text-green-500 transition-all">
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      ) : (
        <div className="px-4 py-3">No movie found</div>
      )}
    </div>
  );
};

export default SearchResultBox;
