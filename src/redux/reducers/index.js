import { combineReducers } from "redux";

//reducers
import { filmsReducer } from "./filmsReducer";
import { favoritesReducer } from "./favoritesReducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
	films: filmsReducer,
	favorites: favoritesReducer,
	auth: authReducer
});
