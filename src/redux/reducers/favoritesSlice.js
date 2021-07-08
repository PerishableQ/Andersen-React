import { createSlice } from "@reduxjs/toolkit";
let currentUser = localStorage.getItem("currentUser");
let startUserData = currentUser ? JSON.parse(localStorage.getItem(currentUser)).favorites : [];

const initialState = {
	favorites: startUserData
};

const favoritesSlice = createSlice({
	name: "favorites",
	initialState: initialState,
	reducers: {
		addFavorite(state, action) {
			state.favorites = state.favorites.concat(action.payload);
		},
		removeFavorite(state, action) {
			state.favorites = state.favorites.filter(film => film.id !== action.payload);
		},
		resetFavorite(state) {
			state.favorites = [];
		},
		connectLSFavoritesToStore(state, action) {
			state.favorites = action.payload;
		}
	}
});

export default favoritesSlice.reducer;
export const { addFavorite, removeFavorite, resetFavorite, connectLSFavoritesToStore } =
	favoritesSlice.actions;
