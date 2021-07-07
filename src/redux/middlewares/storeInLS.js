export const storeInLS = store => next => action => {
	const result = next(action);
	const storeFavorites = store.getState().favorites.favorites;
	const currentUserLogin = localStorage.getItem("currentUser");

	if (action.type === "favorites/addFavorite") {
		if (currentUserLogin) {
			const userDataFromLS = JSON.parse(localStorage.getItem(currentUserLogin));

			userDataFromLS.favorites = storeFavorites;

			localStorage.setItem(currentUserLogin, JSON.stringify(userDataFromLS));
		}
	}

	return result;
};
