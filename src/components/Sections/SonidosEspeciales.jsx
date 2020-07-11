import React from "react";
import { Col, Card, CardBody, Progress } from "reactstrap";

export default function SonidosEspeciales(props) {
	if (props.tabla === "hiragana") {
		return (
			<React.Fragment>
				<Col md="6">
					<Card
						style={{
							background:
								"linear-gradient(87deg, rgb(251, 99, 64) 0px, rgb(251, 177, 64) 100%)",
							borderRadius: "10px",
						}}
						className="text-white card-plain"
					>
						<CardBody className="px-3">
							<h5 className="title pt-0">Sonidos Especiales</h5>
							<div className="progress-container progress-info pb-4">
								<Progress max="100" value="100"></Progress>
							</div>
							<p>
								Al haber en la misma palabra un sonido terminado
								en お (sea el propio hiragana お u algún otro) y
								seguido por el hiragana う, se produce una
								excepción en la que, en lugar de pronunciar el
								sonido <strong>U</strong> como seria
								normalmente, se pronuncia como una{" "}
								<strong>O</strong> alargada o duplicada.
							</p>
							<p>
								De igual manera sucede con los sonidos
								terminados en え y seguidos por い, aunque no
								necesariamente siempre es asi.
							</p>
						</CardBody>
					</Card>
				</Col>
			</React.Fragment>
		);
	} else {
		return (
			<React.Fragment>
				<Col md="6">
					<Card
						style={{
							// background:
							// 	"linear-gradient(87deg, rgb(17, 205, 239) 0px, rgb(17, 113, 239) 100%)",
							background: "#1171ef",
							borderRadius: "10px",
						}}
						className="text-white card-plain"
					>
						<CardBody className="px-3">
							<h5 className="title pt-0">Sonidos Especiales</h5>
							<div className="progress-container progress-success pb-4">
								<Progress max="100" value="100"></Progress>
							</div>
							<p>
								Al haber en la misma palabra un sonido terminado
								en オ (sea el propio katakana オ u algún otro) y
								seguido por el katakana ウ, se produce una
								excepción en la que, en lugar de pronunciar el
								sonido <strong>U</strong> como seria
								normalmente, se pronuncia como una{" "}
								<strong>O</strong> alargada o duplicada.
							</p>
							<p>
								De igual manera sucede con los sonidos
								terminados en エ y seguidos por イ, aunque no
								necesariamente siempre es asi.
							</p>
							<p>
								En katakana también hay un caractér que funciona
								parecido al caso オ con ウ. El "ー" funciona
								para alargar el sonido de la sílaba anterior, de
								ésta forma, si hay un "アー", sería "Aa"
								alargando el sonido.
							</p>
						</CardBody>
					</Card>
				</Col>
			</React.Fragment>
		);
	}
}
