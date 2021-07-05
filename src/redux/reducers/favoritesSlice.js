import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	favorites: []
};

const favoritesSlice = createSlice({
	name: "favorites",
	initialState: initialState,
	reducers: {
		addFavorite(state, action) {
			state.favorites = state.favorites.concat(action.payload);
		}
	}
});

export default favoritesSlice.reducer;
export const { addFavorite } = favoritesSlice.actions;
