import { Request, Response } from "express";
import { HTTP_STATUS } from "../utils/constant";
import Comment from "../models/comment";
import User from "../models/user";
import Movie from "../models/movie";

export const addComment = async (req: any, res: Response) => {
  let { movie, content } = req.body;
  try {
    const { user } = req;

    //Check movie exist
    const isMovieExist = await Movie.findById(movie);
    if (!isMovieExist)
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        status: "failed",
        msg: "Movie is not exist",
      });

    const newComment = await Comment.create({
      user: user._id,
      movie,
      content,
    });

    if (newComment) {
      res.status(HTTP_STATUS.SUCCESS).json({
        status: "success",
        comment: newComment,
      });
    } else {
      res.status(HTTP_STATUS.BAD_REQUEST).json({
        status: "failed",
        msg: "Create new comment failed",
      });
    }
  } catch (error: any) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      status: "error",
      msg: error.message,
    });
  }
};

export const getCommentByMovie = async (req: Request, res: Response) => {
  const { movieId } = req.params;
  try {
    const comments = await Comment.find({ movie: movieId })
      .populate("user", "username")
      .sort({ createdAt: -1 });
    if (!comments)
      res.status(HTTP_STATUS.BAD_REQUEST).json({
        status: "failed",
        msg: "Get comment by movie failed",
      });

    res.status(HTTP_STATUS.SUCCESS).json({
      status: "success",
      comments: comments,
    });
  } catch (error: any) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      status: "error",
      msg: error.message,
    });
  }
};
