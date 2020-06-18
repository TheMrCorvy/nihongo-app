import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";

export default class Kanji extends React.Component {
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
									<h6 className="title text-white text-center pt-2 my-0">
										Hiragana
									</h6>
									<div
										className="row justify-content-around text-white pt-3 px-4"
										style={{
											fontFamily: "Sawarabi Gothic",
										}}
									>
										<p>あい</p>
										<p>あい</p>
										<p>あい</p>
										<p>あい</p>
										<p>あい</p>
									</div>
									<h6 className="title text-white text-center pt-2 my-0">
										Katakana
									</h6>
									<div
										className="row justify-content-around text-white pt-3 px-4"
										style={{
											fontFamily: "Sawarabi Gothic",
										}}
									>
										<p>アイ</p>
										<p>アイ</p>
										<p>アイ</p>
										<p>アイ</p>
										<p>アイ</p>
									</div>
									<h6 className="title text-white text-center pt-2 my-0">
										Significado
									</h6>
									<div className="row justify-content-around text-white px-3">
										<p className="text-center">
											Lorem ipsum dolor sit, amet
											consectetur adipisicing elit.
										</p>
									</div>
									<h6 className="title text-white px-3">
										Grupo de verbo: 2
									</h6>
									<h6 className="title text-white px-3">
										Tipo de Adjetivo: な形
									</h6>
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
