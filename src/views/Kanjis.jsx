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

export default class Kanjis extends React.Component {
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

	render() {
		return (
			<React.Fragment>
				<div
					className="wrapper container-fluid mb-5"
					style={{
						background: "#f2f2f2",
						borderRadius: "20px 20px 0 0",
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
							<h5 className="title text-info text-center">
								Kanjis
							</h5>
						</Row>
					</Container>
					<Row className="justify-content-around">
						<Link
							to="/kanji/1"
							onClick={(e) => this.scrollTo(e, "top")}
						>
							<div className="mx-2">
								<Card
									className="bg-white card-plain"
									style={{
										borderRadius: ".5rem",
									}}
								>
									<CardBody className="px-3 text-black">
										<p className="text-center">手</p>
										<div className="progress-container progress-info pb-4">
											<Progress
												max="100"
												value="100"
											></Progress>
										</div>
										<p className="mb-0">Mano N5</p>
									</CardBody>
								</Card>
							</div>
						</Link>
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
									<p className="text-center">手</p>
									<div className="progress-container progress-info pb-4">
										<Progress
											max="100"
											value="100"
										></Progress>
									</div>
									<p className="mb-0">Mano N4</p>
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
									<p className="text-center">手</p>
									<div className="progress-container progress-info pb-4">
										<Progress
											max="100"
											value="100"
										></Progress>
									</div>
									<p className="mb-0">Mano N4</p>
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
									<p className="text-center">手</p>
									<div className="progress-container progress-success pb-4">
										<Progress
											max="100"
											value="100"
										></Progress>
									</div>
									<p className="mb-0">Mano N3</p>
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
									<p className="text-center">手</p>
									<div className="progress-container progress-success pb-4">
										<Progress
											max="100"
											value="100"
										></Progress>
									</div>
									<p className="mb-0">Mano N3</p>
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
									<p className="text-center">手</p>
									<div className="progress-container progress-info pb-4">
										<Progress
											max="100"
											value="100"
										></Progress>
									</div>
									<p className="mb-0">Mano N3</p>
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
									<p className="text-center">手</p>
									<div className="progress-container progress-info pb-4">
										<Progress
											max="100"
											value="100"
										></Progress>
									</div>
									<p className="mb-0">Mano N2</p>
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
									<p className="text-center">手</p>
									<div className="progress-container progress-info pb-4">
										<Progress
											max="100"
											value="100"
										></Progress>
									</div>
									<p className="mb-0">Mano N2</p>
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
									<p className="text-center">手</p>
									<div className="progress-container progress-info pb-4">
										<Progress
											max="100"
											value="100"
										></Progress>
									</div>
									<p className="mb-0">Mano N2</p>
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
									<p className="text-center">手</p>
									<div className="progress-container progress-info pb-4">
										<Progress
											max="100"
											value="100"
										></Progress>
									</div>
									<p className="mb-0">Mano N1</p>
								</CardBody>
							</Card>
						</div>
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
