import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../../interfaces/movie";

interface ICommonSliceState {
  isShowMenu: boolean;
  isShowLogin: boolean;
  isShowSignup: boolean;
}

const initialState: ICommonSliceState = {
  isShowMenu: false,
  isShowLogin: false,
  isShowSignup: false,
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    showMenu: (state) => {
      state.isShowMenu = true;
    },
    hideMenu: (state) => {
      state.isShowMenu = false;
    },
    showLoginPopup: (state) => {
      state.isShowLogin = true;
    },
    hideLoginPopup: (state) => {
      state.isShowLogin = false;
    },
    showSignupPopup: (state) => {
      state.isShowSignup = true;
    },
    hideSignupPopup: (state) => {
      state.isShowSignup = false;
    },
  },
});

const { reducer } = commonSlice;
export const {
  showMenu,
  hideMenu,
  showLoginPopup,
  hideLoginPopup,
  showSignupPopup,
  hideSignupPopup,
} = commonSlice.actions;

export default reducer;
