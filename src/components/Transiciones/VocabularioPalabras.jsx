import React from "react";
import { Col, Card, CardBody, Row } from "reactstrap";
import { Link } from "react-router-dom";
import Secciones from "components/Sections/Secciones";
import LasPalabras from "components/LasPalabras";

export default class VocabularioPalabras extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			height: "0px",
		};
	}
	componentDidMount() {
		this.setState({
			height: "auto",
		});
	}
	componentWillUnmount() {
		this.setState({
			height: "0px",
		});
	}

	renderizarPorCadaSeccion = (seccion) => {
		if (seccion.titulo === "sin grupo") {
			return seccion.elementos.map((elemento) => (
				<Col md="6" key={elemento.tituloElemento}>
					<Link
						to={"/vocabulario-palabras/" + elemento.url}
						onClick={() => {
							this.props.scrollTop();
						}}
					>
						<Card
							style={{
								borderRadius: "10px",
								boxShadow:
									"rgba(251, 99, 64, 0.6) 0px 5px 25px 0px",
								background:
									"linear-gradient(87deg, rgb(251, 99, 64) 0px, rgb(251, 177, 64) 100%)",
							}}
						>
							<CardBody className="text-white text-capitalize">
								<span className="title">
									{elemento.tituloElemento}
								</span>
								<i className="fas fa-chevron-right pl-3"></i>
								<i
									className={"fas fa-3x fa-" + elemento.icono}
									style={{
										position: "absolute",
										top: 10,
										right: 10,
										opacity: 0.7,
									}}
								></i>
							</CardBody>
						</Card>
					</Link>
				</Col>
			));
		} else {
			return (
				<Col md="12" key={seccion.titulo}>
					<Card
						style={{
							overflowY: "hidden",
							height: "auto",
							borderRadius: "15px",
							background: seccion.bgColor,
							boxShadow: seccion.sombra,
						}}
					>
						<h4
							className={
								"text-center text-capitalize title mt-3 pt-0 " +
								seccion.textColor
							}
						>
							{seccion.titulo}
						</h4>
						<CardBody
							className="d-flex justify-content-between px-0 col-lg-12"
							style={{
								overflowX: "scroll",
								whiteSpace: "nowrap",
								position: "relative",
							}}
						>
							{seccion.elementos.map((elemento) => (
								<Col md="auto" key={elemento.tituloElemento}>
									<Link
										to={
											"/vocabulario-palabras/" +
											elemento.url
										}
										onClick={() => {
											this.props.scrollTop();
										}}
									>
										<Card
											style={{
												borderRadius: "10px",
												background:
													"linear-gradient(87deg, rgb(251, 99, 64) 0px, rgb(251, 177, 64) 100%)",
											}}
											className="card-plain"
										>
											<CardBody className="text-white text-capitalize px-3">
												<span className="title">
													{elemento.tituloElemento}
												</span>
												<i className="fas fa-chevron-right pl-3"></i>
											</CardBody>
										</Card>
									</Link>
								</Col>
							))}
						</CardBody>
					</Card>
				</Col>
			);
		}
	};
	render() {
		return (
			<React.Fragment>
				<h3 className="title text-center pt-2">
					Vocabulario de Palabras Generales
				</h3>
				<Row className="justify-content-around">
					{LasPalabras.Elementos.map((seccion) =>
						this.renderizarPorCadaSeccion(seccion)
					)}
					<h3 className="title text-center col-lg-12 px-0">
						Palabras en General
					</h3>
					<Col md="6">
						<Link
							to="/verbos"
							onClick={() => {
								this.props.scrollTop();
							}}
						>
							<Card
								style={{
									borderRadius: "10px",
									boxShadow:
										"rgba(251, 99, 64, 0.6) 0px 5px 25px 0px",
									background:
										"linear-gradient(87deg, rgb(251, 99, 64) 0px, rgb(251, 177, 64) 100%)",
								}}
							>
								<CardBody className="text-white text-capitalize">
									<span className="title">verbos</span>
									<i className="fas fa-chevron-right pl-3"></i>
									<i
										className="fas fa-3x fa-skating"
										style={{
											position: "absolute",
											top: 10,
											right: 10,
											opacity: 0.7,
										}}
									></i>
								</CardBody>
							</Card>
						</Link>
					</Col>
					<Col md="6">
						<Link
							to="/adjetivos"
							onClick={() => {
								this.props.scrollTop();
							}}
						>
							<Card
								style={{
									borderRadius: "10px",
									boxShadow:
										"rgba(251, 99, 64, 0.6) 0px 5px 25px 0px",
									background:
										"linear-gradient(87deg, rgb(251, 99, 64) 0px, rgb(251, 177, 64) 100%)",
								}}
							>
								<CardBody className="text-white text-capitalize">
									<span className="title">adjetivos</span>
									<i className="fas fa-chevron-right pl-3"></i>
									<i
										className="fas fa-3x fa-signature"
										style={{
											position: "absolute",
											top: 10,
											right: 10,
											opacity: 0.7,
										}}
									></i>
								</CardBody>
							</Card>
						</Link>
					</Col>
					<Col md="6">
						<Link
							to="/sustantivos"
							onClick={() => {
								this.props.scrollTop();
							}}
						>
							<Card
								style={{
									borderRadius: "10px",
									boxShadow:
										"rgba(251, 99, 64, 0.6) 0px 5px 25px 0px",
									background:
										"linear-gradient(87deg, rgb(251, 99, 64) 0px, rgb(251, 177, 64) 100%)",
								}}
							>
								<CardBody className="text-white text-capitalize">
									<span className="title">sustantivos</span>
									<i className="fas fa-chevron-right pl-3"></i>
									<i
										className="fas fa-3x fa-camera-retro"
										style={{
											position: "absolute",
											top: 10,
											right: 10,
											opacity: 0.7,
										}}
									></i>
								</CardBody>
							</Card>
						</Link>
					</Col>
				</Row>
				<h3 className="title text-center mt-5">
					Contenido Relacionado
				</h3>
				<Row className="justify-content-around">
					<Col md="6">
						<Link
							to="/grupos"
							onClick={() => {
								this.props.scrollTop();
							}}
						>
							<Card
								style={{
									borderRadius: "10px",
									boxShadow:
										"rgba(45, 206, 137, 0.6) 0px 5px 25px 0px",
									background:
										"linear-gradient(87deg, rgb(45, 206, 137) 0px, rgb(45, 206, 204) 100%)",
								}}
							>
								<CardBody className="text-white">
									<span className="title text-capitalize">
										grupos y tipos
									</span>
									<i className="fas fa-chevron-right pl-3"></i>
									<br />
									<small>
										Grupos de los Verbos y Adjetivos
									</small>
									<i
										className="fas fa-3x fa-pencil-ruler"
										style={{
											position: "absolute",
											top: 20,
											right: 10,
											opacity: 0.7,
										}}
									></i>
								</CardBody>
							</Card>
						</Link>
					</Col>
					<Col md="6">
						<Link
							to="/tiempos"
							onClick={() => {
								this.props.scrollTop();
							}}
						>
							<Card
								style={{
									borderRadius: "10px",
									boxShadow:
										"rgba(45, 206, 137, 0.6) 0px 5px 25px 0px",
									background:
										"linear-gradient(87deg, rgb(45, 206, 137) 0px, rgb(45, 206, 204) 100%)",
								}}
							>
								<CardBody className="text-white">
									<span className="title text-capitalize">
										tiempos
									</span>
									<i className="fas fa-chevron-right pl-3"></i>
									<br />
									<small>
										Reglas para Conjugar los Tiempos
									</small>
									<i
										className="far fa-3x fa-clock"
										style={{
											position: "absolute",
											top: 20,
											right: 10,
											opacity: 0.7,
										}}
									></i>
								</CardBody>
							</Card>
						</Link>
					</Col>
					<Secciones hiragana={true} katakana={true} kanjis={true} />
				</Row>
			</React.Fragment>
		);
	}
}
