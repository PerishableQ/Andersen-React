import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	searchResult: []
};

const searchSlice = createSlice({
	name: "searchResult",
	initialState: initialState,
	reducers: {
		addSearchResult(state, action) {
			state.searchResult = action.payload;
		}
	}
});

export default searchSlice.reducer;
export const { addSearchResult } = searchSlice.actions;
