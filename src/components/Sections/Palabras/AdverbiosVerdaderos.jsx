import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

// import PalabrasTrabajo from "components/Jsons/VocabularioPalabras.json";
import ListarPalabras from "./ListarPalabras";

export default class AdverbiosVerdaderos extends React.Component {
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
									<h4 className="text-left px-3 pt-3 float-left my-0">
										Los Adverbios Verdaderos
									</h4>
									<CardBody className="mt-5 px-3">
										<p>
											En la sección anterior vimos que los
											adverbios se pueden "crear" a partir
											de los adjetivos, siguiendo unas
											simples reglas, pero eso no lo es
											todo para éste tema, ya que también
											están lo que se llaman "Adverbios
											Verdaderos" que son, como su nombre
											lo indica, adverbios que no se
											forman o crean apartir de alguna
											otra palabra.
										</p>
										<p>
											Aquí hay una pequeña lista con{" "}
											<strong>algunos</strong> de los
											adverbios verdaderos que hay:
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
