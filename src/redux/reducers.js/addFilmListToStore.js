import { initialState } from "../store";

function addFilmListToStore(state = initialState, action) {
	switch (action.type) {
		case "ADD_LIST_TO_STORE":
			return {
				...state,
				films: action.payload
			};

		default:
			return state;
	}
}

export default addFilmListToStore;
