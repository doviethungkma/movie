import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../../interfaces/movie";

interface IState {}

const initialState: IState = {};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {},
});

const { reducer } = commonSlice;
export const {} = commonSlice.actions;

export default reducer;
