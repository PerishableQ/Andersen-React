export const resetStore = store => next => action => {
	let result = next(action);
	if (action.type === "auth/logout") {
	}
	return result;
};
