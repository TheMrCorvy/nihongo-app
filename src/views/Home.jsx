import React from "react";

import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";

import Parallax from "components/Sections/Parallax";

import BgImage from "../assets/img/bg-image.png";

import Secciones from "components/Sections/Secciones";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		document.body.classList.add("landing-page");
		document.body.classList.add("sidebar-collapse");
		document.documentElement.classList.remove("nav-open");
	}

	componentWillUnmount() {
		document.body.classList.remove("landing-page");
		document.body.classList.remove("sidebar-collapse");
	}

	render() {
		return (
			<React.Fragment>
				<div className="wrapper">
					<Parallax BackgroundImage={BgImage} />
					<div className="section section-about-us pt-0">
						<Container>
							<Row>
								<Col
									className="ml-auto mr-auto text-center"
									md="8"
								>
									<h2 className="title" id="nihongo-title">
										日本語
									</h2>
									<UncontrolledTooltip
										placement="top"
										target="nihongo-title"
										delay={0}
									>
										にほんご <br /> (Nihongo)
									</UncontrolledTooltip>
									<p>
										Hola, gracias por instalar ésta app.
										Aquí encontrarás desde ayudas básicas
										del idioma <strong>Japonés</strong> como
										pueden ser tanto los silabarios de
										<strong> Hiragana</strong> y
										<strong> Katakana</strong>, pasando por
										algunos
										<strong> Kanjis</strong> de uso
										cotidiano, y también tendrás disponible
										un poco de
										<strong> vocabulario básico</strong>,
										así como una guía de uso para las{" "}
										<strong>partículas</strong>
										. <br /> Puedes usar esta app como tu
										machete para repasar cuando estés
										comenzando a estudiar este fantástico
										idioma.
									</p>
								</Col>
							</Row>
							<section className="section">
								<Row className="justify-content-center">
									<h3 className="title text-center col-lg-12">
										Consejos de Uso
									</h3>
									<h5>Lecturas</h5>
									<p className="col-lg-12 text-center">
										Dentro de toda la aplicación podrás
										tocar sobre los caractéres que no
										conozcas para saber como se leen. <br />
										<br />
										Ejemplo:{" "}
										<span
											id="ejemplo"
											className="text-danger"
										>
											漢字
										</span>
									</p>
									<UncontrolledTooltip
										placement="top"
										target="ejemplo"
										delay={0}
									>
										かんじ <br /> (kanji)
									</UncontrolledTooltip>
									<h5 className="mt-5">Zoom</h5>
									<p className="col-lg-12 text-center">
										Si sientes que el tamaño de la letra es
										muy pequeño, siempre puedes hacer zoom
										para agrandar el contenido.
									</p>

									<img
										className="img-thumbnail"
										alt="../assets/img/zoom-gesture.png"
										src="https://icons.iconarchive.com/icons/iconsmind/outline/512/Zoom-Gesture-icon.png"
										style={{
											maxWidth: "30%",
											width: "10rem",
											border: "none",
										}}
									/>
									<Secciones all={true} />
								</Row>
							</section>
						</Container>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Home;
