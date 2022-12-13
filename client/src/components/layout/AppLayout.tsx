import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { RootState } from "../../redux/store";
import Navbar from "../common/Navbar";
import Login from "./Login";
import Signup from "./Signup";
import MoviePopup from "./Home/MoviePopup";
import { IMovie } from "../../interfaces/movie";

const AppLayout = () => {
  const isShowLogin = useSelector(
    (state: RootState) => state.common.isShowLogin
  );
  const isShowSignup = useSelector(
    (state: RootState) => state.common.isShowSignup
  );
  const isShowMoviePopup: boolean = useSelector(
    (state: RootState) => state.movie.isShowMoviePopup
  );

  const movie = useSelector((state: RootState) => state.movie.movie);

  console.log(isShowLogin);
  return (
    <div className="relative">
      <Navbar />
      <Outlet />
      {isShowLogin && <Login />}
      {isShowSignup && <Signup />}
      {isShowMoviePopup && <MoviePopup movie={movie as IMovie} />}
      <ToastContainer theme="dark" position={toast.POSITION.TOP_CENTER} />
    </div>
  );
};

export default AppLayout;
