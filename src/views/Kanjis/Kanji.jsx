import React from "react";
import { Row, Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";

import Lecturas from "components/Jsons/Lecturas";

export default class Kanji extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cargando: true,
			error: false,
			lecturas: Lecturas.Lecturas,
		};
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

	// resultadosMapeados = () => {
	// 	if (!this.state.error && !this.state.cargando) {
	// 		return (
	// 			<React.Fragment>

	// 			</React.Fragment>
	// 		);
	// 	} else if (this.state.cargando && !this.state.error) {
	// 		setTimeout(() => {
	// 			this.setState({
	// 				error: true,
	// 				cargando: false,
	// 			});
	// 		}, 3000);
	// 		return (
	// 			<React.Fragment>
	// 				<Col
	// 					md="12"
	// 					className="justify-content-center d-flex align-items-center text-center mb-3"
	// 				>
	// 					<Spinner color="white" />
	// 				</Col>
	// 				<p className="text-center text-white">Cargando...</p>
	// 			</React.Fragment>
	// 		);
	// 	} else {
	// 		setTimeout(() => {
	// 			this.setState({
	// 				error: false,
	// 				cargando: false,
	// 			});
	// 		}, 3000);
	// 		return (
	// 			<React.Fragment>
	// 				<Col
	// 					md="12"
	// 					className="justify-content-center d-flex align-items-center text-center mb-3"
	// 				>
	// 					<Spinner color="danger" />
	// 				</Col>
	// 				<p className="text-center text-white">
	// 					Hubo un error, intentando nuevamente...
	// 				</p>
	// 			</React.Fragment>
	// 		);
	// 	}
	// };

	render() {
		return (
			<React.Fragment>
				<div
					className="wrapper container-fluid"
					style={{
						background: "#f2f2f2",
						borderRadius: "20px 20px 0 0",
						minHeight: "100vh",
					}}
				>
					<Row className="justify-content-center mb-5">
						<Col md="12">
							<Card
								style={{
									borderRadius: "20px",
									background: "rgb(17, 113, 239)",
									overflow: "hidden",
								}}
								className="mt-3 card-plain"
							>
								<CardBody>
									<h1
										className="text-white text-center title mb-0"
										style={{
											fontSize: "9rem",
											fontFamily: "Sawarabi Gothic",
										}}
									>
										愛
										<span
											style={{
												position: "absolute",
												top: "-3rem",
												left: "-3rem",
												fontSize: "15rem",
												opacity: 0.1,
												fontFamily: "Sawarabi Gothic",
											}}
										>
											愛
										</span>
									</h1>
									<h4 className="title text-white text-center pt-0 my-0">
										Lecturas
									</h4>
									<h6 className="title text-white text-center">
										Hiragana
									</h6>
									<div
										className="row justify-content-around text-white pt-3 px-4"
										style={{
											fontFamily: "Sawarabi Gothic",
										}}
									>
										{this.state.lecturas.map(
											(lectura) =>
												lectura.hiragana && (
													<React.Fragment>
														<p
															key={lectura.id}
															id={
																"lectura-hiragana-" +
																lectura.id
															}
														>
															{lectura.hiragana}
														</p>
														<UncontrolledTooltip
															placement="top"
															target={
																"lectura-hiragana-" +
																lectura.id
															}
															delay={0}
														>
															{lectura.romaji}
														</UncontrolledTooltip>
													</React.Fragment>
												)
										)}
									</div>
									<h6 className="title text-white text-center">
										Katakana
									</h6>
									<div
										className="row justify-content-around text-white pt-3 px-4"
										style={{
											fontFamily: "Sawarabi Gothic",
										}}
									>
										{this.state.lecturas.map(
											(lectura) =>
												lectura.katakana && (
													<React.Fragment>
														<p
															key={lectura.id}
															id={
																"lectura-katakana-" +
																lectura.id
															}
														>
															{lectura.katakana}
														</p>
														<UncontrolledTooltip
															placement="top"
															target={
																"lectura-katakana-" +
																lectura.id
															}
															delay={0}
														>
															{lectura.romaji}
														</UncontrolledTooltip>
													</React.Fragment>
												)
										)}
									</div>
									<h6 className="title text-white text-center">
										Significado
									</h6>
									<div className="row justify-content-around text-white px-3">
										<p className="text-center">
											Lorem ipsum dolor sit, amet
											consectetur adipisicing elit.
										</p>
									</div>
									{/* <h6 className="title text-white px-3">Grupo de verbo: 2</h6>
					<h6 className="title text-white px-3">
						Tipo de Adjetivo: な形
					</h6> */}
									<div className="row justify-content-around text-white px-3">
										<h6 className="title text-white px-3">
											Cantidad de Trazos: 5
										</h6>
										<h6 className="title text-white px-3">
											Nivel de examen: N2
										</h6>
									</div>
								</CardBody>
							</Card>
						</Col>
						<Col md="12">
							<p className="text-center">
								<strong className="text-info">Nota:</strong>{" "}
								Puedes tocar en los Hiragana y Katakana para ver
								las lecturas en{" "}
								<strong className="text-success">Romaji</strong>
								.
							</p>
						</Col>
					</Row>
				</div>
			</React.Fragment>
		);
	}
}
