import React from "react";
import { Row, Col } from "reactstrap";
import GrupoVerbos from "components/Sections/GrupoVerbos";
import GrupoAdjetivos from "components/Sections/GrupoAdjetivos";
import GrupoSustantivos from "components/Sections/GrupoSustantivos";

export default class Grupos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

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
				<div className="container-fluid mb-5">
					<h1 className="text-center title h3">Grupos y Tipos</h1>
					<Row className="justify-content-around">
						<Col
							md="12"
							className="container row text-center justify-content-around px-5 mb-5"
						>
							<h4 className="col-lg-12">Accesos Directos</h4>

							<a
								href="#pablo"
								onClick={(e) => this.scrollTo(e, "adjetivos")}
								className="text-info title"
								style={{
									fontSize: "1.2rem",
									lineHeight: "1.61rem",
								}}
							>
								Adjetivos
							</a>

							<a
								href="#pablo"
								onClick={(e) => this.scrollTo(e, "sustantivos")}
								className="text-info title"
								style={{
									fontSize: "1.2rem",
									lineHeight: "1.61rem",
								}}
							>
								Sustantivos
							</a>
						</Col>
						<GrupoVerbos />
						<GrupoAdjetivos />
						<GrupoSustantivos />
					</Row>
				</div>
			</React.Fragment>
		);
	}
}
