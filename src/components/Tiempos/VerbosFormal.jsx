import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";

export default function VerbosFormal() {
	return (
		<React.Fragment>
			<Col md="12" id="formal">
				<Card
					style={{ borderRadius: ".5rem" }}
					className="bg-white card-plain px-3"
				>
					<h3 className="title text-success text-center">
						Verbos Formal (ます)
					</h3>
					<CardBody>
						<Row>
							<Col md="12">
								<p className="mb-5">
									Para conjugar los tiempos de los verbos en
									la forma <strong>Formal</strong>, lo que se
									hace es reemplazar el「ます」(masu) al final
									del verbo, por la forma conjugada del mismo.
								</p>
							</Col>
							<Col md="6" className="mb-5">
								<h5>Presente Afirmativo:</h5>
								<p>
									Para el presente afirmativo se mantiene
									el「ます」(masu) al final del verbo.
								</p>
							</Col>

							<Col md="6" className="mb-5">
								<h5>Presente Negativo:</h5>
								<p>
									En el caso de la conjugación para el tiempo
									presente negativo, se debe reemplazar la
									terminación「ます」por「ません」(masen)
								</p>
								<p>
									Ejemplo: <br />
									たべ
									<del className="text-success">ます</del>
									<i className="fas fa-long-arrow-alt-right px-2"></i>
									たべ
									<span className="text-success">ません</span>
									<br />
									tabe
									<del className="text-success">
										<strong>masu</strong>
									</del>
									<i className="fas fa-long-arrow-alt-right px-2"></i>
									tabe
									<strong className="text-success">
										masen
									</strong>
								</p>
							</Col>

							<Col md="6" className="mb-5">
								<h5>Pasado Afirmativo:</h5>
								<p>
									Para hacer la forma afirmativa en el pasado,
									usando la forma <strong>Formal</strong> de
									los verbos, simplemente se deberá cambiar
									el「ます」, por「ました」(mashita).
								</p>
								<p>
									Ejemplo: <br />
									たべ
									<del className="text-success">ます</del>
									<i className="fas fa-long-arrow-alt-right px-2"></i>
									たべ
									<span className="text-success">ました</span>
									<br />
									tabe
									<del className="text-success">
										<strong>masu</strong>
									</del>
									<i className="fas fa-long-arrow-alt-right px-2"></i>
									tabe
									<strong className="text-success">
										mashita
									</strong>
								</p>
							</Col>

							<Col md="6" className="mb-5">
								<h5>Pasado Negativo:</h5>
								<p>
									En el caso de la conjugación de los verbos
									en pasado negativo <strong>Formal</strong>,
									lo que se debe hacer es "combinar" los 2
									puntos anteriores, quitando el「ます」y
									quedando con la
									terminación「ませんでした」(masendeshita).
								</p>
								<p>
									Ejemplo: <br />
									たべ
									<del className="text-success">ます</del>
									<i className="fas fa-long-arrow-alt-right px-2"></i>
									たべ
									<span className="text-success">
										ませんでした
									</span>
									<br />
									tabe
									<del className="text-success">
										<strong>masu</strong>
									</del>
									<i className="fas fa-long-arrow-alt-right px-2"></i>
									tabe
									<strong className="text-success">
										masendeshita
									</strong>
								</p>
							</Col>

							<Col md="12">
								<h5>Preguntar:</h5>
								<p>
									Para formular una pregunta utilizando los
									verbos en la forma <strong>Formal</strong>,
									estén conjugados en cualquiera de los
									tiempos, es bastante simple, ya que solo se
									debe agregar la partícula「か」al final de
									la oración.
								</p>
								<div className="row justify-content-around">
									<p>Ejemplo:</p>
									<div>
										<p className="pb-3">
											たべ
											<span className="text-success">
												ます　か。
											</span>
											<br />
											tabe
											<strong className="text-success">
												masuka.
											</strong>
										</p>
									</div>
									<div>
										<p className="pb-3">
											たべ
											<span className="text-success">
												ません　か。
											</span>
											<br />
											tabe
											<strong className="text-success">
												masenka.
											</strong>
										</p>
									</div>
									<div>
										<p>
											たべ
											<span className="text-success">
												ました　か。
											</span>
											<br />
											tabe
											<strong className="text-success">
												mashitaka.
											</strong>
										</p>
									</div>
									<div>
										<p>
											たべ
											<span className="text-success">
												ませんでした　か。
											</span>
											<br />
											tabe
											<strong className="text-success">
												masendeshitaka.
											</strong>
										</p>
									</div>
								</div>
							</Col>
						</Row>
					</CardBody>
				</Card>
			</Col>
		</React.Fragment>
	);
}
