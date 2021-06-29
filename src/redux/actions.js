import { ADD_LIST_TO_STORE } from "./action-types";

export default function addMoviesList(payload) {
	return { type: ADD_LIST_TO_STORE, payload };
}
