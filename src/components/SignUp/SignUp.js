import "./SignUp.css";

function SignUp(props) {
	return (
		<section className="register section">
			<div className="vs-container">
				<div className="register__form">
					<form action="#" method="POST" className="register-form">
						<div className="register-form__title-wrapper">
							<h2 className="register-form__title">Регистрация</h2>
						</div>

						<div className="register__field-wrapper">
							<div className="register-form__field-wrapper">
								<label for="register-name-id" className="register-form__label">
									{" "}
									Введите логин
								</label>
								<input
									autocomplete="off"
									type="text"
									name="register-name"
									placeholder="Логин"
									id="register-name-id"
									className="register-form__input input"
								/>
							</div>

							<div className="register-form__field-wrapper">
								<label for="register-pass-id" className="register-form__label">
									{" "}
									Введите пароль
								</label>
								<input
									autocomplete="off"
									type="text"
									name="register-pass"
									placeholder="Пароль"
									id="register-pass-id"
									className="register-form__input input"
								/>
							</div>
						</div>

						<div className="section-form__buttons">
							<button type="submit" className="btn">
								Зарегистрироваться
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}

export default SignUp;
