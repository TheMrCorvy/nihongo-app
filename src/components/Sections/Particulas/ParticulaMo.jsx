import React from "react";
import { Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";

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
						La partícula も tiene 3 usos "principales" bastante
						simples, por un lado も funciona para marcar{" "}
						<strong>inclución</strong>, a diferencia de と que es
						parecido a "<strong>Y</strong>" en Español, も será mas
						parecido a "<strong>también</strong>" ("ésto, y aquello{" "}
						<strong>también</strong>").
					</p>
					<p className="px-3">
						Y por otro lado, も también se usa para marcar{" "}
						<strong>negación</strong>, pero en el sentido específico
						de decir "<strong>ninguno</strong>".
					</p>
					<p className="px-3">
						Por último, la partícula も se usa frecuentemente para
						preguntar si es que <strong>está bien</strong> hacer
						algo o si <strong>está permitido</strong> o no. Podrás
						encontrar más detalles de ésto visitando la sección de
						La Forma て<span id="kei20">形</span>.
					</p>
					<h4 className="text-center">Ejemplos</h4>
					<p className="px-3">
						<strong className="text-info">"También":</strong>「
						<span id="watashi2">私</span>
						<span className="text-success">も</span>　
						<span id="ikitai2">行</span>きたいです。」
						<br />
						"Yo <strong className="text-success">
							también
						</strong>{" "}
						quiero ir."
					</p>
					<UncontrolledTooltip
						placement="top"
						target="kei20"
						delay={0}
					>
						けい
					</UncontrolledTooltip>
					<UncontrolledTooltip
						placement="top"
						target="watashi2"
						delay={0}
					>
						わたし
					</UncontrolledTooltip>
					<UncontrolledTooltip
						placement="top"
						target="ikitai2"
						delay={0}
					>
						い
					</UncontrolledTooltip>
					<p className="px-3">
						<strong className="text-info">"Ninguno":</strong>「
						<span id="nani2">何</span>
						<span className="text-success">も</span>　
						<span id="shiru3">知</span>らない。」
						<br />
						"Yo <strong className="text-success">no</strong> se
						nada."
					</p>
					<UncontrolledTooltip
						placement="top"
						target="nani2"
						delay={0}
					>
						なに
					</UncontrolledTooltip>
					<UncontrolledTooltip
						placement="top"
						target="shiru3"
						delay={0}
					>
						し
					</UncontrolledTooltip>
				</CardBody>
			</Card>
		</Col>
	);
}
