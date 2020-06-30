import React from "react";
import { Card, CardBody, Row, Col, UncontrolledTooltip } from "reactstrap";

export default function VerbosFutsu(props) {
	return (
		<React.Fragment>
			<Col md="12" id="futsu">
				<Card
					style={{ borderRadius: ".5rem" }}
					className="bg-white card-plain px-3"
				>
					<h3 className="title text-success text-center text-capitalize">
						{props.title}
					</h3>
					<CardBody>
						<Row>
							<Col md="12" className="mb-5">
								<p>
									A diferencia de la forma{" "}
									<strong>Formal</strong> de los verbos, en la
									forma <strong>Normal</strong>, para conjugar
									en los distintos tiempos verbales, lo que se
									debe hacer es utilizar las distintas formas
									形 dependiendo de cómo, y en qué tiempo
									queramos conjugar al verbo/s.
								</p>
							</Col>
							<Col md="6" className="mb-5">
								<h5>Presente Afirmativo:</h5>
								<p>
									Para el presente afirmativo se utilizará la
									forma <span id="jishokei">辞書形</span> (la
									forma う) de los verbos, conjugandose según
									las reglas de conjugación de su respectivo
									grupo.
								</p>
								<p>Ejemplo: よむ (yomu - Leer)</p>
								<UncontrolledTooltip
									placement="top"
									target="jishokei"
									delay={0}
								>
									じしょけい <br /> (Jishokei)
								</UncontrolledTooltip>
							</Col>

							<Col md="6" className="mb-5">
								<h5>Presente Negativo:</h5>
								<p>
									En el caso de la conjugación para el tiempo
									presente negativo, se debe utilizar la forma{" "}
									<span id="naikei">ない形</span> del verbo.
								</p>
								<UncontrolledTooltip
									placement="top"
									target="naikei"
									delay={0}
								>
									ないけい <br /> (Naikei)
								</UncontrolledTooltip>
								<p>Ejemplo: よまない (yomanai - "No leer")</p>
							</Col>

							<Col md="6" className="mb-5">
								<h5>Pasado Afirmativo:</h5>
								<p>
									Para hacer la forma afirmativa en el pasado,
									usaremos la forma{" "}
									<span id="takei">た形</span> del verbo.
								</p>
								<UncontrolledTooltip
									placement="top"
									target="takei"
									delay={0}
								>
									たけい <br /> (Takei)
								</UncontrolledTooltip>
								<p>Ejemplo: よんだ (yonda - "Leí / Leyó")</p>
							</Col>

							<Col md="6">
								<h5>Pasado Negativo:</h5>
								<p>
									La conjugación en negativo del pasado es la
									única que, podríamos decir, se compone por 2
									formas 形 dentro de la misma palabra, ya que
									para lograrla estaremos utilizando primero
									la forma ない del verbo, pero con la
									excepción de que le sustraeremos el hiragana
									い al final, y lo reemplazaremos
									por「かった」, quedando finalmente
									como「なかった」.
								</p>
								<p>
									Ejemplo: <br />よ
									<del className="text-info">みます</del>
									<i className="fas fa-long-arrow-alt-right px-2"></i>
									よ
									<span className="text-primary">
										まな
										<del>い</del>
									</span>
									<i className="fas fa-long-arrow-alt-right px-2"></i>
									よ
									<span className="text-success">
										まなかった
									</span>
									<br />
									yo
									<del className="text-info">
										<strong>mimasu</strong>
									</del>
									<i className="fas fa-long-arrow-alt-right px-2"></i>
									yo
									<strong className="text-primary">
										mana
										<del>i</del>
									</strong>
									<i className="fas fa-long-arrow-alt-right px-2"></i>
									yo
									<strong className="text-success">
										manakatta
									</strong>
									<br />
									"No leyó"
								</p>
							</Col>
						</Row>
					</CardBody>
				</Card>
			</Col>
		</React.Fragment>
	);
}
