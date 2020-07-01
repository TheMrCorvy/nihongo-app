import React from "react";
import { Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";

// import { Link } from "react-router-dom";

// function scrollTop() {
// 	window.scrollTo(0, 0);
// }
export default function OracionesSubordinadas() {
	return (
		<React.Fragment>
			<Col md="12">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: ".5rem" }}
				>
					<CardBody className="px-3">
						<h4 className="text-center text-info title pt-0 mt-0">
							Oraciones Subordinadas
						</h4>
						<p>
							El japonés no cuenta con pronombres relativos (que,
							cual, cuyo...) con los que enlazar una oración
							subordinada al sustantivo que complementa. Es el
							orden de las palabras lo que forma el enlace: cuando
							a continuación de un verbo viene un sustantivo, la
							1ª frase complementa el significado de éste.
						</p>
						<p>
							Por ejemplo: "Quiero criar un perro que se haga
							grande"
						</p>
						<p className="text-center my-5">
							<span id="watashi">私</span>は　
							<span className="text-info">
								<span id="ooki">大</span>きくなる
							</span>
							<span id="inu" className="text-success">
								犬
							</span>
							が　<span id="kaitai">飼</span>いたい。
							<br />
							<small>
								(watashi wa{" "}
								<strong className="text-info">
									ookiku naru
								</strong>{" "}
								<strong className="text-success">inu</strong> ga
								kaitai)
							</small>
						</p>
						<UncontrolledTooltip
							placement="top"
							target="watashi"
							delay={0}
						>
							わたし
						</UncontrolledTooltip>
						<UncontrolledTooltip
							placement="top"
							target="ooki"
							delay={0}
						>
							おお
						</UncontrolledTooltip>
						<UncontrolledTooltip
							placement="top"
							target="inu"
							delay={0}
						>
							いぬ
						</UncontrolledTooltip>
						<UncontrolledTooltip
							placement="top"
							target="kaitai"
							delay={0}
						>
							か
						</UncontrolledTooltip>
						<p>
							La subordinada es{" "}
							<span className="text-info">
								<span id="ooki2">大</span>きくなる (ookikunaru)
							</span>{" "}
							y el sustantivo modificado{" "}
							<span id="inu2" className="text-success">
								犬 (inu)
							</span>
							. El sujeto de la subordinada hay que deducirlo del
							contexto en la mayoría de los casos, aunque las
							partículas の (no) y　が (ga) pueden usarse para
							marcarlo cuando sea conveniente. Si la frase
							anterior terminase antes de inu (watashi wa ookiku
							naru) el significado sería "yo voy a crecer". Esto
							desvela una notable característica del japonés:
							hasta que no acaba la frase el significado puede
							variar impredeciblemente. Esto es también obvio en
							las oraciones simples pues la negación (nai ない)
							viene al final de la frase.
						</p>
						<UncontrolledTooltip
							placement="top"
							target="ooki2"
							delay={0}
						>
							おお
						</UncontrolledTooltip>
						<UncontrolledTooltip
							placement="top"
							target="inu2"
							delay={0}
						>
							いぬ
						</UncontrolledTooltip>
						<p>
							La ausencia de pronombres demostrativos acarrea
							también que los modificadores de estos no aparezcan
							en la frase. Por ejemplo:
						</p>
						<p className="text-center">
							La chica <strong>con la que</strong> fui al cine{" "}
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							<span className="text-info">
								一緒に映画館に行った
							</span>
							<span className="text-success">女の人</span>
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							<span className="text-info">
								いっしょに　えいがかんに　いった
							</span>
							<span className="text-success">おんあのひと</span>
							<br />
							<small>
								<span className="text-info">
									Issho ni eigakan ni itta
								</span>{" "}
								<span className="text-success">
									onna no hito
								</span>
							</small>
							<br />
							<br />
							El puente <strong>por el que</strong> paso para ir
							al trabajo
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							<span className="text-info">会社に行くのに</span>
							<span className="text-success">渡る橋</span>
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							<span className="text-info">
								かいしゃに　いくのに
							</span>
							　<span className="text-success">わたるはし</span>
							<br />
							<small>
								<span className="text-info">
									Kaisha ni iku noni
								</span>{" "}
								<span className="text-success">
									wataru hashi
								</span>
							</small>
							<br />
							<br />
							La carta <strong>de la que</strong> te hablé
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							<span className="text-info">この間話をした</span>
							<span className="text-success">手紙</span>
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							<span className="text-info">
								このあいだはなしを　した
							</span>
							<span className="text-success">てがみ</span>
							<br />
							<small>
								<span className="text-info">
									Kono aida hanashi wo shita
								</span>{" "}
								<span className="text-success">tegami</span>
							</small>
						</p>
						<h5 className="text-center title text-danger mt-5">
							Hay 3 reglas básicas para utilizar las Oraciones
							Subordinadas
						</h5>
						<ol>
							<li>
								<p>
									La oración subordinada{" "}
									<strong className="text-danger">
										siempre
									</strong>{" "}
									precede a lo que sea que esté modificando,
									es decir siempre va primero el modificador,
									y luego el modificado.
								</p>
							</li>
							<li>
								<p>
									Los verbos de la oración subordinada deben
									ir siempre en la forma{" "}
									<strong className="text-info">
										Normal 普通形 (ふつうけい - futsuukei)
									</strong>
									.
								</p>
							</li>
							<li>
								<p>
									Dentro de una oracion subordinada,{" "}
									<strong>bajo ninguna circunstancia</strong>{" "}
									se puede usar la partícula は (wa), siempre
									se debe usar が (ga).
								</p>
							</li>
						</ol>
					</CardBody>
				</Card>
			</Col>
		</React.Fragment>
	);
}
