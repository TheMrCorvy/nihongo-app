import React from "react";
import { Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";

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
						<h5 className="text-center">Verbos Grupo 1</h5>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Nesciunt impedit vero vel, velit eligendi quam
							blanditiis harum fuga laboriosam recusandae, quod
							adipisci nihil eaque magnam distinctio aspernatur ex
							earum nisi.
						</p>
						<h5 className="text-center">Verbos Grupo 2</h5>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Eaque aliquid, tenetur minima exercitationem
							modi enim tempore tempora facilis labore ex aliquam
							cum qui deleniti neque quis, ipsum velit, blanditiis
							aperiam.
						</p>
						<h5 className="text-center">Verbos Grupo 3</h5>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Sint nulla officia voluptatibus tempore
							placeat? Ad quos nobis eligendi corporis aut
							accusamus? Quas accusantium deleniti et, adipisci
							aliquam quidem laboriosam magni?
						</p>
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
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Quo, perspiciatis libero, adipisci labore nisi
							iusto, eius quae fugiat nulla quod porro fugit atque
							magni doloribus modi quisquam eum expedita tenetur.
							<br />
							<br />
							<br />
							<strong>
								acá va lo de si algo está permitido o no
							</strong>
						</p>
						<p className="text-center">
							Ejemplo: <br />
							かき
							<del className="text-info">ます</del>
							<i className="fas fa-long-arrow-alt-right px-2"></i>
							かき
							<span className="text-success">たいです。</span>
							<br />
							"Quiero escribir"
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
							Para pedir cosas de la manera más{" "}
							<strong>amable</strong> y formal posible, se usará
							la forma て, dependiendo del nivel de formalidad se
							pueden <strong>modificar</strong>, o de plano quitar
							algunas cosas, pero la forma て{" "}
							<strong className="text-danger">
								debe permanecer en todo momento
							</strong>
							, ya que puede llegar a considerarse irrespetuoso el
							hacer peticiones de la manera incorrecta.
						</p>
						<h5 className="text-center pt-0 mt-0">
							¿Cuál es la Fórmula Mágica?
						</h5>
						<p>
							<br />
							<br />
							<br />
							<strong>acá va lo de pedir amablemente</strong>
						</p>
						<p className="text-center">
							Ejemplo: <br />
							かき
							<del className="text-info">ます</del>
							<i className="fas fa-long-arrow-alt-right px-2"></i>
							かき
							<span className="text-success">たいです。</span>
							<br />
							"Quiero escribir"
						</p>
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
