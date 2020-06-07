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
							Los números en Japonés funcionan muy distinto que en
							Español, ya que por un lado se "agrupan" de a{" "}
							<strong>cuatro ceros</strong>, en lugar que de a{" "}
							<strong>tres ceros</strong>, como en estamos
							acostumbrados. <br />Y por el otro, para formar
							números cada vez más y más grandes, lo que se hace
							es unir las denominaciones de los números.
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
													<td>いち / いつ / い</td>
													<td>ichi / itsu / i</td>
												</tr>
												<tr>
													<th scope="row">2</th>
													<td>二</td>
													<td>に / ふ</td>
													<td>ni / fu</td>
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
													<td>ご / いつ</td>
													<td>go / itsu</td>
												</tr>
												<tr>
													<th scope="row">6</th>
													<td>六</td>
													<td>ろく / むい</td>
													<td>roku / mui</td>
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
													<td>はち / は</td>
													<td>hachi / ha</td>
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
													<td>じゅう / とお</td>
													<td>juu / too</td>
												</tr>
											</tbody>
										</table>
									</CardBody>
								</Card>
							</Col>
							<Col md="12" className="text-center">
								<p>
									Entonces, si quisiéramos armar un número
									mayor a 10, ponemos el kanji de un{" "}
									<strong className="text-success">
										número entre 1 y 9
									</strong>{" "}
									(incluyendolos), seguido por el{" "}
									<strong className="text-primary">
										10「十」
									</strong>
									y por último, el{" "}
									<strong className="text-warning">
										dígito que terminará al número
									</strong>
									.
									<br />
									<br />
									<strong>
										Ejemplo: 53 <br />　
										<span className="text-success">五</span>
										<span className="text-primary">十</span>
										<span className="text-warning">三</span>
										<br />
										<span className="text-success">ご</span>
										<span className="text-primary">
											じゅう
										</span>
										<span className="text-warning">
											さん
										</span>
										<br />
										<span className="text-success">go</span>
										<span className="text-primary">
											juu
										</span>
										<span className="text-warning">
											san
										</span>
										<br />
										<span className="text-info">
											(5 veces 10 más 3)
										</span>
									</strong>
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
													<th scope="row">100.000</th>
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
							<Col md="12" className="text-center">
								<p>
									A partir del 100, se sigue la mísma regla.
									primero "cuántos cientos", luego 百
									(ひゃく), y para terminar, la mísma regla de
									entre 10 y el 100.
									<br />
									<br />
									Para el 1.000 es más de lo mismo. Primero
									"cuántos miles" y 千 (せん), luego la regla
									de entre 100 y 1.000, y luego la regla de
									entre 10 y 100.
								</p>
							</Col>
							<h3 className="title text-center text-uppercase px-3 text-danger">
								pero Apartir del 10.000 cambian las reglas
							</h3>
							<Col md="12">
								<Card
									className="card-plain bg-white"
									style={{
										borderRadius: ".5rem",
									}}
								>
									<CardBody className="px-4">
										<p>
											Ya que en Japonés se agrupan los
											números de a 4 ceros, cuando
											llegamos al 10.000, ya no podemos
											llamarlo
											<span className="text-info">
												「じゅうせん」
											</span>
											, sino que adquiere su propia
											denominación
											<span className="text-info">
												「万」「まん」
											</span>
											.
											<br />
											<br />
											Apartir de ahora sí, siguen las
											mismas reglas de siempre, solo que
											ahora se cuentan "cuántos diez miles
											tiene un número", seguido por las
											mismas reglas de siempre.
											<br />
											<br />
											<strong className="text-info">
												Básicamente, las reglas se
												reinician cada 4 ceros.
											</strong>
										</p>
										<h6 className="title text-center text-success">
											Por eso es recomendable tratar de
											acostumbrarse a ver los números
											agrupados de a 4 ceros.
										</h6>
										<div className="row justify-content-around text-info">
											<span className="px-2 py-2">
												10.000{" "}
												<i className="fas fa-long-arrow-alt-right px-2"></i>{" "}
												<strong>1.0000</strong>
											</span>
											<span className="px-2 py-2">
												100.000{" "}
												<i className="fas fa-long-arrow-alt-right px-2"></i>{" "}
												<strong>10.0000</strong>
											</span>
											<span className="px-2 py-2">
												1.000.000{" "}
												<i className="fas fa-long-arrow-alt-right px-2"></i>{" "}
												<strong>100.0000</strong>
											</span>
											<span className="px-2 py-2">
												10.000.000{" "}
												<i className="fas fa-long-arrow-alt-right px-2"></i>{" "}
												<strong>1000.0000</strong>
											</span>
										</div>
									</CardBody>
								</Card>
							</Col>
							<h3 className="title">¿Cómo se Pregunta?</h3>
							<Col md="12">
								<Card
									className="card-plain bg-white"
									style={{
										borderRadius: ".5rem",
									}}
								>
									<CardBody className="px-4">
										<p>
											En relación a los números, una
											pregunta que podría resultar útil es{" "}
											<strong className="text-info">
												"cuántos?"
											</strong>
											.　
											<br /> Cómo sería?, simplemente
											preguntando
											<span className="text-info">
												「いくつですか。」
											</span>
											lo que se traduce como{" "}
											<strong className="text-info">
												"cuánto/s?"
											</strong>{" "}
											o{" "}
											<strong className="text-info">
												"qué número?"
											</strong>
											.
										</p>
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
