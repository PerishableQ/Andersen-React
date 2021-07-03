import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRouter from "./AppRouter";

// styling
import "./Reset.css";
import "./App.css";

function App() {
	return (
		<div className="wrapper">
			<Router>
				<Header />

				<main className="page">
					{/* render all the components here */}
					<AppRouter />
				</main>

				<Footer />
			</Router>
		</div>
	);
}

export default App;
