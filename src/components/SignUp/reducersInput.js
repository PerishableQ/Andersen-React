export function loginReducer (action) {
	if (action.type === "LOG_INPUT") {
		return { value: action.val, isValid: Boolean(action.val) };
	}
	return { value: "", isValid: false };
};

export function passwordReducer (action) {
	if (action.type === "PASSWORD_INPUT") {
		console.log("action");
		return { value: action.val, isValid: Boolean(action.val) };
	}
	return { value: "", isValid: false };
};
