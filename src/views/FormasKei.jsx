import React from "react";
import { Row, Container, Col, UncontrolledTooltip } from "reactstrap";

import BackToTop from "components/Sections/BackToTop";

import LasFormasKei from "components/LasFormasKei";

export default class FormasKei extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			parametro: this.props.match.params.forma,
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
							Formas <span id="kei3">形</span>
						</h1>
						<UncontrolledTooltip
							placement="top"
							target="kei3"
							delay={0}
						>
							けい <br />
						</UncontrolledTooltip>
						<Row className="justify-content-around">
							<Col md="12" className="text-center">
								<p>
									<strong>Nota:</strong> Siendo que las formas{" "}
									<span id="kei2">形</span> son un tema
									relativamente avanzado, no estarán
									disponibles las lecturas en{" "}
									<strong>Romaji</strong>, pero se mantendrá
									activa la opcion de tocar en un{" "}
									<strong>Kanji</strong> para saber cómo se
									lee.
								</p>
								<UncontrolledTooltip
									placement="top"
									target="kei2"
									delay={0}
								>
									けい <br />
								</UncontrolledTooltip>
							</Col>
							{LasFormasKei.map(
								(forma) =>
									this.state.parametro === forma.ruta && (
										<forma.componente key={forma.key} />
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
