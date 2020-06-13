import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

import verbos from "components/verbos.json";
import BackToTop from "components/Sections/BackToTop";

class Verbos extends React.Component {
	state = {};
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

	scrollTo = (e, adjetivo) => {
		e.preventDefault();
		document.getElementById(adjetivo).scrollIntoView({
			block: "start",
			behavior: "smooth",
		});
	};

	render() {
		return (
			<React.Fragment>
				<div
					className="wrapper"
					style={{
						background: "#f2f2f2",
						borderRadius: "20px 20px 0 0",
					}}
				>
					<Container className="mb-5">
						<h1 className="text-center title h3" id="top">
							Vocabulario: Verbos
						</h1>
						<p className="pb-3 text-center">
							Los que están marcados con "Excepción" son verbos
							que deberían pertenecer a un cierto grupo, pero
							están en otro.
						</p>
						<Row className="justify-content-around">
							{verbos.verbos.map((verbo) => (
								<Col md="6" key={verbo.id}>
									<Card
										style={{ borderRadius: ".5rem" }}
										className="bg-white card-plain px-3"
									>
										<CardBody>
											<div
												style={{ width: "100%" }}
												className="row justify-content-between mx-0"
											>
												<p className="h5 text-info title pt-0">
													{verbo.hiragana}
												</p>
												<p className="h5 text-info title pt-0">
													{verbo.romaji}
												</p>
											</div>
											<div
												style={{ width: "100%" }}
												className="row justify-content-between mx-0"
											>
												<p className="h5 text-info title pt-0">
													{verbo.kanji}
												</p>
												<p
													className="h5 text-info title pt-0 text-capitalize"
													style={{
														fontSize: "0.8rem",
													}}
												>
													{verbo.traduccion}
												</p>
											</div>

											{verbo.frase && (
												<p
													className="text-center"
													id="verbo-frase"
												>
													Texto de ejemplo con el{" "}
													<strong>Verbo</strong>{" "}
													incluido dentro de la frase
												</p>
											)}

											{verbo.fraseHiragana && (
												<p
													className="text-center"
													id="verbo-frase"
												>
													Texto de ejemplo con el{" "}
													<strong>Verbo</strong>{" "}
													incluido dentro de la frase
												</p>
											)}

											{verbo.fraseRomaji && (
												<p
													className="text-center"
													id="verbo-frase"
												>
													Texto de ejemplo con el{" "}
													<strong>Verbo</strong>{" "}
													incluido dentro de la frase
												</p>
											)}
											{verbo.grupo === 1 && (
												<h4 className="title text-warning my-0 pt-0">
													Grupo: {verbo.grupo}
												</h4>
											)}
											{verbo.grupo === 2 && (
												<h4 className="title text-primary my-0 pt-0">
													Grupo: {verbo.grupo}
												</h4>
											)}
											{verbo.grupo === 3 && (
												<h4 className="title text-success my-0 pt-0">
													Grupo: {verbo.grupo}
												</h4>
											)}

											{verbo.excepcion && (
												<h4
													className="title text-danger"
													style={{
														position: "absolute",
														bottom: 0,
														right: "1.3rem",
													}}
												>
													Excepción
												</h4>
											)}
										</CardBody>
									</Card>
								</Col>
							))}
							<BackToTop />
						</Row>
					</Container>
				</div>
			</React.Fragment>
		);
	}
}
export default Verbos;
