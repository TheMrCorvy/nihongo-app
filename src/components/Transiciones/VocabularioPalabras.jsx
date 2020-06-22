import React from "react";
import { Col, Card, CardBody, Row } from "reactstrap";
import { Link } from "react-router-dom";

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
	render() {
		return (
			<React.Fragment>
				<h3 className="title text-center pt-2">
					Vocabulario de Palabras Generales
				</h3>
				<Row className="justify-content-around">
					<Col
						md="12"
						className="px-0 mb-4"
						style={{
							overflowY: "hidden",
							height: this.state.height,
							borderRadius: "10px",
							background:
								"linear-gradient(87deg, rgb(45, 206, 137) 0px, rgb(45, 206, 204) 100%)",
						}}
					>
						<h4 className="text-white text-center title mt-3 pt-0">
							Comida y Bebida
						</h4>
						<div
							className="d-flex justify-content-between px-0 col-lg-12"
							style={{
								overflowX: "scroll",
								whiteSpace: "nowrap",
								position: "relative",
							}}
						>
							<Col md="3">
								<Link
									to="/verbos"
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
												comida
											</span>
											<i className="fas fa-chevron-right pl-3"></i>
										</CardBody>
									</Card>
								</Link>
							</Col>
							<Col md="3">
								<Link
									to="/adjetivos"
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
												bebida
											</span>
											<i className="fas fa-chevron-right pl-3"></i>
										</CardBody>
									</Card>
								</Link>
							</Col>
							<Col md="4">
								<Link
									to="/sustantivos"
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
												frutas y verduras
											</span>
											<i className="fas fa-chevron-right pl-3"></i>
										</CardBody>
									</Card>
								</Link>
							</Col>
							<Col md="3">
								<Link
									to="/sustantivos"
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
												dulces
											</span>
											<i className="fas fa-chevron-right pl-3"></i>
										</CardBody>
									</Card>
								</Link>
							</Col>
							<Col md="3">
								<Link
									to="/sustantivos"
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
												cocina
											</span>
											<i className="fas fa-chevron-right pl-3"></i>
										</CardBody>
									</Card>
								</Link>
							</Col>
						</div>
					</Col>
					<Col
						md="12"
						className="px-0 mb-4"
						style={{
							overflowY: "hidden",
							height: this.state.height,
							borderRadius: "10px",
							background:
								"linear-gradient(87deg, rgb(17, 205, 239) 0px, rgb(17, 113, 239) 100%)",
						}}
					>
						<h4 className="text-white text-center title mt-3 pt-0">
							Viajes
						</h4>
						<div
							className="d-flex justify-content-between px-0 col-lg-12"
							style={{
								overflowX: "scroll",
								whiteSpace: "nowrap",
								position: "relative",
							}}
						>
							<Col md="3">
								<Link
									to="/verbos"
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
												transporte
											</span>
											<i className="fas fa-chevron-right pl-3"></i>
										</CardBody>
									</Card>
								</Link>
							</Col>
							<Col md="3">
								<Link
									to="/adjetivos"
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
												vacaciones
											</span>
											<i className="fas fa-chevron-right pl-3"></i>
										</CardBody>
									</Card>
								</Link>
							</Col>
							<Col md="4">
								<Link
									to="/sustantivos"
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
												lugares y ubicaciones
											</span>
											<i className="fas fa-chevron-right pl-3"></i>
										</CardBody>
									</Card>
								</Link>
							</Col>
							<Col md="4">
								<Link
									to="/sustantivos"
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
												lugares de japón
											</span>
											<i className="fas fa-chevron-right pl-3"></i>
										</CardBody>
									</Card>
								</Link>
							</Col>
						</div>
					</Col>
					<Col
						md="12"
						className="px-0 mb-4"
						style={{
							overflowY: "hidden",
							height: this.state.height,
							borderRadius: "10px",
							background:
								"linear-gradient(87deg, rgb(247, 165, 153) 0px, rgb(235, 172, 163) 100%)",
						}}
					>
						<h4 className="text-white text-center title mt-3 pt-0">
							Ropa
						</h4>
						<div
							className="d-flex justify-content-between px-0 col-lg-12"
							style={{
								overflowX: "scroll",
								whiteSpace: "nowrap",
								position: "relative",
							}}
						>
							<Col md="4">
								<Link
									to="/verbos"
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
												partes del cuerpo
											</span>
											<i className="fas fa-chevron-right pl-3"></i>
										</CardBody>
									</Card>
								</Link>
							</Col>
							<Col md="3">
								<Link
									to="/verbos"
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
											<span className="title">ropa</span>
											<i className="fas fa-chevron-right pl-3"></i>
										</CardBody>
									</Card>
								</Link>
							</Col>
							<Col md="3">
								<Link
									to="/verbos"
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
												vestirse
											</span>
											<i className="fas fa-chevron-right pl-3"></i>
										</CardBody>
									</Card>
								</Link>
							</Col>
						</div>
					</Col>
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
								<CardBody className="text-white text-capitalize px-3">
									<span className="title">los animales</span>
									<i className="fas fa-chevron-right pl-3"></i>
									<i
										className="fas fa-3x fa-paw"
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
					<h3 className="title text-center col-lg-12">
						Todas las Palabras
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
									<span className="title">los verbos</span>
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
									<span className="title">los adjetivos</span>
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
									<span className="title">
										los sustantivos
									</span>
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
					<Col md="6">
						<Link
							to="/unir-adjetivos"
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
										unir adjetivos
									</span>
									<i className="fas fa-chevron-right pl-3"></i>
									<br />
									<small>Como se unen las Palabras?</small>
									<i
										className="fas fa-3x fa-link"
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
				</Row>
			</React.Fragment>
		);
	}
}
