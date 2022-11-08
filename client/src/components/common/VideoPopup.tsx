import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IMovie } from "../../interfaces/movie";
import { hideVideoPopup } from "../../redux/features/commonSlice";
import Slider from "./Slider";

const popupImg = require("../../assets/images/popup_img.webp");

interface IProp {
  movie: IMovie;
}

const VideoPopup = (props: IProp) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <div
        className="w-screen h-screen fixed top-0 left-0 bg-background-color opacity-60 z-20"
        onClick={() => dispatch(hideVideoPopup())}
      ></div>
      <div className="popup-contents w-full max-w-[927px] max-h-screen p-2 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <img
          src={props.movie.thumb}
          alt=""
          className="w-full max-w-full max-h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <i
            className="bx bx-x text-[28px] text-white cursor-pointer hover:text-green-500 transition-all"
            onClick={() => dispatch(hideVideoPopup())}
          ></i>
        </div>
        <div className="-mt-4 px-2 lg:px-8 flex gap-2 bg-background-color">
          <button
            className="flex items-center px-6 py-2 bg-white"
            onClick={() => {
              dispatch(hideVideoPopup());
              navigate(`/movie/watch/${props.movie._id}`);
            }}
          >
            <i className="bx bx-play text-[24px]"></i>Xem ngay
          </button>
          <button className="flex items-center px-6 py-2 transparents text-white border-white border-2">
            <i className="bx bx-plus text-[24px]"></i>Danh sách
          </button>
        </div>
        <div className="bg-background-color px-2 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-4 grid-flow-row-dense  text-white py-6">
          <div className="md:col-span-2">
            <div className="flex gap-3">
              <div>
                <span>100000</span>
                <span>lượt xem</span>
              </div>
              <div>
                <span>5.0</span>
                <span>
                  <i className="bx bxs-star text-yellow-300"></i>
                  <i className="bx bxs-star text-yellow-300"></i>
                  <i className="bx bxs-star text-yellow-300"></i>
                  <i className="bx bxs-star text-yellow-300"></i>
                  <i className="bx bxs-star text-yellow-300"></i>
                </span>
              </div>
            </div>
            <p className="mt-2 lower">{props.movie.description}</p>
          </div>
          <div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <div className="flex flex-col items-center">
                <i className="bx bxs-comment text-[28px] text-gray-200"></i>
                <p>Bình luận</p>
              </div>
              <div className="flex flex-col items-center">
                <i className="bx bx-paper-plane text-[28px] text-gray-200"></i>
                <p>Chia sẻ</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <p className="text-gray-500 ">
                Diễn viên:
                <span className="text-white">{props.movie.actor}</span>
              </p>
              <p className="text-gray-500 ">
                Đạo diễn: <span className="text-white">Đạo diễn 1</span>
              </p>
              <p className="text-gray-500 ">
                Thể loại: <span className="text-white">{props.movie.type}</span>
              </p>
            </div>
          </div>
          {props?.movie?.episodes?.length && props.movie.episodes.length > 1 && (
            <div className="col-span-3">
              <Slider title={"Danh sách tập"} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPopup;
