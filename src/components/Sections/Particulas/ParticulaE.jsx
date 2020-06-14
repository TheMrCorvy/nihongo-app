import React from "react";
import { Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";

function scrollTo(e, particula) {
	e.preventDefault();
	document.getElementById(particula).scrollIntoView({
		block: "start",
		behavior: "smooth",
	});
}

export default function ParticulaE() {
	return (
		<Col md="12">
			<Card
				className="card-plain bg-white"
				style={{ borderRadius: ".5rem" }}
				id="he"
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
					<p className="mb-0 h2">へ</p>
				</div>
				<h4 className="text-right px-4 pt-2 float-right my-0">
					Partícula <strong>He</strong>
				</h4>
				<CardBody className="mt-5">
					<div
						style={{ width: "100%" }}
						className="row justify-content-between mx-0 px-3"
					>
						<p className="h5">Pronunciación:</p>

						<p className="h5">
							<strong>E</strong>
						</p>
					</div>
					<h4 className="text-center">¿Cuál es su Función?</h4>
					<p className="px-3">
						La partícula へ funciona como indicador del lugar{" "}
						<strong>aproximado</strong> de{" "}
						<strong>destino de una acción</strong>.
					</p>
					<p className="px-3">
						<strong>Cómo así?</strong>, cuando uno dice "mañana
						pasaré <strong>por tu barrio</strong>, tal vez paso a
						saludar", ese "por tu barrio" es una ubicación{" "}
						<strong>aproximada</strong>, y por ende se conecta con
						へ.
						<br />
						En el caso de que dijeramos "mañana iré a{" "}
						<strong>tu casa</strong> a saludar", al aclarar que el
						lugar es "tu casa", la ubicación deja de ser aproximada,
						así que no se usaría へ, sino{" "}
						<a
							href="#pablo"
							onClick={(e) => scrollTo(e, "ni")}
							className="text-info"
							style={{
								fontSize: "1.2rem",
								lineHeight: "1.61rem",
							}}
						>
							に
						</a>
						.
					</p>
					<h4 className="text-center">Ejemplos</h4>
					<p className="px-3">
						<strong className="text-info">
							Destino Aproximado de la Acción:
						</strong>
						「<span id="nihon">日本</span>
						<span className="text-success">へ</span>　ようこそ！」
						<br />
						"Bienvenido <strong className="text-success">
							a
						</strong>{" "}
						Japón!"
					</p>
					<UncontrolledTooltip
						placement="top"
						target="nihon"
						delay={0}
					>
						にほん
					</UncontrolledTooltip>
				</CardBody>
			</Card>
		</Col>
	);
}
