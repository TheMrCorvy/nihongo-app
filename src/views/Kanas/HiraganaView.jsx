import React from "react";
import {
	Row,
	Col,
	UncontrolledTooltip,
	Card,
	CardBody,
	Progress,
} from "reactstrap";
import TablasHiragana from "components/Sections/Kanas/TablasHiragana";
import { Link } from "react-router-dom";

import TsuChiquita from "components/Sections/TsuChiquita";
import SonidosEspeciales from "components/Sections/SonidosEspeciales";
import Secciones from "components/Sections/Secciones";

class HiraganaView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		document.body.classList.add("landing-page");
		document.body.classList.add("sidebar-collapse");
		document.documentElement.classList.remove("nav-open");
		document.body.style.background = "#000";
		document.body.style.borderRadius = "20px 20px 0 0";
	}

	componentWillUnmount() {
		document.body.classList.remove("landing-page");
		document.body.classList.remove("sidebar-collapse");
		document.body.style.background = "#fff";
		document.body.style.borderRadius = "0";
	}

	scrollTo = (e, seccion) => {
		e.preventDefault();
		document.getElementById(seccion).scrollIntoView({
			block: "start",
			behavior: "smooth",
		});
	};

	scrollTop = () => {
		window.scrollTo(0, 0);
	};

	render() {
		return (
			<React.Fragment>
				<div
					className="wrapper text-info"
					style={{
						background: "#f2f2f2",
						borderRadius: "20px 20px 0 0",
					}}
					id="top"
				>
					<a
						href="#pablo"
						onClick={(e) => this.scrollTo(e, "info")}
						className="text-info title pt-0"
						style={{
							position: "absolute",
							top: "20px",
							right: "20px",
							zIndex: 10,
							cursor: "pointer",
						}}
					>
						<i className="fas fa-info-circle fa-2x"></i>
					</a>
					<div className="container-fluid py-3">
						<Row className="justify-content-around">
							<Col md="12">
								<h1 id="hiragana-title" className="text-center">
									ひらがな
								</h1>
								<UncontrolledTooltip
									placement="bottom"
									target="hiragana-title"
									delay={0}
								>
									(Hiragana)
								</UncontrolledTooltip>
							</Col>
							<TablasHiragana />
						</Row>
						<Row className="mt-4">
							<TsuChiquita tabla="hiragana" />
							<SonidosEspeciales tabla="hiragana" />
						</Row>
					</div>

					<section
						className="container-fluid mb-5 py-3 bg-white"
						id="info"
					>
						<Row>
							<Col md="12">
								<h3 className="text-center title pt-2">
									Más Info
								</h3>
							</Col>
							<Col md="6">
								<Card
									className="text-white"
									style={{
										background:
											"linear-gradient(87deg,#f5365c 0,#f56036 100%)",
										borderRadius: ".35rem",
									}}
								>
									<CardBody>
										<h5 className="title pt-0">
											¿Cómo se escribe en japonés?
										</h5>
										<div className="progress-container progress-info pb-4">
											<Progress
												max="100"
												value="100"
											></Progress>
										</div>
										<p>
											Todos los caractéres se componen por
											uno o más <strong>trazos</strong>,
											ésto hace que el orden de su
											escritura importe{" "}
											<strong>mucho</strong>, ya que si se
											escriben en un orden incorrecto es
											posible que no quede exactamente
											igual al original. <br /> Para el
											99% de los casos (sean{" "}
											<strong>Kanjis</strong>,{" "}
											<strong>Hiraganas</strong> o{" "}
											<strong>Katakanas</strong>) existe
											la regla de que siempre se inicia
											desde{" "}
											<strong>
												arriba a la izquierda
											</strong>
											del caractér, y se dibujan los
											trazos llendo de{" "}
											<strong>izquierda a derecha</strong>
											y luego{" "}
											<strong>de arriba a abajo</strong>.
										</p>
									</CardBody>
								</Card>
							</Col>
							<Col md="6">
								<Card
									style={{
										background: "#1171ef",
										borderRadius: ".5rem",
									}}
									className="text-white"
								>
									<CardBody>
										<h5 className="title pt-0">
											Pronunciación
										</h5>
										<div className="progress-container progress-success pb-4">
											<Progress
												max="100"
												value="100"
											></Progress>
										</div>
										<p>
											La pronunciación es sumamente
											similar al Español, con algunas
											<strong>adiciones</strong>. <br />{" "}
											En el caso de los sonidos con{" "}
											<strong>H</strong> (は、ひ、へ、ほ),
											se pronuncian usando lo que en
											español es el sonido de la{" "}
											<strong>J</strong>, quedando como
											"ja", "ji", "jo", "je" (haciendo el
											sonido de la <strong>J</strong>,{" "}
											<strong>
												lo más suave posible
											</strong>
											).
										</p>

										<p>
											Pasando a los sonidos con{" "}
											<strong>Y</strong>, (や、ゆ、よ),
											éstos se pronuncian como si tuvieran
											una <strong>I</strong> adelante,
											quedando parecido a decir "ia",
											"iu", "io".
										</p>
										<p>
											Generalmente es muy común ver que el
											hiragana す (su) se pronuncia sin la{" "}
											<strong>U</strong>, solo como una{" "}
											<strong>S</strong>. Ésto pasa mucho
											en las terminaciones です de las
											frases, o ます de verbos, por
											ejemplo.
										</p>
										<p>
											Y por último, pero no menos
											importante, queda じ, cuya
											pronunciación sonará más parecido a
											como suena la letra{" "}
											<strong>J</strong> en inglés, por
											ejemplo, en la palabra "
											<strong>Jenifer</strong>".
										</p>
									</CardBody>
								</Card>
							</Col>
							<Col md="6">
								<Card
									style={{
										background:
											"linear-gradient(87deg,#172b4d 0,#1a174d 100%)",
										borderRadius: ".5rem",
									}}
									className="text-white"
								>
									<CardBody>
										<h5 className="title pt-0">
											¿Por qué hay algunos espacios en
											blanco?
										</h5>
										<div className="progress-container progress-info pb-4">
											<Progress
												max="100"
												value="100"
											></Progress>
										</div>
										<p>
											Las tablas, tanto de Hiragana como
											de Katakana, incluyen{" "}
											<strong>todos</strong> los sonidos "
											<strong>disponibles</strong>" en el
											idioma Japonés, por ende si un
											espacio está en blanco, es por que
											ese sonido no existe como tal
											(aunque realmente con los Katakanas
											se pueden "<strong>crear</strong>"
											sonidos nuevos, siguiendo ciertas
											reglas).
										</p>
									</CardBody>
								</Card>
							</Col>
							<Col md="6">
								<Card
									style={{
										background:
											"linear-gradient(87deg,#fb6340 0,#fbb140 100%)",
										borderRadius: ".5rem",
									}}
									className="text-white"
								>
									<CardBody>
										<h5 className="title pt-0">
											Excepciones
										</h5>
										<div className="progress-container progress-info pb-4">
											<Progress
												max="100"
												value="100"
											></Progress>
										</div>
										<p>
											A éstas alturas te estarás
											preguntando "
											<strong>Qué pasó con ふ?</strong>",
											y lo que pasa es que es una
											excepción, ya que en lugar de leerse
											como "<strong>hu</strong>" igual que
											los demas en su fila, se lee más
											parecido a "<strong>fu</strong>"
											haciendo la{" "}
											<strong id="F-chat">F</strong> lo
											más suave posible.
										</p>
										<UncontrolledTooltip
											placement="top"
											target="F-chat"
											delay={0}
										>
											Easter egg: comparte "F en el chat"
											en alguna red social
										</UncontrolledTooltip>
										<p>
											El idioma japonés es uno basado en
											<strong>sílabas</strong>, de ésta
											forma, toda consonante debe estar
											acompañada por almenos una vocal,
											siendo la ん es la única{" "}
											<strong>excepción</strong> a ésta
											regla, ya que se pronuncia tal cual
											con el sonido de la letra "N".
										</p>
									</CardBody>
								</Card>
							</Col>

							<h2 className="text-center col-lg-12 title">
								Continuar Viendo
							</h2>

							<Secciones katakana={true} kanjis={true} />

							<Col md="12" className="text-center mb-4">
								<a
									href="#pablo"
									onClick={(e) => this.scrollTo(e, "top")}
									className="text-info title"
									style={{
										fontSize: "1.2rem",
										lineHeight: "1.61rem",
									}}
								>
									<i className="fas fa-3x fa-chevron-up"></i>
								</a>
							</Col>
						</Row>
					</section>
				</div>
			</React.Fragment>
		);
	}
}

export default HiraganaView;
