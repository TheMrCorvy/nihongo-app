import React from "react";
import { Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";

function scrollTo(e, particula) {
	e.preventDefault();
	document.getElementById(particula).scrollIntoView({
		block: "start",
		behavior: "smooth",
	});
}

export default function ParticulaNi() {
	return (
		<Col md="12">
			<Card
				className="card-plain bg-white"
				style={{ borderRadius: ".5rem" }}
				id="ni"
			>
				<div
					className="bg-info text-white text-center justify-content-center"
					style={{
						borderTopLeftRadius: ".5rem",
						borderBottomRightRadius: ".5rem",
						height: "40px",
						width: "40px",
						position: "absolute",
						top: 0,
						left: 0,
					}}
				>
					<p className="mb-0 h2">に</p>
				</div>
				<h4 className="text-right px-4 pt-2 float-right my-0">
					Partícula <strong>Ni</strong>
				</h4>
				<CardBody className="mt-5">
					<div
						style={{ width: "100%" }}
						className="row justify-content-between mx-0 px-3"
					>
						<p className="h5">Pronunciación:</p>

						<p className="h5">
							<strong>Ni</strong>
						</p>
					</div>
					<h4 className="text-center">¿Cuál es su Función?</h4>
					<p className="pl-3">
						La partícula に es una de las más complejas, ya que
						tiene muchos usos similares a otras partículas, como
						puede ser que indica el lugar de destino como{" "}
						<a
							href="#pablo"
							onClick={(e) => scrollTo(e, "he")}
							className="text-info"
							style={{
								fontSize: "1.2rem",
								lineHeight: "1.61rem",
							}}
						>
							へ
						</a>
						, pero de forma específica, igual que también indica el
						lugar al que se dirige una acción, similar al
						funcionamiento de{" "}
						<a
							href="#pablo"
							onClick={(e) => scrollTo(e, "de")}
							className="text-info"
							style={{
								fontSize: "1.2rem",
								lineHeight: "1.61rem",
							}}
						>
							で
						</a>
						.
					</p>
					<p className="px-3">
						Pero vamos al grano, cómo son los usos para ésta
						partícula?. Podemos reducir los usos de に en 2 ramas
						principales,{" "}
						<strong>marcar el destino de la acción</strong>, y{" "}
						<strong>marcar el lugar de existencia</strong>.
					</p>
					<h6 className="text-center text-info">
						Marcar destino de la acción
					</h6>
					<p className="px-3">
						¿Cómo es eso de{" "}
						<strong>marcar el destino de la acción</strong>? en éste
						caso estamos indicando hacia <strong>dónde</strong> se
						dirige el verbo de la oración modificada por に.
						Ejemplo, "el año que viene X banda{" "}
						<strong>vendrá</strong> a Argentina en su gira.",
						"vendrá a Argentina" indica que la acción se está
						dirigiendo hacia un lugar determinado, "estarán viniendo{" "}
						<strong>en dirección a</strong> Argentina".
					</p>
					<h6 className="text-center text-success">
						Marcar lugar de existencia
					</h6>
					<p className="px-3">
						En éste caso el "lugar de existencia", no se limita a
						los verbos de "haber / tener /
						existir",「あります」(para objetos inanimados)
						e「います」(para personas y animales), sino que se
						refiere a indicar <strong>en dónde</strong> se encuentra
						algo o alguien.
					</p>
					<p className="px-3">
						<strong>Nota:</strong> usaremos に siempre que se esté
						indicando la existencia de algo un un lugar específico,
						sea con 「あります」e「います」, o de cualquier otra
						forma. Pero más particularmente, al estar presentes
						alguno de esos 2 verbos.
					</p>
					<h4 className="text-center">Ejemplos</h4>
					<p className="px-3 text-center">
						<strong className="text-info">
							Destino de la acción:
						</strong>
						<br />
						「どこ
						<span className="text-success">に</span>　
						<span id="ikitai3">行</span>きますか。」
						<br />"<strong className="text-success">
							A dónde
						</strong>{" "}
						vas?"
					</p>
					<UncontrolledTooltip
						placement="top"
						target="ikitai3"
						delay={0}
					>
						い
					</UncontrolledTooltip>
					<p className="px-3 text-center">
						<strong className="text-info">
							Lugar de Existencia:
						</strong>
						<br />「<span id="nihon43">日本</span>
						<span className="text-success">に</span>　
						ヂズニランドが　ありますか。」
						<br />
						"Hay un Disneyland{" "}
						<strong className="text-success">en</strong> Japón?"
					</p>
					<UncontrolledTooltip
						placement="top"
						target="nihon43"
						delay={0}
					>
						にほん
					</UncontrolledTooltip>
				</CardBody>
			</Card>
		</Col>
	);
}
