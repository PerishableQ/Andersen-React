function SearchBar(props) {
	return (
		<div className="info-search">
			<div className="info-searh__input-wrapper">
				<input
					autoComplete="off"
					type="text"
					name="search"
					placeholder="Введите название"
					id="input_id"
					className="info-searh_input"
				/>
				<button type="submit" className="btn">
					Search
				</button>
			</div>
		</div>
	);
}

export default SearchBar;
