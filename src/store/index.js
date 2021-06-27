import { combineReducers, createStore } from "redux";
// import {  applyMiddleware } from "redux";

import isAuthReducer from "./reducers/isAuthReducer";
import favoriteReducer from "./reducers/favoriteReducer";

const rootReducer = combineReducers({
  isAuth: isAuthReducer,
  favorite: favoriteReducer
});

const store = createStore(rootReducer);

export default store;