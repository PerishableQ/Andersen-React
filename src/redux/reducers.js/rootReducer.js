import { ADD_LIST_TO_STORE } from "../action-types";

const initialState = {
    films: []
}

function addFilmToStore(state = initialState, action) {
	switch (action.type) {
		case ADD_LIST_TO_STORE:
			return {
                ...state,
                films: action.payload
            };

		default:
			return state;
	}
}

export default addFilmToStore;
