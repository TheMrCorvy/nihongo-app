import React from "react";
import { Card, CardBody, Col } from "reactstrap";

export default function TablaDiasMes() {
	return (
		<Col md="12" id="todo">
			<Card
				className="card-plain bg-white"
				style={{ borderRadius: ".5rem" }}
			>
				<CardBody className="text-center text-info px-2">
					<h6 className="title pt-0">Los Días del Mes</h6>
					<table className="container">
						<thead>
							<tr>
								<th scope="col">Día</th>
								<th scope="col">Kanji</th>
								<th scope="col">Lectura</th>
								<th scope="col">Pronunciación</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>一日</td>
								<td className="text-danger">ついたち</td>
								<td>
									<strong className="text-danger">
										tsuitachi
									</strong>
								</td>
							</tr>
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
									<span className="text-warning">ここ</span>の
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
								<th scope="row">11</th>
								<td>十一日</td>
								<td>じゅいちにち</td>
								<td>
									<strong>juuichinichi</strong>
								</td>
							</tr>
							<tr>
								<th scope="row">12</th>
								<td>十二日</td>
								<td>じゅうににち</td>
								<td>
									<strong>juuninichi</strong>
								</td>
							</tr>
							<tr>
								<th scope="row">13</th>
								<td>十三日</td>
								<td>じゅうさんにち</td>
								<td>
									<strong>juusannichi</strong>
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
								<th scope="row">15</th>
								<td>十五日</td>
								<td>じゅうごにち</td>
								<td>
									<strong>juugonichi</strong>
								</td>
							</tr>
							<tr>
								<th scope="row">16</th>
								<td>十六日</td>
								<td>じゅうろくにち</td>
								<td>
									<strong>juurokunichi</strong>
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
								<th scope="row">18</th>
								<td>十八日</td>
								<td>じゅうはちにち</td>
								<td>
									<strong>juuhachinichi</strong>
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
								<th scope="row">21</th>
								<td>二十一日</td>
								<td>にじゅういちにち</td>
								<td>
									<strong>nijuuichinichi</strong>
								</td>
							</tr>
							<tr>
								<th scope="row">22</th>
								<td>二十二日</td>
								<td>にじゅうににち</td>
								<td>
									<strong>nijuuninichi</strong>
								</td>
							</tr>
							<tr>
								<th scope="row">23</th>
								<td>二十三日</td>
								<td>にじゅうさんにち</td>
								<td>
									<strong>nijuusannichi</strong>
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
							<tr>
								<th scope="row">25</th>
								<td>二十五日</td>
								<td>にじゅうごにち</td>
								<td>
									<strong>nijuugonichi</strong>
								</td>
							</tr>
							<tr>
								<th scope="row">26</th>
								<td>二十六日</td>
								<td>にじゅうろくにち</td>
								<td>
									<strong>nijuurokunichi</strong>
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
								<th scope="row">28</th>
								<td>二十八日</td>
								<td>にじゅうはちにち</td>
								<td>
									<strong>nijuuhachinichi</strong>
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
							<tr>
								<th scope="row">30</th>
								<td>三十日</td>
								<td>さんじゅうにち</td>
								<td>
									<strong>sanjuunichi</strong>
								</td>
							</tr>
							<tr>
								<th scope="row">31</th>
								<td>三十日</td>
								<td>さんじゅういちにち</td>
								<td>
									<strong>sanjuuichinichi</strong>
								</td>
							</tr>
						</tbody>
					</table>
				</CardBody>
			</Card>
		</Col>
	);
}
