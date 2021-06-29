// const defaultState = {
//    false,
// };

function reducer(state = false, action) {
	console.log(action.type);
	switch (action.type) {
		case "LOGIN":
			return true;
		case "LOGOUT":
			return false;

		default:
			return state;
	}
}

export default reducer;
