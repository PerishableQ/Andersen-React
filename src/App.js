import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

//Import JS
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { useDispatch, useSelector } from "react-redux";

import AppRouter from "./Router";

// Import CSS
import "./Reset.css";
import "./App.css";

function App() {
	// const [film, setFilm] = React.useState({});

	// React.useEffect(() => {
	// 	fetch(
	// 		"https://api.themoviedb.org/3/movie/popular?api_key=bf9e6e6bb4e6650d7d3bb59d1cbaa3b7&language=en-US&page=1"
	// 	)
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			setFilm({
	// 				img: data.results[0].backdrop_path,
	// 				title: data.results[0].title,
	// 				year: data.results[0].release_date
	// 			});
	// 			console.log(data.results[0]);
	// 		});
	// }, []);

	const dispatch = useDispatch();
	const isLoggedIn = useSelector(state => state.isLoggedIn);
	const favoritesMovie = useSelector(state => state.favorites);

	const onFav = str => {
		dispatch({ type: "ADD", movieName: str });
		console.log("Любимые фильмы", favoritesMovie);
	};

	const unFav = str => {
		dispatch({ type: "SUB", movieName: str });
		console.log("Любимые фильмы", favoritesMovie);
	};

	return (
		<div className="wrapper">
			<Router>
				<Header />

				<main className="page">
					{/* Сюда кладем все компоненты кроме хедера и футера */}
					<AppRouter />
				</main>

				<Footer />
			</Router>
		</div>
	);
}

export default App;
