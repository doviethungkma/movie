import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "../../interfaces/movie";
import movieApi from "./../../api/movieApi";

interface IState {
  isShowMoviePopup: boolean;
  isShowAddMovie: boolean;
  isShowEditMovie: boolean;
  isShowEpisodePopup: boolean;
  movies: Array<IMovie>;
  movie: IMovie | undefined;
}

const initialState: IState = {
  isShowMoviePopup: false,
  isShowAddMovie: false,
  isShowEditMovie: false,
  isShowEpisodePopup: false,
  movies: [],
  movie: undefined,
};

export const getAllMovie = createAsyncThunk(
  "/movie/getAllMovie",
  async (data, thunkApi) => {
    try {
      const response: any = await movieApi.getAll();
      return response.movies;
    } catch (error: any) {
      throw thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getMovieById = createAsyncThunk(
  "/movie/getMovieById",
  async (id: string, thunkApi) => {
    try {
      const response: any = await movieApi.getById(id);
      return response.movie;
    } catch (error: any) {
      throw thunkApi.rejectWithValue(error.message);
    }
  }
);

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
    showAddMovie: (state) => {
      state.isShowAddMovie = true;
    },
    hideAddMovie: (state) => {
      state.isShowAddMovie = false;
    },
    showEditMovie: (state) => {
      state.isShowEditMovie = true;
    },
    hideEditMovie: (state) => {
      state.isShowEditMovie = false;
    },
    showEpisodePopup: (state) => {
      state.isShowEpisodePopup = true;
    },
    hideEpisodePopup: (state) => {
      state.isShowEpisodePopup = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getAllMovie.fulfilled,
      (state, action: PayloadAction<IMovie[]>) => {
        state.movies = action.payload;
      }
    );
    builder.addCase(getAllMovie.rejected, (state) => {
      state.movies = [];
    });
    builder.addCase(
      getMovieById.fulfilled,
      (state, action: PayloadAction<IMovie>) => {
        state.movie = action.payload;
      }
    );
    builder.addCase(getMovieById.rejected, (state) => {
      state.movie = undefined;
    });
  },
});

const { reducer } = movieSlice;
export const {
  showMoviePopup,
  hideMoviePopup,
  showAddMovie,
  hideAddMovie,
  showEditMovie,
  hideEditMovie,
  showEpisodePopup,
  hideEpisodePopup,
} = movieSlice.actions;

export default reducer;
