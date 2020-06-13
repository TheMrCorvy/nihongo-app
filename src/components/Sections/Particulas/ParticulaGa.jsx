import React from "react";
import { Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";

export default function ParticulaGa() {
	return (
		<Col md="12">
			<Card
				className="card-plain bg-white"
				style={{ borderRadius: ".5rem" }}
				id="ga"
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
					<p className="mb-0 h2">が</p>
				</div>
				<h4 className="text-right px-4 pt-2 float-right my-0">
					Partícula <strong>Ga</strong>
				</h4>
				<CardBody className="mt-5">
					<div
						style={{ width: "100%" }}
						className="row justify-content-between mx-0 px-3"
					>
						<p className="h5">Pronunciación:</p>

						<p className="h5">
							<strong>Ga</strong>
						</p>
					</div>
					<h4 className="text-center">¿Cuáles son sus Funciones?</h4>
					<p className="px-3">
						La partícula が tiene <strong>muchas</strong> funciones,
						y es similar a は en el sentido de que ambas indican
						cuál es el <strong>tema</strong> de la oración, aunque
						が se usa más frecuentemente para indicar cual es un
						tema o aspecto <strong>especifico</strong> del que se
						está hablando, dentro de una oracion que ya marcó cual
						es el tema con は. Aparte de ésta función, también se
						utiliza frecuentemente が para hacer{" "}
						<strong>énfasis</strong> en un adjetivo, cuando se está
						hablando acerca de las cualidades de algo.
					</p>
					<p className="px-3">
						También se usa para hablar de cosas más específicas,
						como puede ser hablar acerca de <strong>gustos</strong>{" "}
						utilizando<span id="suki">「好き」</span>.
					</p>
					<UncontrolledTooltip
						placement="top"
						target="suki"
						delay={0}
					>
						すき
					</UncontrolledTooltip>
					<p className="px-3">
						Para finalizar con los usos más frecuentes de が, ésta
						es obligatoria para utilizar los verbos de "
						<strong>existir / haber / tener</strong>
						",「あります」(para objetos inanimados) e「います」(para
						personas y animales).
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
