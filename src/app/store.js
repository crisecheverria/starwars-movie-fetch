import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from "../features/films/filmsSlice";

export default configureStore({
  reducer: {
    films: filmsReducer,
  },
});
