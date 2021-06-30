import React from "react";

import "./SignIn.css";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { action_login } from "../../store/actions/logActions";

const loginReducer = (state, action) => {
	if (action.type === "LOG_INPUT") {
		return { value: action.val, isValid: Boolean(action.val) };
	}
	if (action.type === "LOG_BLUR") {
		return { value: state.value, isValid: Boolean(action.val) };
	}
	return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
	if (action.type === "PASSWORD_INPUT") {
		return { value: action.val, isValid: Boolean(action.val) };
	}
	if (action.type === "PASSWORD_BLUR") {
		return { value: state.value, isValid: state.value.trim().length > 6 };
	}
	return { value: "", isValid: false };
};

const SignIn = () => {
	const [isValidForm, setIsValidForm] = React.useState(false);
	const [loginState, dispatchLogin] = React.useReducer(loginReducer, {
		value: "",
		isValid: null
	});
	const [passwordState, dispatchPassword] = React.useReducer(passwordReducer, {
		value: "",
		isValid: null
	});

	const dispatch = useDispatch();

	const linkRef = React.useRef(null);

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
				dispatch(action_login());
				linkRef.current.click();
			} else {
				alert("Нерпавильный логин или пароль");
			}
			console.log(localStorageData, "important!!!");
		} else {
			alert("Нерпавильный логин или пароль");
		}
	};

	React.useEffect(() => {
		const identifire = setTimeout(() => {
			setIsValidForm(loginState.isValid && passwordState.isValid);
		}, 800);

		return () => {
			clearTimeout(identifire);
		};
	}, [loginState, passwordState]);

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
							<Link to="/" ref={linkRef}></Link>
							<button
								type="submit"
								className="btn"
								disabled={!isValidForm}
								onClick={e => signInClick(e)}
							>
								Войти
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default SignIn;
