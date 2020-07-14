import React from "react";
import { Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";

export default function Favores() {
	return (
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
						className="fas fa-3x fa-thumbs-up"
						style={{
							position: "absolute",
							top: 2,
							right: 3,
							opacity: 0.7,
						}}
					></i>
				</div>
				<h4 className="text-left px-3 pt-3 float-left my-0">
					Le hice el favor de...
				</h4>
				<CardBody className="mt-5 px-3">
					<p>
						En Japonés hay una forma de pedir las cosas, y una para
						decir que "dimos" o "recibimos" algo por amabilidad, por
						más raro que suene, traido al Español, es algo como "
						<strong className="text-info">
							le hice el favor a mi amigo de
						</strong>{" "}
						prestarle el libro para que estudie". Es una expresión
						para indicar que algo "
						<strong>no es una obligación</strong>, pero que lo
						hiciste igualmente" (sea una acción que realizó uno
						mismo, o que uno mismo es a quien iba dirigida la
						acción).
					</p>
					<p>
						Palabras para <strong>Dar</strong> y{" "}
						<strong>Recibir</strong> hay 3 en total, 2 para indicar
						que alguien recibió algo, y una para indicar que es el
						sujeto el que entregó algo, invariablemente de si es una
						acción o un objeto.
					</p>
					<ol>
						<li className="mt-5">
							<p>
								あげます (agemasu)
								<br />
								Sirve para indicar que el sujeto de la oración
								es quien entrega algo.
							</p>
						</li>
						<li className="mt-5">
							<p>
								もらいます (moraimasu)
								<br />
								Sirve para indicar que el sujeto de la oración
								recibe algo.
							</p>
						</li>
						<li className="mt-5">
							<p>
								くれます (kuremasu)
								<br />
								Sirve para indicar que el sujeto de la oración
								recibe algo,{" "}
								<strong className="text-danger">
									pero
								</strong>{" "}
								haciendo énfasis en quien entregó el objeto o
								realizó la acción.
							</p>
						</li>
					</ol>
					<p>
						Cuando tú mismo, o alguien de tu circulo social de
						cercanía (dígase amigos, familia, etc.), recibe un favor
						u objeto de alguien del circulo "exterior" (dígase un
						jefe en el trabajo, desconocidos, etc.),{" "}
						<strong className="text-success">
							se dirá くれます (kuremasu)
						</strong>
						.
					</p>
					<p>
						En todos los casos en los que "no se cruce de círculo",
						por decirlo de alguna forma, se puede decir también
						もらいます (moraimasu) si se quiere expresar que se
						recibió algo, o あげます (agemasu) si se quiere expresar
						que se entregó algo.
					</p>
					<p>Ejemplo:</p>
					<p className="text-center pb-5">
						<strong className="text-success">
							"Le dí un regalo a Satou-san"
						</strong>
						<br />
						<i className="fas fa-long-arrow-alt-down px-2"></i>
						<br />
						<span className="text-info">
							<span className="text-primary" id="watashiwa">
								私は
							</span>
							　<span className="text-warning">さとうさんに</span>
							　プレセントを　
							<span className="text-success">あげました。</span>
						</span>
						<br />
						<i className="fas fa-long-arrow-alt-down px-2"></i>
						<br />
						<strong className="text-info">
							<span className="text-primary">watashi wa</span>{" "}
							<span className="text-warning">satou-san ni</span>{" "}
							puresento o{" "}
							<span className="text-success">agemashita。</span>
						</strong>
					</p>
					<UncontrolledTooltip
						placement="top"
						target="watashiwa"
						delay={0}
					>
						わたし
					</UncontrolledTooltip>
					<p className="text-center mt-5">
						<strong className="text-success">
							"Satou-san me dió un regalo"
						</strong>
						<br />
						<i className="fas fa-long-arrow-alt-down px-2"></i>
						<br />
						<span className="text-info">
							<span className="text-primary">さとうさんは</span>　
							<span className="text-warning" id="watashiwa2">
								私に
							</span>
							　プレセントを　
							<span className="text-success">くれました。</span>
						</span>
						<br />
						<i className="fas fa-long-arrow-alt-down px-2"></i>
						<br />
						<strong className="text-info">
							<span className="text-primary">satou-san wa</span>{" "}
							<span className="text-warning">watashi ni</span>{" "}
							puresento o{" "}
							<span className="text-success">kuremashita。</span>
						</strong>
					</p>
					<UncontrolledTooltip
						placement="top"
						target="watashiwa2"
						delay={0}
					>
						わたし
					</UncontrolledTooltip>
					<h3 className="text-center text-info my-5 title">
						¡La Fórmula Mágica!
					</h3>
					<ol>
						<li className="mt-5">
							<p>
								<strong className="text-primary">
									Particula は (wa):
								</strong>{" "}
								La partícula は{" "}
								<strong className="text-danger">
									<u>SIEMPRE</u>
								</strong>{" "}
								indicará quien entregó el objeto o hizo la
								acción.
							</p>
						</li>
						<li className="mt-5">
							<p>
								<strong className="text-warning">
									Particula に (ni):
								</strong>{" "}
								La partícula に{" "}
								<strong className="text-danger">
									<u>SIEMPRE</u>
								</strong>{" "}
								indicará quien recibió el objeto o acción. Pero{" "}
								<strong className="text-danger">
									<u>CUIDADO</u>
								</strong>{" "}
								ya que ésta partícual va a variar dependiendo de
								lo que se haya entregado/recibido. Si se hizo
								una acción como favor hacia alguien, no
								necesariamente irá ésta partícula, puede ser
								otra dependiendo del caso.
							</p>
						</li>
						<li className="mt-5">
							<p>
								<strong className="text-success">
									Final de la oración:
								</strong>{" "}
								Al fial de la oración{" "}
								<strong className="text-danger">
									<u>SIEMPRE</u>
								</strong>{" "}
								irá alguna de las 3 palabras, ya que se debe
								indicar si es que se recibió algo o si se
								entregó algo a alguien.
							</p>
						</li>
					</ol>
					<h5 className="text-center text-info my-5 title">
						Los "Favores"
					</h5>
					<p>
						Cuando dirigimos una acció hacia una persona, o una
						persona dirige una acción hacia nosotros, usaremos{" "}
						<strong className="text-success">la forma て形</strong>{" "}
						(tekei) de los verbos, sumado a alguna de las 3 palabras
						para decir algo del estilo de "lo acompañé", "le
						presté", "le revisé la tarea", etc. todas esas acciones
						son dirigidas desde una persona, hacia otra.
					</p>
					<p>
						Cabe destacar que los verbos que usemos{" "}
						<strong>siempre</strong> deben ser "positivos" (uno no
						va por ahí diciendo "le hice el favor de golpearlo en la
						cara", o eso quisiera creer...).
					</p>
					<p>Ejemplo:</p>
					<p className="text-center pb-5">
						<strong className="text-success">
							"Acompañé/llevé a Satou-san al hotel."
						</strong>
						<br />
						<i className="fas fa-long-arrow-alt-down px-2"></i>
						<br />
						<span className="text-info">
							<span className="text-primary" id="watashiwa3">
								私は
							</span>
							　<span className="text-warning">さとうさんを</span>
							　 ホテルへ　
							<span className="text-danger">
								つれて<span id="itte">行</span>って
							</span>
							<span className="text-success">あげました。</span>
						</span>
						<br />
						<i className="fas fa-long-arrow-alt-down px-2"></i>
						<br />
						<strong className="text-info">
							<span className="text-primary">watashi wa</span>{" "}
							<span className="text-warning">satou-san o</span>{" "}
							hoteru e{" "}
							<span className="text-danger">tsurete itte</span>{" "}
							<span className="text-success">agemashita。</span>
						</strong>
					</p>
					<UncontrolledTooltip
						placement="top"
						target="watashiwa3"
						delay={0}
					>
						わたし
					</UncontrolledTooltip>
					<UncontrolledTooltip
						placement="top"
						target="itte"
						delay={0}
					>
						い
					</UncontrolledTooltip>
					<p className="text-center mt-5">
						<strong className="text-success">
							"El profesor nos revisó la tarea."
						</strong>
						<br />
						<small>(haciendo énfasis en el profesor)</small>
						<br />
						<i className="fas fa-long-arrow-alt-down px-2"></i>
						<br />
						<span className="text-info">
							<span className="text-primary" id="sensei">
								先生は
							</span>
							　
							<span className="text-warning">
								<span id="watashiwa4">私</span>たちに
							</span>
							　 しゅくだいを　
							<span className="text-danger">
								<span id="mite">見</span>て
							</span>
							<span className="text-success">くれました。</span>
						</span>
						<br />
						<i className="fas fa-long-arrow-alt-down px-2"></i>
						<br />
						<strong className="text-info">
							<span className="text-primary">sensei wa</span>{" "}
							<span className="text-warning">
								watashitachi ni
							</span>{" "}
							shukudai o <span className="text-danger">mite</span>{" "}
							<span className="text-success">kuremashita。</span>
						</strong>
					</p>
					<UncontrolledTooltip
						placement="top"
						target="watashiwa4"
						delay={0}
					>
						わたし
					</UncontrolledTooltip>
					<UncontrolledTooltip
						placement="top"
						target="sensei"
						delay={0}
					>
						せんせい
					</UncontrolledTooltip>
					<UncontrolledTooltip
						placement="top"
						target="mite"
						delay={0}
					>
						み
					</UncontrolledTooltip>
					<h5 className="title text-center text-danger">Nota:</h5>
					<p>
						Cabe destacar que para todos los casos, se pueden obviar
						tanto quien realizó la acción como quien la recibió (sea
						una acción u objeto) si y solo si queda suficientemente
						explícito en la oración.
					</p>
					<p>
						Y en caso de que no haya quedado suficientemente claro
						quien entregó que, o quien lo recibe, podremos preguntar
						de las siguientes formas:
					</p>
					<ul>
						<li>
							<p>
								だれは？ (dare wa?):
								<br />
								"Quien realizó la acción?", "Quien entregó el
								objeto?"
							</p>
						</li>
						<li>
							<p>
								だれ (dare) + la partícula usada en la frase +
								？:
								<br />
								"Quien recibió la acción", "Quien recibió el
								objeto?"
							</p>
						</li>
					</ul>
				</CardBody>
			</Card>
		</Col>
	);
}
