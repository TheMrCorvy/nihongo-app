import React from "react";
import { Col, Button, Card, CardBody } from "reactstrap";

export default function PergaminoDeshabilitado(props) {
	return (
		<React.Fragment>
			<Col md="auto" className="mb-5" key={props.palabra.Key}>
				<Button
					color="primary"
					id={"buttonToggler-" + props.palabra.Key}
					className="col-lg-12 mb-0 py-0"
					style={{
						borderRadius: "1.4rem",
						background: props.palabra.background,
						boxShadow: props.palabra.boxShadow,
						zIndex: 100,
					}}
				>
					<h5 className="title my-3 py-0 text-capitalize">
						{props.palabra.TituloSupeingo} -{" "}
						{props.palabra.TituloNihongo}
					</h5>
				</Button>
				<Card
					className="card-plain pt-4 px-4"
					style={{
						borderRadius: "15px",
						marginTop: -25,
					}}
				>
					<CardBody
						className="bg-white px-3"
						style={{
							borderBottomLeftRadius: "15px",
							borderBottomRightRadius: "15px",
						}}
					>
						<h5
							className="text-center"
							style={{
								lineHeight: "2.5rem",
							}}
						>
							Lecturas:{" "}
							{props.palabra.Furagana && (
								<span className="text-success">
									「{props.palabra.Furagana}」
								</span>
							)}
							<span className="text-info text-capitalize">
								「{props.palabra.Romaji}」
							</span>
						</h5>
						<h3 className="text-center mt-3 text-capitalize">
							{props.palabra.Subtitulo}
						</h3>
						{props.palabra.Texto && (
							<p
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
										"{props.palabra.Ejemplo1.Traduccion}":
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
										"{props.palabra.Ejemplo2.Traduccion}":
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
										"{props.palabra.Ejemplo3.Traduccion}":
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
