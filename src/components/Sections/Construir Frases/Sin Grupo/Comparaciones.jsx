import React from "react";
import { Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";
import Secciones from "components/Sections/Secciones";

export default function Comparaciones() {
	return (
		<React.Fragment>
			<Col md="12">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: ".5rem" }}
				>
					<CardBody className="px-3">
						<h4 className="text-center text-info title pt-0 mt-0">
							Las Comparaciones
						</h4>
						<p>
							Si te estabas preguntando cómo hacer comparaciones
							en japonés, deja de hacerlo. Vamos a ver como
							utilizar 「方 - ほう - hou」y「より - yori」 para,
							entre otras cosas, hacer comparaciones.
						</p>
						<p>
							En ésta sección veremos 3 "fórmulas" para pregunta y
							responder con comparaciones, aunque no son las
							únicas que existen para lograr dicho objetivo.
						</p>
					</CardBody>
				</Card>
			</Col>
			<Col md="12">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: ".5rem" }}
				>
					<CardBody className="px-3">
						<h5 className="text-center text-success pt-0 mt-0">
							X-cosa 1, es más "adjetivo" que X-cosa 2
						</h5>
						<p>
							Para ésta parte estaremos comparando 2 cosas,
							teniendo en cuenta al menos un aspecto de ambas.
							Dicho aspecto a comparar es el "adjetivo" en la
							fórmula.
						</p>
						<h5 className="text-center">
							Cómo construiremos la frase entonces?
						</h5>
						<p>
							La estructura de la frase en Japonés deberá ser la
							siguiente:
						</p>
						<p className="text-center">
							<strong className="text-warning">X-cosa 1</strong> +{" "}
							<span className="text-success">は</span> +{" "}
							<strong>X-cosa 2</strong>+{" "}
							<span className="text-info">より</span> +{" "}
							<strong className="text-primary">adjetivo/s</strong>
						</p>
						<ul>
							<li>
								<p>
									<span className="text-success">は</span>:
									(wa) La partícula wa.
								</p>
							</li>
							<li>
								<p>
									<span className="text-info">より</span>:
									(yori) El indicador de que estamos
									comparando 2 o más cosas en ésta oración.
								</p>
							</li>
							<li>
								<p>
									<strong className="text-primary">
										Adjetivo
									</strong>
									: El aspecto a comparar.
								</p>
							</li>
						</ul>
						<br />
						<br />
						<p>Ejemplo:</p>
						<p className="text-center">
							"<strong className="text-warning">Tokyo</strong>{" "}
							<strong className="text-success">es</strong>{" "}
							<strong className="text-info">más</strong>{" "}
							<strong className="text-primary">grande</strong>{" "}
							<strong className="text-info">que</strong>{" "}
							<strong>Osaka</strong>".
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							<span className="text-warning" id="tokyo">
								東京
							</span>
							<span className="text-success">は</span>
							<span id="oosaka">大阪</span>
							<span className="text-info">より</span>
							<span className="text-primary">
								<span id="ooki">大</span>きです
							</span>
							。
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							<strong className="text-warning" id="tokyo">
								toukyou
							</strong>{" "}
							<strong className="text-success">wa</strong>{" "}
							<strong id="oosaka">oosaka</strong>{" "}
							<strong className="text-info">yori</strong>{" "}
							<strong className="text-primary">ookidesu</strong>。
						</p>
						<UncontrolledTooltip
							placement="top"
							target="tokyo"
							delay={0}
						>
							とうきょう
						</UncontrolledTooltip>
						<UncontrolledTooltip
							placement="top"
							target="oosaka"
							delay={0}
						>
							おおさか
						</UncontrolledTooltip>
						<UncontrolledTooltip
							placement="top"
							target="ooki"
							delay={0}
						>
							おお
						</UncontrolledTooltip>
						<p>
							Recuerda que en éste caso el orden en el que digamos
							las cosas puede cambiar el significado de la frase,
							no es lo mísmo decir{" "}
							<span id="gato">
								"éste perro es más pequeño que el gato", que
								decir "éste gato es más pequeño que el perro".
							</span>
						</p>
						<UncontrolledTooltip
							placement="bottom"
							target="gato"
							delay={0}
						>
							no es lo mismo un gato montés a que te montés un
							gato
						</UncontrolledTooltip>
					</CardBody>
				</Card>
			</Col>
			<Col md="12">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: ".5rem" }}
				>
					<CardBody className="px-3">
						<h5 className="text-center text-success pt-0 mt-0">
							¿Entre X-cosa 1, X-cosa 2, etc..., cuál "es más
							que..."?
						</h5>
						<p>
							En ésta ocación estaremos viendo, tanto una
							afirmación, como la pregunta para comparar múltiples
							cosas, y decir cual se prefiere, de éste grupo, cual
							es el mas "algo", entre otras muchas posibles
							configuraciones.
						</p>
						<h5 className="text-center">
							La estructura para preguntar
						</h5>
						<p>
							La estructura de la <strong>pregunta</strong> en
							Japonés deberá ser la siguiente:
						</p>
						<p className="text-center">
							X-cosa 1 + <span className="text-warning">と</span>{" "}
							+ X-cosa 2 +{" "}
							<span className="text-warning">と</span> (...) +{" "}
							<span className="text-info">どちら</span> +{" "}
							<span className="text-success">が</span> +
							<strong className="text-primary">"la Frase"</strong>
						</p>
						<ul>
							<li>
								<p>
									<span className="text-success">が</span>:
									(ga) La partícula ga debe estar siempre
									presente en ésta estructura de frases.
								</p>
							</li>
							<li>
								<p>
									<span className="text-info">どちら</span>:
									(dochira) El indicador de que estamos
									comparando 2 o más cosas dentro de un grupo
									determinado. Traducido al Español sería la
									pregunta "cuál".
								</p>
							</li>
							<li>
								<p>
									<strong className="text-primary">
										"La Frase"
									</strong>
									: puede ser un adjetivo, un verbo o
									cualquier otra palabra. Aquí irán todos los
									aspectos que queramos destacar como{" "}
									<strong className="text-danger">
										"el más del grupo"
									</strong>
									, o que estemos comparando entre los objetos
									del grupo mencionado.
								</p>
							</li>
						</ul>
						<br />
						<br />
						<p>
							En éste caso el orden en el que digamos las cosas no
							cambiará el significado de la frase, ya que
							estaremos comparando{" "}
							<strong className="text-info">
								"cual es el más que..."
							</strong>{" "}
							dentro de un determinado grupo.
						</p>
						<p>Ejemplo:</p>
						<p className="text-center">
							"Entre el Fútbol,{" "}
							<strong className="text-warning">y</strong> el
							Voley, <strong className="text-info">cuál</strong>{" "}
							<strong className="text-success">es</strong>{" "}
							<strong className="text-info">más</strong>{" "}
							<strong className="text-primary">divertido</strong>
							?"
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							サッカー<span className="text-warning">と</span>
							　やきゅう<span className="text-warning">と</span>　
							<span className="text-info" id="dochira">
								何方
							</span>
							<span className="text-success">が</span>　
							<span className="text-primary" id="omoshiroi">
								面白い
							</span>
							ですか。
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							sakkaa<strong className="text-warning">to</strong>
							　yakyuu<strong className="text-warning">to</strong>
							　
							<strong className="text-info" id="dochira">
								dochira
							</strong>
							<strong className="text-success">ga</strong>　
							<strong className="text-primary" id="omoshiroi">
								omoshiroi
							</strong>
							desuka。
						</p>
						<UncontrolledTooltip
							placement="top"
							target="dochira"
							delay={0}
						>
							どちら
						</UncontrolledTooltip>
						<UncontrolledTooltip
							placement="top"
							target="omoshiroi"
							delay={0}
						>
							おもしろ
						</UncontrolledTooltip>

						<h5 className="text-center mt-5">
							La estructura para responder
						</h5>
						<p>
							La estructura de la <strong>respuesta</strong> en
							Japonés deberá ser la siguiente:
						</p>
						<p className="text-center">
							X-cosa +{" "}
							<span className="text-info">
								の<span id="houga2">方</span>が
							</span>{" "}
							+ <strong className="text-primary">La Frase</strong>
						</p>
						<UncontrolledTooltip
							placement="top"
							target="houga2"
							delay={0}
						>
							ほう
						</UncontrolledTooltip>
						<ul>
							<li>
								<p>
									<span className="text-info">の方が</span>:
									(no houga) Es el indicador de{" "}
									<strong>"es más que"</strong>. Cabe destacar
									que no se debe usar para "es el que más / es
									el más que...".
								</p>
								<p>
									<strong className="text-info">Nota:</strong>{" "}
									El が (ga) es la partícula ga, ésta debe
									estar siempre presente cuando usemos éste
									tipo de respuesta.
								</p>
							</li>
							<li>
								<p>
									<strong className="text-primary">
										La Frase
									</strong>
									: Aquí va el resto de la oración, sea el
									aspecto que estamos comparando, o bien algo
									que no haya estado presente como tal, dentro
									de la pregunta (algo asi como: "
									<strong className="text-warning">
										entre
									</strong>{" "}
									restaurante 1{" "}
									<strong className="text-warning">y</strong>{" "}
									restaurante 2,{" "}
									<strong className="text-info">
										cual es mas
									</strong>{" "}
									<strong className="text-primary">
										recomendable
									</strong>
									", "el restaurante 1 es mas barato").
								</p>
							</li>
						</ul>
						<p>Ejemplo:</p>
						<p className="text-center">
							"El Fútbol es más divertido".
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							サッカー<span className="text-info">の方が</span>　
							<span className="text-primary">面白い</span>です。
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							sakkaa
							<strong className="text-info">no　houga</strong>　
							<strong className="text-primary">omoshiroi</strong>
							desu。
						</p>
					</CardBody>
				</Card>
			</Col>

			<Col md="12">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: ".5rem" }}
				>
					<CardBody className="px-3">
						<h5 className="text-center text-success pt-0 mt-0">
							¿Cuál es EL MÁS de todos?
						</h5>
						<p>Para finalizar con las comparaciones,</p>
						<h5 className="text-center">
							La estructura para preguntar
						</h5>
						<p>
							La estructura de la <strong>pregunta</strong> en
							Japonés deberá ser la siguiente:
						</p>
						<p className="text-center">
							X-cosa 1 + <span className="text-warning">と</span>{" "}
							+ X-cosa 2 +{" "}
							<span className="text-warning">と</span> (...) +{" "}
							<span className="text-info">どちら</span> +{" "}
							<span className="text-success">が</span> +
							<strong className="text-primary">"la Frase"</strong>
						</p>
						<ul>
							<li>
								<p>
									<span className="text-success">が</span>:
									(ga) La partícula ga debe estar siempre
									presente en ésta estructura de frases.
								</p>
							</li>
							<li>
								<p>
									<span className="text-info">どちら</span>:
									(dochira) El indicador de que estamos
									comparando 2 o más cosas dentro de un grupo
									determinado. Traducido al Español sería la
									pregunta "cuál".
								</p>
							</li>
							<li>
								<p>
									<strong className="text-primary">
										"La Frase"
									</strong>
									: puede ser un adjetivo, un verbo o
									cualquier otra palabra. Aquí irán todos los
									aspectos que queramos destacar como{" "}
									<strong className="text-danger">
										"el más del grupo"
									</strong>
									, o que estemos comparando entre los objetos
									del grupo mencionado.
								</p>
							</li>
						</ul>
						<br />
						<br />
						<p>
							En éste caso el orden en el que digamos las cosas no
							cambiará el significado de la frase, ya que
							estaremos comparando{" "}
							<strong className="text-info">
								"cual es el más que..."
							</strong>{" "}
							dentro de un determinado grupo.
						</p>
						<p>Ejemplo:</p>
						<p className="text-center">
							"Entre el Fútbol,{" "}
							<strong className="text-warning">y</strong> el
							Voley, <strong className="text-info">cuál</strong>{" "}
							<strong className="text-success">es</strong>{" "}
							<strong className="text-info">más</strong>{" "}
							<strong className="text-primary">divertido</strong>
							?"
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							サッカー<span className="text-warning">と</span>
							　やきゅう<span className="text-warning">と</span>　
							<span className="text-info" id="dochira">
								何方
							</span>
							<span className="text-success">が</span>　
							<span className="text-primary" id="omoshiroi">
								面白い
							</span>
							ですか。
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							sakkaa<strong className="text-warning">to</strong>
							　yakyuu<strong className="text-warning">to</strong>
							　
							<strong className="text-info" id="dochira">
								dochira
							</strong>
							<strong className="text-success">ga</strong>　
							<strong className="text-primary" id="omoshiroi">
								omoshiroi
							</strong>
							desuka。
						</p>
						<UncontrolledTooltip
							placement="top"
							target="dochira"
							delay={0}
						>
							どちら
						</UncontrolledTooltip>
						<UncontrolledTooltip
							placement="top"
							target="omoshiroi"
							delay={0}
						>
							おもしろ
						</UncontrolledTooltip>

						<h5 className="text-center mt-5">
							La estructura para responder
						</h5>
						<p>
							La estructura de la <strong>respuesta</strong> en
							Japonés deberá ser la siguiente:
						</p>
						<p className="text-center">
							X-cosa +{" "}
							<span className="text-info">
								の<span id="houga2">方</span>が
							</span>{" "}
							+ <strong className="text-primary">La Frase</strong>
						</p>
						<UncontrolledTooltip
							placement="top"
							target="houga2"
							delay={0}
						>
							ほう
						</UncontrolledTooltip>
						<ul>
							<li>
								<p>
									<span className="text-info">の方が</span>:
									(no houga) Es el indicador de{" "}
									<strong>"es más que"</strong>. Cabe destacar
									que no se debe usar para "es el que más / es
									el más que...".
								</p>
								<p>
									<strong className="text-info">Nota:</strong>{" "}
									El が (ga) es la partícula ga, ésta debe
									estar siempre presente cuando usemos éste
									tipo de respuesta.
								</p>
							</li>
							<li>
								<p>
									<strong className="text-primary">
										La Frase
									</strong>
									: Aquí va el resto de la oración, sea el
									aspecto que estamos comparando, o bien algo
									que no haya estado presente como tal, dentro
									de la pregunta (algo asi como: "
									<strong className="text-warning">
										entre
									</strong>{" "}
									restaurante 1{" "}
									<strong className="text-warning">y</strong>{" "}
									restaurante 2,{" "}
									<strong className="text-info">
										cual es mas
									</strong>{" "}
									<strong className="text-primary">
										recomendable
									</strong>
									", "el restaurante 1 es mas barato").
								</p>
							</li>
						</ul>
						<p>Ejemplo:</p>
						<p className="text-center">
							"El Fútbol es más divertido".
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							サッカー<span className="text-info">の方が</span>　
							<span className="text-primary">面白い</span>です。
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							sakkaa
							<strong className="text-info">no　houga</strong>　
							<strong className="text-primary">omoshiroi</strong>
							desu。
						</p>
					</CardBody>
				</Card>
			</Col>

			<Secciones
				formasKei={true}
				gruposTiempos={true}
				particulas={true}
			/>
		</React.Fragment>
	);
}
