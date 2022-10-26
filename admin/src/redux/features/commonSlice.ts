import { createSlice } from "@reduxjs/toolkit";

interface IState {
  isShowSideBar: boolean;
  isShowMoviePopup: boolean;
}

const initialState: IState = {
  isShowSideBar: false,
  isShowMoviePopup: false,
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
  },
});

const { reducer } = commonSlice;
export const { toggleSideBar, showMoviePopup, hideMoviePopup } =
  commonSlice.actions;

export default reducer;
