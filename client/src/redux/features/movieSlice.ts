import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../../interfaces/movie";

interface IMovieSliceState {
  isShowMoviePopup: boolean;
  movie: IMovie | undefined;
  listMovies: IMovie[] | undefined;
}

const initialState: IMovieSliceState = {
  isShowMoviePopup: false,
  movie: undefined,
  listMovies: undefined,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    showMoviePopup: (state) => {
      state.isShowMoviePopup = true;
    },
    hideMoviePopup: (state) => {
      state.isShowMoviePopup = false;
    },
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
    setListMovies: (state, action) => {
      state.listMovies = action.payload;
    },
  },
});

const { reducer } = movieSlice;
export const { showMoviePopup, hideMoviePopup, setMovie, setListMovies } =
  movieSlice.actions;

export default reducer;
