const initialState = {
	films: []
};

export function filmsReducer(state = initialState, action) {
	switch (action.type) {
		case "ADD_FILM":
			return {
				...state,
				films: action.payload
			};

		default:
			return state;
	}
}
