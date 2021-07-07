import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
	name: "searchResult",
	initialState: [],
	reducers: {
		addSearchResult(state, action) {
			return (state = action.payload);
		}
	}
});

export default searchSlice.reducer;
export const { addSearchResult } = searchSlice.actions;
