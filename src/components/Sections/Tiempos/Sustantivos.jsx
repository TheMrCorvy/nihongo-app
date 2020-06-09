import React from "react";
import { Row, Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";

export default function sustantivos() {
	return (
		<React.Fragment>
			<Col md="12">
				<Card
					style={{ borderRadius: ".5rem" }}
					className="bg-white card-plain px-3"
				>
					<CardBody>
						<Row>
							<Col md="12">
								<p>
									Para el caso de los sustantivos, sus
									conjugaciones van a ser prácticamente
									idénticas a las de los adjetivos del grupo{" "}
									<span id="sustNa">な形ようし</span>, siendo
									que solo realizaremos modificaciones a la
									terminación「です」para conjugar los
									tiempos.
								</p>
								<UncontrolledTooltip
									placement="bottom"
									target="sustNa"
									delay={0}
								>
									なけようし <br /> (Nakeyoushi)
								</UncontrolledTooltip>
							</Col>
							<Col md="6" className="mb-5">
								<h5>Presente Afirmativo:</h5>
								<p>
									Para la conjugación de la forma presente
									afirmativa, se utiliza el sustantivo sin
									modificar, añadiendo la
									terminación「です」(Desu) al final de la
									frase si queremos hacerla{" "}
									<strong>Formal</strong>, o「だ」si lo que se
									quiere es hablar con la forma{" "}
									<strong>Normal (う)</strong>.
								</p>
							</Col>

							<Col md="6" className="mb-5">
								<h5>Presente Negativo:</h5>
								<p>
									Cuando se quiere conjugar los sustantivos al
									tiempo presente negativo, se deberá
									modificar la terminación「です」por
									tanto「じゃありません」(ja arimasen) o
									bien「ではありません」(dewa arimasen),
									siendo ambas opciones correctas para la
									forma <strong>Formal</strong>. Y en el caso
									de la forma <strong>Normal</strong> quedaría
									como「じゃない」(ja nai).
								</p>
								<p>
									Ejemplo: <br />
									がくせい
									<del className="text-success">です</del>
									<i className="fas fa-long-arrow-alt-right px-2"></i>
									がくせい
									<span className="text-success">
										ではありません
									</span>
									<br />
									gakusei
									<del className="text-success">
										<strong>desu</strong>
									</del>
									<i className="fas fa-long-arrow-alt-right px-2"></i>
									gakusei
									<strong className="text-success">
										{" "}
										dewa arimasen
									</strong>
								</p>
							</Col>

							<Col md="6" className="mb-5">
								<h5>Pasado Afirmativo:</h5>
								<p>
									Una vez más, lo que conjugamos en el
									sustantivo, es el「です」en su forma pasada,
									quedando「でした」(deshita) para{" "}
									<strong>Formal</strong> y「だった」(datta)
									para la forma <strong>Normal</strong>.
								</p>
								<p>
									Ejemplo: <br />
									がくせい
									<del className="text-success">です</del>
									<i className="fas fa-long-arrow-alt-right px-2"></i>
									がくせい
									<span className="text-success">でした</span>
									<br />
									gakusei
									<del className="text-success">
										<strong>desu</strong>
									</del>
									<i className="fas fa-long-arrow-alt-right px-2"></i>
									gakusei
									<strong className="text-success">
										{" "}
										deshita
									</strong>
								</p>
							</Col>

							<Col md="6">
								<h5>Pasado Negativo:</h5>
								<p>
									Para terminar, en el pasado negativo hay que
									combinar las conjugaciones de「です」,
									quedando como「じゃありませんでした」para{" "}
									<strong>Formal</strong>{" "}
									o「じゃなかった」(janakatta) para la forma{" "}
									<strong>Normal</strong>.
								</p>
								<p>
									Ejemplo: <br />
									がくせい
									<del className="text-success">です</del>
									<i className="fas fa-long-arrow-alt-right px-2"></i>
									がくせい
									<span className="text-success">
										じゃありませんでした
									</span>
									<br />
									gakusei
									<del className="text-success">
										<strong>desu</strong>
									</del>
									<i className="fas fa-long-arrow-alt-right px-2"></i>
									gakusei
									<strong className="text-success">
										{" "}
										ja arimasen deshita
									</strong>
								</p>
							</Col>
						</Row>
					</CardBody>
				</Card>
			</Col>
		</React.Fragment>
	);
}
