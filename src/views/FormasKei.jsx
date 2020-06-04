import React from "react";
import { Row, Col } from "reactstrap";
import Tekei from "components/Sections/Tekei";
import Nakei from "components/Sections/Nakei";
import Ukei from "components/Sections/Ukei";

export default class FormasKei extends React.Component {
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
					<h1 className="text-center title h3" id="top">
						Formas 形
					</h1>
					<p className="text-center">
						(Los sustantivos no varían de forma)
					</p>
					<Row className="justify-content-around">
						<Col
							md="12"
							className="container row text-center justify-content-between px-5 mb-5"
						>
							<h4 className="col-lg-12">Accesos Directos</h4>

							<a
								href="#pablo"
								onClick={(e) => this.scrollTo(e, "verbos-te")}
								className="text-info title"
								style={{
									fontSize: "1.2rem",
									lineHeight: "1.61rem",
								}}
							>
								Verbos　て形
							</a>
							<a
								href="#pablo"
								onClick={(e) =>
									this.scrollTo(e, "adjetivos-te")
								}
								className="text-info title"
								style={{
									fontSize: "1.2rem",
									lineHeight: "1.61rem",
								}}
							>
								Adjetivos　て形
							</a>
							<a
								href="#pablo"
								onClick={(e) => this.scrollTo(e, "verbos-na")}
								className="text-info title"
								style={{
									fontSize: "1.2rem",
									lineHeight: "1.61rem",
								}}
							>
								Verbos　な形
							</a>
							<a
								href="#pablo"
								onClick={(e) =>
									this.scrollTo(e, "adjetivos-na")
								}
								className="text-info title"
								style={{
									fontSize: "1.2rem",
									lineHeight: "1.61rem",
								}}
							>
								Adjetivos　な形
							</a>
							<a
								href="#pablo"
								onClick={(e) => this.scrollTo(e, "verbos-u")}
								className="text-info title"
								style={{
									fontSize: "1.2rem",
									lineHeight: "1.61rem",
								}}
							>
								Verbos　う形
							</a>
							<a
								href="#pablo"
								onClick={(e) => this.scrollTo(e, "adjetivos-u")}
								className="text-info title"
								style={{
									fontSize: "1.2rem",
									lineHeight: "1.61rem",
								}}
							>
								Adjetivos　う形
							</a>
						</Col>

						<Tekei verbos={true} />
						<Nakei verbos={true} />
						<Ukei verbos={true} />

						<Tekei verbos={false} />
						<Nakei verbos={false} />
						<Ukei verbos={false} />

						<Col md="12" className="text-center mb-4">
							<a
								href="#pablo"
								onClick={(e) => this.scrollTo(e, "top")}
								className="text-info title"
								style={{
									fontSize: "1.2rem",
									lineHeight: "1.61rem",
								}}
							>
								<i className="fas fa-3x fa-chevron-up"></i>
							</a>
						</Col>
					</Row>
				</div>
			</React.Fragment>
		);
	}
}
