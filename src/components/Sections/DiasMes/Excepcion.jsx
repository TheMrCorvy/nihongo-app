import React from "react";
import { Card, CardBody, Col } from "reactstrap";

export default function Excepcion() {
	return (
		<Col md="12" id="excepcion">
			<Card
				className="card-plain bg-white"
				style={{ borderRadius: ".5rem" }}
			>
				<CardBody className="text-center px-2">
					<table className="container text-danger">
						<thead>
							<tr>
								<th scope="col" colSpan="4" className="pb-3">
									Excepción
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row" className="pl-2">
									1
								</th>
								<td>一日</td>
								<td className="text-right">ついたち</td>
								<td className="text-right">
									<strong className="pr-3">tsuitachi</strong>
								</td>
							</tr>
						</tbody>
					</table>
				</CardBody>
			</Card>
		</Col>
	);
}
