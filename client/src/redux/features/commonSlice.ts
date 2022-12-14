import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../../interfaces/movie";

interface ICommonSliceState {
  isShowMenu: boolean;
  isShowLogin: boolean;
  isShowSignup: boolean;
  isShowUserMenu: boolean;
  isShowUserDetailModal: boolean;
}

const initialState: ICommonSliceState = {
  isShowMenu: false,
  isShowLogin: false,
  isShowSignup: false,
  isShowUserMenu: false,
  isShowUserDetailModal: false,
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
    showUserDetailModal: (state) => {
      state.isShowUserDetailModal = true;
    },
    hideUserDetailModal: (state) => {
      state.isShowUserDetailModal = false;
    },
    toggleUserMenuPopup: (state) => {
      state.isShowUserMenu = !state.isShowUserMenu;
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
  toggleUserMenuPopup,
  showUserDetailModal,
  hideUserDetailModal,
} = commonSlice.actions;

export default reducer;
