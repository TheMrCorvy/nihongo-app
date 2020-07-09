import React from "react";
import { Col, Card, CardBody, Row } from "reactstrap";
import BackToTop from "../BackToTop";

function scrollTo(e, adverbio) {
	e.preventDefault();
	document.getElementById(adverbio).scrollIntoView({
		block: "start",
		behavior: "smooth",
	});
}

export default function VocabularioDeAdverbios(props) {
	return (
		<React.Fragment>
			<Col md="12">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: "15px" }}
					id="de"
				>
					<div
						className="bg-info text-white text-center justify-content-center"
						style={{
							borderTopRightRadius: "15px",
							borderBottomLeftRadius: "15px",
							height: "50px",
							width: "50px",
							position: "absolute",
							top: 0,
							right: 0,
						}}
					>
						<i
							className="fas fa-2x fa-bezier-curve"
							style={{
								position: "absolute",
								top: 12,
								right: 7,
								opacity: 0.7,
							}}
						></i>
					</div>
					<h4 className="text-left px-3 py-3 float-left my-0">
						Funciones de los Adverbios
					</h4>
					<CardBody className="mt-5 px-3">
						<p>
							Los adverbios se utilizan a todas horas,
							constantemente, sin parar, todo el rato, para dar
							información sobre los verbos, adjetivos e incluso
							frases completas.
						</p>
						<p>
							Aquí vamos a estar viendo algunos cuantos adverbios
							clasificados según su función.
						</p>
						<h5 className="text-center title">Accesos Directos</h5>
						<Row className="justify-content-around">
							<a
								href="#pablo"
								onClick={(e) => scrollTo(e, "DeFrecuencia")}
								className="text-info title px-3"
								style={{
									fontSize: "1.2rem",
									lineHeight: "1.61rem",
								}}
							>
								De Frecuencia
							</a>
							<a
								href="#pablo"
								onClick={(e) => scrollTo(e, "DeTiempo")}
								className="text-info title px-3"
								style={{
									fontSize: "1.2rem",
									lineHeight: "1.61rem",
								}}
							>
								De Tiempo
							</a>
							<a
								href="#pablo"
								onClick={(e) => scrollTo(e, "DeModo")}
								className="text-info title px-3"
								style={{
									fontSize: "1.2rem",
									lineHeight: "1.61rem",
								}}
							>
								De Modo
							</a>
							<a
								href="#pablo"
								onClick={(e) => scrollTo(e, "DeCantidad")}
								className="text-info title px-3"
								style={{
									fontSize: "1.2rem",
									lineHeight: "1.61rem",
								}}
							>
								De Cantidad
							</a>
							<a
								href="#pablo"
								onClick={(e) => scrollTo(e, "DeDuda")}
								className="text-info title px-3"
								style={{
									fontSize: "1.2rem",
									lineHeight: "1.61rem",
								}}
							>
								De Duda
							</a>
						</Row>
					</CardBody>
				</Card>
			</Col>
			<Col md="12" id="DeFrecuencia">
				<Card
					className="card-plain bg-white px-3"
					style={{ borderRadius: 15 }}
				>
					<CardBody>
						<h5 className="title text-center mb-5">
							De Frecuencia
						</h5>
						<p>
							Hacen referencia a la regularidad con la que se
							realizan las acciones.
						</p>
						<p>
							Algunos de estos adverbios también son adverbios de
							cantidad.
						</p>
						<ul>
							{props.ListaDePalabras.DeFrecuencia.map(
								(palabra) => (
									<li className="mt-5" key={palabra.Romaji}>
										<p>
											{palabra.TituloNihongo}
											{palabra.Furagana &&
												" - " + palabra.Furagana}{" "}
											-{" "}
											<span className="text-capitalize">
												{palabra.Romaji}:
											</span>
											<br />
											<span
												dangerouslySetInnerHTML={{
													__html: palabra.Traduccion,
												}}
											></span>
										</p>
									</li>
								)
							)}
						</ul>
					</CardBody>
					<BackToTop />
				</Card>
			</Col>
			<Col md="12" id="DeTiempo">
				<Card
					className="card-plain bg-white px-3"
					style={{ borderRadius: 15 }}
				>
					<CardBody>
						<h5 className="title text-center mb-5">De Tiempo</h5>
						<p>
							Informan sobre el momento en que se produce la
							acción.
						</p>
						<p>
							Una parte de los adverbios de tiempo son en realidad
							sustantivos que actúan como adverbios, como pueden
							ser los dias de la semana, los meses, las horas,
							etc.
						</p>
						<p>
							Como en el idioma Japonés no hay futuro, estos
							adverbios se utilizan (con el verbo en presente) en
							las ocasiones en las que se pretende hablar del
							futuro.
						</p>
						<ul>
							{props.ListaDePalabras.DeTiempo.map((palabra) => (
								<li className="mt-5" key={palabra.Romaji}>
									<p>
										{palabra.TituloNihongo}
										{palabra.Furagana &&
											" - " + palabra.Furagana}{" "}
										-{" "}
										<span className="text-capitalize">
											{palabra.Romaji}:
										</span>
										<br />
										<span
											dangerouslySetInnerHTML={{
												__html: palabra.Traduccion,
											}}
										></span>
									</p>
								</li>
							))}
						</ul>
					</CardBody>
					<BackToTop />
				</Card>
			</Col>
			<Col md="12" id="DeModo">
				<Card
					className="card-plain bg-white px-3"
					style={{ borderRadius: 15 }}
				>
					<CardBody>
						<h5 className="title text-center mb-5">De Modo</h5>
						<p>
							Estos adverbios indican cómo o de qué manera se debe
							realizar la acción.
						</p>
						<p>
							<strong className="text-info">Nota:</strong> Hay
							algunos en ésta lista que son adverbios derivados de
							adjetivos.
						</p>
						<ul>
							{props.ListaDePalabras.DeModo.map((palabra) => (
								<li className="mt-5" key={palabra.Romaji}>
									<p>
										{palabra.TituloNihongo}
										{palabra.Furagana &&
											" - " + palabra.Furagana}{" "}
										-{" "}
										<span className="text-capitalize">
											{palabra.Romaji}:
										</span>
										<br />
										<span
											dangerouslySetInnerHTML={{
												__html: palabra.Traduccion,
											}}
										></span>
									</p>
								</li>
							))}
						</ul>
					</CardBody>
					<BackToTop />
				</Card>
			</Col>
			<Col md="12" id="DeCantidad">
				<Card
					className="card-plain bg-white px-3"
					style={{ borderRadius: 15 }}
				>
					<CardBody>
						<h5 className="title text-center mb-5">De Cantidad</h5>
						<ul>
							{props.ListaDePalabras.DeCantidad.map((palabra) => (
								<li className="mt-5" key={palabra.Romaji}>
									<p>
										{palabra.TituloNihongo}
										{palabra.Furagana &&
											" - " + palabra.Furagana}{" "}
										-{" "}
										<span className="text-capitalize">
											{palabra.Romaji}:
										</span>
										<br />
										<span
											dangerouslySetInnerHTML={{
												__html: palabra.Traduccion,
											}}
										></span>
									</p>
								</li>
							))}
						</ul>
					</CardBody>
					<BackToTop />
				</Card>
			</Col>
			<Col md="12" id="DeDuda">
				<Card
					className="card-plain bg-white px-3"
					style={{ borderRadius: 15 }}
				>
					<CardBody>
						<h5 className="title text-center mb-5">De Duda</h5>
						<ul>
							{props.ListaDePalabras.DeDuda.map((palabra) => (
								<li className="mt-5" key={palabra.Romaji}>
									<p>
										{palabra.TituloNihongo}
										{palabra.Furagana &&
											" - " + palabra.Furagana}{" "}
										-{" "}
										<span className="text-capitalize">
											{palabra.Romaji}:
										</span>
										<br />
										<span
											dangerouslySetInnerHTML={{
												__html: palabra.Traduccion,
											}}
										></span>
									</p>
								</li>
							))}
						</ul>
					</CardBody>
				</Card>
			</Col>
		</React.Fragment>
	);
}
