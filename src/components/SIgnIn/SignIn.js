import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login } from "../../redux/reducers/authSlice";
import { connectLSFavoritesToStore } from "../../redux/reducers/favoritesSlice";
import { connectLSHistoryToStore } from "../../redux/reducers/historySlice";

// react useReducer functions
import { loginReducer, passwordReducer } from "./authReducers";

import "./SignIn.scss";

function SignIn(props) {
	const [loginState, dispatchLogin] = React.useReducer(loginReducer, {
		value: "",
		isValid: null
	});
	const [passwordState, dispatchPassword] = React.useReducer(passwordReducer, {
		value: "",
		isValid: null
	});

	const dispatch = useDispatch();
	const history = useHistory();

	const logChangeHandler = event => {
		dispatchLogin({ type: "LOG_INPUT", val: event.target.value });
	};

	const passwordChangeHandler = event => {
		dispatchPassword({ type: "PASSWORD_INPUT", val: event.target.value });
	};

	const signInClick = e => {
		e.preventDefault();
		const localStorageData = JSON.parse(localStorage.getItem(loginState.value));

		if (localStorageData) {
			if (localStorageData["password"] === passwordState.value) {
				dispatch(login());
				dispatch(connectLSFavoritesToStore(localStorageData.favorites));
				dispatch(connectLSHistoryToStore(localStorageData.history));
				localStorage.setItem("currentUser", `${loginState.value}`);
				history.push("/");
			} else {
				alert("Invalid login or password");
			}
		} else {
			alert("Invalid login or password");
		}
	};

	return (
		<section className="auth section">
			<div className="vs-container">
				<div className="auth__form">
					<form action="/" method="POST" className="auth-form">
						<div className="auth-form__title-wrapper">
							<h2 className="auth-form__title">Sign In</h2>
						</div>

						<div className="auth__field-wrapper">
							<div className="auth-form__field-wrapper">
								<label htmlFor="auth-name-id" className="auth-form__label">
									Login
								</label>
								<input
									autoComplete="off"
									type="text"
									name="auth-name"
									placeholder="Login"
									id="auth-name-id"
									className="auth-form__input input"
									value={loginState.value}
									onChange={logChangeHandler}
								/>
							</div>

							<div className="auth-form__field-wrapper">
								<label htmlFor="auth-pass-id" className="auth-form__label">
									Password
								</label>
								<input
									autoComplete="off"
									type="text"
									name="auth-pass"
									placeholder="Password"
									id="auth-pass-id"
									className="auth-form__input input"
									value={passwordState.value}
									onChange={passwordChangeHandler}
								/>
							</div>
						</div>

						<div className="section-form__buttons">
							<button type="submit" className="btn" onClick={signInClick}>
								Sign In
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}

export default SignIn;
