import { IMovie } from "./movie";

export interface IComment {
  _id?: string;
  content?: string;
  movie?: IMovie;
  user?: {
    _id?: string;
    username?: string;
  };
}
