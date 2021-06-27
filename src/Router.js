import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


//Import JS
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";

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

function AppRouter() {
    <Router>
        <Switch>
            <Route path='/' exact component={HomePage}></Route>
            <Route path='/favorites' exact component={Favorites}></Route>
            <Route path='/searchhistory' exact component={SearchHistory}></Route>
            <Route path='/searchresult' exact component={SearchResult}></Route>
            <Route path='/signin' exact component={SignIn}></Route>
            <Route path='/signup' exact component={SignUp}></Route>
            <Route path='/cardinfo' exact component={CardInfo}></Route>
        </Switch>
    </Router>
}

export default AppRouter;