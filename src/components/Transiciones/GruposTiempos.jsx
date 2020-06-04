import React from "react";
import { Col, Card, CardBody, Row } from "reactstrap";
import { Link } from "react-router-dom";

export default function GruposTiempos(props) {
	return (
		<React.Fragment>
			<h3 className="title text-center">
				Grupos, Tipos, y Tiempos de las Palabras
			</h3>
			<Row className="justify-content-around">
				<Col md="6">
					<Link
						to="/grupos"
						onClick={() => {
							props.scrollTop();
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
							<CardBody className="text-white text-capitalize">
								<span className="title">grupos y tipos</span>
								<i className="fas fa-chevron-right pl-3"></i>
								<i
									className="fas fa-3x fa-pencil-ruler"
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
						to="/tiempos"
						onClick={() => {
							props.scrollTop();
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
							<CardBody className="text-white text-capitalize">
								<span className="title">tiempos</span>
								<i className="fas fa-chevron-right pl-3"></i>
								<i
									className="far fa-3x fa-clock"
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
		</React.Fragment>
	);
}
