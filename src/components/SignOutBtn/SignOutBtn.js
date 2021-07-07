import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import { resetStore } from "../../redux/middlewares/resetStore";

import { logout } from "../../redux/reducers/authSlice";
import { resetFavorite } from "../../redux/reducers/favoritesSlice";

export function SignOutBtn(props) {
	const dispatch = useDispatch();
	const history = useHistory();

	const signOut = () => {
		localStorage.setItem("currentUser", "");
		dispatch(logout());
		dispatch(resetFavorite());
		history.push("/");
	};

	return (
		<button onClick={signOut} className="header-account__btn">
			Sign out
		</button>
	);
}
