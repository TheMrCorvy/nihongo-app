import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

class Frases extends React.Component {
	state = {};
	componentDidMount() {
		document.body.classList.add("landing-page");
		document.body.classList.add("sidebar-collapse");
		document.body.style.background = "#f2f2f2";
		document.documentElement.classList.remove("nav-open");
	}

	componentWillUnmount() {
		document.body.classList.remove("landing-page");
		document.body.classList.remove("sidebar-collapse");
		document.body.style.background = "#fff";
	}

	render() {
		return (
			<React.Fragment>
				<div className="wraper">
					<Container className="mb-5">
						<h1 className="text-center title h3">
							Vocabulario: Frases
						</h1>
						<Row className="justify-content-around">
							<Col md="6">
								<Card
									style={{ borderRadius: ".5rem" }}
									className="bg-white card-plain px-3"
								>
									<CardBody>
										<p>
											Kanji: Texto de ejemplo con el{" "}
											<strong>Verbo</strong> incluido
											dentro de la frase
										</p>
										<p>
											Todo en Hiragana: Texto de ejemplo
											con el <strong>Verbo</strong>{" "}
											incluido dentro de la frase
										</p>
										<p>
											Romaji: Texto de ejemplo con el{" "}
											<strong>Verbo</strong> incluido
											dentro de la frase
										</p>
										<p>
											Traducción: Texto de ejemplo con el{" "}
											<strong>Verbo</strong> incluido
											dentro de la frase
										</p>

										<h6 className="text-primary my-0 pt-0">
											Conjugación/Forma: Futsukei
											(diccionario)
										</h6>
									</CardBody>
								</Card>
							</Col>
							<Col md="6">
								<Card
									style={{ borderRadius: ".5rem" }}
									className="bg-white card-plain px-3"
								>
									<CardBody>
										<p>
											Kanji: Texto de ejemplo con el{" "}
											<strong>Verbo</strong> incluido
											dentro de la frase
										</p>
										<p>
											Todo en Hiragana: Texto de ejemplo
											con el <strong>Verbo</strong>{" "}
											incluido dentro de la frase
										</p>
										<p>
											Romaji: Texto de ejemplo con el{" "}
											<strong>Verbo</strong> incluido
											dentro de la frase
										</p>
										<p>
											Traducción: Texto de ejemplo con el{" "}
											<strong>Verbo</strong> incluido
											dentro de la frase
										</p>

										<h6 className="text-primary my-0 pt-0">
											Conjugación/Forma: Futsukei
											(diccionario)
										</h6>
									</CardBody>
								</Card>
							</Col>
							<Col md="6">
								<Card
									style={{ borderRadius: ".5rem" }}
									className="bg-white card-plain px-3"
								>
									<CardBody>
										<p>
											Kanji: Texto de ejemplo con el{" "}
											<strong>Verbo</strong> incluido
											dentro de la frase
										</p>
										<p>
											Todo en Hiragana: Texto de ejemplo
											con el <strong>Verbo</strong>{" "}
											incluido dentro de la frase
										</p>
										<p>
											Romaji: Texto de ejemplo con el{" "}
											<strong>Verbo</strong> incluido
											dentro de la frase
										</p>
										<p>
											Traducción: Texto de ejemplo con el{" "}
											<strong>Verbo</strong> incluido
											dentro de la frase
										</p>

										<h6 className="text-primary my-0 pt-0">
											Conjugación/Forma: Futsukei
											(diccionario)
										</h6>
									</CardBody>
								</Card>
							</Col>
							<Col md="6">
								<Card
									style={{ borderRadius: ".5rem" }}
									className="bg-white card-plain px-3"
								>
									<CardBody>
										<p>
											Kanji: Texto de ejemplo con el{" "}
											<strong>Verbo</strong> incluido
											dentro de la frase
										</p>
										<p>
											Todo en Hiragana: Texto de ejemplo
											con el <strong>Verbo</strong>{" "}
											incluido dentro de la frase
										</p>
										<p>
											Romaji: Texto de ejemplo con el{" "}
											<strong>Verbo</strong> incluido
											dentro de la frase
										</p>
										<p>
											Traducción: Texto de ejemplo con el{" "}
											<strong>Verbo</strong> incluido
											dentro de la frase
										</p>

										<h6 className="text-primary my-0 pt-0">
											Conjugación/Forma: Futsukei
											(diccionario)
										</h6>
									</CardBody>
								</Card>
							</Col>
							<Col md="6">
								<Card
									style={{ borderRadius: ".5rem" }}
									className="bg-white card-plain px-3"
								>
									<CardBody>
										<p>
											Kanji: Texto de ejemplo con el{" "}
											<strong>Verbo</strong> incluido
											dentro de la frase
										</p>
										<p>
											Todo en Hiragana: Texto de ejemplo
											con el <strong>Verbo</strong>{" "}
											incluido dentro de la frase
										</p>
										<p>
											Romaji: Texto de ejemplo con el{" "}
											<strong>Verbo</strong> incluido
											dentro de la frase
										</p>
										<p>
											Traducción: Texto de ejemplo con el{" "}
											<strong>Verbo</strong> incluido
											dentro de la frase
										</p>

										<h6 className="text-primary my-0 pt-0">
											Conjugación/Forma: Futsukei
											(diccionario)
										</h6>
									</CardBody>
								</Card>
							</Col>
						</Row>
					</Container>
				</div>
			</React.Fragment>
		);
	}
}
export default Frases;
