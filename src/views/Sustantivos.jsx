import React from "react";
import {
	Container,
	Row,
	Col,
	Card,
	CardBody,
	UncontrolledTooltip,
} from "reactstrap";

class Sustantivos extends React.Component {
	state = {};
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
					<Container className="mb-5">
						<h1 className="text-center title h3">
							Vocabulario: Sustantivos
						</h1>
						<Row className="justify-content-around">
							<Col md="6">
								<Card
									style={{ borderRadius: ".5rem" }}
									className="bg-white card-plain px-3"
								>
									<CardBody>
										<div
											style={{ width: "100%" }}
											className="row justify-content-between mx-0"
										>
											<p className="h5 text-info title pt-0">
												Kanji
											</p>

											<p className="h5 text-info title pt-0">
												Traducción
											</p>
										</div>
										<div
											style={{ width: "100%" }}
											className="row justify-content-between mx-0"
										>
											<p className="h5 text-info title pt-0">
												Hiragana
											</p>

											<p className="h5 text-info title pt-0">
												Romaji
											</p>
										</div>
										<p
											className="text-center mt-3"
											id="verbo-frase2"
										>
											Texto de ejemplo con el{" "}
											<strong>Verbo</strong> incluido
											dentro de la frase
										</p>

										<UncontrolledTooltip
											placement="bottom"
											target="verbo-frase2"
											delay={0}
										>
											にほんご <br /> (Nihongo)
										</UncontrolledTooltip>
									</CardBody>
								</Card>
							</Col>
							<Col md="6">
								<Card
									style={{ borderRadius: ".5rem" }}
									className="bg-white card-plain px-3"
								>
									<CardBody>
										<div
											style={{ width: "100%" }}
											className="row justify-content-between mx-0"
										>
											<p className="h5 text-info title pt-0">
												Kanji
											</p>

											<p className="h5 text-info title pt-0">
												Traducción
											</p>
										</div>
										<div
											style={{ width: "100%" }}
											className="row justify-content-between mx-0"
										>
											<p className="h5 text-info title pt-0">
												Hiragana
											</p>

											<p className="h5 text-info title pt-0">
												Romaji
											</p>
										</div>
										<p className="text-center mt-3">
											Texto de ejemplo con el{" "}
											<strong>Verbo</strong> incluido
											dentro de la frase
										</p>
									</CardBody>
								</Card>
							</Col>
							<Col md="6">
								<Card
									style={{ borderRadius: ".5rem" }}
									className="bg-white card-plain px-3"
								>
									<CardBody>
										<div
											style={{ width: "100%" }}
											className="row justify-content-between mx-0"
										>
											<p className="h5 text-info title pt-0">
												Kanji
											</p>

											<p className="h5 text-info title pt-0">
												Traducción
											</p>
										</div>
										<div
											style={{ width: "100%" }}
											className="row justify-content-between mx-0"
										>
											<p className="h5 text-info title pt-0">
												Hiragana
											</p>

											<p className="h5 text-info title pt-0">
												Romaji
											</p>
										</div>
										<p className="text-center mt-3">
											Texto de ejemplo con el{" "}
											<strong>Verbo</strong> incluido
											dentro de la frase
										</p>
									</CardBody>
								</Card>
							</Col>
							<Col md="6">
								<Card
									style={{ borderRadius: ".5rem" }}
									className="bg-white card-plain px-3"
								>
									<CardBody>
										<div
											style={{ width: "100%" }}
											className="row justify-content-between mx-0"
										>
											<p className="h5 text-info title pt-0">
												Kanji
											</p>

											<p className="h5 text-info title pt-0">
												Traducción
											</p>
										</div>
										<div
											style={{ width: "100%" }}
											className="row justify-content-between mx-0"
										>
											<p className="h5 text-info title pt-0">
												Hiragana
											</p>

											<p className="h5 text-info title pt-0">
												Romaji
											</p>
										</div>
										<p className="text-center mt-3">
											Texto de ejemplo con el{" "}
											<strong>Verbo</strong> incluido
											dentro de la frase
										</p>
									</CardBody>
								</Card>
							</Col>
							<Col md="6">
								<Card
									style={{ borderRadius: ".5rem" }}
									className="bg-white card-plain px-3"
								>
									<CardBody>
										<div
											style={{ width: "100%" }}
											className="row justify-content-between mx-0"
										>
											<p className="h5 text-info title pt-0">
												Kanji
											</p>

											<p className="h5 text-info title pt-0">
												Traducción
											</p>
										</div>
										<div
											style={{ width: "100%" }}
											className="row justify-content-between mx-0"
										>
											<p className="h5 text-info title pt-0">
												Hiragana
											</p>

											<p className="h5 text-info title pt-0">
												Romaji
											</p>
										</div>
										<p className="text-center mt-3">
											Texto de ejemplo con el{" "}
											<strong>Verbo</strong> incluido
											dentro de la frase
										</p>
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
export default Sustantivos;
