import React from "react";
import {
	Container,
	Row,
	Col,
	Card,
	CardBody,
	UncontrolledTooltip,
} from "reactstrap";
import TablaHoras from "components/Sections/Horas/TablaHoras";
import TablaMinutos from "components/Sections/Horas/TablaMinutos";

export default class Horas extends React.Component {
	state = {};
	componentDidMount() {
		document.body.classList.add("landing-page");
		document.body.classList.add("sidebar-collapse");
		document.body.style.background = "#000";
		document.body.style.borderRadius = "20px 20px 0 0";
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
				<div
					className="wrapper mb-5"
					style={{
						background: "#f2f2f2",
						borderRadius: "20px 20px 0 0",
					}}
				>
					<Container>
						<h1 className="text-center title h2">
							Las Horas del Día
						</h1>
						<Row className="justify-content-around">
							<Col md="12">
								<Card
									className="card-plain bg-white"
									style={{ borderRadius: ".5rem" }}
								>
									<CardBody className="text-center px-2">
										<h3 className="mt-1 text-success">
											¿Cómo se dicen las Horas?
										</h3>
										<p>
											Igual que en Español dividimos el
											día en <strong>12 horas</strong>,
											A.M. para la mañana y P.M. para la
											tarde, en Japonés se hace más de lo
											mismo, con la diferencia de que se
											usan <strong>Kanjis</strong> para
											hacer ésta distinción.
										</p>
										<p className="text-right">
											Entonces utilizaremos{" "}
											<span id="gozen">
												「午後 (ごぜん)」
											</span>{" "}
											para la mañana, y{" "}
											<span id="gogo">
												「午前 (ごご)」
											</span>{" "}
											para la tarde.
										</p>
										<UncontrolledTooltip
											placement="top"
											target="gogo"
											delay={0}
										>
											(gogo)
										</UncontrolledTooltip>
										<UncontrolledTooltip
											placement="top"
											target="gozen"
											delay={0}
										>
											(gozen)
										</UncontrolledTooltip>
										<h4 className="text-info text-center">
											Hora de aprender los Minutos!
										</h4>
										<p>
											Luego de este chiste de altísima
											calidad podremos continuar, de la
											mísma forma que la forma que para
											indicar si es de mañana o tarde se
											usan <strong>Kanjis</strong>, Kanjis
											usaremos entonces para hablar de las{" "}
											<strong>Horas</strong> y los{" "}
											<strong>Minutos</strong>.
										</p>
										<p>
											「時 (じ)」Son las horas.
											<br />
											Y「分 (ぷん, ふん)」serán las formas
											de indicar los minutos.
										</p>
									</CardBody>
								</Card>
							</Col>

							<TablaHoras />
							<TablaMinutos />

							<Col md="12">
								<Card
									className="card-plain"
									style={{
										borderRadius: ".5rem",
										background:
											"linear-gradient(87deg, rgb(94, 114, 228) 0px, rgb(130, 94, 228) 100%)",
									}}
								>
									<CardBody className="px-3 text-white">
										<h4 className="title my-0 py-0">
											Para preguntar
										</h4>
										<h5>
											Ahora toca saber cómo preguntar la
											hora. Es bastante sencillo
											realmente, utulizaremos algunos{" "}
											<strong>Kanjis</strong> para
											construir ésta pregunta básica:
											<br />
										</h5>
										<h5 className="text-right">
											<strong>Qué hora es?</strong>
											<br />
											<br />
											「今何時ですか。」
											<br />
											<br />
											「いまなんじですか。」
											<br />
											<br />
											(imananjidesuka.)
										</h5>
										<br />
										<h5>
											Siendo「今」el Kanji de "
											<strong>ahora</strong>" o "
											<strong>en éste momento</strong>", y
											el「何」la forma de preguntar para
											casi cualquier cosa.
										</h5>
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
