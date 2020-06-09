import React from "react";
import { Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";

export default function GrupoAdjetivos(props) {
	return (
		<div className="col-lg-12 row justify-content-center" id="adjetivos">
			<h2 className="col-lg-12 text-center title">Tipos de Adjetivos</h2>
			<h4 className="text-center">
				Los adjetivos, si bien hay algunas excepciones, se dividen en 2
				grupos según su terminación.
			</h4>
			<Col md="6">
				<Card
					style={{ borderRadius: ".5rem" }}
					className="bg-white card-plain px-3"
				>
					<h3
						className="title text-primary text-center"
						id="ikeyoushi"
					>
						い形ようし
					</h3>
					<UncontrolledTooltip
						placement="bottom"
						target="ikeyoushi"
						delay={0}
					>
						いけようし <br /> (Ikeyoushi)
					</UncontrolledTooltip>
					<CardBody>
						<h5 className="text-center">
							Son todos aquellos adjetivos terminados con el
							Hiragana い.
						</h5>
						<p>
							Por ejemplo, el adjetivo 元気 (げんき - genki –
							bien) no forma parte del grupo de "adjetivos i"
							puesto que acaba con la sílaba 「き」(ki), no
							「い」simple. Aunque al pronunciarla acabe con el
							sonido "i", al escribirlo en kanji o hiragana vemos
							que no es el mismo caso, pues el carácter de
							hiragana「い」no aparece en ningún sitio.
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
						className="title text-success text-center"
						id="nakeyoushi"
					>
						な形ようし
					</h3>
					<UncontrolledTooltip
						placement="bottom"
						target="nakeyoushi"
						delay={0}
					>
						なけようし <br /> (Nakeyoushi)
					</UncontrolledTooltip>
					<CardBody>
						<h5 className="text-center">
							Son todos aquellos adjetivos que <strong>no</strong>{" "}
							terminan con el Hiragana い.
						</h5>
						<p>
							Siempre hay algunas excepciones, como pueden ser el
							caso de <br /> Yuumei{" "}
							<i className="fas fa-long-arrow-alt-right px-2"></i>{" "}
							ゆうめい{" "}
							<i className="fas fa-long-arrow-alt-right px-2"></i>{" "}
							有名{" "}
							<i className="fas fa-long-arrow-alt-right px-2"></i>{" "}
							(famoso) <br /> O <br /> Kirei{" "}
							<i className="fas fa-long-arrow-alt-right px-2"></i>{" "}
							きれい{" "}
							<i className="fas fa-long-arrow-alt-right px-2"></i>{" "}
							綺麗{" "}
							<i className="fas fa-long-arrow-alt-right px-2"></i>{" "}
							(bonito/ limpio). <br /> Que terminan con hiragana
							い, pero sin embargo son Nakeyoushi.
						</p>
						<br />
						<p>
							Podremos identificar estas excepciones porque la
							mayoría, excepto 嫌い{" "}
							<i className="fas fa-long-arrow-alt-right px-2"></i>{" "}
							きらい{" "}
							<i className="fas fa-long-arrow-alt-right px-2"></i>{" "}
							kirai (odiar), al escribirlas en kanji vemos que no
							aparece el carácter en hiragana「い」por ninguna
							parte.
						</p>
					</CardBody>
				</Card>
			</Col>
		</div>
	);
}
