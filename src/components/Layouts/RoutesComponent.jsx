import React from "react";
import { Route, Switch } from "react-router-dom";

import routes from "routes";

export default function RoutesComponent() {
	return <Switch>{getRoutes()}</Switch>;
}

function getRoutes() {
	return routes.map((route) => {
		return (
			<Route
				exact
				path={route.path}
				component={route.component}
				key={route.nameKey}
			/>
		);
	});
}
