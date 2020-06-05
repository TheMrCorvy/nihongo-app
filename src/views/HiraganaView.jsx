import React from "react";
import {
	Row,
	Col,
	UncontrolledTooltip,
	Card,
	CardBody,
	Progress,
} from "reactstrap";
import TablasHiragana from "components/Sections/TablasHiragana";
import { Link } from "react-router-dom";

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

	scrollToInfo = () => {
		document.getElementById("info").scrollIntoView({
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
					className="wrapper"
					style={{
						background: "#f2f2f2",
						borderRadius: "20px 20px 0 0",
					}}
				>
					<i
						className="fas fa-info-circle fa-2x text-info"
						style={{
							position: "absolute",
							top: "20px",
							right: "20px",
							zIndex: 10,
							cursor: "pointer",
						}}
						onClick={() => {
							this.scrollToInfo();
						}}
					></i>
					<div className="container-fluid py-3">
						<Row className="justify-content-around">
							<Col md="12">
								<h1 id="hiragana-title" className="text-center">
									<u>ひらがな</u>
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
					</div>

					<section
						className="container-fluid mb-5 py-3"
						id="info"
						style={{ background: "#f2f2f2" }}
					>
						<Row>
							<Col md="12">
								<h3 className="text-center">
									<u>Más Info</u>
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
											uno o más trazos, ésto hace que el
											orden de su escritura importe mucho,
											ya que si se escriben en un orden
											incorrecto es posible que no quede
											exactamente igual al original.{" "}
											<br /> Para el 99% de los casos
											(sean Kanjis, Hiraganas o Katakanas)
											existe la regla de que siempre se
											inicia desde arriba a la izquierda
											del caractér, y se dibujan los
											trazos llendo de izquierda a derecha
											y luego de arriba a abajo.
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
											similar al español, con algunas
											adiciones. <br /> En el caso de los
											sonidos con <strong>H</strong>{" "}
											(は、ひ、へ、ほ), se pronuncian
											usando lo que en español es el
											sonido de la <strong>J</strong>,{" "}
											quedando como "ja", "ji", "jo", "je"
											(haciendo el sonido de la{" "}
											<strong>J</strong>, lo más suave
											posible).{" "}
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
											ejemplo, en la palabra "Jenifer".
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
											de Katakana, incluyen todos los
											sonidos "disponibles" en el idioma
											japonés, por ende si un espacio está
											en blanco, es por que ese sonido no
											existe como tal (aunque realmente
											con los Katakanas se pueden "crear"
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
											preguntando "Qué pasó con ふ?", y lo
											que pasa es que es una excepción, ya
											que en lugar de leerse como "hu"
											igual que los demas en su fila, se
											lee más parecido a "fu" haciendo la{" "}
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
											sílabas, de ésta forma, toda
											consonante debe estar acompañada por
											almenos una vocal, siendo la ん es
											la única excepción a ésta regla, ya
											que se pronuncia tal cual con el
											sonido de la letra "N".
										</p>
									</CardBody>
								</Card>
							</Col>

							<h2 className="text-center col-lg-12 mt-5">
								Continuar Viendo
							</h2>

							<Col md="6">
								<Link
									to="/katakana"
									onClick={() => {
										this.scrollTop();
									}}
								>
									<Card
										style={{
											borderRadius: "10px",
											boxShadow:
												"0px 5px 25px 0px rgba(94, 114, 228, 0.6)",
											background:
												"linear-gradient(87deg,#5e72e4 0,#825ee4 100%)",
										}}
									>
										<CardBody className="text-white text-capitalize">
											<span className="title">
												Katakana　カタカナ
											</span>
											<i className="fas fa-chevron-right pl-3"></i>
											<br />
											<small>
												¿Cómo se escribe en Japonés?
											</small>
											<i
												className="fas fa-3x fa-flag"
												style={{
													position: "absolute",
													top: 20,
													right: 10,
													opacity: 0.7,
												}}
											></i>
										</CardBody>
									</Card>
								</Link>
							</Col>
							<Col md="6">
								<Link
									to="/kanji"
									onClick={() => {
										this.scrollTop();
									}}
								>
									<Card
										style={{
											borderRadius: "10px",
											boxShadow:
												"0px 5px 25px 0px rgba(255, 54, 54, 0.6)",
											background:
												"linear-gradient(87deg,#f5365c 0,#f56036 100%)",
										}}
									>
										<CardBody className="text-white text-capitalize">
											<span className="title">
												Kanjis　漢字
											</span>
											<i className="fas fa-chevron-right pl-3"></i>
											<br />
											<small>
												¿Cómo se escribe en Japonés?
											</small>
											<i
												className="fas fa-3x fa-language"
												style={{
													position: "absolute",
													top: 20,
													right: 10,
													opacity: 0.7,
												}}
											></i>
										</CardBody>
									</Card>
								</Link>
							</Col>
						</Row>
					</section>
				</div>
			</React.Fragment>
		);
	}
}

export default HiraganaView;
