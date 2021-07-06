import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducers/rootReducer";
import { useDispatch } from "react-redux";

// import { inConsole } from "./middleware/testMW";

// Это миддлевара, здесь я вывожу данные в консоль, для понимания,

const putInLocalStorage = store => next => action => {
	let result;
	// let currentUser = localStorage.getItem("currentUser");
	// // console.log(store.getState().favorites, "fav");
	// let startUserData = JSON.parse(localStorage.getItem(currentUser));
	// store.getState().favorites = startUserData.favorites;
	// console.log(store.getState());

	// Данные до изменения стора
	console.log("this is store1", store.getState().favorites.favorites);

	result = next(action); // обязательный метод

	// Данные после изменения стора

	// Получаю список избранного из стора
	let actualFavorites = store.getState().favorites.favorites;
	console.log(actualFavorites);

	// Получаю логин текущего пользователя
	let currentUser = localStorage.getItem("currentUser");

	// Данные по текущему пользователю из LS
	if (currentUser) {
		let currentUserData = JSON.parse(localStorage.getItem(currentUser));

		// Обновляю данные пользователя до актуального избранного, которе взято из стора
		currentUserData.favorites = actualFavorites;

		// Обновляю LS
		localStorage.setItem(currentUser, JSON.stringify(currentUserData));

		console.log(currentUserData);
		console.log(action.type);
		console.log("this is store2", store.getState().favorites.favorites);
	}

	return result;
};

export const store = createStore(rootReducer, applyMiddleware(putInLocalStorage));
