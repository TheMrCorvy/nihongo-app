import React from "react";
import { Col, Card, CardBody, UncontrolledCollapse, Button } from "reactstrap";

export default function PalabrasUtiles(props) {
	return (
		<React.Fragment>
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
							className="fas fa-3x fa-tools"
							style={{
								position: "absolute",
								top: 4,
								right: 4,
								opacity: 0.7,
							}}
						></i>
					</div>
					<h4 className="text-left px-4 pt-2 float-left my-0 text-info title">
						Palabras Útiles
					</h4>
				</Card>
			</Col>
			{props.jsonDePalabras.PalabrasUtiles.map((palabra) => (
				<Col md="auto" className="mb-5" key={palabra.Key}>
					<Button
						color="primary"
						id={"buttonToggler-" + palabra.Key}
						className="col-lg-12 mb-0 py-0"
						style={{
							borderRadius: "1.4rem",
							background: palabra.background,
							boxShadow: palabra.boxShadow,
							zIndex: 100,
						}}
					>
						<h5 className="title my-3 py-0 text-capitalize">
							{palabra.TituloSupeingo} - {palabra.TituloNihongo}
						</h5>
					</Button>
					{/* <UncontrolledCollapse
						toggler={
							"#buttonToggler-" +
							palabra.Key +
							", #cerrar-" +
							palabra.Key
						}
						style={{
							zIndex: -1,
							marginTop: -25,
						}}
						className="px-4"
						defaultOpen
					> */}
					<Card
						className="card-plain pt-4 px-4"
						style={{
							borderRadius: "15px",
							// zIndex: -1,
							marginTop: -25,
						}}
					>
						<CardBody
							className="bg-white px-3"
							style={{
								borderBottomLeftRadius: "15px",
								borderBottomRightRadius: "15px",
								// zIndex: -1,
								// marginTop: -25,
							}}
						>
							<h5
								className="text-center"
								style={{
									lineHeight: "2.5rem",
								}}
							>
								Lecturas:{" "}
								{palabra.Furagana && (
									<span className="text-success">
										「{palabra.Furagana}」
									</span>
								)}
								<span className="text-info text-capitalize">
									「{palabra.Romaji}」
								</span>
							</h5>
							<h3 className="text-center mt-3 text-capitalize">
								{palabra.Subtitulo}
							</h3>
							{palabra.Texto && <p>{palabra.Texto}</p>}
							{palabra.Ejemplo1 && (
								<div className="text-center pt-4">
									<h5 className="text-left">Ejemplo:</h5>
									<p>
										<strong>
											"{palabra.Ejemplo1.Traduccion}":
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
											"{palabra.Ejemplo2.Traduccion}":
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
											"{palabra.Ejemplo3.Traduccion}":
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
							{/* <div className="text-danger text-center mb-0 mt-5">
								<i
									className="fas fa-2x fa-times-circle"
									id={"cerrar-" + palabra.Key}
								></i>
							</div> */}
						</CardBody>
					</Card>
					{/* </UncontrolledCollapse> */}
				</Col>
			))}
		</React.Fragment>
	);
}
