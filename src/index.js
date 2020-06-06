import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
import "assets/scss/now-ui-kit.scss";

import MainNavbar from "components/Layouts/MainNavbar";
import Home from "views/Home";
import HiraganaView from "views/HiraganaView";
import KatakanaView from "views/KatakanaView";
import Creditos from "views/Creditos";
import Particulas from "views/Particulas";
import Verbos from "views/Verbos";
import Frases from "views/Frases";
import Adjetivos from "views/Adjetivos";
import Sustantivos from "views/Sustantivos";
import Grupos from "views/Grupos";
import Tiempos from "views/Tiempos";
import FormasKei from "views/FormasKei";
import Transicion from "views/Transicion";
import Kanji from "views/Kanji";

import * as ServiceWorker from "./serviceWorker";
import Numeros from "views/Numeros y Fechas/Numeros";
import DiasSemana from "views/Numeros y Fechas/DiasSemana";
import DiasMes from "views/Numeros y Fechas/DiasMes";

ReactDOM.render(
	<BrowserRouter>
		<MainNavbar />
		<Switch>
			<Switch>
				<Route exact path="/" render={(props) => <Home {...props} />} />
				<Route
					exact
					path="/hiragana"
					render={(props) => <HiraganaView {...props} />}
				/>
				<Route
					exact
					path="/katakana"
					render={(props) => <KatakanaView {...props} />}
				/>
				<Route
					exact
					path="/creditos"
					render={(props) => <Creditos {...props} />}
				/>
				<Route
					exact
					path="/particulas"
					render={(props) => <Particulas {...props} />}
				/>
				<Route
					exact
					path="/verbos"
					render={(props) => <Verbos {...props} />}
				/>
				<Route
					exact
					path="/frases"
					render={(props) => <Frases {...props} />}
				/>
				<Route
					exact
					path="/adjetivos"
					render={(props) => <Adjetivos {...props} />}
				/>
				<Route
					exact
					path="/sustantivos"
					render={(props) => <Sustantivos {...props} />}
				/>
				<Route
					exact
					path="/grupos"
					render={(props) => <Grupos {...props} />}
				/>
				<Route
					exact
					path="/tiempos"
					render={(props) => <Tiempos {...props} />}
				/>
				<Route
					exact
					path="/formas-kei"
					render={(props) => <FormasKei {...props} />}
				/>
				<Route
					exact
					path="/transicion/:recurso"
					component={Transicion}
				/>
				<Route
					exact
					path="/kanji/1"
					render={(props) => <Kanji {...props} />}
				/>
				<Route
					exact
					path="/numeros"
					render={(props) => <Numeros {...props} />}
				/>
				<Route
					exact
					path="/dias-semana"
					render={(props) => <DiasSemana {...props} />}
				/>
				<Route
					exact
					path="/dias-mes"
					render={(props) => <DiasMes {...props} />}
				/>
			</Switch>
		</Switch>
	</BrowserRouter>,
	document.getElementById("root")
);
ServiceWorker.register();
