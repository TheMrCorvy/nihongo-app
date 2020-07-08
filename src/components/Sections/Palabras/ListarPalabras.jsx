import React from "react";

import { Col, Card, CardBody } from "reactstrap";

function calcularLongitudDeLaColumna(palabra) {
	if (palabra.Texto) {
		return "12";
	} else {
		return "6";
	}
}

export default function ListarPalabras(props) {
	return (
		<React.Fragment>
			{props.Titulo && (
				<Col md="12">
					<Card
						className="card-plain"
						style={{ borderRadius: "15px" }}
						id="de"
					>
						<div
							className="bg-info text-white text-center justify-content-center"
							style={{
								borderTopRightRadius: "15px",
								borderBottomLeftRadius: "15px",
								height: "50px",
								width: "50px",
								position: "absolute",
								top: 0,
								right: 0,
							}}
						>
							<i
								className={"fas fa-3x fa-" + props.Icono}
								style={{
									position: "absolute",
									top: 4,
									right: 4,
									opacity: 0.7,
								}}
							></i>
						</div>
						<h4 className="text-left text-capitalize px-4 pt-2 float-left my-0 title">
							{props.Titulo}
						</h4>
					</Card>
				</Col>
			)}
			{props.ListaDePalabras.map((palabra) => (
				<Col
					md={calcularLongitudDeLaColumna(palabra)}
					key={palabra.Key}
				>
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
									{palabra.TituloNihongo}
								</p>
								<p
									className="h5 text-info text-capitalize title pt-0 mb-0"
									style={{
										fontSize: "0.9rem",
									}}
								>
									{palabra.TituloSupeingo}
								</p>
							</div>
							<div
								style={{ width: "100%" }}
								className="row justify-content-between mx-0 mt-4"
							>
								<p className="h5 text-info title pt-0 mb-0">
									{palabra.Furagana}
								</p>
								<p
									className="h5 text-info title pt-0 mb-0 text-capitalize"
									style={{
										fontSize: "0.8rem",
									}}
								>
									{palabra.Romaji}
								</p>
							</div>
							{palabra.Subtitulo && (
								<h5 className="text-center text-warning my-3">
									{palabra.Subtitulo}
								</h5>
							)}
							{palabra.Texto && (
								<p
									className="my-5"
									dangerouslySetInnerHTML={{
										__html: palabra.Texto,
									}}
								></p>
							)}
							{palabra.Ejemplo1 && (
								<div className="text-center pt-4">
									<h5 className="text-left">Ejemplo:</h5>
									<p>
										<strong>
											"{palabra.Ejemplo1.Traduccion}
											":
										</strong>
									</p>
									<p className="text-info">
										「{palabra.Ejemplo1.Kanjis}」
									</p>
									<p>
										<strong className="text-success">
											「{palabra.Ejemplo1.RomajiEjemplo}」
										</strong>
									</p>
								</div>
							)}
							{palabra.Ejemplo2 && (
								<div className="text-center pt-4">
									<h5 className="text-left">Ejemplo:</h5>
									<p>
										<strong>
											"{palabra.Ejemplo2.Traduccion}
											":
										</strong>
									</p>
									<p className="text-info">
										「{palabra.Ejemplo2.Kanjis}」
									</p>
									<p>
										<strong className="text-success">
											「{palabra.Ejemplo2.RomajiEjemplo}」
										</strong>
									</p>
								</div>
							)}
							{palabra.Ejemplo3 && (
								<div className="text-center pt-4">
									<h5 className="text-left">Ejemplo:</h5>
									<p>
										<strong>
											"{palabra.Ejemplo3.Traduccion}
											":
										</strong>
									</p>
									<p className="text-info">
										「{palabra.Ejemplo3.Kanjis}」
									</p>
									<p>
										<strong className="text-success">
											「{palabra.Ejemplo3.RomajiEjemplo}」
										</strong>
									</p>
								</div>
							)}
						</CardBody>
					</Card>
				</Col>
			))}
		</React.Fragment>
	);
}
