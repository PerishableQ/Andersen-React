import { API_KEY, BASE_URL } from "../../consts/constsApi";
import { addFilm } from "../reducers/filmsSlice";

// Redux Thunk function
export function fetchFilmsForHomePage() {
	return function (dispatch) {
		const popularMoviesUrl = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1"`;

		fetch(popularMoviesUrl)
			.then(response => response.json())
			.then(data => dispatch(addFilm(data.results)));
	};
}
