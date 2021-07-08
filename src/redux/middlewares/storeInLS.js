export const storeInLS = store => next => action => {
	const result = next(action);
	const storeFavorites = store.getState().favorites.favorites;
	const storeHistory = store.getState().history.history;
	const currentUserLogin = localStorage.getItem("currentUser");
	const userDataFromLS = JSON.parse(localStorage.getItem(currentUserLogin));

	if (action.type === "favorites/addFavorite") {
		if (currentUserLogin) {
			userDataFromLS.favorites = storeFavorites;

			localStorage.setItem(currentUserLogin, JSON.stringify(userDataFromLS));
		}
	}

	if (action.type === "history/addHistory") {
		if (currentUserLogin) {
			userDataFromLS.history = storeHistory;

			localStorage.setItem(currentUserLogin, JSON.stringify(userDataFromLS));
		}
	}

	return result;
};
