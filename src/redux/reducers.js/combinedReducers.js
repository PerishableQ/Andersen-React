import {combineReducers} from 'redux';

import addFilmListToStore from "./addFilmListToStore";
import addFilmToFavorites from "./addFilmToFavorites";


export const combinedReducers = combineReducers({
    addFilmListToStore,
    addFilmToFavorites
})