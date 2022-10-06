import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "./../../../../server/src/api/v1/interfaces/movie";

interface IState {
  isShowLogin: boolean;
  isShowMenu: boolean;
  isShowSignup: boolean;
  isShowVideoPopup: {
    status?: boolean;
    movie?: IMovie | any;
  };
}

const initialState: IState = {
  isShowLogin: false,
  isShowMenu: false,
  isShowSignup: false,
  isShowVideoPopup: {
    status: false,
    movie: {},
  },
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    showLogin: (state) => {
      state.isShowLogin = true;
    },
    hideLogin: (state) => {
      state.isShowLogin = false;
    },
    showSignup: (state) => {
      state.isShowSignup = true;
    },
    hideSignup: (state) => {
      state.isShowSignup = false;
    },
    toggleMenu: (state) => {
      state.isShowMenu = !state.isShowMenu;
    },
    showMenu: (state) => {
      state.isShowMenu = true;
    },
    hideMenu: (state) => {
      state.isShowMenu = false;
    },
    showVideoPopup: (state, action) => {
      state.isShowVideoPopup.status = true;
      state.isShowVideoPopup.movie = action.payload.movie;
    },
    hideVideoPopup: (state) => {
      state.isShowVideoPopup.status = false;
      state.isShowVideoPopup.movie = {};
    },
  },
});

const { reducer } = commonSlice;
export const {
  showLogin,
  hideLogin,
  showSignup,
  hideSignup,
  showMenu,
  hideMenu,
  toggleMenu,
  showVideoPopup,
  hideVideoPopup,
} = commonSlice.actions;

export default reducer;
