import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

export default class Contadores extends React.Component {
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
						<h1 className="text-center title h2">Los Contadores</h1>
						<Row className="justify-content-around">
							<Col md="12">
								<Card
									className="card-plain bg-white"
									style={{
										borderRadius: ".5rem",
									}}
								>
									<CardBody className="text-center px-4">
										<h4 className="mt-1 text-success">
											¿Contadores? ¿Debería estudiar
											administración de empresas?
										</h4>
										<p>
											No, no, nada de eso. Es solo que en
											Japonés uno cuenta{" "}
											<strong className="text-info">
												cuántas cosas
											</strong>{" "}
											hay o se poseen de distintas formas,
											dependiendo del objeto de la oración
											(lo que sea que estemos tratando de
											contar).
										</p>
										<p>
											En Japonés se pronuncia de distinta
											manera, el decir que se tienen{" "}
											<strong className="text-info">
												2 libros
											</strong>{" "}
											que o que hay{" "}
											<strong className="text-info">
												2 perros
											</strong>
											. Para decir que se tienen{" "}
											<strong className="text-info">
												2 libros
											</strong>
											, generalmente se usará el contador
											de{" "}
											<strong className="text-info">
												cosas planas
											</strong>
											, o el propio de los libros,
											mientras que para decir que hay{" "}
											<strong className="text-info">
												2 perros
											</strong>
											, se utilizará el de{" "}
											<strong className="text-info">
												animales pequeños
											</strong>
											.
										</p>
									</CardBody>
								</Card>
							</Col>
							<Col md="12">
								<Card
									className="card-plain bg-white"
									style={{
										borderRadius: ".5rem",
									}}
								>
									<CardBody className="text-center px-4">
										<h4 className="mt-1 text-success">
											¿Cuántos contadores hay?
										</h4>
										<h3 className="text-info title text-center pt-0">
											Muchos
										</h3>
										<p>
											No es recomendable que trates de
											estudiar y saberlos todos, en la
											vida real lo más probable es que no
											uses más que unos cuantos. Es por
											eso que aquí veremos 5 de los
											contadores más frecuentes,
											incluyendo{" "}
											<strong className="text-info">
												qué
											</strong>{" "}
											cuentan y{" "}
											<strong className="text-info">
												cómo
											</strong>{" "}
											es su lectura.
										</p>
										<h3 className="text-danger title text-center">
											Advertencia
										</h3>
										<p className="text-left">
											Muchos de los contadores contienen,
											entre los números{" "}
											<strong className="text-info">
												1
											</strong>{" "}
											y{" "}
											<strong className="text-info">
												10
											</strong>{" "}
											(incluyendolos), las{" "}
											<strong className="text-info">
												lecturas alternativas
											</strong>{" "}
											de algunos números.
										</p>
										<p className="text-left">
											Pero no aplica para los números
											mayores a{" "}
											<strong className="text-info">
												10
											</strong>
											, ya que apartir del 10 se
											utilizarán siempre las lecturas
											"estándar" de los números, lo que
											facilita mucho las cosas.
										</p>
									</CardBody>
								</Card>
							</Col>
							<Col md="12">
								<Card
									className="card-plain bg-white"
									style={{
										borderRadius: ".5rem",
									}}
								>
									<CardBody className="text-center px-4">
										<h4 className="mt-1 text-primary">
											Cosas Pequeñas
										</h4>
										<p>
											Contaremos de la siguiente manera a
											todos aquellos{" "}
											<strong className="text-info">
												objetos pequeños
											</strong>
											, objetos inanimados que caben en la
											palma de la mano, como llaves,
											frutas, etc.
										</p>
										<table className="container text-primary">
											<tbody>
												<tr>
													<th scope="row">1</th>
													<td>ひとつ</td>
													<td>
														<strong>hitotsu</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">2</th>
													<td>ふたつ</td>
													<td>
														<strong>futatsu</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td>みつ</td>
													<td>
														<strong>mittsu</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">4</th>
													<td>よっつ</td>
													<td>
														<strong>yottsu</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">5</th>
													<td>いつつ</td>
													<td>
														<strong>itsutsu</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">6</th>
													<td>むつ</td>
													<td>
														<strong>mutsu</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">7</th>
													<td>ななつ</td>
													<td>
														<strong>nanatsu</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">8</th>
													<td>やっつ</td>
													<td>
														<strong>yattsu</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">9</th>
													<td>ここのつ</td>
													<td>
														<strong>
															kokonotsu
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">10</th>
													<td>とう</td>
													<td>
														<strong>tou</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">
														Pregunta
													</th>
													<td>「何つ」(なつ)</td>
													<td>
														<strong>natsu</strong>
													</td>
												</tr>
											</tbody>
										</table>
										<p className="mt-3">
											<strong>Nota:</strong> El contador
											de cosas pequeñas es algo así como
											un{" "}
											<strong>contador genérico</strong>{" "}
											que se puede usar para la mayoria de
											cosas sin que sea incorrecto del
											todo.
										</p>
										<p>
											Cuándo no recuerdes qué contador se
											usa, es mejor que en lugar de decir
											el número plano, uses éste contador.
										</p>
									</CardBody>
								</Card>
							</Col>
							<Col md="12">
								<Card
									className="card-plain bg-info"
									style={{
										borderRadius: ".5rem",
									}}
								>
									<CardBody className="text-center text-white px-4">
										<h4 className="mt-1">Personas</h4>
										<table className="container">
											<tbody>
												<tr>
													<th scope="row">1</th>
													<td>ひとり</td>
													<td>
														<strong>hitori</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">2</th>
													<td>ふたり</td>
													<td>
														<strong>futari</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td>さんにん</td>
													<td>
														<strong>sannin</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">4</th>
													<td>よにん</td>
													<td>
														<strong>yonin</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">5</th>
													<td>ごにん</td>
													<td>
														<strong>gonin</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">6</th>
													<td>ろくにん</td>
													<td>
														<strong>rokunin</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">7</th>
													<td>ななにん / しちにん</td>
													<td>
														<strong>
															nananin / shichinin
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">8</th>
													<td>はちにん</td>
													<td>
														<strong>
															hachinin
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">9</th>
													<td>きゅうにん</td>
													<td>
														<strong>kyuunin</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">10</th>
													<td>じゅうにん</td>
													<td>
														<strong>juunin</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">
														Pregunta
													</th>
													<td>
														「何にん」(なんにん)
													</td>
													<td>
														<strong>nannin</strong>
													</td>
												</tr>
											</tbody>
										</table>
									</CardBody>
								</Card>
							</Col>
							<Col md="12">
								<Card
									className="card-plain bg-white"
									style={{
										borderRadius: ".5rem",
									}}
								>
									<CardBody className="text-center px-4">
										<h4 className="mt-1 text-success">
											Cosas Planas
										</h4>
										<p>
											Dentro de ésta categoría entra todo
											aquello objeto que tenga al menos un
											lado plano. Desde{" "}
											<strong className="text-success">
												ropa
											</strong>
											, discos, fotos, papeles,{" "}
											<strong className="text-success">
												laptops
											</strong>
											, etc.
										</p>
										<table className="container text-info">
											<tbody>
												<tr>
													<th scope="row">1</th>
													<td>いちまい</td>
													<td>
														<strong>ichimai</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">2</th>
													<td>にまい</td>
													<td>
														<strong>nimai</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td>さんまい</td>
													<td>
														<strong>sanmai</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">4</th>
													<td>よんまい</td>
													<td>
														<strong>yonmai</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">5</th>
													<td>ごまい</td>
													<td>
														<strong>gomai</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">6</th>
													<td>ろくまい</td>
													<td>
														<strong>rokumai</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">7</th>
													<td>ななまい</td>
													<td>
														<strong>nanamai</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">8</th>
													<td>はちまい</td>
													<td>
														<strong>
															hachimai
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">9</th>
													<td>きゅうまい</td>
													<td>
														<strong>kyuumai</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">10</th>
													<td>じゅうまい</td>
													<td>
														<strong>juumai</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">
														Pregunta
													</th>
													<td>
														「何まい」(なんまい)
													</td>
													<td>
														<strong>nanmai</strong>
													</td>
												</tr>
											</tbody>
										</table>
									</CardBody>
								</Card>
							</Col>
							<Col md="12">
								<Card
									className="card-plain text-white"
									style={{
										borderRadius: ".5rem",
										background:
											"linear-gradient(87deg, rgb(94, 114, 228) 0px, rgb(130, 94, 228) 100%)",
									}}
								>
									<CardBody className="text-center px-4">
										<h4 className="mt-1">
											Máquinas o Transportes
										</h4>
										<p>
											Bicicletas, autos, computadoras, y
											cosas por el estilo, con la{" "}
											<strong>excepción</strong> de que
											los <strong>Trenes</strong> y los{" "}
											<strong>Barcos</strong> tienen sus
											respectivos contadores exclusivos
											para sí mismos.
										</p>
										<table className="container">
											<tbody>
												<tr>
													<th scope="row">1</th>
													<td>いだい</td>
													<td>
														<strong>idai</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">2</th>
													<td>にだい</td>
													<td>
														<strong>nidai</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td>さんだい</td>
													<td>
														<strong>sandai</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">4</th>
													<td>よんだい</td>
													<td>
														<strong>yondai</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">5</th>
													<td>ごだい</td>
													<td>
														<strong>godai</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">6</th>
													<td>ろくだい</td>
													<td>
														<strong>rokudai</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">7</th>
													<td>ななだい</td>
													<td>
														<strong>nanadai</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">8</th>
													<td>はちだい</td>
													<td>
														<strong>
															hachidai
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">9</th>
													<td>きゅうだい</td>
													<td>
														<strong>kyuudai</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">10</th>
													<td>じゅうだい</td>
													<td>
														<strong>juudai</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">
														Pregunta
													</th>
													<td>
														「何だい」(なんだい)
													</td>
													<td>
														<strong>nandai</strong>
													</td>
												</tr>
											</tbody>
										</table>
									</CardBody>
								</Card>
							</Col>
							<Col md="12">
								<Card
									className="card-plain text-white"
									style={{
										borderRadius: ".5rem",
										background:
											"linear-gradient(87deg, rgb(245, 54, 92) 0px, rgb(245, 96, 54) 100%)",
									}}
								>
									<CardBody className="text-center px-4">
										<h4 className="mt-1 mb-0">
											Animales Pequeños
										</h4>
										<small className="text-center">
											(Pájaros no incluidos en el empaque
											original)
										</small>
										<p className="mt-4">
											Se utiliza para contar animales
											pequeños como mascotas (perros,
											gatos...), peces, ratas, insectos,
											ranas, abejas, hormigas, etc.
										</p>
										<p>
											Ya que las aves tienen su propio
											contador, no se podrá utilizar éste
											para contarlas, pero si se puede
											utilizar, por ejemplo, el contador
											de cosas pequeñas si se desea.
										</p>
										<table className="container">
											<tbody>
												<tr>
													<th scope="row">1</th>
													<td>いっぴき</td>
													<td>
														<strong>ippiki</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">2</th>
													<td>にひき</td>
													<td>
														<strong>nihiki</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td>さんびき</td>
													<td>
														<strong>sanbiki</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">4</th>
													<td>よんひき</td>
													<td>
														<strong>yonhiki</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">5</th>
													<td>ごひき</td>
													<td>
														<strong>gohiki</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">6</th>
													<td>ろっぴき</td>
													<td>
														<strong>roppiki</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">7</th>
													<td>ななひき / しちひき</td>
													<td>
														<strong>
															nanahiki /
															shichihiki{" "}
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">8</th>
													<td>はっぴき</td>
													<td>
														<strong>happiki</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">9</th>
													<td>きゅうひき</td>
													<td>
														<strong>
															kyuuhiki
														</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">10</th>
													<td>じゅっぴき</td>
													<td>
														<strong>juppiki</strong>
													</td>
												</tr>
												<tr>
													<th scope="row">
														Pregunta
													</th>
													<td>
														「何びき」(なんびき)
													</td>
													<td>
														<strong>nanbiki</strong>
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
