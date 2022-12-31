import { useEffect, useState } from "react";
import { IComment } from "../interfaces/comment";
import { AxiosResponse } from "axios";
import commentApi from "../api/commentApi";

const useComment = () => {
  const [comments, setComments] = useState<IComment[]>([]);

  const getCommentByProductId = async (movieId: string) => {
    const response: AxiosResponse = await commentApi.getByMovieId(movieId);
    console.log(response);
    if (response.data.status === "success") setComments(response.data.comments);
  };

  const addComment = async (movieId: string, content: string) => {
    const response = await commentApi.addComment({
      movie: movieId,
      content: content,
    });
    console.log(response);
  };

  return { comments, getCommentByProductId, addComment };
};

export default useComment;
