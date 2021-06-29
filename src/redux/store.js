import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers.js/rootReducer";

export const store = configureStore({
	reducer: rootReducer
});