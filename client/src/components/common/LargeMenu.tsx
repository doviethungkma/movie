import React from "react";
import { menu } from "../../models/menu";
import { useNavigate } from "react-router-dom";
import movieApi from "./../../api/movieApi";
import { useDispatch } from "react-redux";
import { setListMovies } from "../../redux/features/movieSlice";

const LargeMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirectPage = async (_id: string, title: string) => {
    if (_id !== "") {
      const response = await movieApi.getByCategoryId(_id);
      dispatch(setListMovies(response.data.movies));
      navigate(`/movie/list/${_id}`, { state: { title: title } });
    } else {
      navigate(`/`);
    }
  };

  return (
    <div className="navbar__menu h-full flex gap-8 ml-11 hidden md:flex">
      {menu.map((item, index) => (
        <div
          key={item.id}
          className="flex gap-3 hover:text-gray-400 cursor-pointer transition-all"
          onClick={() => {
            redirectPage(item._id, item.name);
          }}
        >
          <img src={item.icon} alt="" />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default LargeMenu;
