import { Route, Switch } from "react-router-dom";

// components
import HomePage from "./components/HomePage/HomePage";
import SearchResult from "./components/SearchResult/SearchResult";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import CardInfo from "./components/CardInfo/CardInfo";
import Favorites from "./components/Favorites/Favorites";
import SearchHistory from "./components/SearchHistory/SearchHistory";

const AppRouter = () => (
	<Switch>
		<Route path="/" exact component={HomePage} />
		<Route path="/favorites" component={Favorites} />
		<Route path="/searchhistory" component={SearchHistory} />
		<Route path="/searchresult" component={SearchResult} />
		<Route path="/signin" component={SignIn} />
		<Route path="/signup" component={SignUp} />
		<Route path="/cardinfo" component={CardInfo} />
	</Switch>
);

export default AppRouter;
