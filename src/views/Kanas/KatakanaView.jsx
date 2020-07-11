import React from "react";
import {
	Row,
	Col,
	UncontrolledTooltip,
	Card,
	CardBody,
	Progress,
} from "reactstrap";

import TablasKatakana from "components/Sections/Kanas/TablasKatakana";

import TsuChiquita from "components/Sections/TsuChiquita";
import SonidosEspeciales from "components/Sections/SonidosEspeciales";
import Secciones from "components/Sections/Secciones";
import BackToTop from "components/Sections/BackToTop";

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
						className="container-fluid mb-5 py-3"
						id="info"
						style={{
							background: "#f2f2f2",
						}}
					>
						<Row className="justify-content-around">
							<Col md="12">
								<h3 className="text-center title pt-2">
									Más Info
								</h3>
							</Col>
							<Col md="6">
								<Card
									className="text-white card-plain"
									style={{
										background:
											"linear-gradient(87deg,#f5365c 0,#f56036 100%)",
										borderRadius: "10px",
									}}
								>
									<CardBody className="px-3">
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
											se escriben en un orden{" "}
											<strong>incorrecto</strong> es
											posible que no quede exactamente
											igual al original. <br /> Para el
											99% de los casos (sean Kanjis,
											Hiraganas o Katakanas) existe la
											regla de que siempre se inicia desde{" "}
											<strong>
												arriba a la izquierda
											</strong>{" "}
											del caractér, y se dibujan los
											trazos llendo{" "}
											<strong>
												de izquierda a derecha
											</strong>{" "}
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
										borderRadius: "10px",
									}}
									className="text-white card-plain"
								>
									<CardBody className="px-3">
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
										borderRadius: "10px",
									}}
									className="text-white card-plain"
								>
									<CardBody className="px-3">
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

							<Secciones hiragana={true} kanjis={true} />

							<BackToTop />
						</Row>
					</section>
				</div>
			</React.Fragment>
		);
	}
}

export default HiraganaView;
