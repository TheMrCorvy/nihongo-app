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
} from "reactstrap";

import { Link } from "react-router-dom";
import BackToTop from "components/Sections/BackToTop";

import LecturasOnKunKanji from "components/Sections/LecturasOnKunKanji";
import LosKanjis from "components/LosKanjis";

export default class Kanjis extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ListaKanjis: LosKanjis,
			paginaActual: 1,
			cantidadPaginas: 0,
			ultimaPagina: 0,
			kanjisPorPagina: 25,
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleClickFlechas = this.handleClickFlechas.bind(this);
	}

	componentDidMount() {
		document.body.classList.add("landing-page");
		document.body.classList.add("sidebar-collapse");
		document.documentElement.classList.remove("nav-open");
		document.body.style.background = "#000";
		document.body.style.borderRadius = "20px 20px 0 0";

		const numerosPaginas = [];

		for (
			let i = 1;
			i <=
			Math.ceil(
				this.state.ListaKanjis.length / this.state.kanjisPorPagina
			);
			i++
		) {
			numerosPaginas.push(i);
		}

		this.setState({
			cantidadPaginas: numerosPaginas,
			ultimaPagina: numerosPaginas.length,
		});
	}

	componentWillUnmount() {
		document.body.classList.remove("landing-page");
		document.body.classList.remove("sidebar-collapse");
		document.body.style.background = "#fff";
		document.body.style.borderRadius = "0";
	}

	handleClick(event) {
		this.setState({
			paginaActual: Number(event.target.value),
		});
	}
	handleClickFlechas(evento, accion) {
		evento.preventDefault();

		if (accion === "menos") {
			if (this.state.paginaActual - 1 === 0) {
				console.log("no se puede bajar mas");
			} else {
				this.setState({
					paginaActual: this.state.paginaActual - 1,
				});
			}
		}

		if (accion === "mas") {
			if (this.state.paginaActual + 1 > this.state.ultimaPagina) {
				console.log("no se puede subir mas");
			} else {
				this.setState({
					paginaActual: this.state.paginaActual + 1,
				});
			}
		}
	}

	renderNumerosPaginas = () => {
		const laPaginaActual = this.state.paginaActual;

		if (laPaginaActual + 1 === this.state.ListaKanjis.length) {
			//el caso en el que la pagina actual es la anteultima

			return (
				<React.Fragment>
					<li className="page-item show" onClick={this.handleClick}>
						<button className="page-link" value="1">
							1
						</button>
					</li>
					<li>
						<p>...</p>
					</li>
					<li className="page-item show" onClick={this.handleClick}>
						<button
							className="page-link"
							value={laPaginaActual - 1}
						>
							{laPaginaActual - 1}
						</button>
					</li>
					<li
						className="page-item active show"
						onClick={this.handleClick}
					>
						<button className="page-link" value={laPaginaActual}>
							{laPaginaActual}
						</button>
					</li>
					<li className="page-item show" onClick={this.handleClick}>
						<button
							className="page-link"
							value={laPaginaActual + 1}
						>
							{laPaginaActual + 1}
						</button>
					</li>
				</React.Fragment>
			);
		} else if (laPaginaActual === this.state.ListaKanjis.length) {
			//el caso en el que la pagina actual es la última

			return (
				<React.Fragment>
					<li className="page-item show" onClick={this.handleClick}>
						<button className="page-link" value="1">
							1
						</button>
					</li>
					<li>
						<p>...</p>
					</li>
					<li className="page-item show" onClick={this.handleClick}>
						<button
							className="page-link"
							value={laPaginaActual - 2}
						>
							{laPaginaActual - 2}
						</button>
					</li>
					<li className="page-item show" onClick={this.handleClick}>
						<button
							className="page-link"
							value={laPaginaActual - 1}
						>
							{laPaginaActual - 1}
						</button>
					</li>
					<li
						className="page-item active show"
						onClick={this.handleClick}
					>
						<button className="page-link" value={laPaginaActual}>
							{laPaginaActual}
						</button>
					</li>
				</React.Fragment>
			);
		} else if (this.state.paginaActual === 1) {
			//el caso en el que la pagina actual es la primera

			return (
				<React.Fragment>
					<li
						className="page-item active show"
						onClick={this.handleClick}
					>
						<button className="page-link" value={laPaginaActual}>
							{laPaginaActual}
						</button>
					</li>
					<li className="page-item show" onClick={this.handleClick}>
						<button
							className="page-link"
							value={laPaginaActual + 1}
						>
							{laPaginaActual + 1}
						</button>
					</li>
					<li className="page-item show" onClick={this.handleClick}>
						<button
							className="page-link"
							value={laPaginaActual + 2}
						>
							{laPaginaActual + 2}
						</button>
					</li>
					<li>
						<p>...</p>
					</li>
					<li className="page-item show" onClick={this.handleClick}>
						<button
							className="page-link"
							value={this.state.ultimaPagina}
						>
							{this.state.ultimaPagina}
						</button>
					</li>
				</React.Fragment>
			);
		} else if (this.state.paginaActual === 2) {
			//el caso en el que la pagina actual es la 2

			return (
				<React.Fragment>
					<li className="page-item show" onClick={this.handleClick}>
						<button
							className="page-link"
							value={laPaginaActual - 1}
						>
							{laPaginaActual - 1}
						</button>
					</li>
					<li
						className="page-item active show"
						onClick={this.handleClick}
					>
						<button className="page-link" value={laPaginaActual}>
							{laPaginaActual}
						</button>
					</li>
					<li className="page-item show" onClick={this.handleClick}>
						<button
							className="page-link"
							value={laPaginaActual + 1}
						>
							{laPaginaActual + 1}
						</button>
					</li>
					<li>
						<p>...</p>
					</li>
					<li className="page-item show" onClick={this.handleClick}>
						<button
							className="page-link"
							value={this.state.ultimaPagina}
						>
							{this.state.ultimaPagina}
						</button>
					</li>
				</React.Fragment>
			);
		} else {
			//el caso en el que la pagina actual no está cerca de ningún extremo

			return (
				<React.Fragment>
					<li className="page-item show" onClick={this.handleClick}>
						<button className="page-link" value="1">
							1
						</button>
					</li>
					<li>
						<p>...</p>
					</li>
					<li className="page-item show" onClick={this.handleClick}>
						<button
							className="page-link"
							value={laPaginaActual - 1}
						>
							{laPaginaActual - 1}
						</button>
					</li>
					<li
						className="page-item active show"
						onClick={this.handleClick}
					>
						<button className="page-link" value={laPaginaActual}>
							{laPaginaActual}
						</button>
					</li>
					<li className="page-item show" onClick={this.handleClick}>
						<button
							className="page-link"
							value={laPaginaActual + 1}
						>
							{laPaginaActual + 1}
						</button>
					</li>
					<li>
						<p>...</p>
					</li>
					<li className="page-item show" onClick={this.handleClick}>
						<button
							className="page-link"
							value={this.state.ultimaPagina}
						>
							{this.state.ultimaPagina}
						</button>
					</li>
				</React.Fragment>
			);
		}
	};

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
					TextColor: "black",
				};
			case "2":
				return {
					BgColor:
						"linear-gradient(87deg, rgb(45, 206, 137) 0px, rgb(45, 206, 204) 100%)",
					TextColor: "white",
				};
			case "3":
				return {
					BgColor: "rgb(45, 206, 137)",
					TextColor: "white",
				};
			case "4":
				return {
					BgColor:
						"linear-gradient(87deg, rgb(17, 205, 239) 0px, rgb(17, 113, 239) 100%)",
					TextColor: "white",
				};
			case "5":
				return {
					BgColor: "rgb(17, 113, 239)",
					TextColor: "white",
				};
			case "6":
				return {
					BgColor:
						"linear-gradient(87deg, rgb(94, 114, 228) 0px, rgb(130, 94, 228) 100%)",
					TextColor: "white",
				};
			case "7":
				return {
					BgColor:
						"linear-gradient(87deg, rgb(251, 177, 64) 100%, rgb(251, 99, 64) 0px)",
					TextColor: "white",
				};
			case "8":
				return {
					BgColor:
						"linear-gradient(87deg, rgb(251, 99, 64) 0px, rgb(251, 177, 64) 100%)",
					TextColor: "white",
				};
			case "9":
				return {
					BgColor:
						"linear-gradient(87deg, rgb(245, 54, 92) 0px, rgb(245, 96, 54) 100%)",
					TextColor: "white",
				};
			case "10":
				return {
					BgColor:
						"linear-gradient(87deg, rgb(23, 43, 77) 0px, rgb(26, 23, 77) 100%)",
					TextColor: "white",
				};
			default:
				return {
					BgColor: "#fff",
					TextColor: "black",
				};
		}
	};

	render() {
		const { ListaKanjis, paginaActual, kanjisPorPagina } = this.state;

		const ultimaPagina = paginaActual * kanjisPorPagina;

		const primeraPagina = ultimaPagina - kanjisPorPagina;

		const kanjisActuales = ListaKanjis.slice(primeraPagina, ultimaPagina);

		const renderKanjis = kanjisActuales.map((kanji, index) => {
			return (
				<Link
					to={"/kanji/" + kanji.id}
					onClick={(e) => this.scrollTo(e, "top")}
					key={index}
				>
					<div className="mx-2">
						<Card
							className="card-plain"
							style={{
								borderRadius: ".5rem",
								background: this.switch(kanji.codigo_color)
									.BgColor,
								color: this.switch(kanji.codigo_color)
									.TextColor,
							}}
						>
							<CardBody className="px-3">
								<p className="text-center">{kanji.kanji}</p>
								<div className="progress-container progress-info pb-4">
									<Progress max="100" value="100"></Progress>
								</div>
								<p className="mb-0">
									<strong>
										<strong>{kanji.jlpt}</strong>{" "}
										{kanji.traduccion}
									</strong>
								</p>
							</CardBody>
						</Card>
					</div>
				</Link>
			);
		});
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
					<h3 className="title text-danger px-3 text-center">
						Diccionario Básico de Kanjis
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
										onClick={(e) =>
											this.handleClickFlechas(e, "menos")
										}
									>
										<i
											className="fas fa-3x fa-chevron-left text-info"
											style={{ marginTop: -5 }}
										></i>
									</PaginationLink>
								</PaginationItem>
								{this.renderNumerosPaginas()}
								<PaginationItem>
									<PaginationLink
										href="#pablo"
										onClick={(e) =>
											this.handleClickFlechas(e, "mas")
										}
									>
										<i
											className="fas fa-3x fa-chevron-right text-info"
											style={{ marginTop: -5 }}
										></i>
									</PaginationLink>
								</PaginationItem>
							</Pagination>
							<h5 className="title text-info text-center col-lg-12">
								Kanjis
							</h5>
							{renderKanjis}
						</Row>
					</Container>
					<Row className="justify-content-around">
						<Col md="12" className="mt-5 py-5" id="info">
							<p className="text-center">
								<strong className="text-info">Nota:</strong> Los
								colores varían según el{" "}
								<strong className="text-danger">
									Nivel de Examen JLPT
								</strong>{" "}
								(el exámen oficial de fluidez y conocimientos
								del idioma Japonés) al que pertenezcan los
								Kanjis, obedeciendo el siguiente patrón:
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
						<LecturasOnKunKanji />
						<BackToTop />
					</Row>
				</div>
			</React.Fragment>
		);
	}
}
