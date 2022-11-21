import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../../interfaces/movie";

interface IState {}

const initialState: IState = {};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
});

const { reducer } = movieSlice;
export const {} = movieSlice.actions;

export default reducer;
