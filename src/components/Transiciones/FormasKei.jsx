import React from "react";
import { Col, Card, CardBody, Row, UncontrolledTooltip } from "reactstrap";
import { Link } from "react-router-dom";

export default function FormasKei(props) {
	return (
		<React.Fragment>
			<h3 className="title text-center pt-2" id="las-formas">
				Las Formas 形
			</h3>
			<UncontrolledTooltip placement="top" target="las-formas" delay={0}>
				けい <br /> (Kei)
			</UncontrolledTooltip>
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
									"0px 5px 25px 0px rgba(255, 54, 54, 0.6)",
								background:
									"linear-gradient(87deg, #f56036 0, #f5365c 100%)",
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
			</Row>
			<h3 className="title text-center mt-5">Contenido Relacionado</h3>
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
							<CardBody className="text-white">
								<span className="title text-capitalize">
									grupos y tipos
								</span>
								<i className="fas fa-chevron-right pl-3"></i>
								<br />
								<small>Grupos de los Verbos y Adjetivos</small>
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
						to="/verbos"
						onClick={() => {
							props.scrollTop();
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
							<CardBody className="text-white">
								<span className="title text-capitalize">
									los verbos
								</span>
								<i className="fas fa-chevron-right pl-3"></i>
								<br />
								<small>Vocabulario de Palabras</small>
								<i
									className="fas fa-3x fa-skating"
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
						to="/adjetivos"
						onClick={() => {
							props.scrollTop();
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
							<CardBody className="text-white">
								<span className="title text-capitalize">
									los adjetivos
								</span>
								<i className="fas fa-chevron-right pl-3"></i>
								<br />
								<small>Vocabulario de Palabras</small>
								<i
									className="fas fa-3x fa-signature"
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
						to="/sustantivos"
						onClick={() => {
							props.scrollTop();
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
							<CardBody className="text-white">
								<span className="title text-capitalize">
									los sustantivos
								</span>
								<i className="fas fa-chevron-right pl-3"></i>
								<br />
								<small>Vocabulario de Palabras</small>
								<i
									className="fas fa-3x fa-camera-retro"
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
