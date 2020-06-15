import React from "react";
import { Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";

export default function Taikei() {
	return (
		<Col md="12">
			<Card
				className="card-plain bg-white"
				style={{ borderRadius: ".5rem" }}
			>
				<CardBody className="px-3">
					<h4 className="text-center text-primary title pt-0 mt-0">
						La Forma たい<span id="kei1">形</span>
					</h4>
					<UncontrolledTooltip
						placement="top"
						target="kei1"
						delay={0}
					>
						けい
					</UncontrolledTooltip>
					<h4 className="text-center">¿Qué es y Cómo se usa?</h4>
					<p>
						La forma たい es una conjugación única para los{" "}
						<strong>verbos</strong>, y cuya su función será la de
						indicar{" "}
						<strong className="text-primary">voluntad</strong>.
					</p>
					<p>
						Y <strong>cómo se usa entonces?</strong> Ésta forma la
						utilizaremos para todas las ocaciones en que se quiera
						expresar <strong>voluntad</strong> de hacer algo,
						"Quisiera <strong>ir</strong> a algún lugar", "Desearía{" "}
						<strong>comer</strong> hamburgesas", "Me gustaría{" "}
						<strong>comprarlo</strong>", etc. En todos esos casos
						conjugaremos sus respectivos verbos, "ir", "comer", y
						"comprar", en la forma たい, para luego terminar la
						oración con「です」y de esa forma estaríamos expresando
						la voluntad de realizar esas acciones.
					</p>
					<br />
					<p>
						Pero las cosas no acaban aquí, la forma たい también se
						puede conjugar por tiempos, teniendo las 4
						configuraciones de siempre (presente afirmativo,
						presente negativo, pasado afirmativo, y pasado
						negativo).
					</p>
					<h4 className="text-center text-success">
						Presente Afirmativo
					</h4>
					<p>
						La conjugación en{" "}
						<strong className="text-success">
							Presente Afirmativo
						</strong>{" "}
						de la forma たい es sumamente sencilla.
					</p>
					<p>
						Sólo tendremos que tomar el verbo en su forma ます,
						quitarle el「ます」, y reemplazarlo por「たい」, y
						terminamos con「です」. Así de{" "}
						<span id="simple">simple y sencillo</span>.
					</p>
					<UncontrolledTooltip
						placement="top"
						target="simple"
						delay={0}
					>
						(si tan solo todas las cosas fueran así...)
					</UncontrolledTooltip>
					<p>
						Ejemplo: <br />
						かき
						<del className="text-info">ます</del>
						<i className="fas fa-long-arrow-alt-right px-2"></i>
						かき
						<span className="text-success">たいです。</span>
						<br />
						"Quiero escribir"
					</p>
					<h4 className="text-center text-danger">
						Presente Negativo
					</h4>
					<p>
						Apartir de éste punto comenzaremos a conjugar de verdad
						la forma たい, y comenzaremos de la mísma forma de
						antes, retirando el「ます」del verbo en su respectiva
						forma.
					</p>
					<p>
						Para el siguiente paso, no añadiremos「たい」, sino que
						será「たくない」, y por último terminaremos con「です」.
					</p>
					<p>
						Ejemplo: <br />
						かき
						<del className="text-info">ます</del>
						<i className="fas fa-long-arrow-alt-right px-2"></i>
						かき
						<span className="text-danger">たくないです。</span>
						<br />
						"No quiero escribir"
					</p>
					<h4 className="text-center text-success">
						Pasado Afirmativo
					</h4>
					<p>
						En el caso del{" "}
						<strong className="text-success">
							pasado afirmativo
						</strong>
						, haremos el mísmo proceso pero cambiando el「たい」,
						por「たかった」, y como de costumbre, terminamos
						con「です」.
					</p>
					<p>
						Ejemplo: <br />
						かき
						<del className="text-info">ます</del>
						<i className="fas fa-long-arrow-alt-right px-2"></i>
						かき
						<span className="text-success">たかったです。</span>
						<br />
						"Quería escribir"
					</p>
					<h4 className="text-center text-danger">Pasado Negativo</h4>
					<p>
						Para finalizar con la forma たい nos queda el{" "}
						<strong className="text-danger">pasado negativo</strong>
						, el cual se formará con una combinación del{" "}
						<strong className="text-success">
							pasado afirmativo
						</strong>{" "}
						con el{" "}
						<strong className="text-danger">
							presente negativo
						</strong>
						, quedando finalmente como「たくなかった」, y por
						último「です」.
					</p>
					<p>
						Ejemplo: <br />
						かき
						<del className="text-info">ます</del>
						<i className="fas fa-long-arrow-alt-right px-2"></i>
						かき
						<span className="text-danger">たくなかったです。</span>
						<br />
						"No quería escribir"
					</p>
					<h4 className="text-center text-warning" id="futsuu">
						普通形
					</h4>
					<UncontrolledTooltip
						placement="top"
						target="futsuu"
						delay={0}
					>
						ふつうけい
					</UncontrolledTooltip>
					<p>
						Pero,{" "}
						<strong className="text-info">
							cómo sería entonces con la forma ふつう (normal)?
						</strong>
					</p>
					<p>
						Para usar la forma たい dentro de la forma{" "}
						<strong>Normal</strong>, lo único que debemos hacer es
						símplemente quitar la terminación en「です」, sin
						necesidad de modificar al verbo ni nada por el estilo.
					</p>
				</CardBody>
			</Card>
		</Col>
	);
}
