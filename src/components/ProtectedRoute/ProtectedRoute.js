import { Route, Redirect } from "react-router";

function ProtectedRoute({ component: Component, ...restOfProps }) {
	const isAuthenticated = localStorage.getItem("currentUser");
	return (
		<Route
			{...restOfProps}
			render={props =>
				isAuthenticated ? <Component {...props} /> : <Redirect to="/signin" />
			}
		/>
	);
}

export default ProtectedRoute;
