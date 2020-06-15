import React from "react";
import { Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";

export default function Jishokei() {
	return (
		<Col md="12">
			<Card
				className="card-plain bg-white"
				style={{ borderRadius: ".5rem" }}
			>
				<CardBody className="px-3">
					<h4 className="text-center text-primary title pt-0 mt-0">
						La Forma Jishokei
					</h4>
				</CardBody>
			</Card>
		</Col>
	);
}
