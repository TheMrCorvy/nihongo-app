import React from "react";
import { Col, Card, CardBody } from "reactstrap";

export default function Toki() {
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
						className="fas fa-3x fa-clock"
						style={{
							position: "absolute",
							top: 4,
							right: 4,
							opacity: 0.7,
						}}
					></i>
				</div>
				<h4 className="text-left px-3 pt-3 float-left my-0">
					En el pasado, cuando...
				</h4>
				<CardBody className="mt-5 px-3">
					<p>
						En Japonés la palabra「時、- とき、- toki、」,
						significando literalmente "tiempo", podrá ser usada
						cuando queramos hablar acerca de cosas que ocurrieron en
						el pasado, cosas del estilo "antes, cuando estaba en la
						escuela..." o "cuando era joven", etc.
					</p>
					<p>
						Podremos usar la palabra とき、 para construir frases
						según los siguientes patrones:
					</p>
					<p className="text-center">
						Cuando sucedía <strong>A, </strong> sucedió{" "}
						<strong>B</strong>.
						<br />
						<br />
						Una vez ocurrió <strong>A,</strong> ocurrió{" "}
						<strong>B</strong>
					</p>
					<p className="text-right mt-5">
						Y otras estructuras por el estilo.
					</p>
					<p className="mt-5">
						Al igual que con casi todo lo demás, aquí también hay
						una fórmula mágica, pero antes de verla, hay que conocer
						las reglas para poder usarla.
					</p>
					<p className="mt-5">
						Podremos hacer uso de とき、 - toki、 en conjunto con
						los verbos, siempre y cuando éstos estén conjugados en 1
						de 3 opciones:
					</p>
					<ol>
						<li>
							<p>
								Verbos en la Forma 辞書形 じしけい (jishokei).
							</p>
						</li>
						<li>
							<p>Verbos en la Forma ない (nai).</p>
						</li>
						<li>
							<p>Y verbos en la Forma た (ta).</p>
						</li>
					</ol>
					<p className="mt-5">
						Por otro lado, los adjetivos deberán ir acompañados
						por「い」(i) o「な」(na), dependiendo de su grupo.
					</p>
					<p className="mt-5">
						Y por último, los sustantivos deberán estar conectados
						con la partícula「の」a la palabra「時、- とき、-
						toki、」
					</p>
					<p className="mt-5">
						Apartir de aquí hay 2 caminos, los verbos, adjetivos, y
						sustantivos conjugados en el tiempo{" "}
						<strong className="text-info">Presente</strong>, seguido
						por とき、.
					</p>
					<p>
						Y luego están los verbos, adjetivos y sustantivos
						conjugados en el tiempo{" "}
						<strong className="text-primary">Pasado</strong>,
						seguido por とき、.
					</p>
					<h5 className="text-center text-info title">
						Presente + とき、
					</h5>
					<p>
						Al usar ésta combinación estaremos indicando que{" "}
						<strong>mientras transcurría</strong> algo
						<strong>, ocurría</strong> otra cosa.
					</p>
					<p>
						Ambos en el <strong>Pasado</strong>, y ambos{" "}
						<strong className="text-info">al mismo tiempo.</strong>
					</p>
					<h5 className="text-center text-primary title">
						Pasado + とき、
					</h5>
					<p>
						Por el otro lado, usando ésta combinación estaremos
						indicando que <strong>una vez que terminó</strong> algo
						<strong>, ocurrió / ocurría</strong> otra cosa.
					</p>
					<p>
						Ambos en el <strong>Pasado</strong>, pero lo que viene
						antes de とき、ocurrió primero,{" "}
						<strong className="text-danger">y luego</strong> vino lo
						otro.
					</p>
					<h1 className="title text-center text-danger">¡Peligro!</h1>
					<p className="pb-5">
						La coma (、) en とき es{" "}
						<strong className="text-danger">fundamental</strong>{" "}
						para que la oración tenga sentido.
					</p>
					<h4 className="text-success mt-5">
						Las condiciones están completas, hora de{" "}
						<u className="title">Recitar el Conjuro</u>
					</h4>
					<h4 className="text-center text-info title">Los Verbos</h4>
					<h5 className="text-info">Verbos 辞書形 (jishokei)</h5>
					<p>
						Verbos en la Forma 辞書形 (jishokei){" "}
						<strong className="text-danger">+</strong> とき、
						<strong className="text-danger">+</strong> final de la
						oración{" "}
						<strong className="text-danger">en Pasado</strong>
						<br />
						<br />
						Equivaldrá a decir que <strong>
							mientras ocurría
						</strong>{" "}
						el verbo<strong>, ocurría también</strong> lo otro.
					</p>
					<h5 className="text-danger mt-5">Verbos ない (nai)</h5>
					<p>
						Verbos en la Forma ない (nai){" "}
						<strong className="text-danger">+</strong> とき、
						<strong className="text-danger">+</strong> final de la
						oración{" "}
						<strong className="text-danger">en Pasado</strong>
						<br />
						<br />
						Equivaldrá a decir que{" "}
						<strong>mientras no ocurría</strong> el verbo
						<strong>, ocurría también</strong> lo otro.
					</p>
					<h5 className="text-warning mt-5">Verbos た (ta)</h5>
					<p>
						Verbos en la Forma た (ta){" "}
						<strong className="text-danger">+</strong> とき、
						<strong className="text-danger">+</strong> final de la
						oración{" "}
						<strong className="text-danger">en Pasado</strong>
						<br />
						<br />
						Equivaldrá a decir que <strong>
							una vez ocurrido
						</strong>{" "}
						el verbo<strong>, ocurrió</strong> lo otro.
					</p>
					<h4 className="text-center text-primary title">
						Los Adjetivos
					</h4>
					<h5 className="text-primary">Adjetivos な (na)</h5>
					<p>
						Adjetivos な (na){" "}
						<strong className="text-danger">+</strong> な{" "}
						<strong className="text-danger">+</strong> とき、
						<strong className="text-danger">+</strong> final de la
						oración{" "}
						<strong className="text-danger">en Pasado</strong>
						<br />
						<br />
						Equivaldrá a decir que <strong>
							mientras ocurría
						</strong>{" "}
						el adjetivo<strong>, ocurría también</strong> lo otro.
					</p>
					<h5 className="text-success mt-5">Adjetivos い (i)</h5>
					<p>
						Adjetivos い (i){" "}
						<strong className="text-danger">+</strong> とき、
						<strong className="text-danger">+</strong> final de la
						oración{" "}
						<strong className="text-danger">en Pasado</strong>
						<br />
						<br />
						Equivaldrá a decir que <strong>
							mientras ocurría
						</strong>{" "}
						el adjetivo<strong>, ocurría también</strong> lo otro.
					</p>
					<p className="text-center">
						<strong className="text-info">Nota:</strong> Si
						conjugamos los adjetivos, obtendremos los mismos
						resultados que con los verbos en sus distintas formas.
					</p>
					<h4 className="text-center text-success title">
						Los Sustantivos
					</h4>
					<p>
						Sustantivos <strong className="text-danger">+</strong>{" "}
						の <strong className="text-danger">+</strong> とき、
						<strong className="text-danger">+</strong> final de la
						oración{" "}
						<strong className="text-danger">en Pasado</strong>
						<br />
						<br />
						Equivaldrá a decir que <strong>
							mientras ocurría
						</strong>{" "}
						el sustantivo<strong>, ocurría también</strong> lo otro.
					</p>
					<p className="text-center">
						<strong className="text-info">Nota:</strong> Si
						conjugamos los sustantivos, obtendremos los mismos
						resultados que con los verbos en sus distintas formas.
					</p>
				</CardBody>
			</Card>
		</Col>
	);
}
