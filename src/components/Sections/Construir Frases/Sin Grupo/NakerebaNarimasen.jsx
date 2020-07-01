import React from "react";
import { Col, Card, CardBody, Row, UncontrolledTooltip } from "reactstrap";

import { Link } from "react-router-dom";

function scrollTo(seccion) {
	if (seccion === "top") {
		window.scrollTo(0, 0);
	} else {
		document.getElementById(seccion).scrollIntoView({
			block: "start",
			behavior: "smooth",
		});
	}
}
export default function NakerebaNarimasen() {
	return (
		<React.Fragment>
			<Col md="12">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: ".5rem" }}
				>
					<CardBody className="px-3">
						<h4 className="text-center text-info title pt-0 mt-0">
							Obligaciones y Tareas Opcionales
						</h4>
						<p>
							En el idioma Japonés disponemos de un par de frases
							con varios usos, entre los cuales vamos a encontrar
							el indicar{" "}
							<strong
								className="text-info"
								onClick={() => scrollTo("nakereba")}
							>
								<u>obligación</u>
							</strong>
							, sea para uno mísmo o hacia otra persona, y por
							otro lado el indicar{" "}
							<strong
								className="text-info"
								onClick={() => scrollTo("nakute")}
							>
								<u>cosas opcionales</u>
							</strong>{" "}
							("no hace falta que..."), y de la misma forma
							preguntar si algo estaría bien o no.
						</p>
						<p>
							Para utilizar éstas frases, conviene tener fresco en
							la memoria, las formas 形 (けい - kei) de los
							verbos, ya que aquí haremos uso de la forma な形
							(nakei).
						</p>
					</CardBody>
				</Card>
			</Col>
			<Col md="12" id="nakereba">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: ".5rem" }}
				>
					<CardBody className="px-3">
						<h4 className="text-center text-primary title pt-0 mt-0">
							Obligaciones
						</h4>
						<p>
							Hay 2 "ramas" principales aquí, por un lado el "
							<strong className="text-info">tengo que...</strong>"
							y por el otro el "
							<strong className="text-success">
								tienes que...
							</strong>
							".
						</p>
						<p>
							Ambas formas tienen, tanto formas acortadas, como
							distinciones entre discurso <strong>Formal</strong>{" "}
							y <strong>Normal</strong>.
						</p>
						<h5 className="text-center mt-5">Tengo Que...</h5>
						<p>
							Para expresar éstas obligaciones se pueden utilizan
							cualquiera de las 2 siguientes formas
							「なければなりません -
							nakerebanarimasen」y「なければいけません -
							nakerebaikemasen」.
						</p>
						<p>
							Hay quienes dicen que no hay diferencia entre las 2
							opciones, y tambien hay quienes dicen que la
							diferencia es que「なければいけません -
							nakerebaikemasen」equivale a "
							<strong className="text-danger">debo hacer</strong>{" "}
							algo, pero{" "}
							<strong className="text-success">no quiero</strong>{" "}
							hacerlo".
						</p>
						<p>
							Y por el otro lado「なければいけません -
							nakerebaikemasen」equivale a "
							<strong className="text-danger">debo hacer</strong>{" "}
							algo, y{" "}
							<strong className="text-success">quiero</strong>{" "}
							hacerlo".
						</p>
						<h5 className="mt-5">Comencemos a crear las frases</h5>
						<p>
							Como ya se dijo antes, estaremos usando la forma
							な形 (nakei) de los verbos, y usaremos la siguiente
							fórmula:
						</p>
						<p className="text-center my-5">
							<strong>El verbo</strong> en la forma な形, pero{" "}
							<strong className="text-danger">
								retiraremos el「ない」(nai)
							</strong>
							<br />
							<strong>+</strong>
							<br />
							<strong className="text-success">
								Cualquiera de las 2 opciones
							</strong>
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							<strong className="text-info">
								「なければいけません」
								<br /> nakerebaikemasen
							</strong>
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							<strong className="text-primary">
								「なければなりません」
								<br /> nakerebanarimasen
							</strong>
						</p>
						<p className="text-center">
							Ejemplo:
							<br />
							"Tengo que estudiar"
							<br />
							<span className="text-success">
								<span id="benkyou">勉強</span>
								しなければなりません。
							</span>
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							<strong className="text-info">
								benkyoushinakerebanarimasen
							</strong>
						</p>
						<UncontrolledTooltip
							placement="top"
							target="benkyou"
							delay={0}
						>
							べんきょう
						</UncontrolledTooltip>
						<h5 className="text-center mt-5">
							Acortaciones y Discurso Normal
						</h5>
						<p>
							No a todo el mundo le agrada tener estar media hora
							hablando para poder decir "tengo que ir", es por eso
							que, dependiendo el nivel de formalidad de la
							conversación, podremos hacer uso de sus formas
							cortas, y ligeramente informales.
						</p>
						<h5 className="mt-5">Discurso Normal</h5>
						<p>
							Cuando nos encontramos hablando con alguien en un
							vocabulario "informal", podremos hacer uso de las
							siguientes formas <strong>considerablemente</strong>{" "}
							más cortas que las originales, y las podremos usar
							tanto para una conversación hablada, como por
							escrito.
						</p>
						<Row>
							<Col md="6" className="my-3">
								<p className="text-center">
									<strong className="text-info">
										「なければなりません」
										<br />
										nakerebanarimasen
									</strong>
									<br />
									<i className="fas fa-long-arrow-alt-down px-2"></i>
									<br />
									<strong className="text-success">
										「ならない - naranai」
									</strong>
								</p>
							</Col>
							<Col md="6" className="my-3">
								<p className="text-center">
									<strong className="text-info">
										「なければいけません」
										<br />
										nakerebaikemasen
									</strong>
									<br />
									<i className="fas fa-long-arrow-alt-down px-2"></i>
									<br />
									<strong className="text-success">
										「いけない - ikenai」
									</strong>
								</p>
							</Col>
						</Row>
						<p>
							La fórmula para armar las frases es la misma del
							principo.
						</p>
						<p className="text-center">
							Ejemplo:
							<br />
							"Tengo que estudiar"
							<br />
							<span className="text-success">
								<span id="benkyou2">勉強</span>
								しならない。
							</span>
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							<strong className="text-info">
								benkyoushinaranai
							</strong>
						</p>
						<UncontrolledTooltip
							placement="top"
							target="benkyou2"
							delay={0}
						>
							べんきょう
						</UncontrolledTooltip>
						<h5 className="mt-5">Acortaciones</h5>
						<p>
							En el caso de las acortaciones, si bien no son{" "}
							<strong>tan informales</strong> como las dedicadas
							al vocabulario informal,{" "}
							<strong className="text-danger">
								solo las podremos usar al hablar
							</strong>
							, no al comunicarse por escrito, sea por mensajes o
							similares.
						</p>
						<p>
							En éste caso, ya no hay 2 opciones como antes, ya
							que nos quedaremos solo con el「なければ -
							nakereba」, y de nuevo, la fórmula para armar la
							frase es la misma.
						</p>
						<p>
							Ésta forma corta tiene 2 significados dependiendo
							del contexto en el que nos encontremos, por un lado
							puede significar "<strong>debo / debes</strong>{" "}
							hacer algo", y por el otro también puede ser "
							<strong>si no,</strong> + el verbo + el resto de la
							frase".
						</p>
					</CardBody>
				</Card>
			</Col>
			<Col md="12" id="nakute">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: ".5rem" }}
				>
					<CardBody className="px-3">
						<h4 className="text-center text-success title pt-0 mt-0">
							Tareas Opcionales
						</h4>
						<p>
							Dentro de ésta sección están, por un lado,{" "}
							<strong>las tareas opcionales</strong>, y por el
							otro lado, también podremos preguntar si "está bien
							hacer algo / si está permitido hacer algo".
						</p>
						<p>
							Aquí no hay 2 formas como antes, aparte de que
							también ésta forma, al ser "corta", no tiene más
							formas cortas, o <strong>Informales</strong>.
						</p>
						<p>
							De igual manera, no se diferencia entre "Tú" y "Yo",
							como en las obligaciones.
						</p>
						<h5 className="text-center mt-5">La Fórmula</h5>
						<p className="text-center mt-4 mb-5">
							<strong>El verbo</strong> en la forma な形, pero{" "}
							<strong className="text-danger">
								retiraremos el「ない」(nai)
							</strong>
							<br />
							<strong>+</strong>
							<br />
							<strong className="text-success">
								「なくてもいいです - nakutemoiidesu」
							</strong>
						</p>
						<p>
							Solo así, ya significa "No tienes que hacerlo" o
							bien "No es obligatorio que hagas...", pero tambien
							si agregamos「か」al final, convertiremos la oracion
							en una pregunta del estilo "Estaría bien si...?".
						</p>
						<p className="text-center">
							Ejemplo:
							<br />
							"No hace falta que vaya/s"
							<br />
							<span className="text-success">
								<span id="ikuyou">行</span>
								かなくてもいいです。
							</span>
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							<strong className="text-info">
								ikanakutemoiidesu
							</strong>
						</p>
						<UncontrolledTooltip
							placement="top"
							target="ikuyou"
							delay={0}
						>
							い
						</UncontrolledTooltip>
						<p className="text-center">
							Ejemplo:
							<br />
							"Estaría bien si voy?"
							<br />
							<span className="text-success">
								<span id="ikuyou2">行</span>
								かなくてもいいですか。
							</span>
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							<strong className="text-info">
								ikanakutemoiidesuka
							</strong>
						</p>
						<UncontrolledTooltip
							placement="top"
							target="ikuyou"
							delay={0}
						>
							い
						</UncontrolledTooltip>
					</CardBody>
				</Card>
			</Col>
			<Col md="6">
				<Link
					to="/formas-kei/nai"
					onClick={() => {
						scrollTo("top");
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
