import { combineReducers, createStore } from "redux";

import isLogReducer from "./reducers/isLogReducer";
import favoritesReducer from "./reducers/favoritesReducer";

const rootReducer = combineReducers({
	isLoggedIn: isLogReducer,
	favorites: favoritesReducer
});

const store = createStore(rootReducer);

export default store;
