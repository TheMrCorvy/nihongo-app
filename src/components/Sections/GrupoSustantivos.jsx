import React from "react";
import { Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";

export default function GrupoSustantivos(props) {
	return (
		<div className="col-lg-12 row justify-content-center" id="sustantivos">
			<h2 className="col-lg-12 text-center title">
				Tipos de Sustantivos
			</h2>
			<h4 className="text-center">
				El japonés no tiene ni género gramatical, ni número ni
				artículos. Los sustantivos se dividen únicamente según su
				origen, y no varían ni se conjugan como los verbos o adjetivos.
			</h4>
			<Col md="4">
				<Card
					style={{ borderRadius: ".5rem" }}
					className="bg-white card-plain px-3"
				>
					<h3 className="title text-warning text-center" id="wago">
						和語
					</h3>
					<UncontrolledTooltip
						placement="bottom"
						target="wago"
						delay={0}
					>
						わご <br /> (Wago)
					</UncontrolledTooltip>
					<CardBody>
						<h5>
							Son de origen japonés. Se escriben con un solo kanji
							o en hiragana, o combinando ambos.
						</h5>
					</CardBody>
				</Card>
			</Col>
			<Col md="4">
				<Card
					style={{ borderRadius: ".5rem" }}
					className="bg-white card-plain px-3"
				>
					<h3 className="title text-primary text-center" id="kango">
						漢語
					</h3>
					<UncontrolledTooltip
						placement="bottom"
						target="kango"
						delay={0}
					>
						かんご <br /> (Kango)
					</UncontrolledTooltip>
					<CardBody>
						<h5>
							Son de origen Chino. Se escriben únicamente con
							Kanji.
						</h5>
					</CardBody>
				</Card>
			</Col>
			<Col md="4">
				<Card
					style={{ borderRadius: ".5rem" }}
					className="bg-white card-plain px-3"
				>
					<h3 className="title text-success text-center" id="garaigo">
						外来語
					</h3>
					<UncontrolledTooltip
						placement="bottom"
						target="garaigo"
						delay={0}
					>
						がらいご <br /> (Garaigo)
					</UncontrolledTooltip>
					<CardBody>
						<h5>
							Palabras de que provienen de lenguajes extranjeros.
							Se escriben únicamente en katakana.
						</h5>
					</CardBody>
				</Card>
			</Col>
		</div>
	);
}
