import React from "react";
import { Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";

export default function AdverbiosDerivadosDeAdjetivos() {
	return (
		<React.Fragment>
			<Col md="12">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: "15px" }}
					id="de"
				>
					<h4 className="text-left px-3 py-3 title text-primary float-left my-0">
						Adverbios que derivan de los Adjetivos
					</h4>
					<CardBody className="mt-5 px-3">
						<p>
							¿Cómo es eso de "crear adverbios"?, pues es muy
							simple realmente, lo que se hace es transformar
							algún adjetivo para añadirle lo que en Español
							diriamos "-mente".
						</p>
						<p>
							Por ejemplo, podremos transformar "rápido",
							<strong className="text-info">
								「はやい (hayai)」
							</strong>
							en "rápidamente",
							<strong className="text-success">
								「はやく (hayaku)」
							</strong>
							, o "salud"{" "}
							<span id="genki1" className="text-info">
								「元気」
							</span>{" "}
							en "saludable",
							<span id="genki2" className="text-success">
								「元気に」
							</span>
						</p>
						<UncontrolledTooltip
							placement="top"
							target="genki1"
							delay={0}
						>
							げんき
							<br />
							(genki)
						</UncontrolledTooltip>
						<UncontrolledTooltip
							placement="top"
							target="genki2"
							delay={0}
						>
							げんきに
							<br />
							(genkini)
						</UncontrolledTooltip>
						<h5 className="text-center my-5">
							Naturalmente, no son las mismas reglas para los
							adjetivos い (i), que para los な (na)
						</h5>
						<p>
							Por un lado, para "crear" un adverbio a partir de un
							adjetivo い, lo único que debemos hacer es quitar la
							い del adjetivo y sustituirla por く.
						</p>
						<h4 className="text-center">Ejemplo</h4>
						<p className="text-center pb-5">
							<strong className="text-success">
								"Asombroso / Impresionante / Increíble"
							</strong>
							<br />「 凄<span className="text-info">い</span> -
							すご
							<span className="text-info">い</span> - sugo
							<strong className="text-info">i</strong>」
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							<strong className="text-info text-capitalize">
								"realmente / en realidad / en serio"
							</strong>
							<br />「 凄<span className="text-success">く</span>{" "}
							- すご
							<span className="text-success">く</span> - sugo
							<strong className="text-success">ku</strong>」
						</p>
						<p className="mt-5">
							Y por el otro lado, para "crear" un adverbio a
							partir de un adjetivo な, bastará con añadir「に -
							ni」al final de éste.
						</p>
						<h4 className="text-center">Ejemplo</h4>
						<p className="text-center">
							<strong className="text-success">
								"Hermoso / Ordenado / Limpio"
							</strong>
							<br />「 きれい - kirei」
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							<strong className="text-info">"Limpiamente"</strong>
							<br />「 きれいに - kireini」
						</p>
					</CardBody>
				</Card>
			</Col>
		</React.Fragment>
	);
}
