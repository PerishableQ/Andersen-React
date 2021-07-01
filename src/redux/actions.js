import { createAction } from "@reduxjs/toolkit";

// favorites actions
export const addFilm = createAction("ADD_FILM");
export const addFavorite = createAction("ADD_FAVORITE");

// authentication actions
export const login = createAction("LOGIN");
export const logout = createAction("LOGOUT");
