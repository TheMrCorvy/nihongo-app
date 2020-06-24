import React from "react";
import {
	Pagination,
	PaginationItem,
	PaginationLink,
	Card,
	CardBody,
	Progress,
	Container,
	Row,
	Col,
	FormGroup,
	Input,
} from "reactstrap";

import { Link } from "react-router-dom";
import BackToTop from "components/Sections/BackToTop";

import ListaKanjis from "components/Jsons/Kanjis.json";

export default class Kanjis extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ListaKanjis: ListaKanjis.Kanjis,
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

	scrollTo = (e, seccion) => {
		if (seccion === "top") {
			window.scrollTo(0, 0);
		} else {
			e.preventDefault();
			document.getElementById(seccion).scrollIntoView({
				block: "start",
				behavior: "smooth",
			});
		}
	};

	switch = (codigoColor) => {
		switch (codigoColor) {
			case "1":
				return {
					BgColor: "#fff",
					JLPT: "N1",
					TextColor: "black",
				};
			case "2":
				return {
					BgColor:
						"linear-gradient(87deg, rgb(45, 206, 137) 0px, rgb(45, 206, 204) 100%)",
					JLPT: "N2",
					TextColor: "white",
				};
			case "3":
				return {
					BgColor: "rgb(45, 206, 137)",
					JLPT: "N2",
					TextColor: "white",
				};
			case "4":
				return {
					BgColor:
						"linear-gradient(87deg, rgb(17, 205, 239) 0px, rgb(17, 113, 239) 100%)",
					JLPT: "N3",
					TextColor: "white",
				};
			case "5":
				return {
					BgColor: "rgb(17, 113, 239)",
					JLPT: "N3",
					TextColor: "white",
				};
			case "6":
				return {
					BgColor:
						"linear-gradient(87deg, rgb(94, 114, 228) 0px, rgb(130, 94, 228) 100%)",
					JLPT: "N3",
					TextColor: "white",
				};
			case "7":
				return {
					BgColor:
						"linear-gradient(87deg, rgb(251, 177, 64) 100%, rgb(251, 99, 64) 0px)",
					JLPT: "N4",
					TextColor: "white",
				};
			case "8":
				return {
					BgColor:
						"linear-gradient(87deg, rgb(251, 99, 64) 0px, rgb(251, 177, 64) 100%)",
					JLPT: "N4",
					TextColor: "white",
				};
			case "9":
				return {
					BgColor:
						"linear-gradient(87deg, rgb(245, 54, 92) 0px, rgb(245, 96, 54) 100%)",
					JLPT: "N4",
					TextColor: "white",
				};
			case "10":
				return {
					BgColor:
						"linear-gradient(87deg, rgb(23, 43, 77) 0px, rgb(26, 23, 77) 100%)",
					JLPT: "N5",
					TextColor: "white",
				};
			default:
				return {
					BgColor: "#fff",
					JLPT: "Error",
					TextColor: "black",
				};
		}
	};

	// ResultadosMapeados = () => {
	// 	if (!this.state.cargando && !this.state.error) {
	// 		return (
	// 			<React.Fragment>

	// 			</React.Fragment>
	// 		);
	// 	} else if (!this.state.error && this.state.cargando) {
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
	// 					<Spinner color="info" />
	// 				</Col>
	// 				<p className="text-center">Cargando...</p>
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
	// 				<p className="text-center">
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
					className="wrapper container-fluid mb-5"
					style={{
						background: "#f2f2f2",
						borderRadius: "20px 20px 0 0",
						minHeight: "100vh",
					}}
				>
					<a
						href="#pablo"
						onClick={(e) => this.scrollTo(e, "info")}
						className="text-info title pt-0"
						style={{
							position: "absolute",
							top: "10px",
							right: "10px",
							zIndex: 10,
							cursor: "pointer",
						}}
					>
						<i className="fas fa-info-circle fa-2x"></i>
					</a>
					<h3 className="title text-danger text-center">
						Diccionario de Kanjis
					</h3>
					<Container>
						<Row className="justify-content-center">
							<Pagination
								className="pagination pagination-info"
								listClassName="pagination-info row justify-content-around"
							>
								<PaginationItem>
									<PaginationLink
										href="#pablo"
										onClick={(e) => e.preventDefault()}
									>
										<i
											className="fas fa-3x fa-chevron-left text-info"
											style={{ marginTop: -5 }}
										></i>
									</PaginationLink>
								</PaginationItem>

								<PaginationItem className="active show">
									<PaginationLink>1</PaginationLink>
								</PaginationItem>
								<PaginationItem className="show">
									<PaginationLink>2</PaginationLink>
								</PaginationItem>
								<PaginationItem className="show">
									<PaginationLink>3</PaginationLink>
								</PaginationItem>
								<PaginationItem className="show">
									<PaginationLink>4</PaginationLink>
								</PaginationItem>
								<PaginationItem className="show">
									<PaginationLink>5</PaginationLink>
								</PaginationItem>

								<PaginationItem>
									<PaginationLink
										href="#pablo"
										onClick={(e) => e.preventDefault()}
									>
										<i
											className="fas fa-3x fa-chevron-right text-info"
											style={{ marginTop: -5 }}
										></i>
									</PaginationLink>
								</PaginationItem>
							</Pagination>
							<Col md="12">
								<FormGroup>
									<label htmlFor="exampleFormControlSelect1">
										Ordenar Por:
									</label>
									<Input
										id="exampleFormControlSelect1"
										type="select"
									>
										<option>Orden Alfabético</option>
										<option>Cantidad de Trazos</option>
										<option>Nivel de Examen</option>
									</Input>
								</FormGroup>
							</Col>
							<h5 className="title text-info text-center col-lg-12">
								Kanjis
							</h5>
							{this.state.ListaKanjis.map((kanji) => (
								<Link
									to={"/kanji/" + kanji.id}
									onClick={(e) => this.scrollTo(e, "top")}
									key={kanji.id}
								>
									<div className="mx-2">
										<Card
											className="card-plain"
											style={{
												borderRadius: ".5rem",
												background: this.switch(
													kanji.codigo_color
												).BgColor,
												color: this.switch(
													kanji.codigo_color
												).TextColor,
											}}
										>
											<CardBody className="px-3">
												<p className="text-center">
													手
												</p>
												<div className="progress-container progress-info pb-4">
													<Progress
														max="100"
														value="100"
													></Progress>
												</div>
												<p className="mb-0">
													Mano{" "}
													{
														this.switch(
															kanji.codigo_color
														).JLPT
													}
												</p>
											</CardBody>
										</Card>
									</div>
								</Link>
							))}
						</Row>
					</Container>
					<Row className="justify-content-around">
						<Col md="12" className="my-5 py-5" id="info">
							<p className="text-center">
								<strong className="text-info">Nota:</strong> Los
								colores varían según el{" "}
								<strong className="text-danger">
									Nivel de Examen
								</strong>{" "}
								al que pertenezcan los Kanjis, siguiendo éste
								patrón:
							</p>
						</Col>
						<div className="mx-2">
							<Card className="bg-white card-plain">
								<CardBody className="px-3">
									<strong className="mb-0">N5</strong>
								</CardBody>
							</Card>
						</div>
						<div className="mx-2">
							<Card
								className="text-white card-plain"
								style={{
									background:
										"linear-gradient(87deg, rgb(45, 206, 137) 0px, rgb(45, 206, 204) 100%)",
									borderRadius: ".5rem",
								}}
							>
								<CardBody className="px-3">
									<strong className="mb-0">N4</strong>
								</CardBody>
							</Card>
						</div>
						<div className="mx-2">
							<Card
								className="text-white card-plain"
								style={{
									background: "rgb(45, 206, 137)",
									borderRadius: ".5rem",
								}}
							>
								<CardBody className="px-3">
									<strong className="mb-0">N4</strong>
								</CardBody>
							</Card>
						</div>
						<div className="mx-2">
							<Card
								className="text-white card-plain"
								style={{
									background:
										"linear-gradient(87deg, rgb(17, 205, 239) 0px, rgb(17, 113, 239) 100%)",
									borderRadius: ".5rem",
								}}
							>
								<CardBody className="px-3">
									<strong className="mb-0">N3</strong>
								</CardBody>
							</Card>
						</div>
						<div className="mx-2">
							<Card
								className="text-white card-plain"
								style={{
									background: "rgb(17, 113, 239)",
									borderRadius: ".5rem",
								}}
							>
								<CardBody className="px-3">
									<strong className="mb-0">N3</strong>
								</CardBody>
							</Card>
						</div>
						<div className="mx-2">
							<Card
								className="text-white card-plain"
								style={{
									background:
										"linear-gradient(87deg, rgb(94, 114, 228) 0px, rgb(130, 94, 228) 100%)",
									borderRadius: ".5rem",
								}}
							>
								<CardBody className="px-3">
									<strong className="mb-0">N3</strong>
								</CardBody>
							</Card>
						</div>
						<div className="mx-2">
							<Card
								className="text-white card-plain"
								style={{
									background:
										"linear-gradient(87deg, rgb(251, 177, 64) 100%, rgb(251, 99, 64) 0px)",
									borderRadius: ".5rem",
								}}
							>
								<CardBody className="px-3">
									<strong className="mb-0">N2</strong>
								</CardBody>
							</Card>
						</div>
						<div className="mx-2">
							<Card
								className="text-white card-plain"
								style={{
									background:
										"linear-gradient(87deg, rgb(251, 99, 64) 0px, rgb(251, 177, 64) 100%)",
									borderRadius: ".5rem",
								}}
							>
								<CardBody className="px-3">
									<strong className="mb-0">N2</strong>
								</CardBody>
							</Card>
						</div>
						<div className="mx-2">
							<Card
								className="text-white card-plain"
								style={{
									background:
										"linear-gradient(87deg, rgb(245, 54, 92) 0px, rgb(245, 96, 54) 100%)",
									borderRadius: ".5rem",
								}}
							>
								<CardBody className="px-3">
									<strong className="mb-0">N2</strong>
								</CardBody>
							</Card>
						</div>
						<div className="mx-2">
							<Card
								className="text-white card-plain"
								style={{
									background:
										"linear-gradient(87deg, rgb(23, 43, 77) 0px, rgb(26, 23, 77) 100%)",
									borderRadius: ".5rem",
								}}
							>
								<CardBody className="px-3">
									<strong className="mb-0">N1</strong>
								</CardBody>
							</Card>
						</div>
						<BackToTop />
					</Row>
				</div>
			</React.Fragment>
		);
	}
}
