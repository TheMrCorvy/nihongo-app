import React from "react";
import { Row, Container } from "reactstrap";

import BackToTop from "components/Sections/BackToTop";

import Palabras from "components/Jsons/Palabras";

import LasPalabras from "components/LasPalabras";

export default class VocabularioPalabras extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			palabra: this.props.match.params.palabra,
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
						minHeight: "95vh",
					}}
				>
					<Container>
						<Row className="justify-content-around pt-4">
							{LasPalabras.Componentes.map(
								(palabra) =>
									this.state.palabra === palabra.url && (
										<palabra.componente
											key={palabra.url}
											jsonDePalabras={Palabras}
										/>
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
