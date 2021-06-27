import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import JS
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import HomePage from "./components/HomePage/HomePage";
import SearchResult from "./components/SearchResult/SearchResult";

import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import CardInfo from "./components/CardInfo/CardInfo";
import Favorites from "./components/Favorites/Favorites";
import SearchHistory from "./components/SearchHistory/SearchHistory";

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

					<Switch>
						<Route path="/" exact component={HomePage}></Route>
						<Route path="/favorites" component={Favorites}></Route>
						<Route path="/searchhistory" component={SearchHistory}></Route>
						<Route path="/searchresult" component={SearchResult}></Route>
						<Route path="/signin" component={SignIn}></Route>
						<Route path="/signup" component={SignUp}></Route>
						<Route path="/cardinfo" component={CardInfo}></Route>
					</Switch>
				</main>

				<Footer />
			</Router>
		</div>
	);
}

export default App;
