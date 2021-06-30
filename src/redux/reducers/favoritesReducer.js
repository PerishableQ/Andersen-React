const initialState = {
    favorites: [], 
    token: '1230390934aslkdfho124324',
    inFavorites: false
};

export function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_FAVORITE': 
            return {
                ...state,
                favorites: state.favorites.concat(action.payload),
                inFavorites: true
            }

        default:
            return state;
    }
}