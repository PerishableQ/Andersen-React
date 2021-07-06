export const storeInLS = store => next => action => {
	const storeFavorites = store.getState().favorites.favorites;
	const currentUserLogin = localStorage.getItem("currentUser");

	if (currentUserLogin) {
		const userDataFromLS = JSON.parse(localStorage.getItem(currentUserLogin));

		userDataFromLS.favorites = storeFavorites;

		localStorage.setItem(currentUserLogin, JSON.stringify(userDataFromLS));
	}

	return next(action);
};
