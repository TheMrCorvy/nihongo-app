import React from "react";
import { Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";

import { Link } from "react-router-dom";

function scrollTop() {
	window.scrollTo(0, 0);
}
export default function Kudasai() {
	return (
		<React.Fragment>
			<Col md="12">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: ".5rem" }}
				>
					<CardBody className="px-3">
						<h4 className="text-center text-info title pt-0 mt-0">
							Pedir las cosas Amablemente
						</h4>
						<p>
							El equivalente de nuestro "Por Favor" en Japonés es
							「<span id="kudasai1">下</span>さい - kudasai」
						</p>
						<UncontrolledTooltip
							placement="top"
							target="kudasai1"
							delay={0}
						>
							くだ
						</UncontrolledTooltip>
						<p>
							Y te estarás preguntando "Y cómo armo las frases
							entonces?", pues muy fácil realmente, pero es
							altamente recomendable que conozcas o que tengas
							estudiado lo que son las formas 形 (けい - kei).
						</p>
						<p>
							Para ésta sección se estará haciendo uso de las
							formas て形 (tekei) y ない形 (nakei), para pedir
							cosas amablemente con ください (kudasai) en{" "}
							<strong className="text-success">afirmativo</strong>
							, y en{" "}
							<strong className="text-danger">negativo</strong>,
							respectivamente.
						</p>
					</CardBody>
				</Card>
			</Col>
			<Col md="12">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: ".5rem" }}
				>
					<CardBody className="px-3">
						<h4 className="text-center text-success title pt-0 mt-0">
							"Por favor si"
						</h4>
						<p>
							Para ésta estructura de frases haremos uso de la
							forma て形 (tekei). Es "mucho muy" importante usar
							ésta forma a concatenar algo con la expresión
							ください (kudasai - "por favor"), o en todo caso, si
							vamos a estar pidiendo una negativa usar la forma
							ない形 (nakei).
						</p>
						<p>
							Sería incorrecto no usar alguna de las 2 formas de
							verbos mostradas para pedir algo con ください.
						</p>
						<h5 className="text-center">La fórmula Secreta</h5>
						<p>
							Realmente no hay ningún secreto por aquí, solo se
							debe comenzar igual que cualquier otra frase común,
							sumarle el verbo en て形 (tekei) y por último,
							finalizar con 下さい (kudasai).
						</p>
						<p className="text-center">
							<strong>El principio de la oración</strong>
							<br />
							<strong>+</strong>
							<br />
							<strong className="text-success">
								El verbo en て形
							</strong>
							<br />
							<strong>+</strong>
							<br />
							<strong className="text-info">
								下さい (kudasai)
							</strong>
						</p>
					</CardBody>
				</Card>
			</Col>
			<Col md="6">
				<Link
					to="/formas-kei/te"
					onClick={() => {
						scrollTop();
					}}
				>
					<Card
						style={{
							borderRadius: "10px",
							boxShadow:
								"0px 5px 25px 0px rgba(255, 54, 54, 0.6)",
							background:
								"linear-gradient(87deg, #f56036 0, #f5365c 100%)",
						}}
					>
						<CardBody className="text-white text-capitalize">
							<span className="title">Forma て</span>
							<i className="fas fa-chevron-right pl-3"></i>
							<i
								className="fas fa-3x fa-tasks"
								style={{
									position: "absolute",
									top: 10,
									right: 10,
									opacity: 0.7,
								}}
							></i>
						</CardBody>
					</Card>
				</Link>
			</Col>
			<Col md="12">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: ".5rem" }}
				>
					<CardBody className="px-3">
						<h4 className="text-center text-danger title pt-0 mt-0">
							"Por favor no"
						</h4>
						<p>
							Por otro lado, para pedir "Por favor no...",
							estaremos utilizando la forma ない形 (nakei) de los
							verbos. Es ésta forma la que indicará que se está
							pidiendo "una negativa" de algo.
						</p>
						<p>
							En cuanto a la forma de construir ésta frase, lo
							haremos de la siguiente manera: La frase construida
							igual que siempre +{" "}
							<strong className="text-danger">
								verbo en la forma ない
							</strong>{" "}
							+ で + 下さい.
						</p>
						<p>
							{" "}
							Y vivieron felices por siempre, <strong>Fin</strong>
							.
						</p>
						<p className="text-center">
							<strong>El principio de la oración</strong>
							<br />
							<strong>+</strong>
							<br />
							<strong className="text-danger">
								El verbo en ない形
							</strong>
							<br />
							<strong>+</strong>
							<br />
							<span className="text-success">で</span>
							<br />
							<strong>+</strong>
							<br />
							<strong className="text-info">
								下さい (kudasai)
							</strong>
						</p>
					</CardBody>
				</Card>
			</Col>
			<Col md="6">
				<Link
					to="/formas-kei/nai"
					onClick={() => {
						scrollTop();
					}}
				>
					<Card
						style={{
							borderRadius: "10px",
							boxShadow:
								"0px 5px 25px 0px rgba(255, 54, 54, 0.6)",
							background:
								"linear-gradient(87deg, #f56036 0, #f5365c 100%)",
						}}
					>
						<CardBody className="text-white text-capitalize">
							<span className="title">Forma ない</span>
							<i className="fas fa-chevron-right pl-3"></i>
							<i
								className="fas fa-3x fa-times"
								style={{
									position: "absolute",
									top: 10,
									right: 10,
									opacity: 0.7,
								}}
							></i>
						</CardBody>
					</Card>
				</Link>
			</Col>
		</React.Fragment>
	);
}
