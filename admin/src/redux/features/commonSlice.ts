import { createSlice } from "@reduxjs/toolkit";

interface IState {
  isShowSideBar: boolean;
  isShowMoviePopup: boolean;
  isShowAddMovie: boolean;
}

const initialState: IState = {
  isShowSideBar: false,
  isShowMoviePopup: false,
  isShowAddMovie: false,
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.isShowSideBar = !state.isShowSideBar;
    },
    showMoviePopup: (state) => {
      state.isShowMoviePopup = true;
    },
    hideMoviePopup: (state) => {
      state.isShowMoviePopup = false;
    },
    showAddMovie: (state) => {
      state.isShowAddMovie = true;
    },
    hideAddMovie: (state) => {
      state.isShowAddMovie = false;
    },
  },
});

const { reducer } = commonSlice;
export const {
  toggleSideBar,
  showMoviePopup,
  hideMoviePopup,
  showAddMovie,
  hideAddMovie,
} = commonSlice.actions;

export default reducer;
