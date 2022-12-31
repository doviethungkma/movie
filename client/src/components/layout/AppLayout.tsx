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
import UserDetailModal from "./UserDetailModal";

const AppLayout = () => {
  const isShowLogin = useSelector(
    (state: RootState) => state.common.isShowLogin
  );
  const isShowSignup = useSelector(
    (state: RootState) => state.common.isShowSignup
  );
  const isShowMovieModal: boolean = useSelector(
    (state: RootState) => state.movie.isShowMovieModal
  );
  const isShowWatchingModal: boolean = useSelector(
    (state: RootState) => state.movie.isShowWatchingModal
  );
  const isShowUserDetailModal: boolean = useSelector(
    (state: RootState) => state.common.isShowUserDetailModal
  );

  const movie = useSelector((state: RootState) => state.movie.movie);

  return (
    <div className="relative">
      <Navbar />
      <Outlet />
      {isShowLogin && <Login />}
      {isShowSignup && <Signup />}
      {isShowMovieModal && <MoviePopup movie={movie as IMovie} />}
      {isShowUserDetailModal && <UserDetailModal />}
      <ToastContainer theme="dark" position={toast.POSITION.TOP_CENTER} />
    </div>
  );
};

export default AppLayout;
