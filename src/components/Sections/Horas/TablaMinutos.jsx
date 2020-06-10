import React from "react";
import { Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";

export default function TablaMinutos() {
	return (
		<React.Fragment>
			<Col md="12">
				<Card
					className="card-plain bg-info text-white"
					style={{ borderRadius: ".5rem" }}
				>
					<CardBody className="text-center px-2">
						<table className="container">
							<thead>
								<tr>
									<th
										scope="col"
										colspan="4"
										className="pb-3"
									>
										Los Minutos
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>一分</td>
									<td>いっぷん</td>
									<td>
										<strong>ippun</strong>
									</td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>二分</td>
									<td>にふん</td>
									<td>
										<strong>nifun</strong>
									</td>
								</tr>
								<tr>
									<th scope="row">3</th>
									<td>三分</td>
									<td>さんぷん</td>
									<td>
										<strong>sanpun</strong>
									</td>
								</tr>
								<tr>
									<th scope="row">4</th>
									<td>四分</td>
									<td>よんぷん</td>
									<td>
										<strong>yonpun</strong>
									</td>
								</tr>
								<tr>
									<th scope="row">5</th>
									<td>五分</td>
									<td>ごふん</td>
									<td>
										<strong>gofun</strong>
									</td>
								</tr>
								<tr>
									<th scope="row">6</th>
									<td>六分</td>
									<td>ろっぷん</td>
									<td>
										<strong>roppun</strong>
									</td>
								</tr>
								<tr>
									<th scope="row">7</th>
									<td>七分</td>
									<td>ななふん</td>
									<td>
										<strong>nanafun</strong>
									</td>
								</tr>
								<tr>
									<th scope="row">8</th>
									<td>八分</td>
									<td>はっぷん</td>
									<td>
										<strong>happun</strong>
									</td>
								</tr>
								<tr>
									<th scope="row">9</th>
									<td>九分</td>
									<td>きゅうふん</td>
									<td>
										<strong>kyuufun</strong>
									</td>
								</tr>
								<tr>
									<th scope="row">10</th>
									<td>十分</td>
									<td>じゅっぷん</td>
									<td>
										<strong>juuppun</strong>
									</td>
								</tr>
								<tr>
									<th scope="row">15</th>
									<td>十五分</td>
									<td>じゅうごふん</td>
									<td>
										<strong>juugofun</strong>
									</td>
								</tr>
								<tr>
									<th scope="row">30</th>
									<td>三十分</td>
									<td>さんじゅっぷん</td>
									<td>
										<strong>sanjuppun</strong>
									</td>
								</tr>
							</tbody>
						</table>
						<p className="mt-4">
							<strong>Consejo:</strong> Ten en cuenta que cuando
							trates de decir algún minuto mayo a 10, el「分」al
							final se debe pronunciar como si fuera el respectivo
							número entre el <strong>1</strong> y{" "}
							<strong>10</strong>.
							<br />
							<br />
							<strong>Ejemplo:</strong>
							<br />
							<strong>17</strong>{" "}
							<i className="fas fa-long-arrow-alt-right px-2"></i>{" "}
							<span id="siete">十七分　じゅうななふん</span>
							<br />
							<br />
							En éste caso el「分」se pronuncia「ふん」por que así
							es como se lee al terminar con el número{" "}
							<strong>7</strong>.
						</p>
						<UncontrolledTooltip
							placement="bottom"
							target="siete"
							delay={0}
						>
							juunanafun
						</UncontrolledTooltip>
					</CardBody>
				</Card>
			</Col>
		</React.Fragment>
	);
}
