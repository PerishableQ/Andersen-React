import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	auth: false
};

const authSlice = createSlice({
	name: "auth",
	initialState: initialState,
	reducers: {
		login(state) {
			state.auth = true;
		},
		logout(state) {
			state.auth = false;
		}
	}
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
