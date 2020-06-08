import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
import "assets/scss/now-ui-kit.scss";

import MainNavbar from "components/Layouts/MainNavbar";
import RoutesComponent from "components/Layouts/RoutesComponent";

import * as ServiceWorker from "./serviceWorker";

ReactDOM.render(
	<BrowserRouter>
		<MainNavbar />
		<Switch>
			<RoutesComponent />
		</Switch>
	</BrowserRouter>,
	document.getElementById("root")
);
ServiceWorker.register();
