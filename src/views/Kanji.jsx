import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";

export default class Kanji extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// alturaUno: "100%",
			// alturaDos: "100%",
		};
	}

	componentDidMount() {
		document.body.classList.add("landing-page");
		document.body.classList.add("sidebar-collapse");
		document.documentElement.classList.remove("nav-open");
		document.body.style.background = "#000";
		document.body.style.borderRadius = "20px 20px 0 0";

		// if (window.innerWidth < 768) {
		// 	this.setState({
		// 		alturaUno: "25%",
		// 		alturaDos: "75%",
		// 	});
		// }
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
					}}
				>
					<Row
						className="justify-content-center"
						style={{ minHeight: "100vh" }}
					>
						<Col md="6" className="pl-0">
							<i
								className="fas fa-arrow-circle-left fa-3x"
								style={{
									position: "absolute",
									top: 15,
									left: 15,
									zIndex: 40,
									color: "#1171ef",
								}}
								onClick={this.props.history.goBack}
							></i>
							<h1 className="text-center title h3 mb-2">
								Leyendo: 愛
							</h1>
							{/* <h3 className="text-right title h3 mb-2 text-success pt-0 mb-0">
								Cantidad de Trazos: 9
							</h3>
							<h3 className="text-center title h3 mb-2 text-primary pt-0 mb-0">
								Grupo del verbo: 2
							</h3>
							<h3 className="text-center title h3 mb-2 text-warning pt-0 mb-0">
								Tipo del Ajetivo: な形ようし
							</h3>
							<h6 className="text-left title h6 mb-2 text-info pt-3 mb-0 text-capitalize">
								Viendo <u>10</u> Kanjis de <u>9</u> trazos
							</h6> */}
							<Row
								className="flex-column"
								style={{
									position: "relative",
								}}
							>
								<Card
									className="mb-3 bg-white card-plain"
									style={{
										width: "40%",
										height: "94%",
										position: "absolute",
										top: 0,
										right: "2.5%",
										borderRadius: "15px",
									}}
								>
									<CardBody className="justify-content-center text-center">
										Mostrando un Total de{" "}
										<strong>10</strong> kanjis de{" "}
										<strong>9</strong> trazos
									</CardBody>
								</Card>
								<Card
									className="text-white pl-4 mb-3 card-plain"
									style={{
										background: "#035AF7",
										borderRadius: "0 50px 50px 0",
										maxWidth: "50%",
									}}
								>
									<CardBody className="py-3">
										Cantidad de Trazos: 9
									</CardBody>
								</Card>
								<Card
									className="text-white bg-primary mb-3 pl-4 card-plain"
									style={{
										borderRadius: "0 50px 50px 0",
										maxWidth: "45%",
									}}
								>
									<CardBody className="py-3">
										Grupo del verbo: 2
									</CardBody>
								</Card>
								<Card
									className="text-white bg-success mb-3 pl-4 card-plain"
									style={{
										borderRadius: "0 50px 50px 0",
										maxWidth: "55%",
									}}
								>
									<CardBody className="py-3">
										Tipo del Ajetivo: な形ようし
									</CardBody>
								</Card>
							</Row>
						</Col>
						<Col className="justify-content-center d-flex" md="6">
							<Card
								style={{
									height: "87%",
									borderRadius: "25px",
									background: "#035AF7",
									overflow: "hidden",
								}}
								className="mt-3 card-plain"
							>
								<CardBody>
									<i
										className="fas fa-sort-down fa-3x text-white"
										style={{
											transform: "rotate(90deg)",
											position: "absolute",
											left: "20px",
											top: "45%",
										}}
									></i>
									<i
										className="fas fa-sort-down fa-3x text-white"
										style={{
											transform: "rotate(-90deg)",
											position: "absolute",
											right: "20px",
											top: "45%",
										}}
									></i>
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
								</CardBody>
							</Card>
						</Col>
					</Row>
				</div>
			</React.Fragment>
		);
	}
}
