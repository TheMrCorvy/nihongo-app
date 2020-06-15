import React from "react";
import { Col, Card, CardBody } from "reactstrap";

export default function TablaHoras() {
	return (
		<React.Fragment>
			<Col md="12">
				<Card
					className="card-plain bg-info text-white"
					style={{
						borderRadius: ".5rem",
					}}
				>
					<CardBody className="text-center px-2">
						<table className="container">
							<thead>
								<tr>
									<th
										scope="col"
										colSpan="4"
										className="pb-3"
									>
										Las 12 Horas del Día
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>一時</td>
									<td>いちじ</td>
									<td>
										<strong>ichiji</strong>
									</td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>二時</td>
									<td>にじ</td>
									<td>
										<strong>niji</strong>
									</td>
								</tr>
								<tr>
									<th scope="row">3</th>
									<td>三時</td>
									<td>さんじ</td>
									<td>
										<strong>sanji</strong>
									</td>
								</tr>
								<tr>
									<th scope="row">4</th>
									<td>四時</td>
									<td>よじ</td>
									<td>
										<strong>yoji</strong>
									</td>
								</tr>
								<tr>
									<th scope="row">5</th>
									<td>五時</td>
									<td>ごじ</td>
									<td>
										<strong>goji</strong>
									</td>
								</tr>
								<tr>
									<th scope="row">6</th>
									<td>六時</td>
									<td>ろくじ</td>
									<td>
										<strong>rokuji</strong>
									</td>
								</tr>
								<tr>
									<th scope="row">7</th>
									<td>七時</td>
									<td>しちじ</td>
									<td>
										<strong>shichiji</strong>
									</td>
								</tr>
								<tr>
									<th scope="row">8</th>
									<td>八時</td>
									<td>はちじ</td>
									<td>
										<strong>hachi</strong>
									</td>
								</tr>
								<tr>
									<th scope="row">9</th>
									<td>九時</td>
									<td>くじ</td>
									<td>
										<strong>kuji</strong>
									</td>
								</tr>
								<tr>
									<th scope="row">10</th>
									<td>十時</td>
									<td>じゅうじ</td>
									<td>
										<strong>juuji</strong>
									</td>
								</tr>
								<tr>
									<th scope="row">11</th>
									<td>十一時</td>
									<td>じゅういちじ</td>
									<td>
										<strong>juuichiji</strong>
									</td>
								</tr>
								<tr>
									<th scope="row">12</th>
									<td>十二時</td>
									<td>じゅうにじ</td>
									<td>
										<strong>juuniji</strong>
									</td>
								</tr>
							</tbody>
						</table>
					</CardBody>
				</Card>
			</Col>
		</React.Fragment>
	);
}
