import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

import EdadesTanjobi from "components/Sections/EdadesTanjobi";

import TablaDiasMes from "components/Sections/DiasMes/TablaDiasMes";

import Excepcion from "components/Sections/DiasMes/Excepcion";

import TablaKa from "components/Sections/DiasMes/TablaKa";

import TablaLecturaAlternativa from "components/Sections/DiasMes/TablaLecturaAlternativa";

import TablaMeses from "components/Sections/DiasMes/TablaMeses";

import BackToTop from "components/Sections/BackToTop";

export default class DiasMes extends React.Component {
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

	scrollTo = (e, clasificacion) => {
		e.preventDefault();
		document.getElementById(clasificacion).scrollIntoView({
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
					id="top"
				>
					<Container>
						<h1 className="text-center title h2">
							Los Días del Mes
						</h1>
						<Row className="justify-content-around">
							<Col md="12">
								<Card
									className="card-plain bg-white"
									style={{ borderRadius: ".5rem" }}
								>
									<CardBody className="text-center pl-4">
										<h6 className="title pt-0 mb-0">
											Accessos Directos
										</h6>
										<ul className="justify-content-around text-capitalize row mb-0 pl-2">
											<li
												className="mr-3 py-3 text-danger"
												onClick={(e) =>
													this.scrollTo(
														e,
														"excepcion"
													)
												}
											>
												Excepción{" "}
												<i className="fas fa-chevron-right"></i>
											</li>
											<li
												className="mr-3 py-3 text-success"
												onClick={(e) =>
													this.scrollTo(
														e,
														"termina-ka"
													)
												}
											>
												Termina en か{" "}
												<i className="fas fa-chevron-right"></i>
											</li>
											<li
												className="mr-3 py-3 text-warning"
												onClick={(e) =>
													this.scrollTo(
														e,
														"lectura-alternativa"
													)
												}
											>
												Usa lectura alternativa{" "}
												<i className="fas fa-chevron-right"></i>
											</li>
											<li
												className="mr-3 py-3 text-info"
												onClick={(e) =>
													this.scrollTo(e, "todo")
												}
											>
												Todos los Días{" "}
												<i className="fas fa-chevron-right"></i>
											</li>
										</ul>
									</CardBody>
								</Card>
							</Col>
							<Col md="12">
								<Card
									className="card-plain bg-white"
									style={{ borderRadius: ".5rem" }}
								>
									<CardBody className="text-center">
										<div className="row justify-content-around">
											<a
												href="#pablo"
												onClick={(e) =>
													this.scrollTo(e, "meses")
												}
												className="text-info title px-3 pt-1"
											>
												Años y Meses{" "}
												<i className="fas fa-chevron-right"></i>
											</a>
											<a
												href="#pablo"
												onClick={(e) =>
													this.scrollTo(e, "edad")
												}
												className="text-info title px-3 pt-1"
											>
												Cumpleaños y Edad{" "}
												<i className="fas fa-chevron-right"></i>
											</a>
										</div>
									</CardBody>
								</Card>
							</Col>

							<TablaDiasMes />

							<Excepcion />

							<TablaKa />

							<TablaLecturaAlternativa />

							<TablaMeses />

							<EdadesTanjobi />

							<BackToTop />
						</Row>
					</Container>
				</div>
			</React.Fragment>
		);
	}
}
