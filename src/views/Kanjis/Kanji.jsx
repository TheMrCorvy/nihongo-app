import React from "react";
import { Row, Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";

import Kanjis from "components/Jsons/Kanjis";

export default class Kanji extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cargando: true,
			error: false,
			kanji: Kanjis.Kanjis[this.props.match.params.idKanji],
			distancia: "10rem",
		};
	}

	componentDidMount() {
		document.body.classList.add("landing-page");
		document.body.classList.add("sidebar-collapse");
		document.documentElement.classList.remove("nav-open");
		document.body.style.background = "#000";
		document.body.style.borderRadius = "20px 20px 0 0";

		if (window.innerWidth <= 757) {
			this.setState({
				distancia: "-3rem",
			});
		}
	}

	componentWillUnmount() {
		document.body.classList.remove("landing-page");
		document.body.classList.remove("sidebar-collapse");
		document.body.style.background = "#fff";
		document.body.style.borderRadius = "0";
	}

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
										{this.state.kanji.kanji}
										<span
											style={{
												position: "absolute",
												top: "-2rem",
												left: this.state.distancia,
												fontSize: "15rem",
												opacity: 0.1,
												fontFamily: "Sawarabi Gothic",
											}}
										>
											{this.state.kanji.kanji}
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
										{this.state.kanji.lecturas.hiragana.map(
											(hiragana) => (
												<React.Fragment
													key={hiragana.id}
												>
													<p
														key={hiragana.id}
														id={
															"hiragana-" +
															hiragana.id
														}
													>
														{hiragana.hiragana}
													</p>
													<UncontrolledTooltip
														placement="top"
														target={
															"hiragana-" +
															hiragana.id
														}
														delay={0}
													>
														{hiragana.romaji}
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
										{this.state.kanji.lecturas.katakana.map(
											(katakana) => (
												<React.Fragment
													key={katakana.id}
												>
													<p
														key={katakana.id}
														id={
															"katakana-" +
															katakana.id
														}
													>
														{katakana.katakana}
													</p>
													<UncontrolledTooltip
														placement="top"
														target={
															"katakana-" +
															katakana.id
														}
														delay={0}
													>
														{katakana.romaji}
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
											{this.state.kanji.traduccion}
										</p>
									</div>
									{this.state.kanji.grupo_verbo && (
										<h6 className="title text-white px-3">
											Grupo de verbo:{" "}
											{this.state.kanji.grupo_verbo}
										</h6>
									)}
									{this.state.kanji.tipo_adjetivo && (
										<h6 className="title text-white px-3">
											Tipo de Adjetivo:{" "}
											{this.state.kanji.tipo_adjetivo}
										</h6>
									)}
									<div className="row justify-content-around text-white px-3">
										<h6 className="title text-white px-3">
											Cantidad de Trazos:{" "}
											{this.state.kanji.cant_trazos}
										</h6>
										<h6 className="title text-white px-3">
											Nivel de examen:{" "}
											{this.state.kanji.jlpt}
										</h6>
									</div>
								</CardBody>
							</Card>
						</Col>
						<Col md="12">
							<p className="text-center mb-5">
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
