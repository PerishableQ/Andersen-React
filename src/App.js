import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

//Import JS
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import AppRouter from "./Router";

// Import CSS
import "./Reset.css";
import "./App.css";

function App() {
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
