import { initialState } from "../store";
import { IN_FAVORITE } from "../action-types";

function addFilmToFavorites(state = initialState, action) {
	switch (action.type) {
		case IN_FAVORITE:
			return {
				...state,
				addedToFavorites: true,
				favorites: state.favorites.push(action.payload)
			};

		default:
			return state;
	}
}

export default addFilmToFavorites;
