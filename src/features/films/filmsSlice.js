import { createSlice } from "@reduxjs/toolkit";
import filmsAPI from "../../utils/filmsAPI";
import { sortByYear, sortByEpisode } from "../../utils/sort";

export const filmsSlice = createSlice({
  name: "films",
  initialState: {
    films: [],
    loading: false,
    hasError: false,
    errorMsg: "",
    selectedFilm: {},
    sortBy: "",
  },
  reducers: {
    filmsLoading: (state) => {
      state.loading = true;
    },
    filmsReceived: (state, action) => {
      state.loading = false;
      state.films = action.payload;
    },
    filmsResponseFailure: (state, action) => {
      state.hasError = true;
      state.loading = false;
      state.errorMsg = action.payload;
    },
    selectedFilm: (state, action) => {
      state.selectedFilm = state.films.find(
        ({ fields }) => fields.episode_id === action.payload
      );
    },
    sortedFilms: (state, action) => {
      state.sortBy = action.payload;
      if (action.payload === "release_date") {
        state.films = state.films.sort(sortByYear);
      }
      if (action.payload === "episode_id") {
        state.films = state.films.sort(sortByEpisode);
      }
    },
  },
});

export const {
  filmsLoading,
  filmsReceived,
  filmsResponseFailure,
  selectedFilm,
  sortedFilms,
  filterFilms,
} = filmsSlice.actions;

export const fetchFilms = () => async (dispatch) => {
  dispatch(filmsLoading());
  try {
    const response = await filmsAPI.get("/films");
    dispatch(filmsReceived(response.data));
  } catch (error) {
    dispatch(filmsResponseFailure(error.message));
  }
};

export const selectFilmToShow = (episode_id) => (dispatch) => {
  dispatch(selectedFilm(episode_id));
};

export const sortFilmsBy = (sortBy) => (dispatch) => {
  dispatch(sortedFilms(sortBy));
};

export const selectFilms = (state) => state.films;
export const selectedFilmSelector = (state) => state.films.selectedFilm;

export default filmsSlice.reducer;
