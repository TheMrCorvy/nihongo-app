import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Link } from "react-router-dom";

function scrollTop() {
	window.scrollTo(0, 0);
}

export default function Secciones(props) {
	return (
		<React.Fragment>
			{props.all && (
				<React.Fragment>
					<h3 className="title text-center col-lg-12">
						Contenido Disponible
					</h3>
					<Col md="12">
						<Link
							to="/beginers"
							onClick={() => {
								scrollTop();
							}}
						>
							<Card
								style={{
									borderRadius: "10px",
									boxShadow:
										"0px 5px 25px 0px rgba(251, 177, 64, 0.6)",
									background:
										"linear-gradient(87deg, #fbb140 100%, #fb6340 0)",
								}}
							>
								<CardBody className="text-white">
									<span className="title text-capitalize">
										guía para principiantes
									</span>
									<i className="fas fa-chevron-right pl-3"></i>
									<br />
									<small>
										¿Por dónde empezar a estudiar?
									</small>
									<i
										className="fas fa-3x fa-chalkboard-teacher"
										style={{
											position: "absolute",
											top: 20,
											right: 10,
											opacity: 0.7,
										}}
									></i>
								</CardBody>
							</Card>
						</Link>
					</Col>
				</React.Fragment>
			)}
			{(props.all || props.hiragana) && (
				<Col md="6">
					<Link
						to="/hiragana"
						onClick={() => {
							scrollTop();
						}}
					>
						<Card
							style={{
								borderRadius: "10px",
								boxShadow:
									"0px 5px 25px 0px rgba(44, 168, 255, 0.6)",
								background:
									"linear-gradient(87deg,#11cdef 0,#1171ef 100%)",
							}}
						>
							<CardBody className="text-white text-capitalize">
								<span className="title">
									Hiragana　ひらがな
								</span>
								<i className="fas fa-chevron-right pl-3"></i>
								<br />
								<small>¿Cómo se escribe en Japonés?</small>
								<i
									className="fas fa-3x fa-paint-brush"
									style={{
										position: "absolute",
										top: 20,
										right: 10,
										opacity: 0.7,
									}}
								></i>
							</CardBody>
						</Card>
					</Link>
				</Col>
			)}
			{(props.all || props.katakana) && (
				<Col md="6">
					<Link
						to="/katakana"
						onClick={() => {
							scrollTop();
						}}
					>
						<Card
							style={{
								borderRadius: "10px",
								boxShadow:
									"0px 5px 25px 0px rgba(94, 114, 228, 0.6)",
								background:
									"linear-gradient(87deg,#5e72e4 0,#825ee4 100%)",
							}}
						>
							<CardBody className="text-white text-capitalize">
								<span className="title">
									Katakana　カタカナ
								</span>
								<i className="fas fa-chevron-right pl-3"></i>
								<br />
								<small>¿Cómo se escribe en Japonés?</small>
								<i
									className="fas fa-3x fa-flag"
									style={{
										position: "absolute",
										top: 20,
										right: 10,
										opacity: 0.7,
									}}
								></i>
							</CardBody>
						</Card>
					</Link>
				</Col>
			)}
			{(props.all || props.kanjis) && (
				<Col md="6">
					<Link
						to="/kanjis"
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
									"linear-gradient(87deg,#f5365c 0,#f56036 100%)",
							}}
						>
							<CardBody className="text-white text-capitalize">
								<span className="title">Kanjis　漢字</span>
								<i className="fas fa-chevron-right pl-3"></i>
								<br />
								<small>¿Cómo se escribe en Japonés?</small>
								<i
									className="fas fa-3x fa-language"
									style={{
										position: "absolute",
										top: 20,
										right: 10,
										opacity: 0.7,
									}}
								></i>
							</CardBody>
						</Card>
					</Link>
				</Col>
			)}
			{(props.all || props.fechasNumeros) && (
				<Col md="6">
					<Link
						to="/transicion/fechas-numeros"
						onClick={() => {
							scrollTop();
						}}
					>
						<Card
							style={{
								borderRadius: "10px",
								boxShadow:
									"0px 5px 25px 0px rgba(17, 113, 239, 0.6)",
								background: "#1171ef",
							}}
						>
							<CardBody className="text-white">
								<span className="title text-capitalize">
									fechas y números
								</span>
								<i className="fas fa-chevron-right pl-3"></i>
								<br />
								<small>
									Fechas, días de la semana, horas, y números
								</small>
								<i
									className="fas fa-3x fa-sort-numeric-down"
									style={{
										position: "absolute",
										top: 20,
										right: 10,
										opacity: 0.7,
									}}
								></i>
							</CardBody>
						</Card>
					</Link>
				</Col>
			)}
			{(props.all || props.particulas) && (
				<Col md="6">
					<Link
						to="/particulas"
						onClick={() => {
							scrollTop();
						}}
					>
						<Card
							style={{
								borderRadius: "10px",
								boxShadow:
									"0px 5px 25px 0px rgba(26, 23, 77, 0.6)",
								background:
									"linear-gradient(87deg,#172b4d 0,#1a174d 100%)",
							}}
						>
							<CardBody className="text-white">
								<span className="title text-capitalize">
									guía para partículas
								</span>
								<i className="fas fa-chevron-right pl-3"></i>
								<br />
								<small>
									Guía de uso básica para las partículas
								</small>
								<i
									className="fas fa-3x fa-puzzle-piece"
									style={{
										position: "absolute",
										top: 20,
										right: 10,
										opacity: 0.7,
									}}
								></i>
							</CardBody>
						</Card>
					</Link>
				</Col>
			)}
			{(props.all || props.gruposTiempos) && (
				<Col md="6">
					<Link
						to="/transicion/grupos-tiempos"
						onClick={() => {
							scrollTop();
						}}
					>
						<Card
							style={{
								borderRadius: "10px",
								boxShadow:
									"0px 5px 25px 0px rgba(45, 206, 137, 0.6)",
								background:
									"linear-gradient(87deg, #2dce89 0, #2dcecc 100%)",
							}}
						>
							<CardBody className="text-white">
								<span className="title text-capitalize">
									grupos y tiempos
								</span>
								<i className="fas fa-chevron-right pl-3"></i>
								<br />
								<small>
									Grupos de los verbos y adjetivos, y sus
									tiempos
								</small>
								<i
									className="far fa-3x fa-object-group"
									style={{
										position: "absolute",
										top: 20,
										right: 10,
										opacity: 0.7,
									}}
								></i>
							</CardBody>
						</Card>
					</Link>
				</Col>
			)}
			{(props.all || props.vocabularioPalabras) && (
				<Col md="6">
					<Link
						to="/transicion/vocabulario-palabras"
						onClick={() => {
							scrollTop();
						}}
					>
						<Card
							style={{
								borderRadius: "10px",
								boxShadow:
									"0px 5px 25px 0px rgba(251, 99, 64, 0.6)",
								background:
									"linear-gradient(87deg,#fb6340 0,#fbb140 100%)",
							}}
						>
							<CardBody className="text-white text-capitalize">
								<span className="title">
									vocabulario de palabras
								</span>
								<i className="fas fa-chevron-right pl-3"></i>
								<br />
								<small>Verbos, Adjetivos, y Sustantivos</small>
								<i
									className="fas fa-3x fa-truck"
									style={{
										position: "absolute",
										top: 20,
										right: 10,
										opacity: 0.7,
									}}
								></i>
							</CardBody>
						</Card>
					</Link>
				</Col>
			)}
			{(props.all || props.formasKei) && (
				<Col md="6">
					<Link
						to="/transicion/formas-kei"
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
							<CardBody className="text-white">
								<span className="title">
									Formas 形 de los Verbos
								</span>
								<i className="fas fa-chevron-right pl-3"></i>
								<br />
								<small>
									Formas para conjugar los verbos y adjetivos
								</small>
								<i
									className="fas fa-3x fa-pencil-ruler"
									style={{
										position: "absolute",
										top: 20,
										right: 10,
										opacity: 0.7,
									}}
								></i>
							</CardBody>
						</Card>
					</Link>
				</Col>
			)}
			{(props.all || props.construirFrases) && (
				<Col md="6">
					<Link
						to="/transicion/construir-frases"
						onClick={() => {
							scrollTop();
						}}
					>
						<Card
							style={{
								borderRadius: "10px",
								boxShadow:
									"0px 5px 25px 0px rgba(45, 206, 137, 0.6)",
								background: "#2dce89",
							}}
						>
							<CardBody className="text-white">
								<span className="title text-capitalize">
									construir frases
								</span>
								<i className="fas fa-chevron-right pl-3"></i>
								<br />
								<small>
									Reglas e indicios básicos para armar frases
									simples
								</small>
								<i
									className="fas fa-3x fa-pencil-alt"
									style={{
										position: "absolute",
										top: 20,
										right: 10,
										opacity: 0.7,
									}}
								></i>
							</CardBody>
						</Card>
					</Link>
				</Col>
			)}
		</React.Fragment>
	);
}
