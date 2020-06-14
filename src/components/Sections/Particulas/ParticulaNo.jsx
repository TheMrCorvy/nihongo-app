import React from "react";
import { Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";

export default function ParticulaNo() {
	return (
		<Col md="12">
			<Card
				className="card-plain bg-white"
				style={{ borderRadius: ".5rem" }}
				id="no"
			>
				<div
					className="bg-info text-white text-center justify-content-center"
					style={{
						borderTopLeftRadius: ".5rem",
						borderBottomRightRadius: ".5rem",
						height: "40px",
						width: "40px",
						position: "absolute",
						top: 0,
						left: 0,
					}}
				>
					<p className="mb-0 h2">の</p>
				</div>
				<h4 className="text-right px-4 pt-2 float-right my-0">
					Partícula <strong>No</strong>
				</h4>
				<CardBody className="mt-5">
					<div
						style={{ width: "100%" }}
						className="row justify-content-between mx-0 px-3"
					>
						<p className="h5">Pronunciación:</p>

						<p className="h5">
							<strong>No</strong>
						</p>
					</div>
					<h4 className="text-center">¿Cuál es su Función?</h4>
					<p className="px-3">
						El caso de の es bastante simple y fácil de entender,
						ésta partícula marca <strong>propiedad</strong>, es el
						equivalente a decir "<strong>de</strong>" en Español
						("el amigo <strong>de</strong> alguien", "el auto{" "}
						<strong>del</strong> vecino").
					</p>
					<h4 className="text-center">Ejemplos</h4>
					<p className="px-3">
						<strong className="text-info">Propiedad:</strong>「
						<span id="sensei">先生</span>
						<span className="text-success">の</span>　
						<span id="hon">本</span>。」
						<br />
						"Es el libro{" "}
						<strong className="text-success">del</strong> profesor."
					</p>
					<UncontrolledTooltip
						placement="top"
						target="sensei"
						delay={0}
					>
						せんせい
					</UncontrolledTooltip>
					<UncontrolledTooltip placement="top" target="hon" delay={0}>
						ほん
					</UncontrolledTooltip>
				</CardBody>
			</Card>
		</Col>
	);
}
