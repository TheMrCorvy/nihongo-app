import React from "react";
import { Row, Container } from "reactstrap";

import BackToTop from "components/Sections/BackToTop";

import LasFrases from "components/LasFrases";

export default class ConstruirFrases extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			parametro: this.props.match.params.lego,
		};
	}
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
						<h1 className="text-center title h3">
							Construye Frases Simples
						</h1>
						<Row className="justify-content-around">
							{LasFrases.sinGrupo.map(
								(lego) =>
									this.state.parametro === lego.url && (
										<lego.componente key={lego.titulo} />
									)
							)}
							<BackToTop />
						</Row>
					</Container>
				</div>
			</React.Fragment>
		);
	}
}
