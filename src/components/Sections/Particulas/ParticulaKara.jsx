import React from "react";
import { Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";

export default function ParticulaKara() {
	return (
		<Col md="12">
			<Card
				className="card-plain bg-white"
				style={{ borderRadius: ".5rem" }}
				id="kara"
			>
				<div
					className="bg-info text-white text-center justify-content-center"
					style={{
						borderTopLeftRadius: ".5rem",
						borderBottomRightRadius: ".5rem",
						height: "45px",
						width: "190px",
						position: "absolute",
						top: 0,
						left: 0,
					}}
				>
					<p className="mb-0 h2">から y まで</p>
				</div>
				<h4 className="text-center mt-5">
					Partícula <strong>Kara y Made</strong>
				</h4>
				<CardBody>
					<div
						style={{ width: "100%" }}
						className="row justify-content-between mx-0 px-3"
					>
						<p className="h5">Pronunciación:</p>

						<p className="h5">
							<strong>Kara y Made</strong>
						</p>
					</div>
					<h4 className="text-center">¿Qué es y Cómo se usa?</h4>
					<p className="px-3">
						Las partículas から y まで no siempre se usan juntas, ya
						que no es necesario ponerlas siempre en la misma
						oración. Por un lado から indicará el{" "}
						<strong>punto de partida</strong> de algo, mientras que
						en el lado opuesto まで indicara el{" "}
						<strong>punto de llegada</strong>, ("hay que llevar ésta
						cosa <strong>desde aquí</strong> hasta{" "}
						<strong>allá</strong>").
					</p>
					<p className="px-3">
						Cabe destacar que su uso no se limita solo a espacio,
						から y まで pueden utilizarse en conjunto o por separado
						para "indicar un recorrido" sea espacial, temporal, etc.
					</p>
					<p className="px-3">
						También から por sí sola, se suele usar para indicar la
						"<strong>razón</strong>" o "justificación" de o por
						algo.
					</p>
					<h4 className="text-center">Ejemplos</h4>
					<p className="px-3">
						<strong className="text-info">De inicio a Fin:</strong>
						「あさ
						<span className="text-success">から</span>　よる
						<span className="text-success">まで</span>。」
						<br />"<strong className="text-success">
							Desde
						</strong>{" "}
						la mañana{" "}
						<strong className="text-success">hasta</strong> la
						noche."
					</p>
					<p className="px-3">
						<strong className="text-info">Justificación:</strong>
						「あぶない
						<span className="text-success">から</span>、
						<span id="genki2">気</span>をつけて。」
						<br />
						"Ten cuidado
						<strong className="text-success"> proque</strong> es
						peligroso."
					</p>
					<UncontrolledTooltip
						placement="top"
						target="genki2"
						delay={0}
					>
						き
					</UncontrolledTooltip>
				</CardBody>
			</Card>
		</Col>
	);
}
