import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../../interfaces/movie";

interface IState {
  movies?: Array<IMovie>;
  movie?: IMovie | any;
}

const initialState: IState = {
  movies: [],
  movie: {},
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.movie = action.payload.movie;
    },
  },
});

const { reducer } = movieSlice;
export const { setMovie } = movieSlice.actions;

export default reducer;
