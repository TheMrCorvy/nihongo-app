import React from "react";
import { Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";
import EdadesTanjobi from "components/Sections/EdadesTanjobi";

export default function Jikushoukan() {
	return (
		<React.Fragment>
			<Col md="12">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: "15px" }}
				>
					<h4 className="text-center">La precentación Inicial</h4>
					<CardBody className="mt-5 px-3">
						<p>
							Es sumamente importante saber como{" "}
							<strong>presentarnos</strong> ante la gente, así que
							en ésta sección veremos cómo hacerlo.
						</p>
						<p>Aquí les va un ejemplo:</p>

						<Card
							className="card-plain"
							style={{
								background: "#f3f3f3",
								borderRadius: "10px",
							}}
						>
							<CardBody className="text-center">
								<p>
									<strong>
										"Yo soy{" "}
										<span className="text-success">
											Gonzalo
										</span>
										, tengo{" "}
										<span className="text-danger">
											23 años
										</span>
										,{" "}
										<span className="text-warning">
											soy de Argentina
										</span>
										, y{" "}
										<span className="text-info">
											soy programador
										</span>
										."
									</strong>
									<br />
									<i className="fas fa-long-arrow-alt-down px-2"></i>
								</p>
								<p>
									「<span id="watashi">私</span>
									<span className="text-warning">は</span>　
									<span className="text-success">
										ゴンザロ
									</span>{" "}
									<span className="text-primary">で</span>、
									<span className="text-danger">
										２３さい
									</span>
									<span className="text-primary">で</span>、
									<span className="text-warning">
										アルゼンチン
									</span>
									じん
									<span className="text-primary">で</span>、
									<span className="text-info">
										プログラマー
									</span>
									です。」
									<br />
									<i className="fas fa-long-arrow-alt-down px-2"></i>
								</p>
								<UncontrolledTooltip
									placement="top"
									target="watashi"
									delay={0}
								>
									わたし
								</UncontrolledTooltip>
								<p>
									<strong>
										「watashi
										<span className="text-warning">wa</span>
										　
										<span className="text-success">
											gonzaro
										</span>{" "}
										<span className="text-primary">de</span>
										、
										<span className="text-danger">
											nijuusan sai
										</span>
										<span className="text-primary">de</span>
										、
										<span className="text-warning">
											aruzenchin
										</span>{" "}
										jin
										<span className="text-primary">de</span>
										、
										<span className="text-info">
											puroguramaa
										</span>
										desu。」
									</strong>
								</p>
							</CardBody>
						</Card>
						<Card
							className="card-plain"
							style={{
								background: "#f3f3f3",
								borderRadius: "10px",
							}}
						>
							<CardBody className="text-center">
								<p>
									<strong>
										"Mi{" "}
										<span className="text-info">
											hobby / pasatiempo
										</span>{" "}
										es{" "}
										<span className="text-info">
											ver Anime
										</span>
										"
									</strong>
									<br />
									<i className="fas fa-long-arrow-alt-down px-2"></i>
								</p>
								<p>
									「<span id="watashi2">私</span>
									<span className="text-warning">の</span>　
									<span className="text-info">
										しゅうみ
										<span className="text-warning">は</span>
										　アニメ
										<span className="text-warning">を</span>
										　見ること
									</span>
									です。」
									<br />
									<i className="fas fa-long-arrow-alt-down px-2"></i>
								</p>
								<UncontrolledTooltip
									placement="top"
									target="watashi2"
									delay={0}
								>
									わたし
								</UncontrolledTooltip>
								<p>
									<strong>
										「watashi
										<span className="text-warning">no</span>
										　
										<span className="text-info">
											shuumi
											<span className="text-warning">
												wa
											</span>
											　anime
											<span className="text-warning">
												o
											</span>
											　miru koto
										</span>
										desu。」
									</strong>
								</p>
							</CardBody>
						</Card>
						<Card
							className="card-plain"
							style={{
								background: "#f3f3f3",
								borderRadius: "10px",
							}}
						>
							<CardBody className="text-center text-success">
								<p>
									「よろしく　おねがいします。」
									<br />
									<i className="fas fa-long-arrow-alt-down px-2 text-black"></i>
									<br />
									<strong>yoroshiku onegaishimasu</strong>
								</p>
							</CardBody>
						</Card>
						<p>
							Para que no quedara tan largo, éste ejemplo quedó
							dividido en <strong>3 partes</strong>.
						</p>
						<p>
							<strong>1)</strong> En la primera, me presento, digo
							quien soy, cuantos años tengo, de donde vengo, y a
							qué me dedico.
						</p>
						<p>
							<strong>2)</strong> En la segunda hablo un poco más
							de mi mísmo, sobre mis pasatiempos, etc.
						</p>
						<p>
							<strong>3)</strong> Y la tercera es la conclución de
							la presentación. <strong>Todas</strong> las
							presentaciones iniciales en un ambiente medianamente
							formal <strong>deben</strong> terminar de esa forma,
							que traducido literalmente, vendría siendo algo así:
							"<strong>quedaré a su cuidado</strong>" o "
							<strong>por favor cuiden de mí</strong>", cosa que
							en Español no tiene sentido decir, pero que en el
							idioma japonés, debido a su cultura, resulta
							impresindible.
						</p>
					</CardBody>
				</Card>
			</Col>
			<Col md="12">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: "15px" }}
				>
					<h4 className="text-center mb-0">
						Pero no todos nos llamamos "Gonzalo"
					</h4>
					<CardBody className="px-3">
						<p>
							Ni tampoco tenemos las mísmas edades, ni trabajamos
							de lo mismo.
						</p>
						<p>
							Aquí encontrarás algunos ejemplos de otros países,
							profesiones, y pasatiempos, además de una nota
							aclarando cómo es que se habla acerca de las edades
							en Japonés.
						</p>
						<p>
							Para utilizarlos en tu presentación, solo debes
							cambiar las palabras en color del ejemplo, por las
							que describan mejor quien eres.
						</p>
						<h5>Profesiones:</h5>
						<ul className="row justify-content-between">
							<li className="col-auto">
								<p>
									<strong className="text-info">
										Keisatsukan
									</strong>{" "}
									(警察官) ={" "}
									<strong className="text-info">
										Policia
									</strong>
								</p>
							</li>
							<li className="col-auto">
								<p>
									<strong className="text-info">
										Gakusei
									</strong>{" "}
									(学生) ={" "}
									<strong className="text-info">
										Estudiante
									</strong>
								</p>
							</li>
							<li className="col-auto">
								<p>
									<strong className="text-info">Isha</strong>{" "}
									(医者) ={" "}
									<strong className="text-info">
										Médico, Doctor
									</strong>
								</p>
							</li>
							<li className="col-auto">
								<p>
									<strong className="text-info">
										Shefu{" "}
									</strong>{" "}
									(シェフ) ={" "}
									<strong className="text-info">Chef</strong>
								</p>
							</li>
							<li className="col-auto">
								<p>
									<strong className="text-info">
										Kagakusha{" "}
									</strong>{" "}
									(科学者) ={" "}
									<strong className="text-info">
										Cientifico
									</strong>
								</p>
							</li>
							<li className="col-auto">
								<p>
									<strong className="text-info">
										Enjinia{" "}
									</strong>{" "}
									(エンジニア) ={" "}
									<strong className="text-info">
										Ingeniero
									</strong>
								</p>
							</li>
							<li className="col-auto">
								<p>
									<strong className="text-info">
										Kenchikuka{" "}
									</strong>{" "}
									(建築家) ={" "}
									<strong className="text-info">
										Arquitecto
									</strong>
								</p>
							</li>
							<li className="col-auto">
								<p>
									<strong className="text-info">
										Sensei{" "}
									</strong>{" "}
									(先生) ={" "}
									<strong className="text-info">
										Maestro
									</strong>
								</p>
							</li>
							<li className="col-auto">
								<p>
									<strong className="text-info">
										Ongakuka{" "}
									</strong>{" "}
									(音楽家) ={" "}
									<strong className="text-info">
										Músico
									</strong>
								</p>
							</li>
						</ul>
						<h5>Paises:</h5>
						<ul className="row justify-content-between">
							<li className="col-auto">
								<p>
									<strong className="text-info">
										Amerika{" "}
									</strong>{" "}
									(アメリカ) ={" "}
									<strong className="text-info">
										Estados Unidos
									</strong>
								</p>
							</li>
							<li className="col-auto">
								<p>
									<strong className="text-info">
										Oosutoraria{" "}
									</strong>{" "}
									(オーストラリア) ={" "}
									<strong className="text-info">
										Australia
									</strong>
								</p>
							</li>
							<li className="col-auto">
								<p>
									<strong className="text-info">
										Boribia{" "}
									</strong>{" "}
									(ボリビア) ={" "}
									<strong className="text-info">
										Bolivia
									</strong>
								</p>
							</li>
							<li className="col-auto">
								<p>
									<strong className="text-info">
										Burajiru{" "}
									</strong>{" "}
									(ブラジル) ={" "}
									<strong className="text-info">
										Brasil
									</strong>
								</p>
							</li>
							<li className="col-auto">
								<p>
									<strong className="text-info">
										Chiri{" "}
									</strong>{" "}
									(チリ) ={" "}
									<strong className="text-info">Chile</strong>
								</p>
							</li>
							<li className="col-auto">
								<p>
									<strong className="text-info">
										Koronbia{" "}
									</strong>{" "}
									(コロンビア) ={" "}
									<strong className="text-info">
										Colombia
									</strong>
								</p>
							</li>
							<li className="col-auto">
								<p>
									<strong className="text-info">
										Mekishiko{" "}
									</strong>{" "}
									(メキシコ) ={" "}
									<strong className="text-info">
										México
									</strong>
								</p>
							</li>
						</ul>
					</CardBody>
				</Card>
			</Col>
			<EdadesTanjobi />
		</React.Fragment>
	);
}
