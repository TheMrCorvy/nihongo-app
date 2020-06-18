import React from "react";
import { Col } from "reactstrap";

function scrollTo(e, particula) {
	e.preventDefault();
	document.getElementById(particula).scrollIntoView({
		block: "start",
		behavior: "smooth",
	});
}

export default function AccesosDirectos(props) {
	return (
		<Col
			md="12"
			className="container row text-center justify-content-around px-5 mb-5"
		>
			<h4 className="col-lg-12">Accesos Directos</h4>
			{props.LasParticulas.map((part) => (
				<a
					href="#pablo"
					onClick={(e) => scrollTo(e, part.romaji)}
					className="text-info title px-3"
					style={{
						fontSize: "1.2rem",
						lineHeight: "1.61rem",
					}}
					key={part.romaji}
				>
					{part.hiragana}
				</a>
			))}
		</Col>
	);
}
