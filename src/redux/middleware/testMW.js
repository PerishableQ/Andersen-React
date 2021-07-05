export const inConsole = store => next => action => {
	let result;
	console.log("ahahha");
	console.log(action.type);
	result = next(action);
	console.log(action.type);

	return result;
};
