import { useDispatch } from "react-redux";

import { logout } from "../../redux/reducers/authSlice";

export function SignOutBtn(props) {
	const dispatch = useDispatch();

	const signOut = () => {
		console.log("!");
		localStorage.setItem("currentUser", "");
		dispatch(logout());
	};

	return (
		<button onClick={signOut} className="header-account__btn">
			Выйти
		</button>
	);
}
