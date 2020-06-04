import React from "react";
import Parallax from "components/Parallax";
import BgImage from "../assets/img/bg-image.png";
import { Card, CardBody, CardTitle, Row, Col, CardHeader } from "reactstrap";

class Creditos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		document.body.classList.add("landing-page");
		document.body.classList.add("sidebar-collapse");
		document.documentElement.classList.remove("nav-open");
	}

	componentWillUnmount() {
		document.body.classList.remove("landing-page");
		document.body.classList.remove("sidebar-collapse");
	}

	scrollTop = () => {
		window.scrollTo(0, 0);
	};

	render() {
		return (
			<React.Fragment>
				<div className="wrap mb-5">
					<Parallax BackgroundImage={BgImage} />

					<div className="bg-light container-fluid">
						<Row className="d-flex justify-content-center">
							<h1 className="col-lg-12 title text-center">
								Créditos
							</h1>
							<p className="col-lg-9 my-5">
								Todo el contenido disponible en ésta aplicación
								está basado en los libros de{" "}
								<strong>Minna No Nihongo</strong>, y{" "}
								<strong>Kanji Write Now</strong>, en su primer
								nivel de estudio.
							</p>
							<Col md="4">
								<Card className="card-blog card-plain mt-3">
									<CardHeader>
										<CardTitle>
											<h6 className="category text-primary">
												Minna No Nihongo
											</h6>
										</CardTitle>
									</CardHeader>
									<CardBody>
										<div className="card-image">
											<a
												href="#pablo"
												onClick={(e) =>
													e.preventDefault()
												}
											>
												<img
													alt="..."
													className="img rounded img-raised"
													src="https://images-na.ssl-images-amazon.com/images/I/716GjrM2f9L.jpg"
												/>
											</a>
										</div>
									</CardBody>
								</Card>
							</Col>
							<Col md="4">
								<Card className="card-blog card-plain mt-3">
									<CardHeader>
										<CardTitle>
											<h6 className="category text-primary">
												Kanji Write Now
											</h6>
										</CardTitle>
									</CardHeader>

									<CardBody>
										<div className="card-image">
											<a
												href="#pablo"
												onClick={(e) =>
													e.preventDefault()
												}
											>
												<img
													alt="..."
													className="img rounded img-raised"
													src="https://cdn.aprendejaponeshoy.com/5557/write-now-kanji-for-beginners.jpg"
												></img>
											</a>
										</div>
									</CardBody>
								</Card>
							</Col>
							<Col md="8">
								<h5 className="my-5">
									Ésta App fue creada por{" "}
									<a
										href="https://corvalangonzalo.xyz"
										target="_blank"
									>
										Gonzalo Salvador Corvalán
									</a>
								</h5>
							</Col>
						</Row>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Creditos;
