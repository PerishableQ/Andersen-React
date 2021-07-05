import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	films: []
};

const filmsSlice = createSlice({
	name: "films",
	initialState: initialState,
	reducers: {
		addFilm(state, action) {
			state.films = action.payload;
		}
	}
});

export default filmsSlice.reducer;
export const { addFilm } = filmsSlice.actions;
