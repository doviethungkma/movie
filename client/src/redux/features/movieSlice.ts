import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../../interfaces/movie";

interface IMovieSliceState {
  isShowMoviePopup: boolean;
  movie: IMovie | undefined;
}

const initialState: IMovieSliceState = {
  isShowMoviePopup: false,
  movie: undefined,
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
  },
});

const { reducer } = movieSlice;
export const { showMoviePopup, hideMoviePopup, setMovie } = movieSlice.actions;

export default reducer;
