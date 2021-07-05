export const loginReducer = (state, action) => {
	if (action.type === "LOG_INPUT") {
		return { value: action.val, isValid: Boolean(action.val) };
	}

	if (action.type === "LOG_BLUR") {
		return { value: state.value, isValid: Boolean(action.val) };
	}

	return { value: "", isValid: false };
};

export const passwordReducer = (state, action) => {
	if (action.type === "PASSWORD_INPUT") {
		return { value: action.val, isValid: Boolean(action.val) };
	}
	if (action.type === "PASSWORD_BLUR") {
		return { value: state.value, isValid: state.value.trim().length > 6 };
	}

	return { value: "", isValid: false };
};
