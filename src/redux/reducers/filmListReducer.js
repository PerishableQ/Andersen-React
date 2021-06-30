// import { createReducer } from "@reduxjs/toolkit";

const initialState = {
	films: [1, 2]
};

export function filmListReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_FILM': 
            return {
                ...state,
                films: action.payload
            }

        default:
            return state;
    }
}
