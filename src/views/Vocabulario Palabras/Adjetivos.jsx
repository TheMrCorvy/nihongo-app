import React from "react";
import {
	Container,
	Row,
	Col,
	Card,
	CardBody,
	UncontrolledTooltip,
} from "reactstrap";

import adjetivos from "components/adjetivos.json";
import BackToTop from "components/Sections/BackToTop";

class Adjetivos extends React.Component {
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

	scrollTo = (e, adjetivo) => {
		e.preventDefault();
		document.getElementById(adjetivo).scrollIntoView({
			block: "start",
			behavior: "smooth",
		});
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
					<Container className="mb-5">
						<h1 className="text-center title h3" id="top">
							Vocabulario: Adjetivos
						</h1>
						<p className="pb-3 text-center">
							Los que están marcados con "Excepción" son adjetivos
							que deberían pertenecer a un cierto grupo, pero
							están en el otro.
						</p>
						<Row className="justify-content-around">
							<Col
								md="12"
								className="container row text-center justify-content-around px-5 mb-5"
							>
								<h4 className="col-lg-12 mb-0">
									Acceso Directo
								</h4>
								<a
									href="#pablo"
									onClick={(e) => this.scrollTo(e, "na")}
									className="text-info title pt-0"
									style={{
										fontSize: "1.2rem",
										lineHeight: "1.61rem",
									}}
								>
									な形ようし
								</a>
							</Col>
							<div
								className="col-lg-12 justify-content-center row"
								id="i"
							>
								<h2
									className="title col-lg-12 text-center"
									id="ikeyoushi-titulo"
								>
									い形ようし
								</h2>
								<UncontrolledTooltip
									placement="bottom"
									target="ikeyoushi-titulo"
									delay={0}
								>
									いけようし <br /> (Ikeyoushi)
								</UncontrolledTooltip>
								{adjetivos.adjetivosI.map((ikeyoushi) => (
									<Col md="6" key={ikeyoushi.id}>
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
														{ikeyoushi.hiragana}
													</p>

													<p className="h5 text-info title pt-0">
														{ikeyoushi.romaji}
													</p>
												</div>
												<div
													style={{ width: "100%" }}
													className="row justify-content-between mx-0"
												>
													<p className="h5 text-info title pt-0">
														{ikeyoushi.kanji}
													</p>

													<p
														className="text-info title pt-0 text-capitalize"
														style={{
															fontSize: "0.8rem",
														}}
													>
														{ikeyoushi.traduccion}
													</p>
												</div>
												<p className="text-center">
													frase incluyendo el adjetivo
													(con kanjis)
												</p>
												<p className="text-center">
													frase incluyendo el adjetivo
													(con hiragana)
												</p>
												<p className="text-center">
													frase incluyendo el adjetivo
													(con romaji)
												</p>

												<h4 className="title text-warning my-0 pt-0">
													Tipo: い <small>(I)</small>
												</h4>
												{ikeyoushi.excepcion && (
													<h4
														className="title text-danger"
														style={{
															position:
																"absolute",
															bottom: 0,
															right: "1.3rem",
														}}
													>
														Excepción
													</h4>
												)}
											</CardBody>
										</Card>
									</Col>
								))}
							</div>
							<Col
								md="12"
								className="container row text-center justify-content-around px-5 mb-5"
							>
								<h4 className="col-lg-12 mb-0">
									Acceso Directo
								</h4>

								<a
									href="#pablo"
									onClick={(e) => this.scrollTo(e, "i")}
									className="text-info title pt-0"
									style={{
										fontSize: "1.2rem",
										lineHeight: "1.61rem",
									}}
								>
									い形ようし
								</a>
							</Col>
							<div
								className="col-lg-12 row justify-content-center"
								id="na"
							>
								<h2
									className="title col-lg-12 text-center"
									id="nakeyoushi-titulo"
								>
									な形ようし
								</h2>
								<UncontrolledTooltip
									placement="bottom"
									target="nakeyoushi-titulo"
									delay={0}
								>
									なけようし <br /> (Nakeyoushi)
								</UncontrolledTooltip>
								{adjetivos.adjetivosNa.map((nakeyoushi) => (
									<Col md="6" key={nakeyoushi.id}>
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
														{nakeyoushi.hiragana}
													</p>

													<p className="h5 text-info title pt-0">
														{nakeyoushi.romaji}
													</p>
												</div>
												<div
													style={{ width: "100%" }}
													className="row justify-content-between mx-0"
												>
													<p className="h5 text-info title pt-0">
														{nakeyoushi.kanji}
													</p>

													<p
														className="text-info title pt-0 text-capitalize"
														style={{
															fontSize: "0.8rem",
														}}
													>
														{nakeyoushi.traduccion}
													</p>
												</div>
												<p className="text-center">
													frase incluyendo el adjetivo
													(con kanjis)
												</p>
												<p className="text-center">
													frase incluyendo el adjetivo
													(con hiragana)
												</p>
												<p className="text-center">
													frase incluyendo el adjetivo
													(con romaji)
												</p>

												<h4 className="title text-warning my-0 pt-0">
													Tipo: な <small>(Na)</small>
												</h4>
												{nakeyoushi.excepcion && (
													<h4
														className="title text-danger"
														style={{
															position:
																"absolute",
															bottom: 0,
															right: "1.3rem",
														}}
													>
														Excepción
													</h4>
												)}
											</CardBody>
										</Card>
									</Col>
								))}
							</div>
							<BackToTop />
						</Row>
					</Container>
				</div>
			</React.Fragment>
		);
	}
}
export default Adjetivos;
