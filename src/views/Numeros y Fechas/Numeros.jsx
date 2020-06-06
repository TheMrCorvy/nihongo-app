import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

export default class Numeros extends React.Component {
	state = {};
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
				<div
					className="wrapper mb-5"
					style={{
						background: "#f2f2f2",
						borderRadius: "20px 20px 0 0",
					}}
				>
					<Container>
						<h1 className="text-center title h2">Los Números</h1>
						<p className="text-center">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Molestias quis tempora dolor soluta nesciunt
							voluptatem fuga corporis temporibus, aut animi iusto
							nihil libero perferendis quidem assumenda iste?
							Architecto, laboriosam tempore?
						</p>
						<Row className="justify-content-around">
							<h3 className="title">Del 0 al 10</h3>
							<Col md="12">
								<Card
									className="card-plain bg-white"
									style={{ borderRadius: ".5rem" }}
								>
									<CardBody className="mt-3 text-center px-2">
										<table className="container text-info">
											<thead>
												<tr>
													<th scope="col">Número</th>
													<th scope="col">Kanji</th>
													<th scope="col">
														Lecturas
													</th>
													<th scope="col">
														Pronunciaciones
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">0</th>
													<td>零</td>
													<td>れい / ゼロ</td>
													<td>rei / zero</td>
												</tr>
												<tr>
													<th scope="row">1</th>
													<td>一</td>
													<td>いち / いつ</td>
													<td>ichi / itsu</td>
												</tr>
												<tr>
													<th scope="row">2</th>
													<td>二</td>
													<td>に</td>
													<td>ni</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td>三</td>
													<td>さん / みつ</td>
													<td>san / mitsu</td>
												</tr>
												<tr>
													<th scope="row">4</th>
													<td>四</td>
													<td>し / よん</td>
													<td>shi / yon</td>
												</tr>
												<tr>
													<th scope="row">5</th>
													<td>五</td>
													<td>ご</td>
													<td>go</td>
												</tr>
												<tr>
													<th scope="row">6</th>
													<td>六</td>
													<td>ろく</td>
													<td>roku</td>
												</tr>
												<tr>
													<th scope="row">7</th>
													<td>七</td>
													<td>しち / なな</td>
													<td>shichi / nana</td>
												</tr>
												<tr>
													<th scope="row">8</th>
													<td>八</td>
													<td>はち</td>
													<td>hachi</td>
												</tr>
												<tr>
													<th scope="row">9</th>
													<td>九</td>
													<td>きゅう / く</td>
													<td>kyuu / ku</td>
												</tr>
												<tr>
													<th scope="row">10</th>
													<td>十</td>
													<td>じゅう</td>
													<td>juu</td>
												</tr>
											</tbody>
										</table>
									</CardBody>
								</Card>
							</Col>
							<Col md="12" className="text-center">
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Soluta, earum iure hic ad
									libero veritatis, est modi vel repellat
									nesciunt officiis nihil eius doloribus porro
									reiciendis! In, aliquam odit? Corporis!
								</p>
							</Col>
							<h3 className="title">Del 10 en adelante</h3>
							<Col md="12">
								<Card
									className="card-plain bg-white"
									style={{ borderRadius: ".5rem" }}
								>
									<CardBody className="mt-3 text-center px-2">
										<table className="container text-info">
											<thead>
												<tr>
													<th scope="col">Número</th>
													<th scope="col">Kanji</th>
													<th scope="col">
														Lecturas
													</th>
													<th scope="col">
														Pronunciaciones
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">20</th>
													<td>二十</td>
													<td>にじゅう</td>
													<td>nijuu</td>
												</tr>
												<tr>
													<th scope="row">30</th>
													<td>三十</td>
													<td>さんじゅう</td>
													<td>sanjuu</td>
												</tr>
												<tr>
													<th scope="row">100</th>
													<td>百</td>
													<td>ひゃく</td>
													<td>hyaku</td>
												</tr>
												<tr>
													<th scope="row">1.000</th>
													<td>千</td>
													<td>せん</td>
													<td>sen</td>
												</tr>
												<tr>
													<th scope="row">10.000</th>
													<td>万</td>
													<td>まん</td>
													<td>man</td>
												</tr>
												<tr>
													<th scope="row">10.0000</th>
													<td>十万</td>
													<td>じゅうまん</td>
													<td>juuman</td>
												</tr>
												<tr>
													<th scope="row">
														1.000.000
													</th>
													<td>百万</td>
													<td>ひゃくまん</td>
													<td>hyakuman</td>
												</tr>
												<tr>
													<th scope="row">
														10.000.000
													</th>
													<td>一千万</td>
													<td>いっせんまん</td>
													<td>issenman</td>
												</tr>
												<tr>
													<th scope="row">
														100.000.000
													</th>
													<td>億</td>
													<td>おく</td>
													<td>oku</td>
												</tr>
											</tbody>
										</table>
									</CardBody>
								</Card>
							</Col>
						</Row>
					</Container>
				</div>
			</React.Fragment>
		);
	}
}
