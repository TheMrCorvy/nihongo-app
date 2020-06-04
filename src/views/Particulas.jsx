import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

class Particulas extends React.Component {
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

	scrollTo = (e, particula) => {
		e.preventDefault();
		document.getElementById(particula).scrollIntoView({
			block: "start",
			behavior: "smooth",
		});
	};

	render() {
		return (
			<React.Fragment>
				<Container className="mb-5">
					<h1 className="text-center title h3">
						Guía para Partículas
					</h1>
					<Row className="justify-content-around">
						<Col md="12" className="px-4 pb-4">
							<p>
								Las <strong>Partículas</strong>, son afijos o
								palabras cortas que modifican la ultima palabra
								u oración antes de las mismas (sean sustantivos,
								verbos, adjetivos, etc.). Tienen varias
								funciones, como pueden ser indicar si una frase
								es una pregunta o una afirmación, indicar el
								estado del objeto de la oración, o su ubicación
								con respecto al interlocutor, entre otras.
							</p>
						</Col>
						<Col
							md="12"
							className="container row text-center justify-content-around px-5 mb-5"
						>
							<h4 className="col-lg-12">Accesos Directos</h4>

							<a
								href="#pablo"
								onClick={(e) => this.scrollTo(e, "wa")}
								className="text-info title"
								style={{
									fontSize: "1.2rem",
									lineHeight: "1.61rem",
								}}
							>
								は
							</a>
							<a
								href="#pablo"
								onClick={(e) => this.scrollTo(e, "wo")}
								className="text-info title"
								style={{
									fontSize: "1.2rem",
									lineHeight: "1.61rem",
								}}
							>
								を
							</a>
							<a
								href="#pablo"
								onClick={(e) => this.scrollTo(e, "to")}
								className="text-info title"
								style={{
									fontSize: "1.2rem",
									lineHeight: "1.61rem",
								}}
							>
								と
							</a>
							<a
								href="#pablo"
								onClick={(e) => this.scrollTo(e, "ni")}
								className="text-info title"
								style={{
									fontSize: "1.2rem",
									lineHeight: "1.61rem",
								}}
							>
								に
							</a>
							<a
								href="#pablo"
								onClick={(e) => this.scrollTo(e, "he")}
								className="text-info title"
								style={{
									fontSize: "1.2rem",
									lineHeight: "1.61rem",
								}}
							>
								へ
							</a>
							<a
								href="#pablo"
								onClick={(e) => this.scrollTo(e, "ka")}
								className="text-info title"
								style={{
									fontSize: "1.2rem",
									lineHeight: "1.61rem",
								}}
							>
								か
							</a>
							<a
								href="#pablo"
								onClick={(e) => this.scrollTo(e, "ga")}
								className="text-info title"
								style={{
									fontSize: "1.2rem",
									lineHeight: "1.61rem",
								}}
							>
								が
							</a>
							<a
								href="#pablo"
								onClick={(e) => this.scrollTo(e, "ga")}
								className="text-info title"
								style={{
									fontSize: "1.2rem",
									lineHeight: "1.61rem",
								}}
							>
								で
							</a>
						</Col>
						<Col md="12">
							<Card
								className="card-plain bg-white"
								style={{ borderRadius: ".5rem" }}
								id="wa"
							>
								<div
									className="bg-info text-white text-center justify-content-center"
									style={{
										borderTopLeftRadius: ".5rem",
										borderBottomRightRadius: ".5rem",
										height: "40px",
										width: "40px",
										position: "absolute",
										top: 0,
										left: 0,
									}}
								>
									<p className="mb-0 h2">は</p>
								</div>
								<h4 className="text-right px-4 pt-2 float-right my-0">
									Partícula <strong>Ha</strong>
								</h4>
								<CardBody className="mt-5">
									<div
										style={{ width: "100%" }}
										className="row justify-content-between mx-0 px-3"
									>
										<p className="h5">Pronunciación:</p>

										<p className="h5">
											<strong>Wa</strong>
										</p>
									</div>
									<h4 className="text-center">
										¿Qué y cómo conecta?
									</h4>
									<p className="pl-3">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quod tenetur dolore
										praesentium ipsam culpa similique
										laboriosam eaque dicta eum, rerum
										blanditiis, eius sunt odio accusantium
										consequatur quisquam molestiae. Dolor,
										temporibus.
									</p>
									<h4 className="text-center">
										¿Cuándo se usa?
									</h4>
									<p className="pl-3">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quod tenetur dolore
										praesentium ipsam culpa similique
										laboriosam eaque dicta eum, rerum
										blanditiis, eius sunt odio accusantium
										consequatur quisquam molestiae. Dolor,
										temporibus.
									</p>
									<h4 className="text-center">Ejemplos</h4>
									<p className="pl-3">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quod tenetur dolore
										praesentium ipsam culpa similique
										laboriosam eaque dicta eum, rerum
										blanditiis, eius sunt odio accusantium
										consequatur quisquam molestiae. Dolor,
										temporibus.
									</p>
								</CardBody>
							</Card>
						</Col>
						<Col md="12">
							<Card
								className="card-plain bg-white"
								style={{ borderRadius: ".5rem" }}
								id="wo"
							>
								<div
									className="bg-info text-white text-center justify-content-center"
									style={{
										borderTopLeftRadius: ".5rem",
										borderBottomRightRadius: ".5rem",
										height: "40px",
										width: "40px",
										position: "absolute",
										top: 0,
										left: 0,
									}}
								>
									<p className="mb-0 h2">を</p>
								</div>
								<h4 className="text-right px-4 pt-2 float-right my-0">
									Partícula <strong>Wo</strong>
								</h4>
								<CardBody className="mt-5">
									<div
										style={{ width: "100%" }}
										className="row justify-content-between mx-0 px-3"
									>
										<p className="h5">Pronunciación:</p>

										<p className="h5">
											<strong>O / Wo</strong>
										</p>
									</div>
									<h4 className="text-center">
										¿Qué y cómo conecta?
									</h4>
									<p className="pl-3">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quod tenetur dolore
										praesentium ipsam culpa similique
										laboriosam eaque dicta eum, rerum
										blanditiis, eius sunt odio accusantium
										consequatur quisquam molestiae. Dolor,
										temporibus.
									</p>
									<h4 className="text-center">
										¿Cuándo se usa?
									</h4>
									<p className="pl-3">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quod tenetur dolore
										praesentium ipsam culpa similique
										laboriosam eaque dicta eum, rerum
										blanditiis, eius sunt odio accusantium
										consequatur quisquam molestiae. Dolor,
										temporibus.
									</p>
									<h4 className="text-center">Ejemplos</h4>
									<p className="pl-3">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quod tenetur dolore
										praesentium ipsam culpa similique
										laboriosam eaque dicta eum, rerum
										blanditiis, eius sunt odio accusantium
										consequatur quisquam molestiae. Dolor,
										temporibus.
									</p>
								</CardBody>
							</Card>
						</Col>
						<Col md="12">
							<Card
								className="card-plain bg-white"
								style={{ borderRadius: ".5rem" }}
								id="to"
							>
								<div
									className="bg-info text-white text-center justify-content-center"
									style={{
										borderTopLeftRadius: ".5rem",
										borderBottomRightRadius: ".5rem",
										height: "40px",
										width: "40px",
										position: "absolute",
										top: 0,
										left: 0,
									}}
								>
									<p className="mb-0 h2">と</p>
								</div>
								<h4 className="text-right px-4 pt-2 float-right my-0">
									Partícula <strong>To</strong>
								</h4>
								<CardBody className="mt-5">
									<div
										style={{ width: "100%" }}
										className="row justify-content-between mx-0 px-3"
									>
										<p className="h5">Pronunciación:</p>

										<p className="h5">
											<strong>To</strong>
										</p>
									</div>
									<h4 className="text-center">
										¿Qué y cómo conecta?
									</h4>
									<p className="pl-3">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quod tenetur dolore
										praesentium ipsam culpa similique
										laboriosam eaque dicta eum, rerum
										blanditiis, eius sunt odio accusantium
										consequatur quisquam molestiae. Dolor,
										temporibus.
									</p>
									<h4 className="text-center">
										¿Cuándo se usa?
									</h4>
									<p className="pl-3">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quod tenetur dolore
										praesentium ipsam culpa similique
										laboriosam eaque dicta eum, rerum
										blanditiis, eius sunt odio accusantium
										consequatur quisquam molestiae. Dolor,
										temporibus.
									</p>
									<h4 className="text-center">Ejemplos</h4>
									<p className="pl-3">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quod tenetur dolore
										praesentium ipsam culpa similique
										laboriosam eaque dicta eum, rerum
										blanditiis, eius sunt odio accusantium
										consequatur quisquam molestiae. Dolor,
										temporibus.
									</p>
								</CardBody>
							</Card>
						</Col>
						<Col md="12">
							<Card
								className="card-plain bg-white"
								style={{ borderRadius: ".5rem" }}
								id="ni"
							>
								<div
									className="bg-info text-white text-center justify-content-center"
									style={{
										borderTopLeftRadius: ".5rem",
										borderBottomRightRadius: ".5rem",
										height: "40px",
										width: "40px",
										position: "absolute",
										top: 0,
										left: 0,
									}}
								>
									<p className="mb-0 h2">に</p>
								</div>
								<h4 className="text-right px-4 pt-2 float-right my-0">
									Partícula <strong>Ni</strong>
								</h4>
								<CardBody className="mt-5">
									<div
										style={{ width: "100%" }}
										className="row justify-content-between mx-0 px-3"
									>
										<p className="h5">Pronunciación:</p>

										<p className="h5">
											<strong>Ni</strong>
										</p>
									</div>
									<h4 className="text-center">
										¿Qué y cómo conecta?
									</h4>
									<p className="pl-3">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quod tenetur dolore
										praesentium ipsam culpa similique
										laboriosam eaque dicta eum, rerum
										blanditiis, eius sunt odio accusantium
										consequatur quisquam molestiae. Dolor,
										temporibus.
									</p>
									<h4 className="text-center">
										¿Cuándo se usa?
									</h4>
									<p className="pl-3">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quod tenetur dolore
										praesentium ipsam culpa similique
										laboriosam eaque dicta eum, rerum
										blanditiis, eius sunt odio accusantium
										consequatur quisquam molestiae. Dolor,
										temporibus.
									</p>
									<h4 className="text-center">Ejemplos</h4>
									<p className="pl-3">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quod tenetur dolore
										praesentium ipsam culpa similique
										laboriosam eaque dicta eum, rerum
										blanditiis, eius sunt odio accusantium
										consequatur quisquam molestiae. Dolor,
										temporibus.
									</p>
								</CardBody>
							</Card>
						</Col>
						<Col md="12">
							<Card
								className="card-plain bg-white"
								style={{ borderRadius: ".5rem" }}
								id="he"
							>
								<div
									className="bg-info text-white text-center justify-content-center"
									style={{
										borderTopLeftRadius: ".5rem",
										borderBottomRightRadius: ".5rem",
										height: "40px",
										width: "40px",
										position: "absolute",
										top: 0,
										left: 0,
									}}
								>
									<p className="mb-0 h2">へ</p>
								</div>
								<h4 className="text-right px-4 pt-2 float-right my-0">
									Partícula <strong>He</strong>
								</h4>
								<CardBody className="mt-5">
									<div
										style={{ width: "100%" }}
										className="row justify-content-between mx-0 px-3"
									>
										<p className="h5">Pronunciación:</p>

										<p className="h5">
											<strong>E</strong>
										</p>
									</div>
									<h4 className="text-center">
										¿Qué y cómo conecta?
									</h4>
									<p className="pl-3">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quod tenetur dolore
										praesentium ipsam culpa similique
										laboriosam eaque dicta eum, rerum
										blanditiis, eius sunt odio accusantium
										consequatur quisquam molestiae. Dolor,
										temporibus.
									</p>
									<h4 className="text-center">
										¿Cuándo se usa?
									</h4>
									<p className="pl-3">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quod tenetur dolore
										praesentium ipsam culpa similique
										laboriosam eaque dicta eum, rerum
										blanditiis, eius sunt odio accusantium
										consequatur quisquam molestiae. Dolor,
										temporibus.
									</p>
									<h4 className="text-center">Ejemplos</h4>
									<p className="pl-3">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quod tenetur dolore
										praesentium ipsam culpa similique
										laboriosam eaque dicta eum, rerum
										blanditiis, eius sunt odio accusantium
										consequatur quisquam molestiae. Dolor,
										temporibus.
									</p>
								</CardBody>
							</Card>
						</Col>
						<Col md="12">
							<Card
								className="card-plain bg-white"
								style={{ borderRadius: ".5rem" }}
								id="ka"
							>
								<div
									className="bg-info text-white text-center justify-content-center"
									style={{
										borderTopLeftRadius: ".5rem",
										borderBottomRightRadius: ".5rem",
										height: "40px",
										width: "40px",
										position: "absolute",
										top: 0,
										left: 0,
									}}
								>
									<p className="mb-0 h2">か</p>
								</div>
								<h4 className="text-right px-4 pt-2 float-right my-0">
									Partícula <strong>Ka</strong>
								</h4>
								<CardBody className="mt-5">
									<div
										style={{ width: "100%" }}
										className="row justify-content-between mx-0 px-3"
									>
										<p className="h5">Pronunciación:</p>

										<p className="h5">
											<strong>Ka</strong>
										</p>
									</div>
									<h4 className="text-center">
										¿Qué y cómo conecta?
									</h4>
									<p className="pl-3">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quod tenetur dolore
										praesentium ipsam culpa similique
										laboriosam eaque dicta eum, rerum
										blanditiis, eius sunt odio accusantium
										consequatur quisquam molestiae. Dolor,
										temporibus.
									</p>
									<h4 className="text-center">
										¿Cuándo se usa?
									</h4>
									<p className="pl-3">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quod tenetur dolore
										praesentium ipsam culpa similique
										laboriosam eaque dicta eum, rerum
										blanditiis, eius sunt odio accusantium
										consequatur quisquam molestiae. Dolor,
										temporibus.
									</p>
									<h4 className="text-center">Ejemplos</h4>
									<p className="pl-3">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quod tenetur dolore
										praesentium ipsam culpa similique
										laboriosam eaque dicta eum, rerum
										blanditiis, eius sunt odio accusantium
										consequatur quisquam molestiae. Dolor,
										temporibus.
									</p>
								</CardBody>
							</Card>
						</Col>
						<Col md="12">
							<Card
								className="card-plain bg-white"
								style={{ borderRadius: ".5rem" }}
								id="ga"
							>
								<div
									className="bg-info text-white text-center justify-content-center"
									style={{
										borderTopLeftRadius: ".5rem",
										borderBottomRightRadius: ".5rem",
										height: "40px",
										width: "40px",
										position: "absolute",
										top: 0,
										left: 0,
									}}
								>
									<p className="mb-0 h2">が</p>
								</div>
								<h4 className="text-right px-4 pt-2 float-right my-0">
									Partícula <strong>Ga</strong>
								</h4>
								<CardBody className="mt-5">
									<div
										style={{ width: "100%" }}
										className="row justify-content-between mx-0 px-3"
									>
										<p className="h5">Pronunciación:</p>

										<p className="h5">
											<strong>Ga</strong>
										</p>
									</div>
									<h4 className="text-center">
										¿Qué y cómo conecta?
									</h4>
									<p className="pl-3">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quod tenetur dolore
										praesentium ipsam culpa similique
										laboriosam eaque dicta eum, rerum
										blanditiis, eius sunt odio accusantium
										consequatur quisquam molestiae. Dolor,
										temporibus.
									</p>
									<h4 className="text-center">
										¿Cuándo se usa?
									</h4>
									<p className="pl-3">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quod tenetur dolore
										praesentium ipsam culpa similique
										laboriosam eaque dicta eum, rerum
										blanditiis, eius sunt odio accusantium
										consequatur quisquam molestiae. Dolor,
										temporibus.
									</p>
									<h4 className="text-center">Ejemplos</h4>
									<p className="pl-3">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quod tenetur dolore
										praesentium ipsam culpa similique
										laboriosam eaque dicta eum, rerum
										blanditiis, eius sunt odio accusantium
										consequatur quisquam molestiae. Dolor,
										temporibus.
									</p>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</React.Fragment>
		);
	}
}
export default Particulas;
