import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login } from "../../redux/reducers/authSlice";

// React useReducer functions
import { loginReducer, passwordReducer } from "./reducersInput.js";

import "./SignUp.scss";

function SignUp(props) {
	const dispatch = useDispatch();
	const history = useHistory();

	const [loginState, dispatchLogin] = React.useReducer(loginReducer, {
		value: "",
		isValid: null
	});

	const [passwordState, dispatchPassword] = React.useReducer(passwordReducer, {
		value: "",
		isValid: null
	});

	const logChangeHandler = event => {
		dispatchLogin({ type: "LOG_INPUT", val: event.target.value });
	};

	const passwordChangeHandler = event => {
		dispatchPassword({ type: "PASSWORD_INPUT", val: event.target.value });
	};

	const signUpClick = () => {
		if (!localStorage.getItem(`${loginState.value}`)) {
			if (passwordState.isValid && loginState.isValid) {
				dispatch(login());
				localStorage.setItem(
					`${loginState.value}`,
					JSON.stringify({
						login: loginState.value,
						password: passwordState.value,
						favorites: [],
						history: [],
						signIn: true
					})
				);
				localStorage.setItem("currentUser", `${loginState.value}`);
				history.push("/"); // Переход на начальную страницу после клика
			} else {
				alert("Invalid login or password");
			}
		} else {
			history.push("/signup");
			alert("User with same login already exists!");
		}
	};

	return (
		<section className="register section">
			<div className="vs-container">
				<div className="register__form">
					<form action="#" method="POST" className="register-form">
						<div className="register-form__title-wrapper">
							<h2 className="register-form__title">Sign Up</h2>
						</div>

						<div className="register__field-wrapper">
							<div className="register-form__field-wrapper">
								<label htmlFor="register-name-id" className="register-form__label">
									Login
								</label>
								<input
									autoComplete="off"
									type="text"
									name="register-name"
									placeholder="Login"
									id="register-name-id"
									className="register-form__input input"
									value={loginState.value}
									onChange={logChangeHandler}
								/>
							</div>

							<div className="register-form__field-wrapper">
								<label htmlFor="register-pass-id" className="register-form__label">
									Password
								</label>
								<input
									autoComplete="off"
									type="text"
									name="register-pass"
									placeholder="Password"
									id="register-pass-id"
									className="register-form__input input"
									value={passwordState.value}
									onChange={passwordChangeHandler}
								/>
							</div>
						</div>

						<div className="section-form__buttons">
							<button type="button" className="btn" onClick={signUpClick}>
								Sign Up
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}

export default SignUp;
