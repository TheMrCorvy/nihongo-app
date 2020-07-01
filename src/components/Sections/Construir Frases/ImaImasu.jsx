import React from "react";
import { Col, Card, CardBody } from "reactstrap";

import { Link } from "react-router-dom";

function scrollTop() {
	window.scrollTo(0, 0);
}
export default function ImaImasu() {
	return (
		<React.Fragment>
			<Col md="12">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: ".5rem" }}
				>
					<CardBody className="px-3">
						<h4 className="text-center text-info title pt-0 mt-0">
							Presente Contínuo
						</h4>
						<p>
							Para indicar lo que se etsá haciendo en éstos
							momentos, o bien en dónde se encuentra uno
							actualmente, haremos uso de una conjugación de los
							verbos, la forma て形 (てけい - tekei).
						</p>
						<p>La fórmula a seguir será la siguiente: </p>
						<p className="text-center my-5">
							<strong>El lugar</strong> +{" "}
							<strong className="text-success">
								partícula で
							</strong>{" "}
							(de)
							<br />+<br />
							<strong>objeto</strong> +{" "}
							<strong className="text-success">
								partícula を
							</strong>{" "}
							(o)
							<br />+<br />
							<strong>el verbo</strong>{" "}
							<strong className="text-success">
								(conjugado en て形)
							</strong>
							<br />+<br />{" "}
							<strong className="text-success">
								el verbo います
							</strong>
							<br />
							(imasu - "haber / estar / existir")
						</p>
						<p>
							Cabe destacar que, cuando estémos indicando el{" "}
							<strong className="text-success">lugar</strong> en{" "}
							<strong>Presente Contínuo</strong>, éste deberá
							estar conectado <strong>siempre</strong> con la
							partícula で, ya que estaríamos indicando el lugar
							en el que ahora mísmo nos encontramos realizando una
							acción.
						</p>
						<p>
							Por último, el verbo「います - imasu」
							<strong>no</strong> debe estar conjugado en la forma
							て形, ya que es éste el verbo que{" "}
							<strong>indicará</strong> tanto el{" "}
							<strong className="text-primary">
								tiempo de la oración
							</strong>
							, como tambien el nivel de{" "}
							<strong className="text-info">formalidad</strong> al
							hablar.
						</p>
						<p className="text-center mt-5">
							Ejemplo: <br />
							"Estoy viendo la tele en casa."
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							<span className="text-info">家</span>
							<span className="text-success">で　</span>
							<span className="text-info">テレビ</span>
							<span className="text-success">を　</span>
							<span className="text-warning">見て</span>
							<span className="text-primary">います</span>
							。
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							<span className="text-info">うち</span>
							<span className="text-success">で　</span>
							<span className="text-info">テレビ</span>
							<span className="text-success">を　</span>
							<span className="text-warning">みて</span>
							<span className="text-primary">います</span>
							。
							<br />
							<i className="fas fa-long-arrow-alt-down px-2"></i>
							<br />
							<strong className="text-success">
								<span className="text-info">uchi</span>
								<span className="text-success">　de　</span>
								<span className="text-info">terebi</span>
								<span className="text-success">　o　</span>
								<span className="text-warning">mite</span>
								<span className="text-primary">　imasu</span>
							</strong>
							。
						</p>
					</CardBody>
				</Card>
			</Col>
			<Col md="6">
				<Link
					to="/formas-kei/te"
					onClick={() => {
						scrollTop();
					}}
				>
					<Card
						style={{
							borderRadius: "10px",
							boxShadow:
								"0px 5px 25px 0px rgba(255, 54, 54, 0.6)",
							background:
								"linear-gradient(87deg, #f56036 0, #f5365c 100%)",
						}}
					>
						<CardBody className="text-white text-capitalize">
							<span className="title">Forma て</span>
							<i className="fas fa-chevron-right pl-3"></i>
							<i
								className="fas fa-3x fa-tasks"
								style={{
									position: "absolute",
									top: 10,
									right: 10,
									opacity: 0.7,
								}}
							></i>
						</CardBody>
					</Card>
				</Link>
			</Col>
		</React.Fragment>
	);
}
