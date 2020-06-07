import React from "react";
import { Col, Card, CardBody, Progress } from "reactstrap";

export default function EdadesTanjobi() {
	return (
		<React.Fragment>
			<Col md="12" id="edad">
				<Card
					className="card-plain text-white"
					style={{
						borderRadius: ".5rem",
						background:
							"linear-gradient(87deg,#f5365c 0,#f56036 100%)",
					}}
				>
					<CardBody className="text-left px-3">
						<h4 className="my-0 py-0 text-center">
							Cumpleaños y Edad
						</h4>
						<div className="progress-container progress-info pb-4">
							<Progress max="100" value="100"></Progress>
						</div>
						<p>
							<strong>Cómo hablamos de edades?</strong> <br />
							Para decir "años" refiriéndose a "cuantos años tengo
							/ tienes" se dice「さい」. De ésta forma quedaría:{" "}
							<br /> 私は　22さいです
							<br /> わたしは　22さいです <br /> (watashiwa
							nijuunisaidesu) <br />
							<strong>Tengo 22 años de edad</strong>.
						</p>
						<br />
						<p>
							<strong>Okey, y cómo pregunto entonces?</strong>
							<br />
							Para preguntar a alguien por su edad, basta con
							añadir el kanji「何」「なん」(nan) delante
							de「さい」y terminar la frase con「ですか」o「か」.
							<br />
							Quedando: <br />
							「何さいですか」
							<br />
							「なんさいですか」
							<br />
							(nansaidesuka)
						</p>
						<br />
						<h2 className="pt-0 title text-capitalize text-right">
							Pero alto ahí!
						</h2>
						<p className="text-right">
							<strong>
								Nos estábamos olvidando de los cumpleaños
							</strong>{" "}
							<br />
							"Cumpleaños" en Japonés
							es「たんじょうび」(tanjoubi), <strong>listo</strong>
							.
							<br />
							Qué pasa? no te satisface la respuesta? Okey, veamos
							un poco más de info.
							<br />
							Para hablar de <strong>Nuestro</strong> cumpleaños,
							usaremos la partícula「の」ya que estaremos hablando
							de una propiedad <strong>Nuestra</strong>, seguido
							de el mes「の」día del mes.
						</p>
						<p className="text-center">
							Ejemplo:
							<br />
							<strong>"Mi cumpleaños es el 11 de Agosto".</strong>
							<br />
							<br />
							私のたんじょうびは　八月の　十一日です。
							<br />
							<br />
							わたしのたんじょうびは　はちがつの　じゅういちにちです。
							<br />
							<br />
							watashi no tanjoubi wa hachigatsu no juuichinichi
							desu
						</p>
						<p className="text-left">
							<strong>
								Y para preguntar cuándo es el cumpleaños de
								alguien, diremos lo siguiente:
							</strong>
							<br />
							<br />
							「たんじょうびは　いつですか。」
							<br />
							(tanjoubiwa itsu desuka.)
							<br />
							<br />
							Siendo「いつ」la forma de preguntar "Cuándo?".
						</p>
					</CardBody>
				</Card>
			</Col>
		</React.Fragment>
	);
}
