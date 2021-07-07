import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
	name: "history",
	initialState: [],
	reducers: {
		addHistory(state, action) {
			state.push(action.payload);
		}
	}
});

export default historySlice.reducer;
export const { addHistory } = historySlice.actions;
