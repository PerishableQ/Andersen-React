import { combineReducers } from "redux";

//reducers
import { filmListReducer } from "./filmListReducer";
import { favoritesReducer } from "./favoritesReducer";

export const rootReducer = combineReducers({
	films: filmListReducer,
    favorites: favoritesReducer
});
