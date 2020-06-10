import React from "react";
import { Col, Card, CardBody, Row } from "reactstrap";
import { Link } from "react-router-dom";
import Secciones from "components/Sections/Secciones";

export default function Numeros(props) {
	return (
		<React.Fragment>
			<h3 className="title text-center pt-2">Fechas y Números</h3>
			<Row className="justify-content-around">
				<Col md="6">
					<Link
						to="/numeros"
						onClick={() => {
							props.scrollTop();
						}}
					>
						<Card
							style={{
								borderRadius: "10px",
								boxShadow:
									"0px 5px 25px 0px rgba(32, 124, 229, 0.5)",
								background: "rgb(32, 124, 229)",
							}}
						>
							<CardBody className="text-white text-capitalize">
								<span className="title">los números</span>
								<i className="fas fa-chevron-right pl-3"></i>
								<i
									className="fas fa-3x fa-sort-numeric-down"
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
						to="/transicion/fechas-numeros"
						onClick={() => {
							props.scrollTop();
						}}
					>
						<Card
							style={{
								borderRadius: "10px",
								boxShadow:
									"0px 5px 25px 0px rgba(32, 124, 229, 0.5)",
								background: "rgb(32, 124, 229)",
							}}
						>
							<CardBody className="text-white text-capitalize">
								<span className="title">contadores</span>
								<i className="fas fa-chevron-right pl-3"></i>
								<i
									className="fas fa-3x fa-list-ol"
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
						to="/dias-mes"
						onClick={() => {
							props.scrollTop();
						}}
					>
						<Card
							style={{
								borderRadius: "10px",
								boxShadow:
									"0px 5px 25px 0px rgba(32, 124, 229, 0.5)",
								background: "rgb(32, 124, 229)",
							}}
						>
							<CardBody className="text-white text-capitalize">
								<span className="title">Los días del mes</span>
								<i className="fas fa-chevron-right pl-3"></i>
								<br />
								<small>
									Incluyendo Años, meses, y cumpleaños
								</small>
								<i
									className="fas fa-3x fa-calendar-alt"
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
						to="/dias-semana"
						onClick={() => {
							props.scrollTop();
						}}
					>
						<Card
							style={{
								borderRadius: "10px",
								boxShadow:
									"0px 5px 25px 0px rgba(32, 124, 229, 0.5)",
								background: "rgb(32, 124, 229)",
							}}
						>
							<CardBody className="text-white text-capitalize">
								<span className="title">
									Los días de la semana
								</span>
								<i className="fas fa-chevron-right pl-3"></i>
								<i
									className="fas fa-3x fa-calendar-week"
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
						to="/horas"
						onClick={() => {
							props.scrollTop();
						}}
					>
						<Card
							style={{
								borderRadius: "10px",
								boxShadow:
									"0px 5px 25px 0px rgba(32, 124, 229, 0.5)",
								background: "rgb(32, 124, 229)",
							}}
						>
							<CardBody className="text-white text-capitalize">
								<span className="title">las horas del día</span>
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
			<h3 className="title text-center mt-5">Contenido Relacionado</h3>
			<Row className="justify-content-around">
				<Secciones hiragana={true} kanjis={true} />
			</Row>
		</React.Fragment>
	);
}
