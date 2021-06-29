import { ADD_LIST_TO_STORE } from "../action-types";

function rootReducer(state = [], action) {
	switch (action.type) {
		case ADD_LIST_TO_STORE:
			return [...action.payload];

		default:
			return state;
	}
}

export default rootReducer;
