import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

export default class DiasSemana extends React.Component {
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
					className="wrapper mb-5"
					style={{
						background: "#f2f2f2",
						borderRadius: "20px 20px 0 0",
					}}
				>
					<Container>
						<h1 className="text-center title h2">
							Los Días de la Semana
						</h1>
						<Row className="justify-content-around">
							<Col md="12">
								<Card
									className="card-plain bg-white"
									style={{ borderRadius: ".5rem" }}
								>
									<CardBody className="text-center text-success px-2 row justify-content-around">
										<strong>Día</strong>
										<strong>Kanji</strong>
										<strong>Hiragana</strong>
										<strong>Pronunciación</strong>
									</CardBody>
								</Card>
							</Col>
							<Col md="12">
								<Card
									className="card-plain bg-white"
									style={{ borderRadius: ".5rem" }}
								>
									<CardBody className="text-center text-info px-2 row justify-content-around">
										<strong>Lunes</strong>
										<strong>月曜日</strong>
										<strong>げつようび</strong>
										<strong>getsuyoubi</strong>
									</CardBody>
								</Card>
							</Col>
							<Col md="12">
								<Card
									className="card-plain bg-white"
									style={{ borderRadius: ".5rem" }}
								>
									<CardBody className="text-center text-info px-2 row justify-content-around">
										<strong>Martes</strong>
										<strong>火曜日</strong>
										<strong>かようび</strong>
										<strong>kayoubi</strong>
									</CardBody>
								</Card>
							</Col>
							<Col md="12">
								<Card
									className="card-plain bg-white"
									style={{ borderRadius: ".5rem" }}
								>
									<CardBody className="text-center text-info px-2 row justify-content-around">
										<strong>Miércoles</strong>
										<strong>水曜日</strong>
										<strong>すいようび</strong>
										<strong>suiyoubi</strong>
									</CardBody>
								</Card>
							</Col>
							<Col md="12">
								<Card
									className="card-plain bg-white"
									style={{ borderRadius: ".5rem" }}
								>
									<CardBody className="text-center text-info px-2 row justify-content-around">
										<strong>Jueves</strong>
										<strong>木曜日</strong>
										<strong>もくようび</strong>
										<strong>mokuyoubi</strong>
									</CardBody>
								</Card>
							</Col>
							<Col md="12">
								<Card
									className="card-plain bg-white"
									style={{ borderRadius: ".5rem" }}
								>
									<CardBody className="text-center text-info px-2 row justify-content-around">
										<strong>Viernes</strong>
										<strong>金曜日</strong>
										<strong>きんよび</strong>
										<strong>kinyoubi</strong>
									</CardBody>
								</Card>
							</Col>
							<Col md="12">
								<Card
									className="card-plain bg-white"
									style={{ borderRadius: ".5rem" }}
								>
									<CardBody className="text-center text-info px-2 row justify-content-around">
										<strong>Sábado</strong>
										<strong>土曜日</strong>
										<strong>どようび</strong>
										<strong>doyoubi</strong>
									</CardBody>
								</Card>
							</Col>
							<Col md="12">
								<Card
									className="card-plain bg-white"
									style={{ borderRadius: ".5rem" }}
								>
									<CardBody className="text-center text-info px-2 row justify-content-around">
										<strong>Domingo</strong>
										<strong>日曜日</strong>
										<strong>にちようび</strong>
										<strong>nichiyoubi</strong>
									</CardBody>
								</Card>
							</Col>
						</Row>
					</Container>
				</div>
			</React.Fragment>
		);
	}
}
