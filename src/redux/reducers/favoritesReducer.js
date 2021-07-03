// import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
	favorites: []
};

// const favoritesReducer = createSlice({
// 	name: "fav",
// 	initialState: initialState,
// 	reducers: {
//         addFavorite: state =>
//     }
// });

export function favoritesReducer(state = initialState, action) {
	switch (action.type) {
		case "ADD_FAVORITE":
			return {
				...state,
				favorites: state.favorites.concat(action.payload)
			};

		// need to finish the logic
		case "REMOVE_FAVORITE":
			return {
				...state,
				favorites: state.favorites.filter()
			};

		default:
			return state;
	}
}
