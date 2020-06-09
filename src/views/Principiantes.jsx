import React from "react";
import {
	Row,
	Col,
	Card,
	CardBody,
	Container,
	CardHeader,
	UncontrolledTooltip,
} from "reactstrap";
import { Link } from "react-router-dom";
import Secciones from "components/Sections/Secciones";

class Principiantes extends React.Component {
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

	scrollTop = () => {
		window.scrollTo(0, 0);
	};

	render() {
		return (
			<React.Fragment>
				<div
					className="wrapper mb-5 container-fluid"
					style={{
						background: "#f2f2f2",
						borderRadius: "20px 20px 0 0",
					}}
				>
					<Container>
						<h1 className="text-center title h3">
							Guía para Principiantes
						</h1>
						<Row className="justify-content-around">
							<Col md="12">
								<Card
									className="bg-info card-plain"
									style={{ borderRadius: "15px" }}
								>
									<CardHeader className="text-white text-center">
										<h4 className="title">
											Contexto del Idioma
										</h4>
									</CardHeader>
									<CardBody
										className="mt-5 bg-white px-3"
										style={{
											borderRadius: "15px",
										}}
									>
										<h4 className="text-center">
											Un poco de contexto para comenzar
										</h4>
										<p>
											El Japonés fue durante mucho tiempo
											un idioma enteramente hablado, no
											fue sino hasta que "
											<strong>importaron</strong>" la
											escritura China que se adaptó al
											idioma para poder ser escrito. Ésto
											ocaciona que haya algunas
											inconsistencias, reglas que se
											aplican o no, excepciones generales
											o específicas, etc. <br /> Y también
											ocaciona ciertas diferencias entre
											el habla y la escritura, hay ciertas
											formas de abreviar palabras o frases
											que son válidas para una
											conversación hablada, pero erroneas
											en la escritura, por ejemplo.
										</p>
									</CardBody>
								</Card>
							</Col>
							<Col md="12">
								<Card
									className="card-plain bg-info"
									style={{ borderRadius: "15px" }}
								>
									<CardHeader className="text-white text-center">
										<h4 className="title">La Escritura</h4>
									</CardHeader>
									<CardBody
										className="mt-5 bg-white px-3"
										style={{
											borderRadius: "15px",
										}}
									>
										<h4 className="text-center">
											¿Cómo se escribe en Japonés?
										</h4>
										<p>
											Hay 4 formas válidas de escribir en
											Japonés. <br /> En primer lugar está
											el <strong>Romaji</strong>, que es
											la fonética del idioma escrito con
											las letras occidentales, para
											dejarlo más sencillo, vendría siendo
											la forma de escribir cómo suena el
											Japonés, pero con nuestras letras.
											<br />
											Si bien ésta escritura no es nativa
											de Japón, es una forma de escritura
											igual de válida que las demás.
										</p>
										<p>
											Continuando están los llamados "
											<strong>Kanas</strong>", son dos
											formas de escritura basadas en la
											fonética, y que no expresan ningún
											significado más allá del que se
											pueda inferir de una frase hablada.
											<br />
											Hay 2 tablas Kanas. La tabla de{" "}
											<strong>Hiragana</strong> expresa
											todos los sonidos disponibles en
											idioma, y se usa para dar
											pronunciación a los{" "}
											<strong>Kanjis</strong>, así como
											tabién encuentran su uso en forma de
											las partículas que componen y dan
											sentido a las oraciones.
											<br />Y por el otro lado está la
											tabla de <strong>Katakana</strong>,
											cuyo principal uso estará en
											escribir o adaptar palabras, sonidos
											y expresiones de otros idiomas, para
											ser usados en el Japonés. Para
											lograr ésto, los Katakana cuentan
											con una flexibilidad que los
											Hiragana no tienen, y es que se
											pueden generar sonidos que no se
											encuentran "predefinidos" en el
											idioma, a base de unir Katakanas.
											<br />
											<small>
												(ésto cuenta con una explicación
												un poco más extendida en la
												sección de Katakana)
											</small>
										</p>
										<p>
											Por último están los{" "}
											<strong>Kanji</strong>, que son lo
											que se conoce como{" "}
											<strong>ideogramas</strong>{" "}
											(símbolos que representan ideas o
											conceptos), y son el principal pilar
											que le da sentido a todo dentro del
											idioma, ya que son los que
											proporcionan un significado a las
											cosas.
											<br />
											El kanji de{" "}
											<span id="hito">人</span>, por
											ejemplo, representa a una{" "}
											<strong>persona</strong>, y se
											utiliza para escribir toda clase de
											conceptos relacionados a las{" "}
											<strong>personas</strong>, palabras
											como "empleado", "extranjero",
											"población", "chofer", etc. se
											escriben utilizando dicho kanji.
										</p>
										<UncontrolledTooltip
											placement="top"
											target="hito"
											delay={0}
										>
											ひと <br /> (Hito)
										</UncontrolledTooltip>
									</CardBody>
								</Card>
							</Col>
							<Col md="6">
								<Link
									to="/hiragana"
									onClick={() => {
										this.scrollTop();
									}}
								>
									<Card
										style={{
											borderRadius: "10px",
											boxShadow:
												"0px 5px 25px 0px rgba(44, 168, 255, 0.6)",
											background:
												"linear-gradient(87deg,#11cdef 0,#1171ef 100%)",
										}}
									>
										<CardBody className="text-white text-capitalize">
											<span className="title">
												Hiragana　ひらがな
											</span>
											<i className="fas fa-chevron-right pl-3"></i>
											<br />
											<small>
												¿Cómo se escribe en Japonés?
											</small>
											<i
												className="fas fa-3x fa-paint-brush"
												style={{
													position: "absolute",
													top: 20,
													right: 10,
													opacity: 0.7,
												}}
											></i>
										</CardBody>
									</Card>
								</Link>
							</Col>
							<Col md="6">
								<Link
									to="/katakana"
									onClick={() => {
										this.scrollTop();
									}}
								>
									<Card
										style={{
											borderRadius: "10px",
											boxShadow:
												"0px 5px 25px 0px rgba(94, 114, 228, 0.6)",
											background:
												"linear-gradient(87deg,#5e72e4 0,#825ee4 100%)",
										}}
									>
										<CardBody className="text-white text-capitalize">
											<span className="title">
												Katakana　カタカナ
											</span>
											<i className="fas fa-chevron-right pl-3"></i>
											<br />
											<small>
												¿Cómo se escribe en Japonés?
											</small>
											<i
												className="fas fa-3x fa-flag"
												style={{
													position: "absolute",
													top: 20,
													right: 10,
													opacity: 0.7,
												}}
											></i>
										</CardBody>
									</Card>
								</Link>
							</Col>
							<Col md="6">
								<Link
									to="/kanji/1"
									onClick={() => {
										this.scrollTop();
									}}
								>
									<Card
										style={{
											borderRadius: "10px",
											boxShadow:
												"0px 5px 25px 0px rgba(255, 54, 54, 0.6)",
											background:
												"linear-gradient(87deg,#f5365c 0,#f56036 100%)",
										}}
									>
										<CardBody className="text-white text-capitalize">
											<span className="title">
												Kanjis　漢字
											</span>
											<i className="fas fa-chevron-right pl-3"></i>
											<br />
											<small>
												¿Cómo se escribe en Japonés?
											</small>
											<i
												className="fas fa-3x fa-language"
												style={{
													position: "absolute",
													top: 20,
													right: 10,
													opacity: 0.7,
												}}
											></i>
										</CardBody>
									</Card>
								</Link>
							</Col>
							<Col md="12">
								<Card
									className="bg-info card-plain"
									style={{ borderRadius: "15px" }}
								>
									<CardHeader className="text-white text-center">
										<h4 className="title">
											Orígenes de la Escritura
										</h4>
									</CardHeader>
									<CardBody
										className="mt-5 bg-white px-3"
										style={{
											borderRadius: "15px",
										}}
									>
										<h4 className="text-center">
											¿De dónde surgen los Kanas y los
											Kanjis?
										</h4>
										<p>
											Como se explicó previamente, los "
											<strong>Kanas</strong>" son aquellas
											tablas de silabarios que constituyen
											todos los <strong>sonidos</strong>{" "}
											del idioma Japonés.
											<br />
											La tabla de{" "}
											<strong>Hiragana</strong> encuentra
											su origen como una versión{" "}
											<strong>simplificada</strong> de los{" "}
											<strong>Kanjis</strong>, y que
											eventualmente perdieron su
											"conexión" con el kanji original
											para pasar a ser solo una
											representación de su respectivo
											sonido.
										</p>
										<p>
											Por su parte los{" "}
											<strong>Katakana</strong> también se
											originan apartir de los{" "}
											<strong>Kanjis</strong>, pero a
											diferencia de los{" "}
											<strong>Hiragana</strong>, que eran
											una versión simplificada de algunos
											Kanjis, los Katakana son en realidad
											partes de Kanjis que se separaron de
											los mísmos con la finalidad de poder
											escribirlos más rápido. Y fue con el
											paso del tiempo que su uso pasó a
											ser, casi en su totalidad, el de
											poder escribir palabras,
											expresiones, y sonidos de idiomas{" "}
											<strong>extranjeros</strong>.
										</p>
										<p>
											Por último están los{" "}
											<strong>Kanjis</strong>, cuyo origen
											se encuentra en el idioma{" "}
											<strong>Chino</strong>.
											<br />
											Como ya fue mencionado, los Kanjis
											son una "
											<strong>importación</strong>" del
											susodicho ya que, en sus orígenes,
											el idioma Japonés estaba enteramente
											basado en el habla y no tenían
											ninguna forma de escritura.
											<br />
											No fue sino hasta que los japoneses
											notaron que el Imperio Chino estaba
											tan avanzado tecnológicamente, que
											decidieron comenzar a{" "}
											<strong>
												comerciar conocimientos
											</strong>{" "}
											con ellos.
										</p>
									</CardBody>
								</Card>
							</Col>
							<Col md="12">
								<Card
									className="bg-info card-plain"
									style={{ borderRadius: "15px" }}
								>
									<CardHeader className="text-white text-center px-3">
										<h4 className="title">
											Guía de Estudios
										</h4>
									</CardHeader>
									<CardBody
										className="mt-5 bg-white px-3"
										style={{
											borderRadius: "15px",
										}}
									>
										<h4 className="text-center">
											En qué orden estudiar
										</h4>
										<p>
											Todos sabemos que el idioma{" "}
											<strong>Japonés</strong> no es el
											más fácil de aprender que hay.{" "}
											<br />
											Cabe destacar que ésta App no es más
											que un complemento para tus
											estudios. Aún así puedes tomar como
											referencia el siguiente orden para
											comenzar a estudiar{" "}
											<strong>Japonés</strong>:
											<br />
										</p>
										<ul>
											<li>
												<p>
													En primer lugar, siempre es
													recomendable comenzar
													estudiando la tabla de
													silabarios de{" "}
													<strong>Hiragana</strong>
												</p>
											</li>
											<li>
												<p>
													Luego de tener bien
													estudiados los Hiragana, es
													momento de comenzar con la
													otra tabla de silabarios,{" "}
													<strong>Katakana</strong>
												</p>
											</li>
											<li>
												<p>
													Apartir de aquí lo más
													razonable sería comenzar con
													algunos{" "}
													<strong>Kanjis</strong>{" "}
													simples como los días de la
													semana por ejemplo.
												</p>
											</li>
											<li>
												<p>
													No hay que perder de vista a
													los <strong>Números</strong>{" "}
													ya que al funcionar
													ligeramente distinto que en
													Español, hay que
													acostumbrarse a sus
													denominaciones.
												</p>
											</li>
											<li>
												<p>
													Y para concluir es
													recoemndable comenzar a
													sumergirse de lleno en el
													idioma, estudiando{" "}
													<strong>
														las pertículas
													</strong>{" "}
													y su funcionamiento, un poco
													de{" "}
													<strong>vocabulario</strong>{" "}
													general, y{" "}
													<strong>más Kanjis</strong>
												</p>
											</li>
										</ul>
										<p>
											Apartir de éste punto, lo más
											recomendable es comenzar con un
											curso de Japonés como se debe, eso
											reducirá mucho la curva de
											aprendizaje.
										</p>
										<p>
											Recuerda que mientras más
											practíques, más fácil te será para
											progresar.
										</p>
									</CardBody>
								</Card>
							</Col>
							<Secciones />
						</Row>
					</Container>
				</div>
			</React.Fragment>
		);
	}
}
export default Principiantes;
