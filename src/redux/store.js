import { configureStore } from "@reduxjs/toolkit";
import addFilmToStore from "./reducers.js/rootReducer";

export const store = configureStore({
	reducer: addFilmToStore
});