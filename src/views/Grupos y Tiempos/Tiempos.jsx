import React from "react";
import { Row, Col } from "reactstrap";

import Ikeyoushi from "components/Sections/Tiempos/Ikeyoushi";
import Nakeyoushi from "components/Sections/Tiempos/Nakeyoushi";
import VerbosFormal from "components/Sections/Tiempos/VerbosFormal";
import VerbosFutsu from "components/Sections/Tiempos/VerbosFutsu";
import Sustantivos from "components/Sections/Tiempos/Sustantivos";
import BackToTop from "components/Sections/BackToTop";

export default class Tiempos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		document.body.classList.add("landing-page");
		document.body.classList.add("sidebar-collapse");
		document.documentElement.classList.remove("nav-open");
		document.body.style.background = "#000";
		document.body.style.borderRadius = "20px 20px 0 0";
	}

	componentWillUnmount() {
		document.body.classList.remove("landing-page");
		document.body.classList.remove("sidebar-collapse");
		document.body.style.background = "#fff";
		document.body.style.borderRadius = "0";
	}

	scrollTo = (e, particula) => {
		e.preventDefault();
		document.getElementById(particula).scrollIntoView({
			block: "start",
			behavior: "smooth",
		});
	};

	render() {
		return (
			<React.Fragment>
				<div
					className="wrapper container-fluid mb-5"
					style={{
						background: "#f2f2f2",
						borderRadius: "20px 20px 0 0",
					}}
				>
					<h1 className="text-center title h3" id="top">
						Conjugaciones de Tiempo
					</h1>

					<Row className="justify-content-around">
						<Col
							md="12"
							className="container row text-center justify-content-around mb-5"
						>
							<h4 className="col-lg-12">Accesos Directos</h4>
							<a
								href="#pablo"
								onClick={(e) => this.scrollTo(e, "formal")}
								className="text-info title"
								style={{
									fontSize: "1rem",
									lineHeight: "1rem",
								}}
							>
								Verbos (ます)
							</a>
							<a
								href="#pablo"
								onClick={(e) => this.scrollTo(e, "futsu")}
								className="text-info title"
								style={{
									fontSize: "1rem",
									lineHeight: "1rem",
								}}
							>
								Verbos (う)
							</a>
							<a
								href="#pablo"
								onClick={(e) => this.scrollTo(e, "sustantivos")}
								className="text-info title"
								style={{
									fontSize: "1rem",
									lineHeight: "1rem",
								}}
							>
								Sustantivos
							</a>
							<a
								href="#pablo"
								onClick={(e) => this.scrollTo(e, "ikeyoushi")}
								className="text-info title"
								style={{
									fontSize: "1rem",
									lineHeight: "1rem",
								}}
							>
								Adjetivos (い)
							</a>
							<a
								href="#pablo"
								onClick={(e) => this.scrollTo(e, "nakeyoushi")}
								className="text-info title"
								style={{
									fontSize: "1rem",
									lineHeight: "1rem",
								}}
							>
								Adjetivos (な)
							</a>
						</Col>
						<p className="text-success title text-center col-lg-12">
							El tiempo Futuro no se conjuga en Japonés, para
							expresar dicho tiempo, se hará uso de las formas
							conjugadas en Presente.
						</p>
						<h2 className="col-lg-12 text-center title">Verbos</h2>

						<VerbosFormal />
						<VerbosFutsu />

						<h2 className="col-lg-12 text-center title">
							Adjetivos
						</h2>

						<Ikeyoushi />
						<Nakeyoushi />

						<h2
							className="col-lg-12 text-center title text-primary"
							id="sustantivos"
						>
							Sustantivos
						</h2>

						<Sustantivos />

						<BackToTop />
					</Row>
				</div>
			</React.Fragment>
		);
	}
}
