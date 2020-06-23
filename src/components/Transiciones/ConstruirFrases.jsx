import React from "react";
import { Col, Card, CardBody, Row } from "reactstrap";
import { Link } from "react-router-dom";
import LasFrases from "components/LasFrases";
import Secciones from "components/Sections/Secciones";

export default class ConstruirFrases extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			frases: LasFrases,
			altura: "0",
		};
	}
	componentDidMount() {
		console.log(this.state.frases);
		setTimeout(() => {
			this.setState({
				altura: "auto",
			});
		}, 3000);
	}
	render() {
		return (
			<React.Fragment>
				<h3 className="title text-center pt-2">
					Construir Frases Simples
				</h3>
				<Row className="justify-content-around">
					<Col md="12">
						<Card
							style={{
								overflowY: "hidden",
								height: this.state.altura,
								borderRadius: "10px",
								background:
									"linear-gradient(87deg, rgb(45, 206, 137) 0px, rgb(45, 206, 204) 100%)",
								boxShadow:
									"rgba(45, 206, 137, 0.6) 0px 5px 25px 0px",
							}}
						>
							<h4 className="text-white text-center title mt-3 pt-0">
								Frases Cortas
							</h4>
							<CardBody
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
							</CardBody>
						</Card>
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
									<small>Los tiempos de las palabras</small>
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
					<Secciones
						hiragana={true}
						kanjis={true}
						particulas={true}
					/>
				</Row>
			</React.Fragment>
		);
	}
}
