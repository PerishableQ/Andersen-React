// const defaultState = {
//   favorite: [],
// };

const deliteFilm = (arr, name) => {
	return arr.filter(item => {
		if (item === name) {
			return false;
		} else {
			return true;
		}
	});
};

function reducer(state = [], action) {
	console.log(state.favorite, "!!!!");
	switch (action.type) {
		case "ADD":
			return [...state, action.movieName];
		case "SUB":
			return deliteFilm(state.favorite, action.movieName);

		default:
			return state;
	}
}

export default reducer;
