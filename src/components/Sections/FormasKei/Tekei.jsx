import React from "react";
import { Col, Card, CardBody, UncontrolledTooltip, Row } from "reactstrap";

function scrollTo(seccion) {
	document.getElementById(seccion).scrollIntoView({
		block: "start",
		behavior: "smooth",
	});
}

export default function Tekei() {
	return (
		<React.Fragment>
			<Col md="12">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: ".5rem" }}
				>
					<CardBody className="px-3">
						<h4 className="text-center text-success title pt-0 mt-0">
							La Forma て<span id="kei10">形</span>
						</h4>
						<UncontrolledTooltip
							placement="top"
							target="kei10"
							delay={0}
						>
							けい
						</UncontrolledTooltip>
						<h4 className="text-center">¿Qué es y Cómo se usa?</h4>
						<p>
							La forma て<span id="kei11">形</span> es una forma
							de conjugar los <strong>verbos</strong> y tiene
							múltiples usos y funciones, entre los cuáles están
							el de{" "}
							<strong
								className="text-info"
								onClick={() => {
									scrollTo("concatenar");
								}}
							>
								Concatenar{" "}
								<i className="fas fa-chevron-right"></i>
							</strong>{" "}
							(unir) los verbos en una oración, para expresar{" "}
							<strong
								className="text-info"
								onClick={() => {
									scrollTo("rutinas");
								}}
							>
								Rutinas <i className="fas fa-chevron-right"></i>
							</strong>
							, para afirmar si algo está{" "}
							<strong
								className="text-info"
								onClick={() => {
									scrollTo("permisos");
								}}
							>
								Permitido{" "}
								<i className="fas fa-chevron-right"></i>
							</strong>{" "}
							o no, para hacer{" "}
							<strong
								className="text-info"
								onClick={() => {
									scrollTo("peticiones");
								}}
							>
								Peticiones{" "}
								<i className="fas fa-chevron-right"></i>
							</strong>
							, y por último, también se usa para expresar el{" "}
							<strong
								className="text-info"
								onClick={() => {
									scrollTo("presente");
								}}
							>
								Presente Contínuo{" "}
								<i className="fas fa-chevron-right"></i>
							</strong>
							.
						</p>
						<UncontrolledTooltip
							placement="top"
							target="kei11"
							delay={0}
						>
							けい
						</UncontrolledTooltip>
						<h3 className="text-center">
							Las reglas para Conjugar
						</h3>
						<p>
							Para pasar los verbos a la forma て, deberemos
							tomarlos en su forma「ます」y cambiar sus
							terminaciones siguiendo las siguientes reglas, según
							cada grupo de verbos.
						</p>
						<h5 className="text-center title text-warning">
							Verbos Grupo 1
						</h5>
						<Row className="justify-content-around px-4">
							<p
								className="text-center px-4 py-4"
								style={{
									borderRadius: ".5rem",
									background: "#f2f2f2",
								}}
							>
								Verbos Terminados en{" "}
								<span className="text-info">き</span>
								<span className="text-primary">ます</span>
								<br />
								<i className="fas fa-long-arrow-alt-down px-2"></i>
								<br />
								Terminarán en{" "}
								<span className="text-success">いて</span>
							</p>
							<p
								className="text-center px-4 py-4"
								style={{
									borderRadius: ".5rem",
									background: "#f2f2f2",
								}}
							>
								Verbos Terminados en{" "}
								<span className="text-info">ぎ</span>
								<span className="text-primary">ます</span>
								<br />
								<i className="fas fa-long-arrow-alt-down px-2"></i>
								<br />
								Terminarán en{" "}
								<span className="text-success">いで</span>
							</p>
							<p
								className="text-center px-4 py-4"
								style={{
									borderRadius: ".5rem",
									background: "#f2f2f2",
								}}
							>
								Verbos Terminados en{" "}
								<span className="text-info">み</span>
								<span className="text-primary">ます</span>
								<br />
								<i className="fas fa-long-arrow-alt-down px-2"></i>
								<br />
								Terminarán en{" "}
								<span className="text-success">んで</span>
							</p>
							<p
								className="text-center px-4 py-4"
								style={{
									borderRadius: ".5rem",
									background: "#f2f2f2",
								}}
							>
								Verbos Terminados en{" "}
								<span className="text-info">び</span>
								<span className="text-primary">ます</span>
								<br />
								<i className="fas fa-long-arrow-alt-down px-2"></i>
								<br />
								Terminarán en{" "}
								<span className="text-success">んで</span>
							</p>
							<p
								className="text-center px-4 py-4"
								style={{
									borderRadius: ".5rem",
									background: "#f2f2f2",
								}}
							>
								Verbos Terminados en{" "}
								<span className="text-info">り</span>
								<span className="text-primary">ます</span>
								<br />
								<i className="fas fa-long-arrow-alt-down px-2"></i>
								<br />
								Terminarán en{" "}
								<span className="text-success">って</span>
							</p>
							<p
								className="text-center px-4 py-4"
								style={{
									borderRadius: ".5rem",
									background: "#f2f2f2",
								}}
							>
								Verbos Terminados en{" "}
								<span className="text-info">い</span>
								<span className="text-primary">ます</span>
								<br />
								<i className="fas fa-long-arrow-alt-down px-2"></i>
								<br />
								Terminarán en{" "}
								<span className="text-success">って</span>
							</p>
							<p
								className="text-center px-4 py-4"
								style={{
									borderRadius: ".5rem",
									background: "#f2f2f2",
								}}
							>
								Verbos Terminados en{" "}
								<span className="text-info">ち</span>
								<span className="text-primary">ます</span>
								<br />
								<i className="fas fa-long-arrow-alt-down px-2"></i>
								<br />
								Terminarán en{" "}
								<span className="text-success">って</span>
							</p>
							<p
								className="text-center px-4 py-4"
								style={{
									borderRadius: ".5rem",
									background: "#f2f2f2",
								}}
							>
								Verbos Terminados en{" "}
								<span className="text-info">し</span>
								<span className="text-primary">ます</span>
								<br />
								<i className="fas fa-long-arrow-alt-down px-2"></i>
								<br />
								Terminarán en{" "}
								<span className="text-success">して</span>
							</p>
						</Row>
						<h5 className="text-center title text-primary">
							Verbos Grupo 2
						</h5>
						<p className="text-center">
							Para todos los verbos pertenecientes a éste grupo,
							lo único que se debe hacer es retirar la
							reminación「ます」y reemplazarla por「て」.
						</p>
						<h5 className="text-center title text-success">
							Verbos Grupo 3
						</h5>
						<p className="text-center">
							Exactamente lo mísmo que para el grupo 2.
						</p>
						<p className="text-center">
							Para todos los verbos pertenecientes a éste grupo,
							lo único que se debe hacer es retirar la
							reminación「ます」y reemplazarla por「て」.
						</p>
						<h3 className="text-center title text-danger">
							Excepción
						</h3>
						<p className="text-center">
							El verbo「<span id="ikimasu40">行</span>きます」se
							conjugará como「いって」
						</p>
						<UncontrolledTooltip
							placement="top"
							target="ikimasu40"
							delay={0}
						>
							い
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
							unirse, y la forma て形 es la forma que se utiliza
							para poder unir los verbos de una oración.
						</p>
						<h5 className="text-center pt-0 mt-0">
							¿Cómo se Conectan los Verbos?
						</h5>
						<p>
							Para unir múltiples verbos debemos seguir la
							siguiente "fórmula". En primer lugar conjugaremos
							todos los verbos que vayan a ser unidos en sus
							respectivas formas て, y ahora viene la parte
							importante, el{" "}
							<strong>último verbo de la frase</strong> es la que
							marca el <strong>tipo de discurso</strong> (si se
							está hablando a nivel Formal o Normal) y tambien el{" "}
							<strong>tiempo</strong> de la oración, por lo que es
							el <strong>último verbo</strong> el que no será
							conjugado a forma て, sino que se conjugará según el
							tiempo que se quiera indicar, y el nivel de
							formalidad.
						</p>
						<p className="text-center">
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
						</p>
					</CardBody>
				</Card>
			</Col>
			<Col md="12" id="rutinas">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: ".5rem" }}
				>
					<CardBody className="px-3">
						<h4 className="text-center text-info title pt-0 mt-0">
							Las Rutinas
						</h4>
						<p>
							Se utilizará <strong>siempre</strong> la forma て
							cuando hablemos de cosas que hacemos{" "}
							<strong>frecuentemente</strong>, sea todos los días,
							semanas, meses, inserte medida de tiempo aquí, etc.
						</p>
						<h5 className="text-center pt-0 mt-0">¿Cómo sería?</h5>
						<p>
							Con la mísma fórmula para{" "}
							<strong>concatenar</strong> los verbos, debemos
							poner a todos los verbos en su respectiva forma て,
							menos al último ya que es el verbo que indicará el{" "}
							<strong>tiempo</strong> y el{" "}
							<strong>nivel de formalidad</strong> de la oración.
						</p>
						<p>
							Una vez hecho eso, solo restará completar la frase
							con la medida de tiempo de "
							<strong>frecuencia</strong>" ("todos los días", "a
							veces", etc.).
						</p>
						<p className="text-center">
							Ejemplo: <br />
							"Todos los días me levanto, me visto, y voy al
							colegio."
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							<span className="text-success">
								毎日　起きて、服を　着て、学校に　行きます。
							</span>
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							<span className="text-info">
								まいにち　おきて、ふくを　きて、がっこうに　いきます。
							</span>
						</p>
					</CardBody>
				</Card>
			</Col>
			<Col md="12" id="permisos">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: ".5rem" }}
				>
					<CardBody className="px-3">
						<h4 className="text-center text-info title pt-0 mt-0">
							¿Premisos?
						</h4>
						<p>
							Aparte de las funciones previamente explicadas, la
							forma て se utiliza también{" "}
							<strong>muy frecuentemente</strong> para indicar si
							algo esta permitido o no, y de la misma forma para
							preguntar si es que se permite hacer algo o no, sea
							en el tipo de discurso <strong>Formal</strong>, o{" "}
							<strong>Normal</strong>.
						</p>
						<h5 className="text-center pt-0 mt-0">
							¿Cómo es entonces?
						</h5>
						<p>
							Podremos preguntar si es que algo{" "}
							<strong>está permitido</strong> o{" "}
							<strong>no</strong> de hacer, utilizando la forma て
							de los verbos de la siguiente manera.
						</p>
						<p>
							En primer lugar, como ya era de esperarse, debemos
							conjugar al verbo en la forma て, pero la cosa no
							acaba ahí ya que debemos hacer uso de la partícula
							<span className="text-primary">も</span> para
							conectar la oración con「いいですか。」,
							siendo「いい」el adjetivo de "<strong>bien</strong>"
							y la terminación「ですか。」la forma de indicar que
							se está haciendo una pregunta.
						</p>
						<p>
							Previo al verbo en て形, normalmente se suele
							indicar el <strong>dónde</strong> y el{" "}
							<strong>objeto</strong> a los cuáles se está
							haciendo referencia, si dijéramos "está permitido
							escribir?" solo habría que seguir las reglas
							planteadas hasta ahora, pero en el caso de "está
							permitido escribir <strong>con</strong>{" "}
							<strong className="text-success">lápiz</strong>{" "}
							<strong>en</strong> éste{" "}
							<strong className="text-info">formulario</strong>?",
							deberemos marcar el{" "}
							<strong className="text-success">objeto</strong> con
							la partícula を y el{" "}
							<strong className="text-info">dónde</strong> con su
							respectiva partícula, sea で o に.
						</p>
						<p className="text-center">
							Ejemplo: <br />
							ここ
							<span className="text-info">で</span>　
							<span id="shashin">写真</span>
							<span className="text-success">を</span>　とって
							<span className="text-primary">も</span>
							　いいですか。
							<br />
							"Estaría bien si saco{" "}
							<strong className="text-success">
								fotos
							</strong> en{" "}
							<strong className="text-info">éste lugar</strong>?"
						</p>
						<UncontrolledTooltip
							placement="top"
							target="shashin"
							delay={0}
						>
							しゃしん
						</UncontrolledTooltip>
						<h5 className="text-center text-success title">
							Pero aquí no termina la historia
						</h5>
						<p>
							Todavía nos queda por ver el cómo poder afirmar que
							algo <strong>sí</strong> está permitido o{" "}
							<strong>no</strong>.
						</p>
						<p>
							En primer lugar para afirmar que <strong>sí</strong>{" "}
							está permitido hacer algo, solo basta con quitar
							el「か」en la terminación 「いいですか。」. Así de
							fácil.
						</p>
						<p>
							Y para concluir, para lograr la tarea de afirmar que
							algo <strong>no</strong> está permitido, debemos
							hacer uso de la terminación 「いけません。」, con la
							diferencia de que en éste caso{" "}
							<strong className="text-primary">
								no se usará
							</strong>{" "}
							la partícula も, sino que haremos uso de{" "}
							<strong className="text-primary">は</strong>.
						</p>
						<p className="text-center">
							Ejemplo: <br />
							ここ
							<span className="text-info">に</span>　
							<span id="kuruma">車</span>
							<span className="text-success">を</span>　
							<span id="tomete">止</span>めて
							<span className="text-primary">は</span>
							　いけません。
							<br />"<strong className="text-info">
								Aquí
							</strong>{" "}
							no se permite estacionar con{" "}
							<strong className="text-success">autos</strong>."
						</p>
						<UncontrolledTooltip
							placement="top"
							target="tomete"
							delay={0}
						>
							と
						</UncontrolledTooltip>
						<UncontrolledTooltip
							placement="top"
							target="kuruma"
							delay={0}
						>
							くるま
						</UncontrolledTooltip>
						<p>
							<strong>Nota:</strong> También se usa la forma ない
							de los verbos para decir que algo{" "}
							<strong>no</strong> está permitido. Visita la
							sección de ない形 para ver más detalles.
						</p>
					</CardBody>
				</Card>
			</Col>
			<Col md="12" id="peticiones">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: ".5rem" }}
				>
					<CardBody className="px-3">
						<h4 className="text-center text-info title pt-0 mt-0">
							Pedidos / Peticiones
						</h4>
						<p>
							Hay 2 formas de hacer peticiones de la forma más{" "}
							<strong className="text-primary">
								amablemente
							</strong>{" "}
							posible.
						</p>
						<p>
							Por un lado se usa la forma ない形 para pedir cosas
							del estilo "no podrías hacer ésta cosa por favor?".
							Ésta forma de hacer <strong>peticiones</strong> es
							la más usada para pedir las cosas amablemente, pero
							tambien se puede unir algún verbo en la forma て con
							「下さい - ください」("por favor") para hacer una
							petición, y seguir sonando amable, "Harías ésta
							cosa" en la forma て + "por favor?".
						</p>
						<p>
							Ambas formas son correctas y se puede modificar el
							nivel de formalidad en ambos casos.
						</p>
						<p className="text-center">
							Ejemplo: <br />
							すこし<span id="yasumi">休</span>んで
							<span className="text-success">
								<span id="ku">下</span>さい
							</span>
							。
							<br />
							"Descansa un poco{" "}
							<strong className="text-success">por favor</strong>
							."
						</p>
						<UncontrolledTooltip
							placement="top"
							target="ku"
							delay={0}
						>
							くだ
						</UncontrolledTooltip>
						<UncontrolledTooltip
							placement="top"
							target="yasumi"
							delay={0}
						>
							やす
						</UncontrolledTooltip>
					</CardBody>
				</Card>
			</Col>
			<Col md="12" id="presente">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: ".5rem" }}
				>
					<CardBody className="px-3">
						<h4 className="text-center text-info title pt-0 mt-0">
							Presente Contínuo
						</h4>
						<p>
							Por último, pero no menos importante, para indicar
							lo que se está haciendo en{" "}
							<strong>éste momento</strong>, el Presente Contínuo,
							se debe usar una fórmula similar a las utilizadas
							previamente, pero con un ligero cambio{" "}
							<strong>sumamente importante</strong>, y es que
							estaremos añadiendo al final de la oración el
							verbo「います」para indicar "
							<strong>existencia</strong>" a modo de "yo{" "}
							<strong>existo</strong>
							ahora mísmo haciendo <strong>X e Y</strong> cosa en{" "}
							<strong>X o Y lugar</strong>".
						</p>
						<p>
							Cabe destacar que siempre que estémos indicando el
							lugar en <strong>Presente Contínuo</strong>, éste
							deberá estar conectado <strong>siempre</strong> con
							la partícula で, ya que estaríamos indicando el
							lugar en el que ahora mísmo nos encontramos
							realizando una acción.
						</p>
						<p>
							Por último, tambien es el verbo「います」el único
							que <strong>no</strong> debemos conjugar en la forma
							て ya que es el que se usará para indicar el{" "}
							<strong>tiempo</strong> y el{" "}
							<strong>nivel de formalidad</strong>. Todos los
							demás verbos de la oración <strong>deberán</strong>{" "}
							estar conjugados en dicha forma.
						</p>
						<p className="text-center">
							Ejemplo: <br />
							"Estoy vieno la tele en casa."
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							<span className="text-success">
								家で　テレビを　見て
								<span className="text-primary">います</span>。
							</span>
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							<span className="text-info">
								うちで　テレビを　みて
								<span className="text-primary">います</span>。
							</span>
						</p>
					</CardBody>
				</Card>
			</Col>
		</React.Fragment>
	);
}
