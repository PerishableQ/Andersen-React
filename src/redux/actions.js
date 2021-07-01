import { createAction } from "@reduxjs/toolkit";

// favorites actions
export const addFilm = createAction("ADD_FILM");
export const addFavorite = createAction("ADD_FAVORITE");

// login actions
export const loginAction = createAction("LOGIN");
export const logoutAction = createAction("LOGOUT");
