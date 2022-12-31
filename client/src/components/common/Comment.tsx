import { useDispatch } from "react-redux";
import { showLoginPopup } from "../../redux/features/commonSlice";
import { hideMovieModal } from "../../redux/features/movieSlice";
import useAuth from "./../../hooks/useAuth";
import useComment from "./../../hooks/useComment";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface ICommentProps {
  movieId: string;
}

const Comment = (props: ICommentProps) => {
  const location = useLocation();
  const path = location.pathname;
  const dispatch = useDispatch();
  const { movieId } = props;
  const { isLogedIn } = useAuth();
  const { comments, getCommentByProductId, addComment } = useComment();
  const [currentComment, setCurrentComment] = useState<string>("");

  useEffect(() => {
    getCommentByProductId(movieId as string);
  }, [path]);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await addComment(movieId, currentComment);
    await getCommentByProductId(movieId);
    setCurrentComment("");
  };

  return (
    <div className="w-full">
      {isLogedIn ? (
        <form action="" onSubmit={handleSubmit}>
          <div className="flex gap-4 items-center mb-8">
            <img
              src={require("../../assets/images/avatar.jpg")}
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <input
              type="text"
              name="comment"
              id="comment"
              placeholder="Them binh luan"
              className="w-full py-4 text-gray-500 bg-transparent focus:outline-none focus:border-b focus:border-thin"
              value={currentComment}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCurrentComment(e.target.value)
              }
            />
            <button type="submit" className="h-full flex items-center">
              <i className="bx bxs-send text-white text-[28px] cursor-pointer hover:text-green-500 transition-all"></i>
            </button>
          </div>
        </form>
      ) : (
        <div className="flex justify-center mb-4 w-full bg-comment-bg bg-no-repeat bg-cover h-[135px]">
          <div className="h-full flex gap-4 items-center mt-6">
            <h2 className="text-lg text-white">
              Vui lòng đăng nhập để nhập bình luận
            </h2>
            <button
              className="text-white border-white border px-4 py-2 hover:text-green-400 transition-all cursor-pointer"
              onClick={() => {
                dispatch(hideMovieModal());
                dispatch(showLoginPopup());
              }}
            >
              Đăng nhập
            </button>
          </div>
        </div>
      )}
      <div className="w-full mb-8">
        {comments &&
          comments.length > 0 &&
          comments.map((item: any, index) => (
            <div className="flex gap-4 mt-8">
              <img
                src={require("../../assets/images/avatar.jpg")}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div className="w-full text-sm text-gray-500">
                <div className="flex justify-between">
                  <p className="text-white">{item?.user?.username}</p>
                  <p className="text-xs">2 ngày trước</p>
                </div>
                <p className="text-justify">{item.content}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Comment;
