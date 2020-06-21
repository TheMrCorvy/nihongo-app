import React from "react";
import { Row, Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";

export default function Naikei() {
	return (
		<React.Fragment>
			<Col md="12">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: ".5rem" }}
				>
					<CardBody className="px-3">
						<h4 className="text-center text-danger title pt-0 mt-0">
							La Forma ない<span id="kei60">形</span>
						</h4>
						<UncontrolledTooltip
							placement="top"
							target="kei60"
							delay={0}
						>
							けい
						</UncontrolledTooltip>
						<p>
							La forma ない形 es una forma{" "}
							<strong className="text-danger">intermedia</strong>{" "}
							de los verbos, usada principalmente para marcar{" "}
							<strong className="text-danger">negación</strong> en
							el vocabulario <strong>Normal</strong> 「普通形 -
							ふつうけい」.
						</p>
						<p>
							Generalmente se usará ésta forma en conjunto con
							alguna otra para terminar la conjugación negativa de
							un verbo, como puede ser en el caso de{" "}
							<strong className="text-info">
								pedir amablemente
							</strong>{" "}
							algo, por ejemplo.
						</p>
						<p>
							Aparte de los usos mencionados, también se usa la
							forma ない de los verbos para indicar la{" "}
							<strong className="text-danger">obligación</strong>{" "}
							en un caso específico.
						</p>
						<h5 className="text-center py-3" id="negacion">
							Las Reglas para Conjugar
						</h5>
						<p>
							Para pasar los verbos a la forma{" "}
							<span className="text-danger">ない</span>, deberemos
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
								<span className="text-warning">き</span>
								<span className="text-info">ます</span>
								<br />
								<i className="fas fa-long-arrow-alt-down px-2"></i>
								<br />
								Terminarán en{" "}
								<span className="text-danger">か</span>
								<span className="text-primary">ない</span>
							</p>
							<p
								className="text-center px-4 py-4"
								style={{
									borderRadius: ".5rem",
									background: "#f2f2f2",
								}}
							>
								Verbos Terminados en{" "}
								<span className="text-warning">ぎ</span>
								<span className="text-info">ます</span>
								<br />
								<i className="fas fa-long-arrow-alt-down px-2"></i>
								<br />
								Terminarán en{" "}
								<span className="text-danger">が</span>
								<span className="text-primary">ない</span>
							</p>
							<p
								className="text-center px-4 py-4"
								style={{
									borderRadius: ".5rem",
									background: "#f2f2f2",
								}}
							>
								Verbos Terminados en{" "}
								<span className="text-warning">み</span>
								<span className="text-info">ます</span>
								<br />
								<i className="fas fa-long-arrow-alt-down px-2"></i>
								<br />
								Terminarán en{" "}
								<span className="text-danger">ま</span>
								<span className="text-primary">ない</span>
							</p>
							<p
								className="text-center px-4 py-4"
								style={{
									borderRadius: ".5rem",
									background: "#f2f2f2",
								}}
							>
								Verbos Terminados en{" "}
								<span className="text-warning">び</span>
								<span className="text-info">ます</span>
								<br />
								<i className="fas fa-long-arrow-alt-down px-2"></i>
								<br />
								Terminarán en{" "}
								<span className="text-danger">ば</span>
								<span className="text-primary">ない</span>
							</p>
							<p
								className="text-center px-4 py-4"
								style={{
									borderRadius: ".5rem",
									background: "#f2f2f2",
								}}
							>
								Verbos Terminados en{" "}
								<span className="text-warning">り</span>
								<span className="text-info">ます</span>
								<br />
								<i className="fas fa-long-arrow-alt-down px-2"></i>
								<br />
								Terminarán en{" "}
								<span className="text-danger">ら</span>
								<span className="text-primary">ない</span>
							</p>
							<p
								className="text-center px-4 py-4"
								style={{
									borderRadius: ".5rem",
									background: "#f2f2f2",
								}}
							>
								Verbos Terminados en{" "}
								<span className="text-warning">い</span>
								<span className="text-info">ます</span>
								<br />
								<i className="fas fa-long-arrow-alt-down px-2"></i>
								<br />
								Terminarán en{" "}
								<span className="text-danger">わ</span>
								<span className="text-primary">ない</span>
							</p>
							<p
								className="text-center px-4 py-4"
								style={{
									borderRadius: ".5rem",
									background: "#f2f2f2",
								}}
							>
								Verbos Terminados en{" "}
								<span className="text-warning">ち</span>
								<span className="text-info">ます</span>
								<br />
								<i className="fas fa-long-arrow-alt-down px-2"></i>
								<br />
								Terminarán en{" "}
								<span className="text-danger">た</span>
								<span className="text-primary">ない</span>
							</p>
							<p
								className="text-center px-4 py-4"
								style={{
									borderRadius: ".5rem",
									background: "#f2f2f2",
								}}
							>
								Verbos Terminados en{" "}
								<span className="text-warning">し</span>
								<span className="text-info">ます</span>
								<br />
								<i className="fas fa-long-arrow-alt-down px-2"></i>
								<br />
								Terminarán en{" "}
								<span className="text-danger">さ</span>
								<span className="text-primary">ない</span>
							</p>
						</Row>
						<h5 className="text-center title text-info">
							Verbos Grupo 2
						</h5>
						<p className="text-center">
							Para todos los verbos pertenecientes a éste grupo,
							lo único que se debe hacer es retirar la
							reminación「ます」y reemplazarla por「ない」.
						</p>
						<h5 className="text-center title text-success">
							Verbos Grupo 3
						</h5>
						<Row className="justify-content-around px-4">
							<p
								className="text-center px-5 py-4"
								style={{
									borderRadius: ".5rem",
									background: "#f2f2f2",
								}}
							>
								El Verbo{" "}
								<span className="text-success">します</span>
								<br />
								<i className="fas fa-long-arrow-alt-down px-2"></i>
								<br />
								Pasará a Ser{" "}
								<span className="text-danger">し</span>
								<span className="text-primary">ない</span>
							</p>
							<p
								className="text-center px-5 py-4"
								style={{
									borderRadius: ".5rem",
									background: "#f2f2f2",
								}}
							>
								El Verbo{" "}
								<span className="text-success">
									<span id="kimasu3">来</span>ます
								</span>
								<br />
								<i className="fas fa-long-arrow-alt-down px-2"></i>
								<br />
								Pasará a Ser{" "}
								<span className="text-danger">こ</span>
								<span className="text-primary">ない</span>
							</p>
							<UncontrolledTooltip
								placement="top"
								target="kimasu3"
								delay={0}
							>
								き
							</UncontrolledTooltip>
						</Row>
						<h4 className="title text-danger text-center">
							Excepciones
						</h4>
						<p>
							El verbo「あります」al pasar a la forma ない quedará
							simplemente como「ない」, y por el otro lado, el
							verbo「います」pasará a quedar de la siguiente
							manera「いない」.
						</p>
						<p>
							Por su parte el verbo「行きます」en ésta ocación no
							será una excepción y pasará a ser「いかない」.
						</p>
					</CardBody>
				</Card>
			</Col>
			<Col md="12" id="pedidos">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: ".5rem" }}
				>
					<CardBody className="px-3">
						<h4 className="text-center text-info title pt-0 mt-0">
							Pedidos / Peticiones
						</h4>
						<p>
							Hay 3 formas de hacer peticiones de la forma más{" "}
							<strong className="text-primary">
								amablemente
							</strong>{" "}
							posible.
						</p>
						<p>
							Por un lado se usa「ませんか。」para pedir cosas del
							estilo "no podrías hacer ésta cosa?". Ésta forma de
							hacer <strong>peticiones</strong> es la más usada
							para pedir las cosas amablemente y de manera{" "}
							<strong>Formal</strong>, pero tambien se puede unir
							algún verbo en la forma て con「下さい -
							ください」("por favor") para hacer una petición, y
							seguir sonando amable, "Harías ésta cosa" en la
							forma て + "por favor?".
						</p>
						<p>
							Y por último se puede usar la forma ない de una
							manera similar para obtener los mísmos resultados.
						</p>
						<p>
							Todas las formas son correctas y se puede modificar
							el nivel de formalidad en los casos del て形 y
							ない形.
						</p>
						<h4 className="text-center mt-5">
							¿Cómo sería con la Forma ない?
						</h4>
						<p>
							Al ser una forma de conjugación{" "}
							<strong className="text-danger">intermedia</strong>{" "}
							debemos añadir al final del verbo (luego de haberlo
							conjugado, claro) el hiragana「で」y concluir
							con「下さい - ください」.
						</p>
						<p className="text-center">
							Ejemplo: <br />
							<span className="text-danger">しない</span>
							<span className="text-primary">で</span>
							<span className="text-success">
								<span id="ku2">下</span>さい
							</span>
							。
							<br />"
							<strong className="text-danger">
								No lo hagas{" "}
							</strong>
							<strong className="text-success">por favor</strong>
							."
						</p>
						<UncontrolledTooltip
							placement="top"
							target="ku2"
							delay={0}
						>
							くだ
						</UncontrolledTooltip>
					</CardBody>
				</Card>
			</Col>
			<Col md="12" id="nakereba">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: ".5rem" }}
				>
					<CardBody className="px-3">
						<h4 className="text-center text-info title pt-0 mt-0">
							Obligación que Definitivamente debe Cumplirse
						</h4>
						<p>
							En el idioma Japonés hay una expresión que traducida
							sería algo del estilo "
							<strong className="text-info">
								definitivamente no puedo no hacer{" "}
							</strong>{" "}
							+ algún verbo". Los estudiantes del idioma suelen
							referirse a ésta como "el trabalenguas", pero...
							¿Cómo es ésta expresión?.
						</p>
						<h5 className="text-center text-success">
							「なければなりません」+ Algún Verbo
						</h5>
						<h4 className="text-center mt-5">
							¿Cuál es la Formula Mágica entonces?
						</h4>
						<p>
							Primero tomaremos un verbo y lo conjugaremos a la
							forma ない, esa es la parte fácil. Luego de eso
							debemos remover la terminación「ない」, todo
							tranquilo por ahora. Y para finalizar terminamos la
							oración con「なければなりません」.
						</p>
						<p className="text-center my-5">
							Ejemplo:
							<br />
							<span className="text-success">
								<span id="kusuri">薬</span>を
							</span>
							　
							<span className="text-danger" id="nomu2">
								飲まなければなりません。
							</span>
							<br />"
							<strong className="text-danger title">
								Debes tomar
							</strong>{" "}
							la{" "}
							<strong className="text-success">medicina</strong>."
						</p>
						<UncontrolledTooltip
							placement="top"
							target="kusuri"
							delay={0}
						>
							くすり
						</UncontrolledTooltip>
						<UncontrolledTooltip
							placement="top"
							target="nomu2"
							delay={0}
						>
							の
						</UncontrolledTooltip>
						<p>
							<strong className="text-info">Nota:</strong> Ésta
							expreción está conjugada en vocabulario{" "}
							<strong>Formal</strong>, para pasar al vocabulario{" "}
							<strong>Normal</strong> (普通形 - ふつうけい),
							debemos acortar el
							<span className="text-info">
								「なければなりません」
							</span>
							para quedar de la siguiente forma:{" "}
							<span className="text-success">
								「なければならない」
							</span>
							.
						</p>
					</CardBody>
				</Card>
			</Col>
		</React.Fragment>
	);
}
