import React from "react";
import { Row, Col, UncontrolledTooltip, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

export default class UnirAdjetivos extends React.Component {
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
		if (seccion === "top") {
			window.scrollTo(0, 0);
		} else {
			e.preventDefault();
			document.getElementById(seccion).scrollIntoView({
				block: "start",
				behavior: "smooth",
			});
		}
	};

	render() {
		return (
			<React.Fragment>
				<div
					className="wrapper container-fluid mb-5"
					style={{
						background: "#f2f2f2",
						borderRadius: "20px 20px 0 0",
					}}
				>
					<h1 className="text-center title h3">Unir Adjetivos</h1>
					<Row className="justify-content-around">
						<Col md="12">
							<p className="text-center">
								A diferencia del Español, en Japonés no existe
								un equivalente exacto de nuestro "
								<strong>Y</strong>" para unir las palabras, ésto
								hace que los{" "}
								<strong className="text-warning">
									Sustantivos
								</strong>
								,{" "}
								<strong className="text-success">Verbos</strong>{" "}
								y{" "}
								<strong className="text-primary">
									Adjetivos
								</strong>
								, se unan de forma distinta cada uno.
							</p>
						</Col>
						<Col md="12">
							<h5 className="text-center mt-5 mb-4">
								¿Cómo se Unen las Palabras en Japonés?
							</h5>
							<ul className="text-center pr-4">
								<li>
									<p>
										Por un lado, para unir los{" "}
										<strong className="text-warning">
											Sustantivos
										</strong>{" "}
										estaremos usando la partícula「と」(to),
										y será exactamente lo mísmo que decir en
										Español "<strong>Y</strong>". Visita la
										sección de{" "}
										<Link
											to="/particulas"
											onClick={(e) => {
												this.scrollTo(e, "top");
											}}
										>
											<strong className="text-info">
												Partículas
												<i className="fas fa-chevron-right pl-2"></i>
											</strong>
										</Link>{" "}
										para más info.
									</p>
								</li>
								<li>
									<p>
										En segunda instancia están los{" "}
										<strong className="text-success">
											Verbos
										</strong>
										. Para unir los verbos se usa la
										conjugación
										<span id="tekei">
											「て形 - てけい」
										</span>
										, visita la seccion de{" "}
										<Link
											to="/formas-kei/te"
											onClick={(e) => {
												this.scrollTo(e, "top");
											}}
										>
											<strong className="text-info">
												Forma て形
												<i className="fas fa-chevron-right pl-2"></i>
											</strong>
										</Link>{" "}
										para más info.
									</p>
									<UncontrolledTooltip
										placement="top"
										target="tekei"
										delay={0}
									>
										(tekei)
									</UncontrolledTooltip>
								</li>
								<li>
									<p>
										Y por último, en ésta sección estaremos
										viendo las reglas para unir a los{" "}
										<strong className="text-primary">
											Adjetivos
										</strong>{" "}
										según si son{" "}
										<span id="ikeyoushi2">い形ようし</span>{" "}
										o{" "}
										<span id="nakeyoushi2">な形ようし</span>
										.
									</p>
									<UncontrolledTooltip
										placement="top"
										target="nakeyoushi2"
										delay={0}
									>
										(nakeyoushi)
									</UncontrolledTooltip>
									<UncontrolledTooltip
										placement="top"
										target="ikeyoushi2"
										delay={0}
									>
										(ikeyoushi)
									</UncontrolledTooltip>
								</li>
							</ul>
						</Col>
						<Col md="6">
							<Card
								style={{ borderRadius: ".5rem" }}
								className="bg-white card-plain px-3"
							>
								<h3
									className="title text-primary text-center mb-0"
									id="ikeyoushi"
								>
									い形ようし
								</h3>
								<UncontrolledTooltip
									placement="top"
									target="ikeyoushi"
									delay={0}
								>
									いけようし <br /> (Ikeyoushi)
								</UncontrolledTooltip>
								<CardBody className="px-3">
									<p>
										Es realmente sencilla la forma de unir a
										los adjetivos い, solo basta con remover
										la「い」del final, y colocar en su
										lugar「
										<span className="text-info">くて</span>
										」a todos los adjetivos de la oración
										que queramos unir,{" "}
										<strong className="text-danger">
											excepto
										</strong>{" "}
										al último adjetivo de la oración.
									</p>
									<p>
										<strong className="text-danger">
											Nota:
										</strong>{" "}
										Hay una excepción dentro de éste grupo,
										el adjetivo「いい」("bien") pasará a
										ser「よくて」.
									</p>
									<p className="text-center">
										Ejemplo:
										<br />
										"Es espacioso y alto."
										<br />
										<i className="fas fa-long-arrow-alt-down px-2"></i>
										<br />広
										<span className="text-info">くて</span>
										高い
										<span className="text-success">
											です
										</span>{" "}
										<br />
										<i className="fas fa-long-arrow-alt-down px-2"></i>
										<br />
										ひろ
										<span className="text-info">くて</span>
										　たかい
										<span className="text-success">
											です
										</span>
										<br />
										<i className="fas fa-long-arrow-alt-down px-2"></i>
										<br />
										(hiro{" "}
										<strong className="text-info">
											kute
										</strong>{" "}
										takai{" "}
										<strong className="text-success">
											desu
										</strong>
										)
									</p>
								</CardBody>
							</Card>
						</Col>
						<Col md="6">
							<Card
								style={{ borderRadius: ".5rem" }}
								className="bg-white card-plain px-3"
							>
								<h3
									className="title text-success text-center mb-0"
									id="nakeyoushi"
								>
									な形ようし
								</h3>
								<UncontrolledTooltip
									placement="top"
									target="nakeyoushi"
									delay={0}
								>
									なけようし <br /> (Nakeyoushi)
								</UncontrolledTooltip>
								<CardBody className="px-3">
									<p>
										Para el caso de los adjetivos な
										tendremos que seguir unas reglas
										ligeramente distintas.
									</p>
									<p>
										En primer lugar, quitaremos
										el「す」del「
										<span className="text-info">で</span>
										す」al final de los adjetivos. Ésto lo
										haremos para <strong>todos</strong> los
										adjetivos,{" "}
										<strong className="text-danger">
											menos
										</strong>{" "}
										al último.
									</p>
									<p>
										Cuando ya llegamos al último adjetivo, y
										solo nos quedan éste y la palabra que
										estamos modificando, cambiaremos el
										final adjetivo, el「です」y será
										reemplazado por「
										<span className="text-success">な</span>
										」y por último solo resta poner a
										continuación la palabra que estamos
										modificando con los adjetivos.
									</p>
									<p className="text-center">
										Ejemplo:
										<br />
										"Es una persona tranquila y amable."
										<br />
										<i className="fas fa-long-arrow-alt-down px-2"></i>
										<br />
										静か
										<span className="text-info">で</span>
										親切
										<span className="text-success">
											な
										</span>{" "}
										人です
										<br />
										<i className="fas fa-long-arrow-alt-down px-2"></i>
										<br />
										しずか
										<span className="text-info">で</span>
										　しんせつ
										<span className="text-success">な</span>
										　ひとです
										<br />
										<i className="fas fa-long-arrow-alt-down px-2"></i>
										<br />
										(shizuka{" "}
										<strong className="text-info">
											de
										</strong>{" "}
										shinsetsu{" "}
										<strong className="text-success">
											na
										</strong>{" "}
										hito desu)
									</p>
								</CardBody>
							</Card>
						</Col>
						<Col md="12">
							<Card
								className="card-plain bg-white"
								style={{ borderRadius: ".5rem" }}
							>
								<CardBody className="px-3">
									<p className="mb-0">
										Y por último para combinar adjetivos{" "}
										<span className="text-success">な</span>{" "}
										con adjetivos{" "}
										<span className="text-primary">い</span>{" "}
										en una mísma oración, aplicaremos las
										mismas reglas de arriba. Modificamos los
										adjetivos según su tipo{" "}
										<strong className="text-info">
											¡y listo!
										</strong>
										, muy sencillo.
									</p>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</div>
			</React.Fragment>
		);
	}
}
