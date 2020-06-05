import React from "react";
import { Card, CardBody } from "reactstrap";
import Numeros from "components/Transiciones/Numeros";
import VocabularioPalabras from "components/Transiciones/VocabularioPalabras";
import GruposTiempos from "components/Transiciones/GruposTiempos";
import FormasKei from "components/Transiciones/FormasKei";

export default class Transicion extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			recurso: this.props.match.params.recurso,
			color: "",
		};
	}

	componentDidMount() {
		document.body.classList.add("landing-page");
		document.body.classList.add("sidebar-collapse");
		document.documentElement.classList.remove("nav-open");
		document.body.style.background = "#000";
		document.body.style.borderRadius = "20px 20px 0 0";

		switch (this.state.recurso) {
			case "fechas-numeros":
				this.setState({
					color: "rgb(32, 124, 229)",
				});
				break;
			case "vocabulario-palabras":
				this.setState({
					color:
						"linear-gradient(87deg, rgb(251, 99, 64) 0px, rgb(251, 177, 64) 100%)",
				});
				break;
			case "grupos-tiempos":
				this.setState({
					color:
						"linear-gradient(87deg, rgb(45, 206, 137) 0px, rgb(45, 206, 204) 100%)",
				});
				break;
			case "formas-kei":
				this.setState({
					color: "linear-gradient(87deg, #f56036 0, #f5365c 100%)",
				});
				break;

			default:
				this.setState({
					color: "#fff",
				});
				break;
		}
	}

	componentWillUnmount() {
		document.body.classList.remove("landing-page");
		document.body.classList.remove("sidebar-collapse");
		document.body.style.background = "#fff";
		document.body.style.borderRadius = "0";
	}

	scrollTop = () => {
		window.scrollTo(0, 0);
	};

	render() {
		return (
			<React.Fragment>
				<div className="wrapper">
					<div
						style={{
							height: "150px",
							position: "fixed",
							top: "0",
							left: "0",
							zIndex: "-1",
							background: this.state.color,
							borderRadius: "20px 20px 0 0",
						}}
						className="container-fluid d-flex justify-content-center text-center"
					>
						<h3
							className="title mb-0 pt-4"
							style={{ color: "#fff" }}
						>
							Continúa tu Recorrido
						</h3>
					</div>
					<Card
						style={{
							minHeight: "100vh",
							borderRadius: "20px 20px 0 0",
							marginTop: "85px",
						}}
					>
						<CardBody>
							{this.state.recurso === "fechas-numeros" && (
								<Numeros scrollTop={this.scrollTop} />
							)}
							{this.state.recurso === "vocabulario-palabras" && (
								<VocabularioPalabras
									scrollTop={this.scrollTop}
								/>
							)}
							{this.state.recurso === "grupos-tiempos" && (
								<GruposTiempos scrollTop={this.scrollTop} />
							)}
							{this.state.recurso === "formas-kei" && (
								<FormasKei scrollTop={this.scrollTop} />
							)}
						</CardBody>
					</Card>
				</div>
			</React.Fragment>
		);
	}
}
