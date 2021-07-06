import { combineReducers } from "redux";

//reducers
import filmsSlice from "./filmsSlice";
import favoritesSlice from "./favoritesSlice";
import authSlice from "./authSlice";
import searchSlice from "./searchSlice";
import historySlice from "./historySlice";

export const rootReducer = combineReducers({
	films: filmsSlice,
	favorites: favoritesSlice,
    auth: authSlice,
    search: searchSlice,
    history: historySlice
});
