import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

export default class DiasMes extends React.Component {
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

	scrollTo = (e, clasificacion) => {
		e.preventDefault();
		document.getElementById(clasificacion).scrollIntoView({
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
					id="top"
				>
					<Container>
						<h1 className="text-center title h2">
							Los Días del Mes
						</h1>
						<Row className="justify-content-around">
							<Col md="12">
								<Card
									className="card-plain bg-white"
									style={{ borderRadius: ".5rem" }}
								>
									<CardBody className="text-center pl-4">
										<h6 className="title pt-0 mb-0">
											Accessos Directos
										</h6>
										<ul className="justify-content-around text-capitalize row mb-0 pl-2">
											<li
												className="mr-3 py-3 text-danger"
												onClick={(e) =>
													this.scrollTo(
														e,
														"excepcion"
													)
												}
											>
												Excepción
											</li>
											<li
												className="mr-3 py-3 text-success"
												onClick={(e) =>
													this.scrollTo(
														e,
														"termina-ka"
													)
												}
											>
												Termina en か
											</li>
											<li
												className="mr-3 py-3 text-warning"
												onClick={(e) =>
													this.scrollTo(
														e,
														"lectura-alternativa"
													)
												}
											>
												Usa lectura alternativa
											</li>
											<li
												className="mr-3 py-3 text-info"
												onClick={(e) =>
													this.scrollTo(e, "todo")
												}
											>
												Todos los Días
											</li>
										</ul>
									</CardBody>
								</Card>
							</Col>
							<Col md="12" id="todo">
								<Card
									className="card-plain bg-white"
									style={{ borderRadius: ".5rem" }}
								>
									<CardBody className="text-center px-2">
										<table className="container text-info">
											<thead>
												<tr>
													<th scope="col">Día</th>
													<th scope="col">Kanji</th>
													<th scope="col">Lectura</th>
													<th scope="col">
														Pronunciación
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">1</th>
													<td>一日</td>
													<td className="text-danger">
														ついたち
													</td>
													<td>
														<strong className="text-danger">
															tsuitachi
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">2</th>
													<td>二日</td>
													<td>
														<span className="text-warning">
															ふ
														</span>
														つ
														<span className="text-success">
															か
														</span>
													</td>
													<td>
														<strong>
															<span className="text-warning">
																fu
															</span>
															tsu
															<span className="text-success">
																ka
															</span>
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td>三日</td>
													<td>
														<span className="text-warning">
															み
														</span>
														<span className="text-success">
															っか
														</span>
													</td>
													<td>
														<strong>
															<span className="text-warning">
																mi
															</span>
															<span className="text-success">
																kka
															</span>
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">4</th>
													<td>四日</td>
													<td>
														よ
														<span className="text-success">
															っか
														</span>
													</td>
													<td>
														<strong>
															yo
															<span className="text-success">
																kka
															</span>
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">5</th>
													<td>五日</td>
													<td>
														<span className="text-warning">
															いつ
														</span>
														<span className="text-success">
															か
														</span>
													</td>
													<td>
														<strong>
															<span className="text-warning">
																itsu
															</span>
															<span className="text-success">
																ka
															</span>
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">6</th>
													<td>六日</td>
													<td>
														<span className="text-warning">
															むい
														</span>
														<span className="text-success">
															か
														</span>
													</td>
													<td>
														<strong>
															<span className="text-warning">
																mui
															</span>
															<span className="text-success">
																ka
															</span>
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">7</th>
													<td>七日</td>
													<td>
														なの
														<span className="text-success">
															か
														</span>
													</td>
													<td>
														<strong>
															nano
															<span className="text-success">
																ka
															</span>
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">8</th>
													<td>八日</td>
													<td>
														<span className="text-warning">
															よう
														</span>
														<span className="text-success">
															か
														</span>
													</td>
													<td>
														<strong>
															<span className="text-warning">
																you
															</span>
															<span className="text-success">
																ka
															</span>
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">9</th>
													<td>九日</td>
													<td>
														<span className="text-warning">
															ここ
														</span>
														の{" "}
														<span className="text-success">
															か
														</span>
													</td>
													<td>
														<strong>
															<span className="text-warning">
																koko
															</span>
															no
															<span className="text-success">
																ka
															</span>
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">10</th>
													<td>十日</td>
													<td>
														<span className="text-warning">
															とお
														</span>
														<span className="text-success">
															か
														</span>
													</td>
													<td>
														<strong>
															<span className="text-warning">
																too
															</span>
															<span className="text-success">
																ka
															</span>
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">11</th>
													<td>十一日</td>
													<td>じゅいちにち</td>
													<td>
														<strong>
															juuichinichi
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">12</th>
													<td>十二日</td>
													<td>じゅうににち</td>
													<td>
														<strong>
															juuninichi
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">13</th>
													<td>十三日</td>
													<td>じゅうさんにち</td>
													<td>
														<strong>
															juusannichi
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">14</th>
													<td>十四日</td>
													<td>
														じゅうよ
														<span className="text-success">
															っか
														</span>
													</td>
													<td>
														<strong>
															juuyo
															<span className="text-success">
																kka
															</span>
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">15</th>
													<td>十五日</td>
													<td>じゅうごにち</td>
													<td>
														<strong>
															juugonichi
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">16</th>
													<td>十六日</td>
													<td>じゅうろくにち</td>
													<td>
														<strong>
															juurokunichi
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">17</th>
													<td>十七日</td>
													<td>
														じゅう
														<span className="text-warning">
															しち
														</span>
														にち
													</td>
													<td>
														<strong>
															juu
															<span className="text-warning">
																shichi
															</span>
															nichi
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">18</th>
													<td>十八日</td>
													<td>じゅうはちにち</td>
													<td>
														<strong>
															juuhachinichi
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">19</th>
													<td>十九日</td>
													<td>
														じゅう
														<span className="text-warning">
															く
														</span>
														にち
													</td>
													<td>
														<strong>
															juu
															<span className="text-warning">
																ku
															</span>
															nichi
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">20</th>
													<td>二十日</td>
													<td>
														<span className="text-warning">
															はつ
														</span>
														<span className="text-success">
															か
														</span>
													</td>
													<td>
														<strong>
															<span className="text-warning">
																hatsu
															</span>
															<span className="text-success">
																ka
															</span>
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">21</th>
													<td>二十一日</td>
													<td>にじゅういちにち</td>
													<td>
														<strong>
															nijuuichinichi
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">22</th>
													<td>二十二日</td>
													<td>にじゅうににち</td>
													<td>
														<strong>
															nijuuninichi
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">23</th>
													<td>二十三日</td>
													<td>にじゅうさんにち</td>
													<td>
														<strong>
															nijuusannichi
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">24</th>
													<td>二十四日</td>
													<td>
														にじゅうよ
														<span className="text-success">
															っか
														</span>
													</td>
													<td>
														<strong>
															nijuuyo
															<span className="text-success">
																kka
															</span>
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">25</th>
													<td>二十五日</td>
													<td>にじゅうごにち</td>
													<td>
														<strong>
															nijuugonichi
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">26</th>
													<td>二十六日</td>
													<td>にじゅうろくにち</td>
													<td>
														<strong>
															nijuurokunichi
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">27</th>
													<td>二十七日</td>
													<td>
														にじゅう
														<span className="text-warning">
															しち
														</span>
														にち
													</td>
													<td>
														<strong>
															nijuu
															<span className="text-warning">
																shichi
															</span>
															nichi
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">28</th>
													<td>二十八日</td>
													<td>にじゅうはちにち</td>
													<td>
														<strong>
															nijuuhachinichi
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">29</th>
													<td>二十九日</td>
													<td>
														にじゅう
														<span className="text-warning">
															く
														</span>
														にち
													</td>
													<td>
														<strong>
															nijuu
															<span className="text-warning">
																ku
															</span>
															nichi
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">30</th>
													<td>三十日</td>
													<td>さんじゅうにち</td>
													<td>
														<strong>
															sanjuunichi
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">31</th>
													<td>三十日</td>
													<td>さんじゅういちにち</td>
													<td>
														<strong>
															sanjuuichinichi
														</strong>
													</td>
												</tr>
											</tbody>
										</table>
									</CardBody>
								</Card>
							</Col>
							<Col md="12" id="excepcion">
								<Card
									className="card-plain bg-white"
									style={{ borderRadius: ".5rem" }}
								>
									<CardBody className="text-center px-2">
										<table className="container text-danger">
											<thead>
												<tr>
													<th
														scope="col"
														colspan="4"
														className="pb-3"
													>
														Excepción
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">1</th>
													<td>一日</td>
													<td className="text-right">
														ついたち
													</td>
													<td className="text-right">
														<strong className="pr-3">
															tsuitachi
														</strong>
													</td>
												</tr>
											</tbody>
										</table>
									</CardBody>
								</Card>
							</Col>
							<Col md="12" id="termina-ka">
								<Card
									className="card-plain bg-white"
									style={{ borderRadius: ".5rem" }}
								>
									<CardBody className="text-center px-2">
										<table className="container text-success">
											<thead>
												<tr>
													<th
														scope="col"
														colspan="4"
														className="pb-3"
													>
														Terminan en か
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">2</th>
													<td>二日</td>
													<td>
														<span className="text-warning">
															ふ
														</span>
														つ
														<span className="text-success">
															か
														</span>
													</td>
													<td>
														<strong>
															<span className="text-warning">
																fu
															</span>
															tsu
															<span className="text-success">
																ka
															</span>
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td>三日</td>
													<td>
														<span className="text-warning">
															み
														</span>
														<span className="text-success">
															っか
														</span>
													</td>
													<td>
														<strong>
															<span className="text-warning">
																mi
															</span>
															<span className="text-success">
																kka
															</span>
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">4</th>
													<td>四日</td>
													<td>
														よ
														<span className="text-success">
															っか
														</span>
													</td>
													<td>
														<strong>
															yo
															<span className="text-success">
																kka
															</span>
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">5</th>
													<td>五日</td>
													<td>
														<span className="text-warning">
															いつ
														</span>
														<span className="text-success">
															か
														</span>
													</td>
													<td>
														<strong>
															<span className="text-warning">
																itsu
															</span>
															<span className="text-success">
																ka
															</span>
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">6</th>
													<td>六日</td>
													<td>
														<span className="text-warning">
															むい
														</span>
														<span className="text-success">
															か
														</span>
													</td>
													<td>
														<strong>
															<span className="text-warning">
																mui
															</span>
															<span className="text-success">
																ka
															</span>
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">7</th>
													<td>七日</td>
													<td>
														なの
														<span className="text-success">
															か
														</span>
													</td>
													<td>
														<strong>
															nano
															<span className="text-success">
																ka
															</span>
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">8</th>
													<td>八日</td>
													<td>
														<span className="text-warning">
															よう
														</span>
														<span className="text-success">
															か
														</span>
													</td>
													<td>
														<strong>
															<span className="text-warning">
																you
															</span>
															<span className="text-success">
																ka
															</span>
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">9</th>
													<td>九日</td>
													<td>
														<span className="text-warning">
															ここ
														</span>
														の{" "}
														<span className="text-success">
															か
														</span>
													</td>
													<td>
														<strong>
															<span className="text-warning">
																koko
															</span>
															no
															<span className="text-success">
																ka
															</span>
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">10</th>
													<td>十日</td>
													<td>
														<span className="text-warning">
															とお
														</span>
														<span className="text-success">
															か
														</span>
													</td>
													<td>
														<strong>
															<span className="text-warning">
																too
															</span>
															<span className="text-success">
																ka
															</span>
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">14</th>
													<td>十四日</td>
													<td>
														じゅうよ
														<span className="text-success">
															っか
														</span>
													</td>
													<td>
														<strong>
															juuyo
															<span className="text-success">
																kka
															</span>
														</strong>
													</td>
												</tr>
											</tbody>
										</table>
									</CardBody>
								</Card>
							</Col>
							<Col md="12" id="lectura-alternativa">
								<Card
									className="card-plain bg-white"
									style={{ borderRadius: ".5rem" }}
								>
									<CardBody className="text-center px-2">
										<table className="container text-warning">
											<thead>
												<tr>
													<th
														scope="col"
														colspan="4"
														className="pb-3"
													>
														Usa lectura alternativa
														del número
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">2</th>
													<td>二日</td>
													<td>
														<span className="text-warning">
															ふ
														</span>
														つ
														<span className="text-success">
															か
														</span>
													</td>
													<td>
														<strong>
															<span className="text-warning">
																fu
															</span>
															tsu
															<span className="text-success">
																ka
															</span>
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td>三日</td>
													<td>
														<span className="text-warning">
															み
														</span>
														<span className="text-success">
															っか
														</span>
													</td>
													<td>
														<strong>
															<span className="text-warning">
																mi
															</span>
															<span className="text-success">
																kka
															</span>
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">5</th>
													<td>五日</td>
													<td>
														<span className="text-warning">
															いつ
														</span>
														<span className="text-success">
															か
														</span>
													</td>
													<td>
														<strong>
															<span className="text-warning">
																itsu
															</span>
															<span className="text-success">
																ka
															</span>
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">8</th>
													<td>八日</td>
													<td>
														<span className="text-warning">
															よう
														</span>
														<span className="text-success">
															か
														</span>
													</td>
													<td>
														<strong>
															<span className="text-warning">
																you
															</span>
															<span className="text-success">
																ka
															</span>
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">9</th>
													<td>九日</td>
													<td>
														<span className="text-warning">
															ここ
														</span>
														の{" "}
														<span className="text-success">
															か
														</span>
													</td>
													<td>
														<strong>
															<span className="text-warning">
																koko
															</span>
															no
															<span className="text-success">
																ka
															</span>
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">10</th>
													<td>十日</td>
													<td>
														<span className="text-warning">
															とお
														</span>
														<span className="text-success">
															か
														</span>
													</td>
													<td>
														<strong>
															<span className="text-warning">
																too
															</span>
															<span className="text-success">
																ka
															</span>
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">17</th>
													<td>十七日</td>
													<td>
														じゅう
														<span className="text-warning">
															しち
														</span>
														にち
													</td>
													<td>
														<strong>
															juu
															<span className="text-warning">
																shichi
															</span>
															nichi
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">19</th>
													<td>十九日</td>
													<td>
														じゅう
														<span className="text-warning">
															く
														</span>
														にち
													</td>
													<td>
														<strong>
															juu
															<span className="text-warning">
																ku
															</span>
															nichi
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">20</th>
													<td>二十日</td>
													<td>
														<span className="text-warning">
															はつ
														</span>
														<span className="text-success">
															か
														</span>
													</td>
													<td>
														<strong>
															<span className="text-warning">
																hatsu
															</span>
															<span className="text-success">
																ka
															</span>
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">27</th>
													<td>二十七日</td>
													<td>
														にじゅう
														<span className="text-warning">
															しち
														</span>
														にち
													</td>
													<td>
														<strong>
															nijuu
															<span className="text-warning">
																shichi
															</span>
															nichi
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">29</th>
													<td>二十九日</td>
													<td>
														にじゅう
														<span className="text-warning">
															く
														</span>
														にち
													</td>
													<td>
														<strong>
															nijuu
															<span className="text-warning">
																ku
															</span>
															nichi
														</strong>
													</td>
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
