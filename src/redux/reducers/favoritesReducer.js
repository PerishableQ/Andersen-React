const initialState = {
    favorites: []
};

export function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_FAVORITE': 
            return {
                ...state,
                favorites: state.favorites.concat(action.payload)
            }
        
        // need to finish the logic
        case 'REMOVE_FAVORITE':
            return {
                ...state,
                favorites: state.favorites.filter()
            }

        default:
            return state;
    }
}