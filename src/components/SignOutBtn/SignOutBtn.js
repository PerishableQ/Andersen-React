import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { logout } from "../../redux/reducers/authSlice";

export function SignOutBtn(props) {
	const dispatch = useDispatch();
	const history = useHistory();

	const signOut = () => {
		localStorage.setItem("currentUser", "");
		dispatch(logout());
		history.push("/");
	};

	return (
		<button onClick={signOut} className="header-account__btn">
			Выйти
		</button>
	);
}
