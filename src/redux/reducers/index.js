import { combineReducers } from "redux";

//reducers
import filmsSlice from "./filmsSlice";
import { favoritesReducer } from "./favoritesReducer";
import authSlice from "./authSlice";

export const rootReducer = combineReducers({
	films: filmsSlice,
	favorites: favoritesReducer,
	auth: authSlice
});
