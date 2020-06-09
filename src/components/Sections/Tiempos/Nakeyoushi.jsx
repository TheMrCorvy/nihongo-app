import React from "react";
import { Row, Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";

export default function Nakeyoushi() {
	return (
		<React.Fragment>
			<Col md="12" id="nakeyoushi">
				<Card
					style={{ borderRadius: ".5rem" }}
					className="bg-white card-plain px-3"
				>
					<h3
						className="title text-success text-center"
						id="nakeyoushi-titulo"
					>
						な形ようし
					</h3>
					<UncontrolledTooltip
						placement="top"
						target="nakeyoushi-titulo"
						delay={0}
					>
						なけようし <br /> (Nakeyoushi)
					</UncontrolledTooltip>
					<CardBody>
						<Row>
							<Col md="6" className="mb-5">
								<h5>Presente Afirmativo:</h5>
								<p>
									Para la conjugación de la forma presente
									afirmativa se utiliza el adjetivo sin
									modificar añadiendo「です」(Desu) al final
									de la frase si queremos hacerla{" "}
									<strong>Formal</strong>, y en el caso de
									querer hacerla en forma{" "}
									<strong>Normal</strong>, en lugar
									del「です」pondremos 「だ」(da).
								</p>
							</Col>

							<Col md="6" className="mb-5">
								<h5>Presente Negativo:</h5>
								<p>
									Mientras que en el grupo de い形ようし lo
									que se conjuga es el propio adjetivo, en el
									caso del grupo な lo que se conjuga es la
									partícula「です」. <br />
									Para crear la forma negativa presente de un
									adjetivo な形ようし, cambiamos「です」por su
									forma negativa「じゃありません」o
									「ではありません」(ambas formas son
									correctas y <strong>formales</strong>), y
									para la forma <strong>Normal</strong>,
									usaremos「じゃない」.
								</p>
								<p>
									Ejemplo: <br />
									にぎやか
									<del className="text-success">です</del>
									<i className="fas fa-long-arrow-alt-right px-2"></i>
									にぎやか
									<span className="text-success">
										じゃありません
									</span>
									<br />
									nigiyaka
									<del className="text-success">
										<strong>desu</strong>
									</del>
									<i className="fas fa-long-arrow-alt-right px-2"></i>
									nigiyaka
									<strong className="text-success">
										{" "}
										ja arimasen
									</strong>
								</p>
							</Col>

							<Col md="6" className="mb-5">
								<h5>Pasado Afirmativo:</h5>
								<p>
									Una vez más, lo que conjugamos en el
									adjetivo, es el「です」en su forma pasada,
									quedando「でした」(deshita) para la forma{" "}
									<strong>Formal</strong>, y「だった」(datta)
									para la forma <strong>Normal</strong>.
								</p>
								<p>
									Ejemplo: <br />
									にぎやか
									<del className="text-success">です</del>
									<i className="fas fa-long-arrow-alt-right px-2"></i>
									にぎやか
									<span className="text-success">でした</span>
									<br />
									nigiyaka
									<del className="text-success">
										<strong>desu</strong>
									</del>
									<i className="fas fa-long-arrow-alt-right px-2"></i>
									nigiyaka
									<strong className="text-success">
										{" "}
										deshita
									</strong>
								</p>
							</Col>

							<Col md="6">
								<h5>Pasado Negativo:</h5>
								<p>
									Por último, para el pasado negativo hay que
									combinar las 2 conjugaciones anteriores de
									「です」, quedando
									como「じゃありませんでした」(ja arimasen
									deshita) o「ではありませんでした」 (dewa
									arimasen deshita) para la{" "}
									<strong>Formal</strong>,
									y「じゃなかった」para la forma{" "}
									<strong>Normal</strong>.
								</p>
								<p>
									Ejemplo: <br />
									にぎやか
									<del className="text-success">です</del>
									<i className="fas fa-long-arrow-alt-right px-2"></i>
									にぎやか
									<span className="text-success">
										じゃありませんでした
									</span>
									<br />
									nigiyaka
									<del className="text-success">
										<strong>desu</strong>
									</del>
									<i className="fas fa-long-arrow-alt-right px-2"></i>
									nigiyaka
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
