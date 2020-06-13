import React from "react";
import { Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";

export default function ParticulaWo() {
	return (
		<Col md="12">
			<Card
				className="card-plain bg-white"
				style={{ borderRadius: ".5rem" }}
				id="wo"
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
					<p className="mb-0 h2">を</p>
				</div>
				<h4 className="text-right px-4 pt-2 float-right my-0">
					Partícula <strong>Wo</strong>
				</h4>
				<CardBody className="mt-5">
					<div
						style={{ width: "100%" }}
						className="row justify-content-between mx-0 px-3"
					>
						<p className="h5">Pronunciación:</p>

						<p className="h5">
							<strong>O / Wo</strong>
						</p>
					</div>
					<h4 className="text-center">¿Cuál es su Función?</h4>
					<p className="px-3">
						La partícula を tiene 2 principales usos, siendo el más
						frecuente el de indicar cuál es el{" "}
						<strong>objeto directo</strong> de la oración, pero
						también estaremos usando を cuando se habla de si se{" "}
						<strong>conoce</strong> algo, con el verbo{" "}
						<span id="shiru">「知る」</span>("conocer / saber").
					</p>
					<UncontrolledTooltip
						placement="top"
						target="shiru"
						delay={0}
					>
						し
					</UncontrolledTooltip>
					<h4 className="text-center">Ejemplos</h4>
					<p className="px-3">
						<strong className="text-info">
							Saber / Conocer (知る):
						</strong>{" "}
						「<span id="tokyo">東京</span>
						<span className="text-success">を</span>　
						<span id="shiru2">知</span>っていますか」 <br />{" "}
						"Conóces Tokyo?"
					</p>
					<UncontrolledTooltip
						placement="top"
						target="tokyo"
						delay={0}
					>
						とうきょう
					</UncontrolledTooltip>
					<UncontrolledTooltip
						placement="top"
						target="shiru2"
						delay={0}
					>
						し
					</UncontrolledTooltip>
				</CardBody>
			</Card>
		</Col>
	);
}
