export const storeInLS = store => next => action => {
	let result = next(action);
	// console.log("Action: ", action);

	if (action.type === "favorites/addFavorite") {
		const storeFavorites = store.getState().favorites.favorites;
		const currentUserLogin = localStorage.getItem("currentUser");

		if (currentUserLogin) {
			const userDataFromLS = JSON.parse(localStorage.getItem(currentUserLogin));
			// console.log(userDataFromLS);
			userDataFromLS.favorites = storeFavorites;
			localStorage.setItem(currentUserLogin, JSON.stringify(userDataFromLS));
		}
	}
	return result;
};
