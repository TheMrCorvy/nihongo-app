import React from "react";
import { Col, Card, CardBody } from "reactstrap";

function scrollTo(e, particula) {
	e.preventDefault();
	document.getElementById(particula).scrollIntoView({
		block: "start",
		behavior: "smooth",
	});
}

export default function ParticulaDe() {
	return (
		<Col md="12">
			<Card
				className="card-plain bg-white"
				style={{ borderRadius: ".5rem" }}
				id="de"
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
					<p className="mb-0 h2">で</p>
				</div>
				<h4 className="text-right px-4 pt-2 float-right my-0">
					Partícula <strong>De</strong>
				</h4>
				<CardBody className="mt-5">
					<div
						style={{ width: "100%" }}
						className="row justify-content-between mx-0 px-3"
					>
						<p className="h5">Pronunciación:</p>

						<p className="h5">
							<strong>De</strong>
						</p>
					</div>
					<h4 className="text-center">¿Qué y cómo conecta?</h4>
					<p className="px-3">
						Al igual que{" "}
						<a
							href="#pablo"
							onClick={(e) => scrollTo(e, "ni")}
							className="text-info"
							style={{
								fontSize: "1.2rem",
								lineHeight: "1.61rem",
							}}
						>
							に
						</a>
						, で también es una partícula con una cierta complejidad
						para usarse.
					</p>
					<p className="px-3">
						Entre sus usos, で marcará{" "}
						<strong>el lugar de acción</strong> de la oración, no
						hacia donde se dirige, sino en dónde con exactitud se
						realiza una acción. De esta forma, interpretaremos "en{" "}
						<strong>dónde</strong> se compra eso?", como: "¿en{" "}
						<strong>dónde</strong> se encuentra el lugar para{" "}
						<strong>realizar</strong> la acción de{" "}
						<strong>comprar</strong> eso?".
					</p>
					<p className="px-3">
						Pasando a algunos de sus usos más específicos, la
						partícula で tambien se utiliza para marcar{" "}
						<strong>transporte</strong>, es decir, "utilizando{" "}
						<strong>qué medio de transporte</strong> irás al
						concierto", por ejemplo.
					</p>
					<p className="px-3">
						で También se utiliza para indicar la{" "}
						<strong>herramienta</strong>, sean herramientas físicas,
						conocimientos, Apps, dispositivos, etc. Por ejemplo:
						"Con <strong>qué</strong> utensillos se come eso?".
					</p>
					<h4 className="text-center">Ejemplos</h4>
					<p className="px-3">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quod tenetur dolore praesentium ipsam culpa similique
						laboriosam eaque dicta eum, rerum blanditiis, eius sunt
						odio accusantium consequatur quisquam molestiae. Dolor,
						temporibus.
					</p>
				</CardBody>
			</Card>
		</Col>
	);
}
