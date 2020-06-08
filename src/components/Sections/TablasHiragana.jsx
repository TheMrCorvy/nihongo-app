import React from "react";
import { Card, CardBody, Col } from "reactstrap";

function TablasHiragana() {
	return (
		<React.Fragment>
			<Col
				md="6"
				className="ml-auto mr-auto text-center text-white"
				style={{
					background: "#1171ef",
				}}
			>
				<Card
					className="card-plain"
					style={{
						borderRadius: 0,
					}}
				>
					<CardBody
						style={{
							padding: 0,
							overflow: "hidden",
						}}
					>
						<table
							style={{
								width: "100%",
								fontSize: "1.2rem",
							}}
						>
							<thead>
								<tr>
									<td colSpan="5">
										<h4 className="text-center pb-3">
											Sonidos Puros
										</h4>
									</td>
								</tr>
							</thead>
							<tbody className="text-capitalize">
								<tr className="text-center">
									<td>
										あ <br /> <small>A</small>
									</td>
									<td>
										い <br /> <small>I</small>
									</td>
									<td>
										う <br /> <small>U</small>
									</td>
									<td>
										え <br /> <small>E</small>
									</td>
									<td>
										お <br /> <small>O</small>
									</td>
								</tr>
								<br />
								<tr className="text-center">
									<td>
										か <br /> <small>Ka</small>
									</td>
									<td>
										き <br /> <small>ki</small>
									</td>
									<td>
										く <br /> <small>ku</small>
									</td>
									<td>
										け <br /> <small>ke</small>
									</td>
									<td>
										こ <br /> <small>ko</small>
									</td>
								</tr>
								<br />
								<tr className="text-center">
									<td>
										さ <br /> <small>sa</small>
									</td>
									<td>
										し <br /> <small>shi</small>
									</td>
									<td>
										す <br /> <small>su</small>
									</td>
									<td>
										せ <br /> <small>se</small>
									</td>
									<td>
										そ <br /> <small>so</small>
									</td>
								</tr>
								<br />
								<tr className="text-center">
									<td>
										た <br /> <small>ta</small>
									</td>
									<td>
										ち <br /> <small>chi</small>
									</td>
									<td>
										つ <br /> <small>tsu</small>
									</td>
									<td>
										て <br /> <small>te</small>
									</td>
									<td>
										と <br /> <small>to</small>
									</td>
								</tr>
								<br />
								<tr className="text-center">
									<td>
										な <br /> <small>na</small>
									</td>
									<td>
										に <br /> <small>ni</small>
									</td>
									<td>
										ぬ <br /> <small>nu</small>
									</td>
									<td>
										ね <br /> <small>ne</small>
									</td>
									<td>
										の <br /> <small>no</small>
									</td>
								</tr>
								<br />
								<tr className="text-center">
									<td>
										は <br /> <small>ha</small>
									</td>
									<td>
										ひ <br /> <small>hi</small>
									</td>
									<td>
										ふ <br /> <small>fu</small>
									</td>
									<td>
										へ <br /> <small>he</small>
									</td>
									<td>
										ほ <br /> <small>ho</small>
									</td>
								</tr>
								<br />
								<tr className="text-center">
									<td>
										ま <br /> <small>ma</small>
									</td>
									<td>
										み <br /> <small>mi</small>
									</td>
									<td>
										む <br /> <small>mu</small>
									</td>
									<td>
										め <br /> <small>me</small>
									</td>
									<td>
										も <br /> <small>mo</small>
									</td>
								</tr>
								<br />
								<tr className="text-center">
									<td>
										や <br /> <small>ya</small>
									</td>
									<td></td>
									<td>
										ゆ <br /> <small>yu</small>
									</td>
									<td></td>
									<td>
										よ <br /> <small>yo</small>
									</td>
								</tr>
								<br />
								<tr className="text-center">
									<td>
										ら <br /> <small>ra</small>
									</td>
									<td>
										り <br /> <small>ri</small>
									</td>
									<td>
										る <br /> <small>ru</small>
									</td>
									<td>
										れ <br /> <small>re</small>
									</td>
									<td>
										ろ <br /> <small>ro</small>
									</td>
								</tr>
								<br />
								<tr className="text-center">
									<td>
										わ <br /> <small>wa</small>
									</td>
									<td></td>
									<td></td>
									<td></td>
									<td>
										を <br /> <small>wo</small>
									</td>
								</tr>
								<br />
								<tr className="text-center">
									<td>
										ん <br /> <small>n</small>
									</td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
							</tbody>
						</table>
					</CardBody>
				</Card>
			</Col>
			<Col md="6" className="ml-auto mr-auto text-center">
				<div className="row">
					<Col md="12" className="px-0">
						<Card
							style={{
								background:
									"linear-gradient(87deg, rgb(245, 54, 92) 0px, rgb(245, 96, 54) 100%)",
								borderRadius: 0,
							}}
							className="card-plain text-white pb-4 mb-0"
						>
							<CardBody
								style={{
									padding: 0,
									overflow: "hidden",
								}}
							>
								<table
									style={{
										width: "100%",
										fontSize: "1.2rem",
									}}
								>
									<thead>
										<tr>
											<td colSpan="5">
												<h4 className="text-center pb-3">
													Sonidos Impuros y
													Semi-Impuros
												</h4>
											</td>
										</tr>
									</thead>
									<tbody className="text-capitalize">
										<tr className="text-center">
											<td>
												が <br /> <small>ga</small>
											</td>
											<td>
												ぎ <br /> <small>gi</small>
											</td>
											<td>
												ぐ <br /> <small>gu</small>
											</td>
											<td>
												げ <br /> <small>ge</small>
											</td>
											<td>
												ご <br /> <small>go</small>
											</td>
										</tr>
										<br />
										<tr className="text-center">
											<td>
												ざ <br /> <small>za</small>
											</td>
											<td>
												じ <br /> <small>ji</small>
											</td>
											<td>
												ず <br /> <small>zu</small>
											</td>
											<td>
												ぜ <br /> <small>ze</small>
											</td>
											<td>
												ぞ <br /> <small>zo</small>
											</td>
										</tr>
										<br />
										<tr className="text-center">
											<td>
												だ <br /> <small>da</small>
											</td>
											<td>
												ぢ <br /> <small>ji / di</small>
											</td>
											<td>
												づ <br /> <small>tzu</small>
											</td>
											<td>
												で <br /> <small>de</small>
											</td>
											<td>
												ど <br /> <small>do</small>
											</td>
										</tr>
										<br />
										<tr className="text-center">
											<td>
												ば <br /> <small>ba</small>
											</td>
											<td>
												び <br /> <small>bi</small>
											</td>
											<td>
												ぶ <br /> <small>bu</small>
											</td>
											<td>
												べ <br /> <small>be</small>
											</td>
											<td>
												ぼ <br /> <small>bo</small>
											</td>
										</tr>
										<br />
										<tr className="text-center">
											<td>
												ぱ <br /> <small>pa</small>
											</td>
											<td>
												ぴ <br /> <small>pi</small>
											</td>
											<td>
												ぷ <br /> <small>pu</small>
											</td>
											<td>
												ぺ <br /> <small>pe</small>
											</td>
											<td>
												ぽ <br /> <small>po</small>
											</td>
										</tr>
									</tbody>
								</table>
							</CardBody>
						</Card>
					</Col>
					<Col md="12" className="ml-auto mr-auto text-center px-0">
						<Card
							style={{
								background:
									"linear-gradient(87deg, rgb(251, 99, 64) 0px, rgb(251, 177, 64) 100%)",
								borderRadius: 0,
							}}
							className="card-plain text-white mb-0 pb-4"
						>
							<CardBody
								style={{
									padding: 0,
									overflow: "hidden",
								}}
							>
								<table
									style={{
										width: "100%",
										fontSize: "1.2rem",
									}}
								>
									<thead>
										<tr>
											<td colSpan="5">
												<h4 className="text-center text-capitalize pb-3">
													sonidos diptongales
												</h4>
											</td>
										</tr>
									</thead>
									<tbody className="text-capitalize">
										<tr className="text-center">
											<td>
												きゃ <br />
												<small>kya</small>
											</td>
											<td></td>
											<td>
												きゅ <br />
												<small>kyu</small>
											</td>
											<td></td>
											<td>
												きょ <br />
												<small>kyo</small>
											</td>
										</tr>
										<br />
										<tr className="text-center">
											<td>
												しゃ <br />
												<small>sha</small>
											</td>
											<td></td>
											<td>
												しゅ <br />
												<small>shu</small>
											</td>
											<td></td>
											<td>
												しょ <br />
												<small>sho</small>
											</td>
										</tr>
										<br />
										<tr className="text-center">
											<td>
												ちゃ <br />
												<small>cha</small>
											</td>
											<td>
												<br />
												<small></small>
											</td>
											<td>
												ちゅ <br />
												<small>chu</small>
											</td>
											<td></td>
											<td>
												ちょ <br />
												<small>cho</small>
											</td>
										</tr>
										<br />
										<tr className="text-center">
											<td>
												にゃ
												<br /> <small>nya</small>
											</td>
											<td></td>
											<td>
												にゅ
												<br /> <small>nyu</small>
											</td>
											<td></td>
											<td>
												にょ <br />
												<small>nyo</small>
											</td>
										</tr>
										<br />
										<tr className="text-center">
											<td>
												ひゃ <br />
												<small>hya</small>
											</td>
											<td></td>
											<td>
												ひゅ <br />
												<small>hyu</small>
											</td>
											<td></td>
											<td>
												ひょ <br />
												<small>hyo</small>
											</td>
										</tr>
										<br />
										<tr className="text-center">
											<td>
												みゃ <br />
												<small>mya</small>
											</td>
											<td></td>
											<td>
												みゅ <br />
												<small>myu</small>
											</td>
											<td></td>
											<td>
												みょ <br />
												<small>myo</small>
											</td>
										</tr>
										<br />
										<tr className="text-center">
											<td>
												りゃ <br />
												<small>rya</small>
											</td>
											<td></td>
											<td>
												りゅ <br />
												<small>ryu</small>
											</td>
											<td></td>
											<td>
												りょ <br />
												<small>ryo</small>
											</td>
										</tr>
										<br />
										<tr className="text-center">
											<td>
												ぎゃ <br />
												<small>gya</small>
											</td>
											<td></td>
											<td>
												ぎゅ <br />
												<small>gyu</small>
											</td>
											<td></td>
											<td>
												ぎょ <br />
												<small>gyo</small>
											</td>
										</tr>
										<br />
										<tr className="text-center">
											<td>
												じゃ <br />
												<small>ja</small>
											</td>
											<td></td>
											<td>
												じゅ <br />
												<small>ju</small>
											</td>
											<td></td>
											<td>
												じょ <br />
												<small>jo</small>
											</td>
										</tr>
										<br />
										<tr className="text-center">
											<td>
												ぢゃ <br />
												<small>ja / dya</small>
											</td>
											<td></td>
											<td>
												ぢゅ <br />
												<small>ju / dyu</small>
											</td>
											<td></td>
											<td>
												ぢょ <br />
												<small>jo / dyo</small>
											</td>
										</tr>
										<br />
										<tr className="text-center">
											<td>
												びゃ <br />
												<small>bya</small>
											</td>
											<td></td>
											<td>
												びゅ <br />
												<small>byu</small>
											</td>
											<td></td>
											<td>
												びょ <br />
												<small>byo</small>
											</td>
										</tr>
										<br />
										<tr className="text-center">
											<td>
												ぴゃ <br />
												<small>pya</small>
											</td>
											<td></td>
											<td>
												ぴゅ <br />
												<small>pyu</small>
											</td>
											<td></td>
											<td>
												ぴょ <br />
												<small>pyo</small>
											</td>
										</tr>
									</tbody>
								</table>
							</CardBody>
						</Card>
					</Col>
				</div>
			</Col>
		</React.Fragment>
	);
}

export default TablasHiragana;
