import React from "react";
import { Col, Card, CardBody } from "reactstrap";
import Secciones from "components/Sections/Secciones";

export default function KokoYDore() {
	return (
		<React.Fragment>
			<Col md="12">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: "15px" }}
				>
					<h4 className="text-center px-2">
						Ubicaciones, Preferencias y Preguntas
					</h4>
					<CardBody className="mt-5 px-3">
						<p>
							En el idioma Japonés existen 4 palabras que se
							utilizan para marcar una ubicación, sea de un
							objeto, lugar, etc.
						</p>
						<p>
							Siempre se tomará como referencia a los
							participantes de la conversación, por ejemplo
							"cerca" con respecto a mi, o "cerca" con respecto a
							quien le esté hablando.
						</p>
						<p>
							Éstas mismas palabras se utilizan también para
							marcar "hacia donde", y de igual manera para
							preguntar, entre las opciones dadas, "cuál es?", o
							"cuál prefieres / eliges?".
						</p>
						<h5 className="title text-info text-center">
							Ubicaciones
						</h5>
						<Card
							className="card-plain"
							style={{
								background: "#f3f3f3",
								borderRadius: "10px",
							}}
						>
							<CardBody className="text-center">
								<p>
									<span className="text-success">ここ</span> =
									koko = "Aquí" con respecto a{" "}
									<strong className="text-info">
										quien está hablando
									</strong>{" "}
									(cerca de quien está hablando).
								</p>
								<p className="mt-5">
									<span className="text-success">そこ</span> =
									soko = "Aquí" con respecto a{" "}
									<strong className="text-info">
										a quien se le está hablando
									</strong>{" "}
									(cerca de el otro participante de la
									conversación).
								</p>
								<p className="mt-5">
									<span className="text-success">あそこ</span>{" "}
									= asoko = "Allá" con respecto a{" "}
									<strong className="text-info">ambos</strong>{" "}
									(lejos de ambos participantes de la
									conversación).
								</p>
								<p className="mt-5">
									<span className="text-success">どこ</span> =
									doko ={" "}
									<strong className="text-info">
										"Dónde?"
									</strong>
								</p>
							</CardBody>
						</Card>
						<h5 className="title text-info text-center">
							Direcciones / Rumbo
						</h5>
						<Card
							className="card-plain"
							style={{
								background: "#f3f3f3",
								borderRadius: "10px",
							}}
						>
							<CardBody className="text-center">
								<p>
									<span className="text-success">
										こっち o こちら
									</span>{" "}
									= kocchi o kochira = "Por aquí" con respecto
									a{" "}
									<strong className="text-info">
										quien está hablando
									</strong>{" "}
									(cerca de quien está hablando).
									<br />
									こっち (kocchi) es la versión{" "}
									<strong className="text-primary">
										informal
									</strong>
									, mientras que こちら (kochira) será la
									versión{" "}
									<strong className="text-warning">
										formal
									</strong>
									.
								</p>
								<p className="mt-5">
									<span className="text-success">
										そっち o そちら
									</span>{" "}
									= socchi o sochira = "Por aquí" con respecto
									a{" "}
									<strong className="text-info">
										a quien se le está hablando
									</strong>{" "}
									(cerca de el otro participante de la
									conversación).
									<br />
									そっち (socchi) es la versión{" "}
									<strong className="text-primary">
										informal
									</strong>
									, mientras que そちら (sochira) será la
									versión{" "}
									<strong className="text-warning">
										formal
									</strong>
									.
								</p>
								<p className="mt-5">
									<span className="text-success">
										あっち o あちら
									</span>{" "}
									= acchi o achira = "Por allá" con respecto a{" "}
									<strong className="text-info">ambos</strong>{" "}
									(lejos de ambos participantes de la
									conversación).
									<br />
									あっち (acchi) es la versión{" "}
									<strong className="text-primary">
										informal
									</strong>
									, mientras que あちら (achira) será la
									versión{" "}
									<strong className="text-warning">
										formal
									</strong>
									.
								</p>
								<p className="mt-5">
									<span className="text-success">
										どっち o どちら
									</span>{" "}
									= docchi o dochira ={" "}
									<strong className="text-info">
										"Por dónde?"
									</strong>
									<br />
									どっち (docchi) es la versión{" "}
									<strong className="text-primary">
										informal
									</strong>
									, mientras que どちら (dochira) será la
									versión{" "}
									<strong className="text-warning">
										formal
									</strong>
									.
								</p>
								<p className="text-left pl-2 mt-5">
									<strong>Nota:</strong> Tambies se usa{" "}
									<strong>docchi</strong> para preguntar algo
									entre varias opciones, como se explica más
									abajo en ésta sección.
								</p>
							</CardBody>
						</Card>
						<h5 className="title text-info text-center">
							Entre éstas opciones, cuál?...
						</h5>
						<Card
							className="card-plain"
							style={{
								background: "#f3f3f3",
								borderRadius: "10px",
							}}
						>
							<CardBody className="text-center">
								<p>
									<span className="text-success">どれ</span> =
									dore = "Cuál de todos?".
								</p>
								<p className="mt-5">
									<span className="text-success">
										どっち o どちら
									</span>{" "}
									= docchi o dochira = "Cuál de éstos?".
								</p>
								<p className="mt-5">
									<strong className="text-success">
										Aと　Bと　どちら
									</strong>{" "}
									= A to B to dochira = "Entre A y B, cuál?".
								</p>
							</CardBody>
						</Card>
						<p>
							Generalmente se utilizarán éstas preguntas
							acompañadas de la partícula が, y a ésto se le
							encadena alguna palabra (好き - すき - suki -
							"gustar"), (いい - ii - "bien" / "estar bien"), etc.
						</p>
						<p className="mt-5">Ejemplo:</p>
						<p className="text-center">
							"Entre A y B, cuál prefieres?"
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							<strong className="text-primary">A</strong>
							<span className="text-success">と</span>　
							<strong className="text-primary">B</strong>
							<span className="text-success">と</span>　
							<span className="text-warning">どちら</span>
							<span className="text-success">が</span>　
							<strong className="text-info">いい?</strong>
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							<strong>
								<span className="text-primary">A</span>
								<span className="text-success">to</span>　
								<span className="text-primary">B</span>
								<span className="text-success">to</span>　
								<span className="text-warning">dochira</span>
								<span className="text-success">ga</span>　
								<span className="text-info">ii?</span>
							</strong>
						</p>
					</CardBody>
				</Card>
			</Col>
			<Secciones particulas={true} />
		</React.Fragment>
	);
}
