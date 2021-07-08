import { BASE_URL, API_KEY } from "../../consts/constsApi";
import { addSearchResult } from "../reducers/searchSlice";

// Redux Thunk function
export function fetchSearch(searchQuery) {
	return function (dispatch) {
		const url = `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`;

		fetch(url)
			.then(response => response.json())
			.then(data => dispatch(addSearchResult(data.results)));
	};
}
