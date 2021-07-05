import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	films: []
};

const filmsSlice = createSlice({
    name: 'films',
    initialState: initialState,
    reducers: {
        addFilm(state, action) {
            state.films = action.payload
        }
    }
});


export default filmsSlice.reducer;
export const { addFilm } = filmsSlice.actions;

/* export function filmsReducer(state = initialState, action) {
	switch (action.type) {
		case "ADD_FILM":
			return {
				...state,
				films: action.payload
			};

		default:
			return state;
	}
} */
