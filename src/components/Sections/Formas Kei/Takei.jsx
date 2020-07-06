import React from "react";
import { Row, Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";

export default function Takei() {
	return (
		<React.Fragment>
			<Col md="12">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: ".5rem" }}
				>
					<CardBody className="px-3">
						<h4 className="text-center text-primary title pt-0 mt-0">
							La Forma た<span id="kei61">形</span>
						</h4>
						<UncontrolledTooltip
							placement="top"
							target="kei61"
							delay={0}
						>
							けい
						</UncontrolledTooltip>
						<h5 className="text-center title text-warning">
							Verbos Grupo 1
						</h5>
						<p>
							La forma た de los verbos es una conjugación
							utilizada para indicar el{" "}
							<strong className="text-primary">pasado</strong>,
							sea conjugando los verbos a dicho tiempo, o bien
							para hablar acerca de{" "}
							<strong className="text-primary">
								experiencias
							</strong>{" "}
							pasadas.
						</p>
						<Row className="justify-content-around px-4">
							<p
								className="text-center px-4 py-4"
								style={{
									borderRadius: ".5rem",
									background: "#f2f2f2",
								}}
							>
								Verbos Terminados en{" "}
								<span className="text-warning">き</span>
								<span className="text-success">ます</span>
								<br />
								<i className="fas fa-long-arrow-alt-down px-2"></i>
								<br />
								Terminarán en{" "}
								<span className="text-primary">いた</span>
							</p>
							<p
								className="text-center px-4 py-4"
								style={{
									borderRadius: ".5rem",
									background: "#f2f2f2",
								}}
							>
								Verbos Terminados en{" "}
								<span className="text-warning">ぎ</span>
								<span className="text-success">ます</span>
								<br />
								<i className="fas fa-long-arrow-alt-down px-2"></i>
								<br />
								Terminarán en{" "}
								<span className="text-primary">いだ</span>
							</p>
							<p
								className="text-center px-4 py-4"
								style={{
									borderRadius: ".5rem",
									background: "#f2f2f2",
								}}
							>
								Verbos Terminados en{" "}
								<span className="text-warning">み</span>
								<span className="text-success">ます</span>
								<br />
								<i className="fas fa-long-arrow-alt-down px-2"></i>
								<br />
								Terminarán en{" "}
								<span className="text-primary">んだ</span>
							</p>
							<p
								className="text-center px-4 py-4"
								style={{
									borderRadius: ".5rem",
									background: "#f2f2f2",
								}}
							>
								Verbos Terminados en{" "}
								<span className="text-warning">び</span>
								<span className="text-success">ます</span>
								<br />
								<i className="fas fa-long-arrow-alt-down px-2"></i>
								<br />
								Terminarán en{" "}
								<span className="text-primary">んだ</span>
							</p>
							<p
								className="text-center px-4 py-4"
								style={{
									borderRadius: ".5rem",
									background: "#f2f2f2",
								}}
							>
								Verbos Terminados en{" "}
								<span className="text-warning">り</span>
								<span className="text-success">ます</span>
								<br />
								<i className="fas fa-long-arrow-alt-down px-2"></i>
								<br />
								Terminarán en{" "}
								<span className="text-primary">った</span>
							</p>
							<p
								className="text-center px-4 py-4"
								style={{
									borderRadius: ".5rem",
									background: "#f2f2f2",
								}}
							>
								Verbos Terminados en{" "}
								<span className="text-warning">い</span>
								<span className="text-success">ます</span>
								<br />
								<i className="fas fa-long-arrow-alt-down px-2"></i>
								<br />
								Terminarán en{" "}
								<span className="text-primary">った</span>
							</p>
							<p
								className="text-center px-4 py-4"
								style={{
									borderRadius: ".5rem",
									background: "#f2f2f2",
								}}
							>
								Verbos Terminados en{" "}
								<span className="text-warning">ち</span>
								<span className="text-success">ます</span>
								<br />
								<i className="fas fa-long-arrow-alt-down px-2"></i>
								<br />
								Terminarán en{" "}
								<span className="text-primary">った</span>
							</p>
							<p
								className="text-center px-4 py-4"
								style={{
									borderRadius: ".5rem",
									background: "#f2f2f2",
								}}
							>
								Verbos Terminados en{" "}
								<span className="text-warning">し</span>
								<span className="text-success">ます</span>
								<br />
								<i className="fas fa-long-arrow-alt-down px-2"></i>
								<br />
								Terminarán en{" "}
								<span className="text-primary">した</span>
							</p>
						</Row>
						<h5 className="text-center title text-primary">
							Verbos Grupo 2
						</h5>
						<p className="text-center">
							Para todos los verbos pertenecientes a éste grupo,
							lo único que se debe hacer es retirar la
							reminación「ます」y reemplazarla por「た」.
						</p>
						<h5 className="text-center title text-success">
							Verbos Grupo 3
						</h5>
						<Row className="justify-content-around px-4">
							<p
								className="text-center px-5 py-4"
								style={{
									borderRadius: ".5rem",
									background: "#f2f2f2",
								}}
							>
								El Verbo{" "}
								<span className="text-success">します</span>
								<br />
								<i className="fas fa-long-arrow-alt-down px-2"></i>
								<br />
								Pasará a Ser{" "}
								<span className="text-primary">した</span>
							</p>
							<p
								className="text-center px-5 py-4"
								style={{
									borderRadius: ".5rem",
									background: "#f2f2f2",
								}}
							>
								El Verbo{" "}
								<span className="text-success">
									<span id="kimasu4">来</span>ます
								</span>
								<br />
								<i className="fas fa-long-arrow-alt-down px-2"></i>
								<br />
								Pasará a Ser{" "}
								<span className="text-primary">来た</span>
							</p>
							<UncontrolledTooltip
								placement="top"
								target="kimasu4"
								delay={0}
							>
								き
							</UncontrolledTooltip>
						</Row>
					</CardBody>
				</Card>
			</Col>
			<Col md="12">
				<Card
					className="card-plain bg-white"
					style={{ borderRadius: ".5rem" }}
				>
					<CardBody className="px-3">
						<h4 className="text-center text-info title pt-0 mt-0">
							Experiencias
						</h4>
						<p>
							Podremos hablar acerca de experiencias en tiempo
							pasado haciendo uso de ésta conjugación, somada a la
							frase「ことが　あります。」para hablar en{" "}
							<strong className="text-success">
								pasado afirmativo
							</strong>
							, y contrariamente「ことが　ありません。」para pasar
							la frase al tiempo{" "}
							<strong className="text-danger">
								pasado negativo
							</strong>
							.
						</p>
						<p className="text-center">
							Ejemplo: <br />
							<span className="text-success" id="nihon">
								日本
							</span>
							に　
							<span className="text-info" id="itta2">
								行
							</span>
							<span className="text-info" id="itta2">
								った
							</span>
							<span className="text-danger">
								ことが　ありません
							</span>
							。
							<br />"
							<strong className="text-danger">
								Nunca
							</strong> he{" "}
							<strong className="text-info">ido</strong> a{" "}
							<strong className="text-success">Japón</strong>"
						</p>
						<UncontrolledTooltip
							placement="top"
							target="nihon"
							delay={0}
						>
							にほん
						</UncontrolledTooltip>
						<UncontrolledTooltip
							placement="top"
							target="itta2"
							delay={0}
						>
							い
						</UncontrolledTooltip>
					</CardBody>
				</Card>
			</Col>
		</React.Fragment>
	);
}
