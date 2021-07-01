export const loginReducer = action => {
	if (action.type === "LOG_INPUT") {
		return { value: action.val, isValid: Boolean(action.val) };
	}
	return { value: "", isValid: false };
};

export const passwordReducer = action => {
	if (action.type === "PASSWORD_INPUT") {
		return { value: action.val, isValid: Boolean(action.val) };
	}
	return { value: "", isValid: false };
};