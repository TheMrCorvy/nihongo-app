import React from "react";
import { Row, Col, Container } from "reactstrap";

import AccesosDirectos from "components/Sections/Particulas/AccesosDirectos";

import LasParticulas from "components/LasParticulas";
import BackToTop from "components/Sections/BackToTop";

class Particulas extends React.Component {
	state = {};
	componentDidMount() {
		document.body.classList.add("landing-page");
		document.body.classList.add("sidebar-collapse");
		document.body.style.background = "#000";
		document.body.style.borderRadius = "20px 20px 0 0";
		document.documentElement.classList.remove("nav-open");
	}

	componentWillUnmount() {
		document.body.classList.remove("landing-page");
		document.body.classList.remove("sidebar-collapse");
		document.body.style.background = "#fff";
	}

	render() {
		return (
			<React.Fragment>
				<div
					className="wrapper mb-5 container-fluid"
					style={{
						background: "#f2f2f2",
						borderRadius: "20px 20px 0 0",
					}}
				>
					<h1 className="text-center title h3">
						Guía para Partículas
					</h1>
					<Container className="container-fluid">
						<Row className="justify-content-around">
							<Col md="12" className="px-4 pb-4">
								<p>
									Las <strong>Partículas</strong>, son afijos
									o palabras cortas que modifican la ultima
									palabra u oración antes de las mismas.
									Tienen varias funciones, como pueden ser
									indicar si una frase es una pregunta o una
									afirmación, indicar el estado del objeto de
									la oración, o su ubicación con respecto al
									interlocutor, entre otras.
								</p>
							</Col>
							<Col md="12" className="px-4">
								<h4 className="title text-danger mt-2">
									Advertencia
								</h4>
								<p>
									Siendo que <strong>las partículas</strong>{" "}
									son un tema relativamente avanzado, en toda
									ésta sección <strong>no</strong> estarán
									disponibles las lecturas en{" "}
									<strong>Romaji</strong>, pero si seguirá
									disponible la opción de tocar para saber
									como se leen los kanjis.
								</p>
							</Col>
							<AccesosDirectos LasParticulas={LasParticulas} />
							{LasParticulas.map((particula) => (
								<particula.componente key={particula.romaji} />
							))}
							<BackToTop />
						</Row>
					</Container>
				</div>
			</React.Fragment>
		);
	}
}
export default Particulas;
