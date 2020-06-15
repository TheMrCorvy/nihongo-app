import React from "react";
import { Card, CardBody, Col } from "reactstrap";

export default function TablaKa() {
	return (
		<Col md="12" id="termina-ka">
			<Card
				className="card-plain bg-white"
				style={{ borderRadius: ".5rem" }}
			>
				<CardBody className="text-center px-2">
					<table className="container text-success">
						<thead>
							<tr>
								<th scope="col" colSpan="4" className="pb-3">
									Terminan en か
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">2</th>
								<td>二日</td>
								<td>
									<span className="text-warning">ふ</span>つ
									<span className="text-success">か</span>
								</td>
								<td>
									<strong>
										<span className="text-warning">fu</span>
										tsu
										<span className="text-success">ka</span>
									</strong>
								</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td>三日</td>
								<td>
									<span className="text-warning">み</span>
									<span className="text-success">っか</span>
								</td>
								<td>
									<strong>
										<span className="text-warning">mi</span>
										<span className="text-success">
											kka
										</span>
									</strong>
								</td>
							</tr>
							<tr>
								<th scope="row">4</th>
								<td>四日</td>
								<td>
									よ<span className="text-success">っか</span>
								</td>
								<td>
									<strong>
										yo
										<span className="text-success">
											kka
										</span>
									</strong>
								</td>
							</tr>
							<tr>
								<th scope="row">5</th>
								<td>五日</td>
								<td>
									<span className="text-warning">いつ</span>
									<span className="text-success">か</span>
								</td>
								<td>
									<strong>
										<span className="text-warning">
											itsu
										</span>
										<span className="text-success">ka</span>
									</strong>
								</td>
							</tr>
							<tr>
								<th scope="row">6</th>
								<td>六日</td>
								<td>
									<span className="text-warning">むい</span>
									<span className="text-success">か</span>
								</td>
								<td>
									<strong>
										<span className="text-warning">
											mui
										</span>
										<span className="text-success">ka</span>
									</strong>
								</td>
							</tr>
							<tr>
								<th scope="row">7</th>
								<td>七日</td>
								<td>
									なの
									<span className="text-success">か</span>
								</td>
								<td>
									<strong>
										nano
										<span className="text-success">ka</span>
									</strong>
								</td>
							</tr>
							<tr>
								<th scope="row">8</th>
								<td>八日</td>
								<td>
									<span className="text-warning">よう</span>
									<span className="text-success">か</span>
								</td>
								<td>
									<strong>
										<span className="text-warning">
											you
										</span>
										<span className="text-success">ka</span>
									</strong>
								</td>
							</tr>
							<tr>
								<th scope="row">9</th>
								<td>九日</td>
								<td>
									<span className="text-warning">ここ</span>の{" "}
									<span className="text-success">か</span>
								</td>
								<td>
									<strong>
										<span className="text-warning">
											koko
										</span>
										no
										<span className="text-success">ka</span>
									</strong>
								</td>
							</tr>
							<tr>
								<th scope="row">10</th>
								<td>十日</td>
								<td>
									<span className="text-warning">とお</span>
									<span className="text-success">か</span>
								</td>
								<td>
									<strong>
										<span className="text-warning">
											too
										</span>
										<span className="text-success">ka</span>
									</strong>
								</td>
							</tr>
							<tr>
								<th scope="row">14</th>
								<td>十四日</td>
								<td>
									じゅうよ
									<span className="text-success">っか</span>
								</td>
								<td>
									<strong>
										juuyo
										<span className="text-success">
											kka
										</span>
									</strong>
								</td>
							</tr>
							<tr>
								<th scope="row">24</th>
								<td>二十四日</td>
								<td>
									にじゅうよ
									<span className="text-success">っか</span>
								</td>
								<td>
									<strong>
										nijuuyo
										<span className="text-success">
											kka
										</span>
									</strong>
								</td>
							</tr>
						</tbody>
					</table>
				</CardBody>
			</Card>
		</Col>
	);
}
