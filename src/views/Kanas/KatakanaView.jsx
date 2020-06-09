import React from "react";
import {
	Row,
	Col,
	UncontrolledTooltip,
	Card,
	CardBody,
	Progress,
} from "reactstrap";
import { Link } from "react-router-dom";

import TablasKatakana from "components/Sections/Kanas/TablasKatakana";

import TsuChiquita from "components/Sections/TsuChiquita";
import SonidosEspeciales from "components/Sections/SonidosEspeciales";

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
					id="top"
					style={{
						background: "#f2f2f2",
						borderRadius: "20px 20px 0 0",
					}}
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
						<Row>
							<Col md="12">
								<h1 id="katakana-title" className="text-center">
									カタカナ
								</h1>
								<UncontrolledTooltip
									placement="bottom"
									target="katakana-title"
									delay={0}
								>
									(Katakana)
								</UncontrolledTooltip>
							</Col>
							<TablasKatakana />
						</Row>
						<Row className="mt-4">
							<TsuChiquita tabla="katakana" />
							<SonidosEspeciales tabla="katakana" />
						</Row>
					</div>

					<section
						className="container-fluid mb-5 py-3 bg-white"
						id="info"
					>
						<Row className="justify-content-around">
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
											¿Cómo se escriben los Katakana?
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
											escritura importe mucho, ya que si
											se escriben en un orden
											<strong>incorrecto</strong> es
											posible que no quede exactamente
											igual al original. <br /> Para el
											99% de los casos (sean Kanjis,
											Hiraganas o Katakanas) existe la
											regla de que siempre se inicia desde{" "}
											<strong>
												arriba a la izquierda
											</strong>
											del caractér, y se dibujan los
											trazos llendo{" "}
											<strong>
												de izquierda a derecha
											</strong>
											y luego{" "}
											<strong>de arriba a abajo</strong>.
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
											sonidos "
											<strong>disponibles</strong>" en el
											idioma Japonés, por ende si un
											espacio está en blanco, es por que
											ese sonido no existe como tal, pero
											al escribir con{" "}
											<strong>Katakana</strong> existe la
											libertad de "<strong>crear</strong>"
											tus propios sonidos. <br /> Para
											hacerlo solo hace falta escribir un
											katakana en tamaño normal y enfrente
											una <strong>vocal</strong>{" "}
											cualquiera, pero en un tamaño{" "}
											<strong>más pequeño</strong> (como
											en los sonidos diptongales).
										</p>
										<p>
											También un dato a tener en cuenta es
											que al escribir un{" "}
											<strong>ー</strong> se interpreta
											como una "extención" al sonido
											anterior. Por ejemplo ビール
											quedaría como "biiru" con un sonido{" "}
											<strong>I</strong> más largo de lo
											normal, como si se pronunciara dos
											veces.
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
											¿Cuándo se usan los Katakana?
										</h5>
										<div className="progress-container progress-info pb-4">
											<Progress
												max="100"
												value="100"
											></Progress>
										</div>
										<p>
											Los Katakana se usan mayormente para
											escribir sonidos o palabras{" "}
											<strong>extranjeras</strong>, por
											ejemplo ビール para escribir "
											<strong>cerveza</strong>" ya que la
											palabra como tal viene del inglés
											"beer".
										</p>
										<p>
											También un uso frecuente de los
											Katakana es en las{" "}
											<strong>onomatopeyas</strong>.
										</p>
									</CardBody>
								</Card>
							</Col>

							<h2 className="text-center col-lg-12 mt-5 title pt-2">
								Continuar Viendo
							</h2>
							<Col md="6">
								<Link
									to="/hiragana"
									onClick={() => {
										this.scrollTop();
									}}
								>
									<Card
										style={{
											borderRadius: "10px",
											boxShadow:
												"0px 5px 25px 0px rgba(44, 168, 255, 0.6)",
											background:
												"linear-gradient(87deg,#11cdef 0,#1171ef 100%)",
										}}
									>
										<CardBody className="text-white text-capitalize">
											<span className="title">
												Hiragana　ひらがな
											</span>
											<i className="fas fa-chevron-right pl-3"></i>
											<br />
											<small>
												¿Cómo se escribe en Japonés?
											</small>
											<i
												className="fas fa-3x fa-paint-brush"
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
