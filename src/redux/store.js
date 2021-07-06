import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { rootReducer } from "./reducers/rootReducer";
import { storeInLS } from "./middlewares/storeInLS";

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(storeInLS, thunk))
);
