import React from "react";
import { Col, Card, CardBody, UncontrolledTooltip, Progress } from "reactstrap";

export default function Ikeyoushi() {
	return (
		<React.Fragment>
			<Col md="6" id="ikeyoushi">
				<Card
					style={{ borderRadius: ".5rem" }}
					className="bg-white card-plain px-3"
				>
					<h3
						className="title text-primary text-center"
						id="ikeyoushi-titulo"
					>
						い形ようし
					</h3>
					<UncontrolledTooltip
						placement="top"
						target="ikeyoushi-titulo"
						delay={0}
					>
						いけようし <br /> (Ikeyoushi)
					</UncontrolledTooltip>
					<CardBody>
						<p className="mb-5">
							Para pasar los adjetivos い形ようし a forma{" "}
							<strong>Normal</strong>, lo único que debemos hacer
							es retirar la pertícula「です」(Desu) del final de
							la oración, o también se puede reemplazar
							por「だ」(Da) para hacer que sea un poco más
							informal.
						</p>
						<h5>Presente Afirmativo:</h5>
						<p>
							Para la conjugación del adjetivo en presente
							afirmativo, éste permanece sin ningún tipo de
							modificación. Solo le añadimos「です」(Desu) al
							final de la frase si queremos hacerla formal.
						</p>
						<h5 className="pt-5">Presente Negativo:</h5>
						<p>
							Para conjugar la forma presente negativa de los
							adjetivos い形ようし, el hiragana い al final se
							cambia por la terminación「くない」(Kunai), pero
							el「です」permanece al final de la frase sin ningún
							tipo de modificación.
						</p>
						<p>
							Ejemplo: <br />
							おもしろ
							<del className="text-success">い</del>
							です
							<i className="fas fa-long-arrow-alt-right px-2"></i>
							おもしろ
							<span className="text-success">くない</span>
							です
							<br />
							omoshiro
							<del className="text-success">
								<strong>i</strong>
							</del>
							desu
							<i className="fas fa-long-arrow-alt-right px-2"></i>
							omoshiro
							<strong className="text-success">kunai</strong>
							desu
						</p>
						<h5 className="pt-5">Pasado Afirmativo:</h5>
						<p>
							Para hacer la forma afirmativa en pasado de un
							adjetivo い形ようし, se elimina el hiragana い y se
							cambia por la terminación
							<span id="katta">「かった」</span>. Manteniendo el
							「です」al final de la frase.
						</p>
						<UncontrolledTooltip
							placement="top"
							target="katta"
							delay={0}
						>
							(Katta)
						</UncontrolledTooltip>
						<p>
							Ejemplo: <br />
							おもしろ
							<del className="text-success">い</del>
							です
							<i className="fas fa-long-arrow-alt-right px-2"></i>
							おもしろ
							<span className="text-success">かった</span>
							です
							<br />
							omoshiro
							<del className="text-success">
								<strong>i</strong>
							</del>
							desu
							<i className="fas fa-long-arrow-alt-right px-2"></i>
							omoshiro
							<strong className="text-success">katta</strong>
							desu
						</p>
						<h5 className="pt-5">Pasado Negativo:</h5>
						<p>
							Para hacer la forma negativa pasada, se elimina la
							última い, y se cambia por la terminación
							「くなかった」(kunakatta).
						</p>
						<p>
							Ejemplo: <br />
							おもしろ
							<del className="text-success">い</del>
							です
							<i className="fas fa-long-arrow-alt-right px-2"></i>{" "}
							おもしろ
							<span className="text-success">くなかった</span>
							です
							<br />
							omoshiro
							<del className="text-success">
								<strong>i</strong>
							</del>
							<i className="fas fa-long-arrow-alt-right px-2"></i>
							omoshiro
							<strong className="text-success">kunakatta</strong>
							desu
						</p>
					</CardBody>
				</Card>
			</Col>
			<Col md="6">
				<Card
					className="text-white"
					style={{
						background:
							"linear-gradient(87deg,#f5365c 0,#f56036 100%)",
						borderRadius: ".35rem",
					}}
				>
					<CardBody>
						<h5 className="title pt-0">Excepción</h5>
						<div className="progress-container progress-info pb-4">
							<Progress max="100" value="100"></Progress>
						</div>
						<p>
							Existe una excepción dentro de la conjugación de los
							い形ようし, para la palabra「いい」que significa
							"bien". Este adjetivo, originalmente se escribía
							「よい（良い）- yoi」, pero con el paso del tiempo
							se convirtió en 「いい」. <br />
							Aunque su forma en kanji「良い」ha permanecido hasta
							hoy en día y se lee como「よい」, se usa「いい」para
							cuando se escribe en hiragana, y sus conjugaciones
							son las siguientes:
						</p>
						<p>Presente Afirmativo: いい</p>
						<p>Presente Negativo: よくない</p>
						<p>Pasado Positivo: よっかた</p>
						<p>Pasado Negativo: よくなかった</p>
					</CardBody>
				</Card>
			</Col>
		</React.Fragment>
	);
}
