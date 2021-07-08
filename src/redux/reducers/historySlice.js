import { createSlice } from "@reduxjs/toolkit";
let currentUser = localStorage.getItem("currentUser");
let startUserData = currentUser ? JSON.parse(localStorage.getItem(currentUser)).history : [];

const initialState = {
	history: startUserData
};

const historySlice = createSlice({
	name: "history",
	initialState: initialState,
	reducers: {
		addHistory(state, action) {
			state.history.push(action.payload);
		},
		resetHistory(state, action) {
			state.history = [];
		},
		connectLSHistoryToStore(state, action) {
			state.history = action.payload;
		}
	}
});

export default historySlice.reducer;
export const { addHistory, resetHistory, connectLSHistoryToStore } = historySlice.actions;
