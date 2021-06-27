import React from "react";

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
			<Header />

			<main className="page">
				{/* Сюда кладем все компоненты кроме хедера и футера */}

				<HomePage />
			    <SearchResult />

 				{/* <SignIn /> */}
 				{/* <SignUp /> */}
 				{/* <CardInfo /> */}
 				{/* <Favorites /> */}
 				<SearchHistory />

			</main>

			<Footer />
		</div>
	);
}

export default App;
