import React from "react";
import {
	Row,
	Col,
	UncontrolledTooltip,
	Card,
	CardBody,
	Progress,
} from "reactstrap";
import TablasKatakana from "components/Sections/TablasKatakana";
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
						<Row>
							<Col md="12">
								<h1 id="katakana-title" className="text-center">
									<u>カタカナ</u>
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
					</div>

					<section
						className="container-fluid mb-5 py-3"
						id="info"
						style={{ background: "#f2f2f2" }}
					>
						<Row className="justify-content-around">
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
											existe como tal, pero al escribir
											con Katakana existe la libertad de
											"crear" tus propios sonidos. Para
											hacerlo solo hace falta escribir un
											katakana en tamaño normal y enfrente
											una bocal cualquiera, pero en un
											tamaño más pequeño (como en los
											sonidos diptongales).
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
											escribir sonidos o palabras
											extranjeras, por ejemplo ビール para
											escribir "cerveza" ya que la palabra
											como tal viene del inglés "beer".
										</p>
										<p>
											También un uso frecuente de los
											Katakana es en las onomatopeyas.
										</p>
									</CardBody>
								</Card>
							</Col>

							<h2 className="text-center col-lg-12 mt-5">
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
						</Row>
					</section>
				</div>
			</React.Fragment>
		);
	}
}

export default HiraganaView;
