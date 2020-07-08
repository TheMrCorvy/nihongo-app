import React from "react";
import { Col, Card, CardBody } from "reactstrap";

function calcularLongitudDeLaColumna(palabra) {
	if (palabra.Texto) {
		return "12";
	} else {
		return "6";
	}
}

export default function Clasico(props) {
	return (
		<React.Fragment>
			<Col md={calcularLongitudDeLaColumna(props.palabra)}>
				<Card
					style={{ borderRadius: "10px" }}
					className="bg-white card-plain px-3"
				>
					<CardBody>
						<div
							style={{ width: "100%" }}
							className="row justify-content-between mx-0"
						>
							<p className="h5 text-info title pt-0 mb-0">
								{props.palabra.TituloNihongo}
							</p>
							<p
								className="h5 text-info text-capitalize title pt-0 mb-0"
								style={{
									fontSize: "0.9rem",
								}}
							>
								{props.palabra.TituloSupeingo}
							</p>
						</div>
						<div
							style={{ width: "100%" }}
							className="row justify-content-between mx-0 mt-4"
						>
							<p className="h5 text-info title pt-0 mb-0">
								{props.palabra.Furagana}
							</p>
							<p
								className="h5 text-info title pt-0 mb-0 text-capitalize"
								style={{
									fontSize: "0.8rem",
								}}
							>
								{props.palabra.Romaji}
							</p>
						</div>
						{props.palabra.Subtitulo && (
							<h5 className="text-center text-warning my-3">
								{props.palabra.Subtitulo}
							</h5>
						)}
						{props.palabra.Texto && (
							<p
								className="my-5"
								dangerouslySetInnerHTML={{
									__html: props.palabra.Texto,
								}}
							></p>
						)}
						{props.palabra.Ejemplo1 && (
							<div className="text-center pt-4">
								<h5 className="text-left">Ejemplo:</h5>
								<p>
									<strong>
										"{props.palabra.Ejemplo1.Traduccion}
										":
									</strong>
								</p>
								<p className="text-info">
									「{props.palabra.Ejemplo1.Kanjis}」
								</p>
								<p>
									<strong className="text-success">
										「{props.palabra.Ejemplo1.RomajiEjemplo}
										」
									</strong>
								</p>
							</div>
						)}
						{props.palabra.Ejemplo2 && (
							<div className="text-center pt-4">
								<h5 className="text-left">Ejemplo:</h5>
								<p>
									<strong>
										"{props.palabra.Ejemplo2.Traduccion}
										":
									</strong>
								</p>
								<p className="text-info">
									「{props.palabra.Ejemplo2.Kanjis}」
								</p>
								<p>
									<strong className="text-success">
										「{props.palabra.Ejemplo2.RomajiEjemplo}
										」
									</strong>
								</p>
							</div>
						)}
						{props.palabra.Ejemplo3 && (
							<div className="text-center pt-4">
								<h5 className="text-left">Ejemplo:</h5>
								<p>
									<strong>
										"{props.palabra.Ejemplo3.Traduccion}
										":
									</strong>
								</p>
								<p className="text-info">
									「{props.palabra.Ejemplo3.Kanjis}」
								</p>
								<p>
									<strong className="text-success">
										「{props.palabra.Ejemplo3.RomajiEjemplo}
										」
									</strong>
								</p>
							</div>
						)}
					</CardBody>
				</Card>
			</Col>
		</React.Fragment>
	);
}
