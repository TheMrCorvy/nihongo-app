import React from "react";
import { Col, Card, CardBody, Progress, UncontrolledTooltip } from "reactstrap";

export default function TsuChiquita(props) {
	if (props.tabla === "hiragana") {
		return (
			<React.Fragment>
				<Col md="6">
					<Card
						style={{
							background: "rgb(17, 113, 239)",
							borderRadius: ".5rem",
						}}
						className="text-white"
					>
						<CardBody>
							<h5 className="title pt-0">
								<span id="tsu">つ</span>{" "}
								<span id="alexbychiquito">Chiquita</span>
							</h5>
							<UncontrolledTooltip
								placement="bottom"
								target="tsu"
								delay={0}
							>
								Tsu
							</UncontrolledTooltip>
							<UncontrolledTooltip
								placement="bottom"
								target="alexbychiquito"
								delay={0}
							>
								Easter egg: Alexby Chiquito
							</UncontrolledTooltip>
							<div className="progress-container progress-success pb-4">
								<Progress max="100" value="100"></Progress>
							</div>
							<p>
								En el idioma Japonés existe un sonido de "doble
								consonante". Éste se genera al poner una つ de
								tamaño más pequeño escrita en Hiragana o
								Katakana, con la función de generar una "pausa"
								o "tropiezo" antes de la siguiente sílaba.{" "}
								<br /> Por ejemplo, si hubiera una つ pequeña
								antes de un sonido "ta", se pronunciaria
								parecido a "tta", es más o menos como si
								quisieras decirlo, pero no estás seguro, pero lo
								dices igualmente.
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
							background:
								"linear-gradient(87deg, #5e72e4 0, #825ee4 100%)",
							borderRadius: ".5rem",
						}}
						className="text-white"
					>
						<CardBody>
							<h5 className="title pt-0">
								<span id="tsu">ツ</span>{" "}
								<span id="alexbychiquito">Chiquita</span>
							</h5>
							<UncontrolledTooltip
								placement="bottom"
								target="tsu"
								delay={0}
							>
								Tsu
							</UncontrolledTooltip>
							<UncontrolledTooltip
								placement="bottom"
								target="alexbychiquito"
								delay={0}
							>
								Easter egg: Alexby Chiquito
							</UncontrolledTooltip>
							<div className="progress-container progress-info pb-4">
								<Progress max="100" value="100"></Progress>
							</div>
							<p>
								En el idioma Japonés existe un sonido de "doble
								consonante". Éste se genera al poner una ツ de
								tamaño más pequeño escrita en Hiragana o
								Katakana, con la función de generar una "pausa"
								o "tropiezo" antes de la siguiente sílaba.{" "}
								<br /> Por ejemplo, si hubiera una ツ pequeña
								antes de un sonido "ta", se pronunciaria
								parecido a "tta", es más o menos como si
								quisieras decirlo, pero no estás seguro, pero lo
								dices igualmente.
							</p>
						</CardBody>
					</Card>
				</Col>
			</React.Fragment>
		);
	}
}
