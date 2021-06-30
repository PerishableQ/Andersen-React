import { configureStore, combineReducers } from "@reduxjs/toolkit";
import addFilmListToStore from "./reducers.js/addFilmListToStore";
import addFilmToFavorites from "./reducers.js/addFilmToFavorites";

export const initialState = {
	films: [],
	addedToFavorites: false,
	favorites: []
};

const rootReducer = combineReducers({
    addFilmToFavorites,
    addFilmListToStore
})

export const store = configureStore({
	reducer: rootReducer
});
