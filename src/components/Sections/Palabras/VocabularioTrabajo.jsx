import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

// import PalabrasTrabajo from "components/Jsons/VocabularioPalabras.json";
import ListarPalabras from "./ListarPalabras";

export default class VocabularioTrabajo extends React.Component {
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
						<Row className="justify-content-around">
							<Col md="12">
								<Card
									className="card-plain bg-white"
									style={{ borderRadius: "15px" }}
								>
									<div
										className="bg-info text-white text-center justify-content-center"
										style={{
											borderTopRightRadius: "15px",
											borderBottomLeftRadius: "15px",
											height: "50px",
											width: "50px",
											position: "absolute",
											top: 0,
											right: 0,
										}}
									>
										<i
											className="fas fa-3x fa-toolbox"
											style={{
												position: "absolute",
												top: 2,
												right: 4,
												opacity: 0.7,
											}}
										></i>
									</div>
									<h4 className="text-left px-3 pt-3 float-left my-0">
										Vocabulario de Trabajo
									</h4>
									<CardBody className="mt-5 px-3">
										<p>
											Un poco de vocabulario útil para el
											ámbito laboral y de oficina.
										</p>
										<p>
											Comenzaremos viendo la "cadena
											alimenticia" de las empresas
										</p>

										<ol>
											<li className="mt-5">
												<p>
													「社長 - しゃちょう -
													shachou」
												</p>
												<p>
													Es el presidente de la
													empresa, el CEO.
												</p>
											</li>
											<li className="mt-5">
												<p>
													「部長 - ぶちょう - buchou」
												</p>
												<p>
													También es un cargo muy
													importante, pero no como
													para llegar a ser el
													presidente de la empresa, es
													más un{" "}
													<strong>
														jefe de departamento
													</strong>
													.
												</p>
											</li>
											<li className="mt-5">
												<p>
													「課長 - かちょう - kachou」
												</p>
												<p>
													La diferencia entre éste
													puesto y el anterior es muy
													sutíl, éste puesto en una
													empresa es justo debajo del
													部長 - ぶちょう - buchou,
													viene siendo un{" "}
													<strong>
														gerente general
													</strong>
													.
												</p>
											</li>
											<li className="mt-5">
												<p>
													「係長 - かかりちょう -
													kakarichou」
												</p>
												<p>
													El jefe de los empleados, un
													supervisor, básicamente un
													puesto por encima de un
													empleado común y corriente.
												</p>
											</li>
											<li className="mt-5">
												<p>
													「会社員 - かいしゃいん -
													kaishain」
												</p>
												<p>
													Un empleado común y
													corriente.
												</p>
											</li>
										</ol>
										<p className="mt-5">
											También está el「サラリマン - salary
											man」que se traduce literalmente
											como "empleado de oficina", éste no
											es un puesto como tal dentro de una
											empresa, es una forma de referirse a
											que uno trabaja ne la oficina, sea
											en el puesto que sea.
										</p>
									</CardBody>
								</Card>
							</Col>
							<ListarPalabras
								ListaDePalabras={this.props.ListaDePalabras}
							/>
						</Row>
					</Container>
				</div>
			</React.Fragment>
		);
	}
}
