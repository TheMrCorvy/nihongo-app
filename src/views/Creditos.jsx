import React from "react";

import {
	Container,
	Row,
	Col,
	Card,
	CardBody,
	CardHeader,
	CardTitle,
} from "reactstrap";

import Parallax from "components/Sections/Parallax";

import BgImage from "../assets/img/bg-image.png";

export default class Creditos extends React.Component {
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

	render() {
		return (
			<React.Fragment>
				<div className="wrapper">
					<Parallax BackgroundImage={BgImage} />
					<div className="section section-about-us pt-0">
						<Container>
							<Row>
								<h1 className="col-lg-12 title text-center">
									Créditos
								</h1>
								<p className="col-lg-9 my-5">
									Todo el contenido disponible en ésta
									aplicación está basado en los libros de{" "}
									<strong>Minna No Nihongo</strong>, y{" "}
									<strong>Kanji Write Now</strong>, en su
									primer nivel de estudio.
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
										<a href="http://www.corvalangonzalo.xyz">
											Gonzalo Salvador Corvalán
										</a>
									</h5>
								</Col>
							</Row>
						</Container>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
