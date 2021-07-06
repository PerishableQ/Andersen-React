import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login } from "../../redux/reducers/authSlice";

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
				localStorage.setItem("currentUser", `${loginState.value}`);
				history.push("/");
			} else {
				alert("Неправильный логин или пароль");
			}
		} else {
			alert("Неправильный логин или пароль");
		}
	};

	return (
		<section className="auth section">
			<div className="vs-container">
				<div className="auth__form">
					<form action="/" method="POST" className="auth-form">
						<div className="auth-form__title-wrapper">
							<h2 className="auth-form__title">Войти в систему</h2>
						</div>

						<div className="auth__field-wrapper">
							<div className="auth-form__field-wrapper">
								<label htmlFor="auth-name-id" className="auth-form__label">
									Введите логин
								</label>
								<input
									autoComplete="off"
									type="text"
									name="auth-name"
									placeholder="Логин"
									id="auth-name-id"
									className="auth-form__input input"
									value={loginState.value}
									onChange={logChangeHandler}
								/>
							</div>

							<div className="auth-form__field-wrapper">
								<label htmlFor="auth-pass-id" className="auth-form__label">
									Введите пароль
								</label>
								<input
									autoComplete="off"
									type="text"
									name="auth-pass"
									placeholder="Пароль"
									id="auth-pass-id"
									className="auth-form__input input"
									value={passwordState.value}
									onChange={passwordChangeHandler}
								/>
							</div>
						</div>

						<div className="section-form__buttons">
							<button type="submit" className="btn" onClick={e => signInClick(e)}>
								Войти
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}

export default SignIn;
