import React from "react";

//Import JS
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import CardInfo from "./components/CardInfo/CardInfo";

// Import CSS
import "./Reset.css";
import "./App.css";

function App() {
	return (
		<div className="wrapper">
			<Header />

			<main className="page">
                {/* Сюда кладем все компоненты кроме хедера и футера */}
                {/* <SignIn /> */}
                {/* <SignUp /> */}
                {/* <CardInfo /> */}
            </main>

			<Footer />
		</div>
	);
}

export default App;
