import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

import verbos from "components/verbos.json";

class Verbos extends React.Component {
	state = {};
	componentDidMount() {
		document.body.classList.add("landing-page");
		document.body.classList.add("sidebar-collapse");
		document.body.style.background = "#f2f2f2";
		document.documentElement.classList.remove("nav-open");
	}

	componentWillUnmount() {
		document.body.classList.remove("landing-page");
		document.body.classList.remove("sidebar-collapse");
		document.body.style.background = "#fff";
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
				<div className="wraper">
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
							<Col md="12" className="text-center mb-4">
								<a
									href="#pablo"
									onClick={(e) => this.scrollTo(e, "top")}
									className="text-info title"
									style={{
										fontSize: "1.2rem",
										lineHeight: "1.61rem",
									}}
								>
									<i className="fas fa-3x fa-chevron-up"></i>
								</a>
							</Col>
						</Row>
					</Container>
				</div>
			</React.Fragment>
		);
	}
}
export default Verbos;
