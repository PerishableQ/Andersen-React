import "./SignIn.css";

export default function SignIn(props) {
	return (
		<section className="auth section">
			<div className="vs-container">
				<div className="auth__form">
					<form action="#" method="POST" className="auth-form">
						<div className="auth-form__title-wrapper">
							<h2 className="auth-form__title">Войти в систему</h2>
						</div>

						<div className="auth__field-wrapper">
							<div className="auth-form__field-wrapper">
								<label for="auth-name-id" className="auth-form__label">
									{" "}
									Введите логин
								</label>
								<input
									autocomplete="off"
									type="text"
									name="auth-name"
									placeholder="Логин"
									id="auth-name-id"
									className="auth-form__input input"
								/>
							</div>

							<div className="auth-form__field-wrapper">
								<label for="auth-pass-id" className="auth-form__label">
									{" "}
									Введите пароль
								</label>
								<input
									autocomplete="off"
									type="text"
									name="auth-pass"
									placeholder="Пароль"
									id="auth-pass-id"
									className="auth-form__input input"
								/>
							</div>
						</div>

						<div className="section-form__buttons">
							<button type="submit" className="btn">
								Войти
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}
