import { combineReducers } from "redux";

//reducers
import filmsSlice from "./filmsSlice";
import favoritesSlice from "./favoritesSlice";
import authSlice from "./authSlice";

export const rootReducer = combineReducers({
	films: filmsSlice,
	favorites: favoritesSlice,
	auth: authSlice
});
