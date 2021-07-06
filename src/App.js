import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRouter from "./AppRouter";

// styling
import "./Reset.css";
import "./App.scss";

function App() {
	const dispatch = useDispatch();

	// React.useEffect(() => {
	// 	let currentUser = localStorage.getItem("currentUser");
	// 	let currentUserFav = JSON.parse(localStorage.getItem(currentUser).favorites);
	// 	currentUserFav.forEach(item => {
	// 		dispatch();
	// 	});
	// }, []);

	return (
		<div className="wrapper">
			<Router>
				<Header />

				<main className="page">
					<AppRouter />
				</main>

				<Footer />
			</Router>
		</div>
	);
}

export default App;
