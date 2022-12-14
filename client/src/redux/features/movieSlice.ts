import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../../interfaces/movie";

interface IMovieSliceState {
  isShowMovieModal: boolean;
  isShowWatchingModal: boolean;
  movie: IMovie | undefined;
  listMovies: IMovie[] | undefined;
}

const initialState: IMovieSliceState = {
  isShowMovieModal: false,
  isShowWatchingModal: false,
  movie: undefined,
  listMovies: undefined,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    showMovieModal: (state) => {
      state.isShowMovieModal = true;
    },
    hideMovieModal: (state) => {
      state.isShowMovieModal = false;
    },
    showWatchingModal: (state) => {
      state.isShowWatchingModal = true;
    },
    hideWatchingModal: (state) => {
      state.isShowWatchingModal = false;
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
export const {
  showMovieModal,
  hideMovieModal,
  showWatchingModal,
  hideWatchingModal,
  setMovie,
  setListMovies,
} = movieSlice.actions;

export default reducer;
