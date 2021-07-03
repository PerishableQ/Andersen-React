import { combineReducers } from "redux";

//reducers
import { filmsReducer } from "./filmsReducer";
import { favoritesReducer } from "./favoritesReducer";
import authSlice from "./authSlice";

export const rootReducer = combineReducers({
	films: filmsReducer,
	favorites: favoritesReducer,
	auth: authSlice
});
