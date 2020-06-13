import React from "react";
import { Col } from "reactstrap";

function scrollTop(e) {
	e.preventDefault();
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}

export default function BackToTop() {
	return (
		<Col md="12" className="text-center mb-4">
			<a
				href="#pablo"
				onClick={(e) => scrollTop(e, "top")}
				className="text-info title"
				style={{
					fontSize: "1.2rem",
					lineHeight: "1.61rem",
				}}
			>
				<i className="fas fa-3x fa-chevron-up"></i>
			</a>
		</Col>
	);
}
