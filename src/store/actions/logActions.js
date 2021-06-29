const action_login = () => {
	return {
		type: "LOGIN"
	};
};

const action_logout = () => {
	return {
		type: "LOGOUT"
	};
};

// const unLog = () => {
// 	dispatch({ type: "LOGOUT" });
// };

export { action_login, action_logout };
