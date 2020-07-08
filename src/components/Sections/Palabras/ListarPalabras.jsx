import React from "react";

import { Col, Card } from "reactstrap";
import Clasico from "components/Sections/Palabras/Layouts/Clasico";
import PergaminoDeshabilitado from "./Layouts/PergaminoDeshabilitado";
import PergaminoHabilitado from "./Layouts/PergaminoHabilitado";

function elegirLayout(arrayDePalabras, estiloLayout) {
	switch (estiloLayout) {
		case 1:
			return arrayDePalabras.map((palabra) => (
				<Clasico key={palabra.Key} palabra={palabra} />
			));
		case 2:
			return arrayDePalabras.map((palabra) => (
				<PergaminoDeshabilitado key={palabra.Key} palabra={palabra} />
			));
		case 3:
			return arrayDePalabras.map((palabra) => (
				<PergaminoHabilitado key={palabra.Key} palabra={palabra} />
			));

		default:
			return arrayDePalabras.map((palabra) => (
				<Clasico key={palabra.Key} palabra={palabra} />
			));
	}
}

export default function ListarPalabras(props) {
	return (
		<React.Fragment>
			{props.Titulo && (
				<Col md="12">
					<Card
						className="card-plain"
						style={{ borderRadius: "15px" }}
						id="de"
					>
						<div
							className="bg-info text-white text-center justify-content-center"
							style={{
								borderTopRightRadius: "15px",
								borderBottomLeftRadius: "15px",
								height: "50px",
								width: "50px",
								position: "absolute",
								top: 0,
								right: 0,
							}}
						>
							<i
								className={"fas fa-3x fa-" + props.Icono}
								style={{
									position: "absolute",
									top: 4,
									right: 4,
									opacity: 0.7,
								}}
							></i>
						</div>
						<h4 className="text-left text-capitalize px-4 pt-2 float-left my-0 title">
							{props.Titulo}
						</h4>
					</Card>
				</Col>
			)}
			{elegirLayout(props.ListaDePalabras, props.EstiloLayout)}
		</React.Fragment>
	);
}
