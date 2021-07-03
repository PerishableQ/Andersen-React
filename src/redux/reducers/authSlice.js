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

// export function authReducer(state = initialState, action) {
// 	switch (action.type) {
// 		case "LOGIN":
// 			return {
// 				...state,
// 				isLoggedIn: true
// 			};

// 		case "LOGOUT":
// 			return {
// 				...state,
// 				isLoggedIn: false
// 			};

// 		default:
// 			return state;
// 	}
// }
