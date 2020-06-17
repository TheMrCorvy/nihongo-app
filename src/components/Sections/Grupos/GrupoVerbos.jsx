import React from "react";
import { Col, Card, CardBody, Row, UncontrolledTooltip } from "reactstrap";

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
							Los verbos que terminan en los siguientes hiraganas:
						</h6>
						<Row className="justify-content-around px-3">
							<p className="text-info px-2">
								<span className="text-warning">い</span>ます
							</p>
							<p className="text-info px-2">
								<span className="text-warning">き</span>ます
							</p>
							<p className="text-info px-2">
								<span className="text-warning">ぎ</span>ます
							</p>
							<p className="text-info px-2">
								<span className="text-warning">し</span>ます
							</p>
							<p className="text-info px-2">
								<span className="text-warning">ち</span>ます
							</p>
							<p className="text-info px-2">
								<span className="text-warning">び</span>ます
							</p>
							<p className="text-info px-2">
								<span className="text-warning">み</span>ます
							</p>
							<p className="text-info px-2">
								<span className="text-warning">り</span>ます
							</p>
						</Row>
						<p>
							<strong className="text-info">Nota:</strong> El
							verbo
							<span className="text-danger">
								「<span id="ikimasu50">行</span>きます」
							</span>
							es una excepción que generalmente sigue sus propias
							reglas, así que es recomendable tenerlo en cuenta a
							la hora de conjugar.
						</p>
						<UncontrolledTooltip
							placement="top"
							target="ikimasu50"
							delay={0}
						>
							い
						</UncontrolledTooltip>
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
							Los verbos cuya forma「ます」termina de la siguiente
							forma:
						</h6>
						<Row className="justify-content-around px-3">
							<p className="col-lg-12 text-center px-0">
								Hiraganas con sonidos terminados en{" "}
								<strong>I</strong> + ます(
								<strong>algoi</strong>+masu)
							</p>
							<p className="col-lg-12 text-center px-0">
								Hiraganas con sonidos terminados en{" "}
								<strong>E</strong> + ます(
								<strong>algoe</strong>+masu)
							</p>
							<br />
							<p>
								<strong className="text-info">Nota:</strong> No
								son los verbos terminados en los Hiraganas{" "}
								<strong className="text-danger">
									います o えます
								</strong>
								, sino aquellos cuyos ultimos Hiraganas terminan
								en esos sonídos, por ejemplo:
								<span className="text-success">
									「食べます - たべます」
								</span>
								(tabemasu).
							</p>
						</Row>
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
								<span id="kimasu">来</span>ます
							</p>
							<p className="h5 text-info title pt-0 my-auto">
								(Kimasu)
							</p>
						</div>
						<UncontrolledTooltip
							placement="top"
							target="kimasu"
							delay={0}
						>
							き
						</UncontrolledTooltip>
						<div
							style={{ maxWidth: "100%", width: "30rem" }}
							className="row justify-content-around mx-auto my-3"
						>
							<p className="h5 text-info title pt-0 my-auto">
								Hacer
							</p>
							<p className="h5 text-info title pt-0 my-auto">
								します
							</p>
							<p className="h5 text-info title pt-0 my-auto">
								(Shimasu)
							</p>
						</div>
						<p>
							<strong className="text-info">Nota:</strong> El
							verbo「します」se puede unir con distintas palabras
							para dar origen a nuevos verbos, por ejemplo, en
							lugar de decir "
							<strong className="text-info">comprar</strong>" (「
							<span id="kaimasu">買</span>います」 - kaimasu),
							podemos decir "
							<strong className="text-success">
								hacer las compras
							</strong>
							" (「
							<span id="kaimasu2">買</span>い
							<span id="mono">物</span>
							<span className="text-success">します</span>」-
							kaimono
							<strong className="text-success">shimasu</strong>).
						</p>
						<UncontrolledTooltip
							placement="top"
							target="kaimasu"
							delay={0}
						>
							か
						</UncontrolledTooltip>
						<UncontrolledTooltip
							placement="top"
							target="kaimasu2"
							delay={0}
						>
							か
						</UncontrolledTooltip>
						<UncontrolledTooltip
							placement="top"
							target="mono"
							delay={0}
						>
							もの
						</UncontrolledTooltip>
					</CardBody>
				</Card>
			</Col>
		</div>
	);
}
