import React from "react";
import { Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";
import Secciones from "components/Sections/Secciones";

export default function UnirPalabras() {
	return (
		<React.Fragment>
			<Col md="12">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: ".5rem" }}
				>
					<CardBody className="px-3">
						<h4 className="text-center text-info title pt-0 mt-0">
							¿Cómo conectar palabras con "Y" en Japonés?
						</h4>
						<p>
							El idioma Japonés es uno basado en el respeto, es
							por eso que existen 2 "formas" de hablar. Por un
							lado el <strong>Vocabulario Formal</strong>, y por
							el otro el <strong>Vocabulario Informal</strong>, o
							"Normal", o "Simple".
						</p>
						<p>
							Dependiendo del contexto, es recomendable usar uno u
							otro, por ejemplo, uno no le hablaría en Vocabulario
							Informal a su jefe durante el trabajo, de la mísma
							forma que en ciertas situaciones informales el
							responder con Vocabulario Formal podría dar lugar a
							malentendidos.
						</p>
					</CardBody>
				</Card>
			</Col>
			<h4 className="text-center col-lg-12 text-info title pt-0 mt-0">
				Concatenar los Sustantivos
			</h4>
			<Col md="12">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: ".5rem" }}
					id="to"
				>
					<div
						className="bg-info text-white text-center justify-content-center"
						style={{
							borderTopLeftRadius: ".5rem",
							borderBottomRightRadius: ".5rem",
							height: "40px",
							width: "40px",
							position: "absolute",
							top: 0,
							left: 0,
						}}
					>
						<p className="mb-0 h2">と</p>
					</div>
					<h4 className="text-right px-4 pt-2 float-right my-0">
						Partícula <strong>To</strong>
					</h4>
					<CardBody className="mt-5">
						<div
							style={{ width: "100%" }}
							className="row justify-content-between mx-0 px-3"
						>
							<p className="h5">Pronunciación:</p>

							<p className="h5">
								<strong>To</strong>
							</p>
						</div>
						<h4 className="text-center">¿Cuál es su Función?</h4>
						<p className="px-3">
							La partícula と (to) tiene 3 usos principales, en
							primer lugar se usa como{" "}
							<strong>conector de sustantivos</strong> de forma
							identica a como en Español decimos "
							<strong>Y</strong>" para concatenar palabras, pero
							con la diferencia de que と (to){" "}
							<strong>bajo ninguna sircunstancia</strong> se puede
							usar para conectar ni <strong>verbos</strong> ni{" "}
							<strong>adjetivos</strong>, ya que ambos casos
							tienen sus propias formas de conectarse, como
							veremos a continuación.
						</p>

						<h4 className="text-center">Ejemplos</h4>
						<p className="px-3 text-center">
							<strong className="text-info">Conector "Y":</strong>{" "}
							"Frutas <strong className="text-success">y</strong>{" "}
							verduras"
							<br />「<span id="kudamono">果物</span>
							<span className="text-success">と</span>　
							<span id="yasai">野菜</span>。」
							<br />
							(kudamono{" "}
							<strong className="text-success">to</strong> yasai)
						</p>
						<UncontrolledTooltip
							placement="top"
							target="kudamono"
							delay={0}
						>
							くだもの
						</UncontrolledTooltip>
						<UncontrolledTooltip
							placement="top"
							target="yasai"
							delay={0}
						>
							やさい
						</UncontrolledTooltip>
					</CardBody>
				</Card>
			</Col>
			<Col md="12" id="concatenar">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: ".5rem" }}
				>
					<CardBody className="px-3">
						<h4 className="text-center text-info title pt-0 mt-0">
							Concatenar los Verbos
						</h4>
						<p>
							Concatenar, o <strong>unir</strong> los verbos en
							una oración hace referncia a lo que en Español
							decimos "<strong>Y</strong>", "leer{" "}
							<strong>y</strong> escribir", por ejemplo, con la
							diferencia que en Japonés las cosas no se unen de la
							mísma manera.
						</p>
						<p>
							Para los sustantivos se usa la{" "}
							<strong>Partícula</strong> と, mientras que los{" "}
							<strong>Adjetivos</strong> tenen su propia forma de
							unirse.
						</p>
						<h5 className="text-center pt-0 mt-5">
							¿Cómo se Conectan los Verbos?
						</h5>
						<p>
							Para unir múltiples verbos debemos utilizar la
							siguiente "fórmula", en primer lugar conjugaremos
							todos los verbos que vayan a ser unidos en sus
							respectivas formas て (te) teniendo en cuenta cómo
							se conjugan según su grupo claro, y ahora viene la
							parte importante, el{" "}
							<strong>último verbo de la frase</strong> es la que
							marca el <strong>tipo de discurso</strong> (si se
							está hablando a nivel Formal o Normal) y tambien el{" "}
							<strong>tiempo</strong> de la oración, por lo que es
							el <strong>último verbo</strong> el que no será
							conjugado a forma て (te), sino que se conjugará
							según el tiempo que se quiera indicar, y el nivel de
							formalidad.
						</p>
						<p className="text-center mt-5">
							Ejemplo: <br />
							"Me levanto, me visto, y voy al colegio."
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							<span className="text-success">
								起きて、服を　着て、学校に　行きます。
							</span>
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							<span className="text-info">
								おきて、ふくを　きて、がっこうに　いきます。
							</span>
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							<strong className="text-primary">
								okite、fuku o　kite、gakkou ni　ikimasu。
							</strong>
						</p>
					</CardBody>
				</Card>
			</Col>
			<h4 className="text-center col-lg-12 text-info title pt-0 mt-0">
				Concatenar los Adjetivos
			</h4>
			<Col md="6">
				<Card
					style={{ borderRadius: ".5rem" }}
					className="bg-white card-plain px-3"
				>
					<h3
						className="title text-primary text-center mb-0"
						id="ikeyoushi"
					>
						い形ようし
					</h3>
					<UncontrolledTooltip
						placement="top"
						target="ikeyoushi"
						delay={0}
					>
						いけようし <br /> (Ikeyoushi)
					</UncontrolledTooltip>
					<CardBody className="px-3">
						<p>
							Es realmente sencilla la forma de unir a los
							adjetivos い (i), solo basta con remover la「い -
							i」del final, y colocar en su lugar「
							<span className="text-info">くて</span> - kute」a
							todos los adjetivos de la oración que queramos unir,{" "}
							<strong className="text-danger">excepto</strong> al
							último adjetivo de la oración.
						</p>
						<p>
							<strong className="text-danger">Nota:</strong> Hay
							una excepción dentro de éste grupo, el
							adjetivo「いい - ii」("bien") pasará a ser「よくて -
							yokute」.
						</p>
						<p className="text-center">
							Ejemplo:
							<br />
							"Es espacioso y alto."
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />広<span className="text-info">くて</span>
							高い
							<span className="text-success">です</span> <br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							ひろ
							<span className="text-info">くて</span>
							　たかい
							<span className="text-success">です</span>
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							(hiro <strong className="text-info">
								kute
							</strong>{" "}
							takai <strong className="text-success">desu</strong>
							)
						</p>
					</CardBody>
				</Card>
			</Col>
			<Col md="6">
				<Card
					style={{ borderRadius: ".5rem" }}
					className="bg-white card-plain px-3"
				>
					<h3
						className="title text-success text-center mb-0"
						id="nakeyoushi"
					>
						な形ようし
					</h3>
					<UncontrolledTooltip
						placement="top"
						target="nakeyoushi"
						delay={0}
					>
						なけようし <br /> (Nakeyoushi)
					</UncontrolledTooltip>
					<CardBody className="px-3">
						<p>
							Para el caso de los adjetivos な (na) tendremos que
							seguir unas reglas ligeramente distintas.
						</p>
						<p>
							En primer lugar, quitaremos el「す - su」del「
							<span className="text-info">で</span>す - desu」al
							final de los adjetivos. Ésto lo haremos para{" "}
							<strong>todos</strong> los adjetivos,{" "}
							<strong className="text-danger">menos</strong> al
							último.
						</p>
						<p>
							Cuando ya llegamos al último adjetivo, y solo nos
							quedan éste y la palabra que estamos modificando,
							cambiaremos el final adjetivo, el「です」y será
							reemplazado por「
							<span className="text-success">な</span> - na」y por
							último solo resta poner a continuación la palabra
							que estamos modificando con los adjetivos.
						</p>
						<p className="text-center">
							Ejemplo:
							<br />
							"Es una persona tranquila y amable."
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							静か
							<span className="text-info">で</span>
							親切
							<span className="text-success">な</span> 人です
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							しずか
							<span className="text-info">で</span>
							　しんせつ
							<span className="text-success">な</span>
							　ひとです
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							(shizuka <strong className="text-info">
								de
							</strong>{" "}
							shinsetsu{" "}
							<strong className="text-success">na</strong> hito
							desu)
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
						<p className="mb-0">
							Y por último para combinar adjetivos{" "}
							<span className="text-success">な</span> (na) con
							adjetivos <span className="text-primary">い</span>{" "}
							(i) en una mísma oración, aplicaremos las mismas
							reglas de arriba. Modificamos los adjetivos según su
							tipo{" "}
							<strong className="text-info">¡y listo!</strong>,
							muy sencillo.
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
