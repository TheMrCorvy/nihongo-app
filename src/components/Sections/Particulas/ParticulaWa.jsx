import React from "react";
import { Col, Card, CardBody } from "reactstrap";

export default function ParticulaWa() {
	return (
		<Col md="12">
			<Card
				className="card-plain bg-white"
				style={{ borderRadius: ".5rem" }}
				id="wa"
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
					<p className="mb-0 h2">は</p>
				</div>
				<h4 className="text-right px-4 pt-2 float-right my-0">
					Partícula <strong>Ha</strong>
				</h4>
				<CardBody className="mt-5">
					<div
						style={{ width: "100%" }}
						className="row justify-content-between mx-0 px-3"
					>
						<p className="h5">Pronunciación:</p>

						<p className="h5">
							<strong>Wa</strong>
						</p>
					</div>
					<h4 className="text-center">¿Cuál es su Función?</h4>
					<p className="px-3">
						La partícula は tiene por función principal la de
						indicar cual es <strong>el tema</strong> del que se está
						hablando en la oración.
						<br />
						Solo puede haber <strong>una</strong> partícula は por
						oración, y generalmente se encontrará al principio de la
						mísma.
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
