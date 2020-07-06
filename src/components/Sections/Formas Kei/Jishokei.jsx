import React from "react";
import { Row, Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";

export default function Jishokei() {
	return (
		<Col md="12">
			<Card
				className="card-plain bg-white"
				style={{ borderRadius: ".5rem" }}
			>
				<CardBody className="px-3">
					<h4 className="text-center text-info title pt-0 mt-0">
						La Forma <span id="jishokei">辞書形</span>
					</h4>
					<UncontrolledTooltip
						placement="top"
						target="jishokei"
						delay={0}
					>
						じしょけい
					</UncontrolledTooltip>
					<h5 className="title text-center">
						¿En qué consiste la forma 辞書形?
					</h5>
					<p>
						La forma 辞書形 (じしょけい), es una conjugación
						utilizada principalmente para cambiar de una
						conversación{" "}
						<strong className="text-info">Formal</strong> a una más{" "}
						<strong className="text-info">Informal</strong>.
					</p>
					<p>
						También se conoce a ésta conjugación como la forma "
						<strong className="text-info">diccionario</strong>", ya
						que, al ser el "equivalente" del "
						<strong className="text-info">infinitivo</strong>" en
						Español, es ésta forma la utilizada (valga la
						redundancia) en los diccionarios para definir a los
						verbos, siendo「辞書 - じしょ」 "diccionario", y「形 -
						かたち」"forma".
					</p>
					<p>
						Cuando estemos hablando en una conversación{" "}
						<strong>informal</strong>, ésta forma será la utilizada
						para hablar de los tiempos{" "}
						<strong className="text-info">presente</strong> y{" "}
						<strong className="text-info">futuro</strong>.
					</p>
					<h5 className="text-center py-3">
						Las Reglas para Conjugar
					</h5>
					<p>
						Para pasar los verbos a la forma{" "}
						<strong className="text-info">diccionario</strong>,
						deberemos tomarlos en su forma「ます」y cambiar sus
						terminaciones siguiendo las siguientes reglas, según
						cada grupo de verbos.
					</p>
					<h5 className="text-center title text-warning">
						Verbos Grupo 1
					</h5>
					<Row className="justify-content-around px-4">
						<p
							className="text-center px-4 py-4"
							style={{
								borderRadius: ".5rem",
								background: "#f2f2f2",
							}}
						>
							Verbos Terminados en{" "}
							<span className="text-warning">き</span>
							<span className="text-primary">ます</span>
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							Terminarán en <span className="text-info">く</span>
						</p>
						<p
							className="text-center px-4 py-4"
							style={{
								borderRadius: ".5rem",
								background: "#f2f2f2",
							}}
						>
							Verbos Terminados en{" "}
							<span className="text-warning">ぎ</span>
							<span className="text-primary">ます</span>
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							Terminarán en <span className="text-info">ぐ</span>
						</p>
						<p
							className="text-center px-4 py-4"
							style={{
								borderRadius: ".5rem",
								background: "#f2f2f2",
							}}
						>
							Verbos Terminados en{" "}
							<span className="text-warning">み</span>
							<span className="text-primary">ます</span>
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							Terminarán en <span className="text-info">む</span>
						</p>
						<p
							className="text-center px-4 py-4"
							style={{
								borderRadius: ".5rem",
								background: "#f2f2f2",
							}}
						>
							Verbos Terminados en{" "}
							<span className="text-warning">び</span>
							<span className="text-primary">ます</span>
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							Terminarán en <span className="text-info">ぶ</span>
						</p>
						<p
							className="text-center px-4 py-4"
							style={{
								borderRadius: ".5rem",
								background: "#f2f2f2",
							}}
						>
							Verbos Terminados en{" "}
							<span className="text-warning">り</span>
							<span className="text-primary">ます</span>
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							Terminarán en <span className="text-info">る</span>
						</p>
						<p
							className="text-center px-4 py-4"
							style={{
								borderRadius: ".5rem",
								background: "#f2f2f2",
							}}
						>
							Verbos Terminados en{" "}
							<span className="text-warning">い</span>
							<span className="text-primary">ます</span>
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							Terminarán en <span className="text-info">う</span>
						</p>
						<p
							className="text-center px-4 py-4"
							style={{
								borderRadius: ".5rem",
								background: "#f2f2f2",
							}}
						>
							Verbos Terminados en{" "}
							<span className="text-warning">ち</span>
							<span className="text-primary">ます</span>
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							Terminarán en <span className="text-info">つ</span>
						</p>
						<p
							className="text-center px-4 py-4"
							style={{
								borderRadius: ".5rem",
								background: "#f2f2f2",
							}}
						>
							Verbos Terminados en{" "}
							<span className="text-warning">し</span>
							<span className="text-primary">ます</span>
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							Terminarán en <span className="text-info">す</span>
						</p>
					</Row>
					<h5 className="text-center title text-primary">
						Verbos Grupo 2
					</h5>
					<p className="text-center">
						Para todos los verbos pertenecientes a éste grupo, lo
						único que se debe hacer es retirar la
						reminación「ます」y reemplazarla por「る」.
					</p>
					<h5 className="text-center title text-success">
						Verbos Grupo 3
					</h5>
					<Row className="justify-content-around px-4">
						<p
							className="text-center px-5 py-4"
							style={{
								borderRadius: ".5rem",
								background: "#f2f2f2",
							}}
						>
							El Verbo{" "}
							<span className="text-success">します</span>
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							Pasará a Ser <span className="text-info">する</span>
						</p>
						<p
							className="text-center px-5 py-4"
							style={{
								borderRadius: ".5rem",
								background: "#f2f2f2",
							}}
						>
							El Verbo{" "}
							<span className="text-success">
								<span id="kimasu3">来</span>ます
							</span>
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							Pasará a Ser <span className="text-info">くる</span>
						</p>
						<UncontrolledTooltip
							placement="top"
							target="kimasu3"
							delay={0}
						>
							き
						</UncontrolledTooltip>
					</Row>
				</CardBody>
			</Card>
		</Col>
	);
}
