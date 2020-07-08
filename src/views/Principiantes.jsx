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
											ocasiona que haya algunas
											inconsistencias, reglas que se
											aplican o no, excepciones generales
											o específicas, etc. <br /> Y también
											ocasiona ciertas diferencias entre
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
											Japonés.
										</p>
										<h5 className="text-info mt-5 text-center">
											Romaji
										</h5>
										<p>
											En primer lugar está el{" "}
											<strong>Romaji</strong>, que es la
											fonética del idioma escrito con las
											letras occidentales, para dejarlo
											más sencillo, vendría siendo la
											forma de escribir cómo suena el
											Japonés, pero con nuestras letras.
											<br />
											Si bien ésta escritura no es nativa
											de Japón, es una forma de escritura
											igual de válida que las demás.
										</p>
										<p>
											<strong className="text-info">
												Ejemplo:
											</strong>{" "}
											"
											<strong className="text-success">
												Japón
											</strong>
											" en <strong>Romaji</strong> sería "
											<strong className="text-success">
												nihon
											</strong>
											"
										</p>
										<h5 className="text-info mt-5 text-center">
											Hiragana y Katakana
										</h5>
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
											<strong className="text-info">
												Ejemplo:
											</strong>{" "}
											"
											<strong className="text-success">
												Japón
											</strong>
											" en <strong>Hiragana</strong> sería
											"
											<strong className="text-success">
												にほん
											</strong>
											"
										</p>
										<p>
											Y en <strong>Katakana</strong> sería
											"
											<strong className="text-success">
												ニホン
											</strong>
											"
										</p>
										<h5 className="text-info mt-5 text-center">
											Kanji
										</h5>
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
										<p>
											<strong className="text-info">
												Ejemplo:
											</strong>{" "}
											"
											<strong className="text-success">
												Japón
											</strong>
											" escrito con{" "}
											<strong>Kanjis</strong>, sería "
											<strong className="text-success">
												日本
											</strong>
											"
										</p>
									</CardBody>
								</Card>
							</Col>

							<Secciones
								hiragana={true}
								katakana={true}
								kanjis={true}
							/>
							<Col md="12">
								<Card
									className="bg-info card-plain"
									style={{ borderRadius: "15px" }}
								>
									<CardHeader className="text-white text-center">
										<h4 className="title">
											Imprenta vs Cursiva
										</h4>
									</CardHeader>
									<CardBody
										className="mt-5 bg-white px-3"
										style={{
											borderRadius: "15px",
										}}
									>
										<h4 className="text-center">
											Diferencias entre la Escritura a
											Mano y la Digital
										</h4>
										<p>
											Al igual que en el Español que
											tenemos una{" "}
											<strong>tipografía</strong> para la
											escritura <strong>a mano</strong> y
											otra para la escritura en{" "}
											<strong>digital</strong> o impresa,
											en <strong>Japonés</strong> pasa lo
											mísmo.
										</p>
										<p>
											Hay 2 formas de escribir{" "}
											<strong>Hiraganas</strong> y{" "}
											<strong>Kanjis</strong>, por un lado
											está la llamada{" "}
											<strong>Mincho</strong>, y por el
											otro la forma{" "}
											<strong>kyokasho</strong>, siendo la
											Mincho el "
											<strong>equivalente</strong>" de
											nuestra imprenta, y la Kyokasho el
											de la{" "}
											<strong>escritura a mano</strong>.
											<br />
											La Mincho, como se mencionó
											previamente, se utiliza para los
											entornos <strong>Digitales</strong>,
											mientras que la Kyokasho
											(traduciendose como "
											<strong>libro de texto</strong>") es
											la que se enseña en las escuelas en
											Japón, y en los cursos de Japonés
											para aprender el idioma.
										</p>
										<p>
											Los <strong>Hiraganas</strong> que
											caen en éste grupo de "escribirse
											distinto a mano y en digital" son
											los siguientes:
										</p>
										<Row className="justify-content-around px-3">
											<p className="px-3">き (ki)</p>
											<p className="px-3">さ (sa)</p>
											<p className="px-3">な (na)</p>
											<p className="px-3">ふ (fu)</p>
											<p className="px-3">む (mu)</p>
											<p className="px-3">も (mo)</p>
											<p className="px-3">り (ri)</p>
										</Row>
										<p>
											<strong>
												Cuál debería aprender entonces?
											</strong>{" "}
											Debido a la naturaleza de ésta App,
											se mostrará siempre la forma{" "}
											<strong>Mincho</strong>, pero lo más
											recomendable es que te acostumbres a
											escribir en la forma{" "}
											<strong>Kyokasho</strong>, aunque
											cabe destacar que los japoneses te
											entenderán sin importar de que forma
											escribas, siempre y cuando se
											parezca al caractér original.
										</p>
									</CardBody>
								</Card>
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
							<Secciones
								hiragana={true}
								katakana={true}
								kanjis={true}
								fechasNumeros={true}
								particulas={true}
								gruposTiempos={true}
								vocabularioPalabras={true}
								formasKei={true}
								construirFrases={true}
							/>
						</Row>
					</Container>
				</div>
			</React.Fragment>
		);
	}
}
export default Principiantes;
