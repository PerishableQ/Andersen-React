import { combineReducers } from "redux";

//reducers
import { filmListReducer } from "./filmListReducer";
import { favoritesReducer } from "./favoritesReducer";
import { authenticationReducer } from "./authenticationReducer";

export const rootReducer = combineReducers({
	films: filmListReducer,
    favorites: favoritesReducer,
    signingIn: authenticationReducer
});
