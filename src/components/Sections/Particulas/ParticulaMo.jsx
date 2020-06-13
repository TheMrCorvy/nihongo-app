import React from "react";
import { Col, Card, CardBody } from "reactstrap";

export default function ParticulaMo() {
	return (
		<Col md="12">
			<Card
				className="card-plain bg-white"
				style={{ borderRadius: ".5rem" }}
				id="mo"
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
					<p className="mb-0 h2">も</p>
				</div>
				<h4 className="text-right px-4 pt-2 float-right my-0">
					Partícula <strong>Mo</strong>
				</h4>
				<CardBody className="mt-5">
					<div
						style={{ width: "100%" }}
						className="row justify-content-between mx-0 px-3"
					>
						<p className="h5">Pronunciación:</p>

						<p className="h5">
							<strong>Mo</strong>
						</p>
					</div>
					<h4 className="text-center">¿Cuál es su Función?</h4>
					<p className="px-3">
						La partícula も tiene 2 usos "principales" bastante
						simples, por un lado も funciona para marcar{" "}
						<strong>inclución</strong>, a diferencia de と que es
						parecido a "<strong>Y</strong>" en Español, も será mas
						parecido a "<strong>también</strong>" ("ésto, y aquello{" "}
						<strong>también</strong>").
					</p>
					<p className="px-3">
						Y por el otro lado, も también se usa para marcar{" "}
						<strong>negación</strong>, pero en el sentido específico
						de decir "<strong>ninguno</strong>".
					</p>
					<h4 className="text-center">Ejemplos</h4>
					<p className="px-3">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quod tenetur dolore praesentium ipsam culpa similique
						laboriosam eaque dicta eum, rerum blanditiis, eius sunt
						odio accusantium consequatur quisquam molestiae. Dolor,
						temporibus.
					</p>
				</CardBody>
			</Card>
		</Col>
	);
}
