import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import VerbosFutsu from "components/Sections/Tiempos/VerbosFutsu";
import Secciones from "components/Sections/Secciones";

export default function FutsuuKei() {
	return (
		<React.Fragment>
			<Col md="12">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: ".5rem" }}
				>
					<CardBody className="px-3">
						<h4 className="text-center text-info title pt-0 mt-0">
							Vocabulario Simple, Normal, Informal
						</h4>
						<p>
							El idioma Japonés es uno basado en el respeto, es
							por eso que existen 2 "formas" de hablar. Por un
							lado el <strong>Vocabulario Formal</strong>, y por
							el otro el <strong>Vocabulario Informal</strong>, o
							"Normal", o "Simple".
						</p>
						<p>
							Dependiendo del contexto, es recomendable usar uno u
							otro, por ejemplo, uno no le hablaría en Vocabulario
							Informal a su jefe durante el trabajo, de la mísma
							forma que en ciertas situaciones informales el
							responder con Vocabulario Formal podría dar lugar a
							malentendidos.
						</p>
					</CardBody>
				</Card>
			</Col>
			<VerbosFutsu title="los verbos" />
			<Col md="12">
				<Card
					style={{ borderRadius: ".5rem" }}
					className="bg-white card-plain px-3"
				>
					<h3 className="title text-success text-center">
						Adjetivos Y Sustantivos
					</h3>
					<CardBody>
						<Row>
							<Col md="12" className="mb-5">
								<p>
									Para pasar los adjetivos del Vocabulario
									Formal al Informal hay 2 formas distintas,
									una para los adjetivos な (na) y otra para
									los adjetivos い (i).
								</p>
							</Col>
							<h5 className="col-lg-12 text-primary title">
								Adjetivos い
							</h5>
							<Col md="12" className="mb-5">
								<p>
									En el caso de los adjetivos pertenecientes a
									éste grupo, lo único que debemos hacer para
									pasar al Vocabulario Normal, es simplemente
									quitar la terminación「です」.
								</p>
							</Col>
							<h5 className="col-lg-12 text-success title">
								Adjetivos な y{" "}
								<span className="text-info">Sustantivos</span>
							</h5>
							<Col md="6" className="mb-5">
								<h5>Presente Afirmativo:</h5>
								<p>
									Para el presente afirmativo deberemos
									reemplazar el「です」por「だ」,¡y listo!
								</p>
								<p className="mt-5">
									<strong className="text-success">
										Ejemplo Adjetivo:
									</strong>{" "}
									ひまだ (hima da - "blanco / puro")
								</p>
								<p>
									<strong className="text-info">
										Ejemplo Sustantivo:
									</strong>{" "}
									学生だ (gakuseida - "soy estudiante")
								</p>
							</Col>

							<Col md="6" className="mb-5">
								<h5>Presente Negativo:</h5>
								<p>
									Para conjugar los adjetivos de éste grupo
									y/o a los sustantivos, al Presente Negativo,
									lo que debemos hacer es utilizar una
									acortación de la misma conjugación en la
									versión formal.
								</p>
								<p>
									En la versión formal,
									usabamos「じゃありません - jaarimasen」,
									mientras que en la Forma Simple,
									usaremos「じゃない - ja nai」.
								</p>
								<p className="mt-5">
									<strong className="text-success">
										Ejemplo Adjetivo:
									</strong>{" "}
									ひまじゃない (hima ja nai - opuesto de
									"blanco / puro")
								</p>
								<p>
									<strong className="text-info">
										Ejemplo Sustantivo:
									</strong>{" "}
									学生じゃない (gakusei ja nai - "no soy
									estudiante")
								</p>
							</Col>

							<Col md="6" className="mb-5">
								<h5>Pasado Afirmativo:</h5>
								<p>
									En la forma Formal, para el pasado
									afirmativo se usa「でした - deshita」,
									mientras que para la forma Normal, estaremos
									usando「だった - datta」.
								</p>

								<p className="mt-5">
									<strong className="text-success">
										Ejemplo Adjetivo:
									</strong>{" "}
									ひまだった (hima datta - pasado de de
									"blanco / puro")
								</p>
								<p>
									<strong className="text-info">
										Ejemplo Sustantivo:
									</strong>{" "}
									学生だった (gakusei datta - "fui
									estudiante")
								</p>
							</Col>

							<Col md="6">
								<h5>Pasado Negativo:</h5>
								<p>
									Y por último dentro del grupo de los
									Adjetivos, y para todos los Sustantivos,
									para formar el Pasado Negativo en la forma
									Normal, igual que en la Formal, mezclaremos
									las formas del pasado afirmativo y el
									presente negativo, quedando tal
									que「じゃなかった - ja nakatta」
								</p>
								<p className="mt-5">
									<strong className="text-success">
										Ejemplo Adjetivo:
									</strong>{" "}
									ひまじゃなかった (hima ja nakatta - pasado
									negativo de "blanco / puro")
								</p>
								<p>
									<strong className="text-info">
										Ejemplo Sustantivo:
									</strong>{" "}
									学生じゃなかった (gakusei ja nakatta - "no
									fui estudiante")
								</p>
							</Col>
						</Row>
					</CardBody>
				</Card>
			</Col>
			<Secciones formasKei={true} gruposTiempos={true} />
		</React.Fragment>
	);
}
