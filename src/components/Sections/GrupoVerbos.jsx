import React from "react";
import { Col, Card, CardBody, Row } from "reactstrap";

export default function GrupoVerbos() {
	return (
		<div className="col-lg-12 row justify-content-center" id="verbos">
			<h2 className="col-lg-12 text-center title">Grupos de Verbos</h2>
			<Col md="12">
				<Card
					style={{ borderRadius: ".5rem" }}
					className="bg-white card-plain px-3"
				>
					<h3 className="title text-warning text-center pb-0 mb-0">
						Grupo 1
					</h3>
					<CardBody>
						<h6 className="text-left title text-info pt-0 mt-0 mb-4">
							Los verbos cuya forma diccionario (う) termina en
							los siguientes hiraganas:
						</h6>
						<Row className="justify-content-around px-3">
							<p>う (-u)</p>
							<p>る (-ru)</p>
							<p>つ (-tsu)</p>
							<p>く (-ku)</p>
							<p>ぐ (gu)</p>
							<p>す (-su)</p>
							<p>ぬ (nu)</p>
							<p>む (mu)</p>
							<p>ぶ (bu)</p>
						</Row>
						<small className="text-danger">
							* Nota: Cabe destacar que siempre puede haber alguna
							excepción.
						</small>
					</CardBody>
				</Card>
			</Col>
			<Col md="12">
				<Card
					style={{ borderRadius: ".5rem" }}
					className="bg-white card-plain px-3"
				>
					<h3 className="title text-primary text-center mb-0 pb-0">
						Grupo 2
					</h3>
					<CardBody>
						<h6 className="text-left title text-info pt-0 mt-0 mb-4">
							Los verbos cuya forma diccionario (う) termina de la
							siguiente forma:
						</h6>
						<Row className="justify-content-around px-3">
							<p>
								Hiraganas con sonido terminado en い + る(
								<strong>algoi</strong>+ru)
							</p>
							<p>
								Hiraganas con sonido terminado en え + る(
								<strong>algoe</strong>+ru)
							</p>
						</Row>
						<small className="text-danger">
							* Nota: Cabe destacar que siempre puede haber alguna
							excepción.
						</small>
					</CardBody>
				</Card>
			</Col>
			<Col md="12">
				<Card
					style={{ borderRadius: ".5rem" }}
					className="bg-white card-plain px-3"
				>
					<h3 className="title text-success text-center">Grupo 3</h3>
					<CardBody>
						<p className="text-center">
							El tercer grupo es la "excepción" a la regla. Aquí
							hay solo 2 verbos (venir y hacer)
						</p>
						<div
							style={{ maxWidth: "100%", width: "30rem" }}
							className="row justify-content-around mx-auto mb-4"
						>
							<p className="h5 text-info title pt-0 my-auto">
								Venir
							</p>
							<p className="h5 text-info title pt-0 my-auto">
								来る
							</p>

							<p className="h5 text-info title pt-0 my-auto">
								くる
							</p>
							<p className="h5 text-info title pt-0 my-auto">
								(Kuru)
							</p>
						</div>
						<div
							style={{ maxWidth: "100%", width: "30rem" }}
							className="row justify-content-around mx-auto"
						>
							<p className="h5 text-info title pt-0 my-auto">
								Hacer
							</p>
							<p className="h5 text-info title pt-0 my-auto">
								する
							</p>
							<p className="h5 text-info title pt-0 my-auto">
								(Suru)
							</p>
						</div>
					</CardBody>
				</Card>
			</Col>
		</div>
	);
}
