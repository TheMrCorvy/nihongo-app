import React from "react";
import { Card, CardBody, Col } from "reactstrap";

export default function TablaLecturaAlternativa() {
	return (
		<Col md="12" id="lectura-alternativa">
			<Card
				className="card-plain bg-white"
				style={{ borderRadius: ".5rem" }}
			>
				<CardBody className="text-center px-2">
					<table className="container text-warning">
						<thead>
							<tr>
								<th scope="col" colSpan="4" className="pb-3">
									Usa lectura alternativa del número
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
								<th scope="row">17</th>
								<td>十七日</td>
								<td>
									じゅう
									<span className="text-warning">しち</span>
									にち
								</td>
								<td>
									<strong>
										juu
										<span className="text-warning">
											shichi
										</span>
										nichi
									</strong>
								</td>
							</tr>
							<tr>
								<th scope="row">19</th>
								<td>十九日</td>
								<td>
									じゅう
									<span className="text-warning">く</span>
									にち
								</td>
								<td>
									<strong>
										juu
										<span className="text-warning">ku</span>
										nichi
									</strong>
								</td>
							</tr>
							<tr>
								<th scope="row">20</th>
								<td>二十日</td>
								<td>
									<span className="text-warning">はつ</span>
									<span className="text-success">か</span>
								</td>
								<td>
									<strong>
										<span className="text-warning">
											hatsu
										</span>
										<span className="text-success">ka</span>
									</strong>
								</td>
							</tr>
							<tr>
								<th scope="row">27</th>
								<td>二十七日</td>
								<td>
									にじゅう
									<span className="text-warning">しち</span>
									にち
								</td>
								<td>
									<strong>
										nijuu
										<span className="text-warning">
											shichi
										</span>
										nichi
									</strong>
								</td>
							</tr>
							<tr>
								<th scope="row">29</th>
								<td>二十九日</td>
								<td>
									にじゅう
									<span className="text-warning">く</span>
									にち
								</td>
								<td>
									<strong>
										nijuu
										<span className="text-warning">ku</span>
										nichi
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
