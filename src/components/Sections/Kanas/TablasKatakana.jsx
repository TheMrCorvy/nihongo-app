import React from "react";
import { Card, CardBody, Col } from "reactstrap";

function TablasKatakana() {
	return (
		<React.Fragment>
			<Col
				md="6"
				className="mx-0 text-center text-white"
				style={{
					background: "rgb(156, 39, 176)",
				}}
			>
				<Card
					style={{
						borderRadius: "0px",
					}}
					className="card-plain"
				>
					<CardBody
						style={{
							padding: 0,
							borderRadius: ".5rem",
							overflow: "hidden",
						}}
					>
						<table
							style={{
								width: "100%",
								fontSize: "1.2rem",
								borderCollapse: "separate",
								borderSpacing: "0 25px",
							}}
						>
							<thead>
								<tr>
									<td colSpan="5">
										<h4 className="text-center mt-0">
											Sonidos Puros
										</h4>
									</td>
								</tr>
							</thead>

							<tbody className="text-capitalize">
								<tr
									className="text-center"
									style={{
										paddingBottom: "30px",
									}}
								>
									<td>
										ア <br /> <small>A</small>
									</td>
									<td>
										イ <br /> <small>I</small>
									</td>
									<td>
										ウ <br /> <small>U</small>
									</td>
									<td>
										エ <br /> <small>E</small>
									</td>
									<td>
										オ <br /> <small>O</small>
									</td>
								</tr>
								<tr className="text-center">
									<td>
										カ <br /> <small>Ka</small>
									</td>
									<td>
										キ <br /> <small>ki</small>
									</td>
									<td>
										ク <br /> <small>ku</small>
									</td>
									<td>
										ケ <br /> <small>ke</small>
									</td>
									<td>
										コ <br /> <small>ko</small>
									</td>
								</tr>
								<tr className="text-center">
									<td>
										サ <br /> <small>sa</small>
									</td>
									<td>
										シ <br /> <small>shi</small>
									</td>
									<td>
										ス <br /> <small>su</small>
									</td>
									<td>
										セ <br /> <small>se</small>
									</td>
									<td>
										ソ <br /> <small>so</small>
									</td>
								</tr>
								<tr className="text-center">
									<td>
										タ <br /> <small>ta</small>
									</td>
									<td>
										チ <br /> <small>chi</small>
									</td>
									<td>
										ツ <br /> <small>tsu</small>
									</td>
									<td>
										テ <br /> <small>te</small>
									</td>
									<td>
										ト <br /> <small>to</small>
									</td>
								</tr>
								<tr className="text-center">
									<td>
										ナ <br /> <small>na</small>
									</td>
									<td>
										ニ <br /> <small>ni</small>
									</td>
									<td>
										ヌ <br /> <small>nu</small>
									</td>
									<td>
										ネ <br /> <small>ne</small>
									</td>
									<td>
										ノ <br /> <small>no</small>
									</td>
								</tr>
								<tr className="text-center">
									<td>
										ハ <br /> <small>ha</small>
									</td>
									<td>
										ヒ <br /> <small>hi</small>
									</td>
									<td>
										フ <br /> <small>fu</small>
									</td>
									<td>
										ヘ <br /> <small>he</small>
									</td>
									<td>
										ホ <br /> <small>ho</small>
									</td>
								</tr>
								<tr className="text-center">
									<td>
										マ <br /> <small>ma</small>
									</td>
									<td>
										ミ <br /> <small>mi</small>
									</td>
									<td>
										ム <br /> <small>mu</small>
									</td>
									<td>
										メ <br /> <small>me</small>
									</td>
									<td>
										モ <br /> <small>mo</small>
									</td>
								</tr>
								<tr className="text-center">
									<td>
										ヤ <br /> <small>ya</small>
									</td>
									<td></td>
									<td>
										ユ <br /> <small>yu</small>
									</td>
									<td></td>
									<td>
										ヨ <br /> <small>yo</small>
									</td>
								</tr>
								<tr className="text-center">
									<td>
										ラ <br /> <small>ra</small>
									</td>
									<td>
										リ <br /> <small>ri</small>
									</td>
									<td>
										ル <br /> <small>ru</small>
									</td>
									<td>
										レ <br /> <small>re</small>
									</td>
									<td>
										ロ <br /> <small>ro</small>
									</td>
								</tr>
								<tr className="text-center">
									<td>
										ワ <br /> <small>wa</small>
									</td>
									<td></td>
									<td></td>
									<td></td>
									<td>
										ヲ <br /> <small>wo</small>
									</td>
								</tr>
								<tr className="text-center">
									<td>
										ン <br /> <small>n</small>
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
			<Col md="6" className="row mx-0 px-0">
				<Col
					md="12"
					className="text-center text-white"
					style={{
						background:
							"linear-gradient(87deg, rgb(245, 96, 54) 0px, rgb(245, 54, 92) 100%)",
					}}
				>
					<Card
						style={{
							borderRadius: 0,
						}}
						className="card-plain pb-4 mb-0"
					>
						<CardBody
							style={{
								padding: 0,
								borderRadius: 0,
								overflow: "hidden",
							}}
						>
							<table
								style={{
									width: "100%",
									fontSize: "1.2rem",
									borderCollapse: "separate",
									borderSpacing: "0 25px",
								}}
							>
								<thead>
									<tr>
										<td colSpan="5">
											<h4 className="text-center mt-0">
												Sonidos Impuros y Semi-Impuros
											</h4>
										</td>
									</tr>
								</thead>

								<tbody className="text-capitalize">
									<tr className="text-center">
										<td>
											ガ <br /> <small>ga</small>
										</td>
										<td>
											ギ <br /> <small>gi</small>
										</td>
										<td>
											グ <br /> <small>gu</small>
										</td>
										<td>
											ゲ <br /> <small>ge</small>
										</td>
										<td>
											ゴ <br /> <small>go</small>
										</td>
									</tr>
									<tr className="text-center">
										<td>
											ザ <br /> <small>za</small>
										</td>
										<td>
											ジ <br /> <small>ji</small>
										</td>
										<td>
											ズ <br /> <small>zu</small>
										</td>
										<td>
											ゼ <br /> <small>ze</small>
										</td>
										<td>
											ゾ <br /> <small>zo</small>
										</td>
									</tr>
									<tr className="text-center">
										<td>
											ダ <br /> <small>da</small>
										</td>
										<td>
											ヂ <br /> <small>ji / di</small>
										</td>
										<td>
											ヅ <br /> <small>tzu</small>
										</td>
										<td>
											デ <br /> <small>de</small>
										</td>
										<td>
											ド <br /> <small>do</small>
										</td>
									</tr>
									<tr className="text-center">
										<td>
											バ <br /> <small>ba</small>
										</td>
										<td>
											ビ <br /> <small>bi</small>
										</td>
										<td>
											ブ <br /> <small>bu</small>
										</td>
										<td>
											ベ <br /> <small>be</small>
										</td>
										<td>
											ボ <br /> <small>bo</small>
										</td>
									</tr>
									<tr className="text-center">
										<td>
											パ <br /> <small>pa</small>
										</td>
										<td>
											ピ <br /> <small>pi</small>
										</td>
										<td>
											プ <br /> <small>pu</small>
										</td>
										<td>
											ペ <br /> <small>pe</small>
										</td>
										<td>
											ポ <br /> <small>po</small>
										</td>
									</tr>
								</tbody>
							</table>
						</CardBody>
					</Card>
				</Col>
				<Col
					md="12"
					className="ml-auto mr-auto text-center text-white"
					style={{
						background: "rgb(76, 175, 80)",
					}}
				>
					<Card
						style={{ borderRadius: ".5rem" }}
						className="card-plain pb-4 mb-0"
					>
						<CardBody
							style={{
								padding: 0,
								borderRadius: ".5rem",
								overflow: "hidden",
							}}
						>
							<table
								style={{
									width: "100%",
									fontSize: "1.2rem",
									borderCollapse: "separate",
									borderSpacing: "0 25px",
								}}
							>
								<thead>
									<tr>
										<td colSpan="5">
											<h4 className="text-center mt-0">
												Sonidos Diptongales
											</h4>
										</td>
									</tr>
								</thead>

								<tbody className="text-capitalize">
									<tr className="text-center">
										<td>
											キャ <br />
											<small>kya</small>
										</td>
										<td></td>
										<td>
											キュ <br />
											<small>kyu</small>
										</td>
										<td></td>
										<td>
											キョ <br />
											<small>kyo</small>
										</td>
									</tr>
									<tr className="text-center">
										<td>
											シャ <br />
											<small>sha</small>
										</td>
										<td></td>
										<td>
											シュ <br />
											<small>shu</small>
										</td>
										<td></td>
										<td>
											ショ <br />
											<small>sho</small>
										</td>
									</tr>
									<tr className="text-center">
										<td>
											チャ <br />
											<small>cha</small>
										</td>
										<td>
											<br />
											<small></small>
										</td>
										<td>
											チュ
											<br />
											<small>chu</small>
										</td>
										<td></td>
										<td>
											チョ <br />
											<small>cho</small>
										</td>
									</tr>
									<tr className="text-center">
										<td>
											ニャ
											<br /> <small>nya</small>
										</td>
										<td></td>
										<td>
											ニュ
											<br /> <small>nyu</small>
										</td>
										<td></td>
										<td>
											ニョ <br />
											<small>nyo</small>
										</td>
									</tr>
									<tr className="text-center">
										<td>
											ヒャ <br />
											<small>hya</small>
										</td>
										<td></td>
										<td>
											ヒュ <br />
											<small>hyu</small>
										</td>
										<td></td>
										<td>
											ヒョ <br />
											<small>hyo</small>
										</td>
									</tr>
									<tr className="text-center">
										<td>
											ミャ <br />
											<small>mya</small>
										</td>
										<td></td>
										<td>
											ミュ <br />
											<small>myu</small>
										</td>
										<td></td>
										<td>
											ミョ <br />
											<small>myo</small>
										</td>
									</tr>
									<tr className="text-center">
										<td>
											ヤ <br />
											<small>rya</small>
										</td>
										<td></td>
										<td>
											リュ <br />
											<small>ryu</small>
										</td>
										<td></td>
										<td>
											リョ <br />
											<small>ryo</small>
										</td>
									</tr>
									<tr className="text-center">
										<td>
											ギャ <br />
											<small>gya</small>
										</td>
										<td></td>
										<td>
											ギュ <br />
											<small>gyu</small>
										</td>
										<td></td>
										<td>
											ギョ <br />
											<small>gyo</small>
										</td>
									</tr>
									<tr className="text-center">
										<td>
											ジャ <br />
											<small>ja</small>
										</td>
										<td></td>
										<td>
											ジュ
											<br />
											<small>ju</small>
										</td>
										<td></td>
										<td>
											ジョ <br />
											<small>jo</small>
										</td>
									</tr>
									<tr className="text-center">
										<td>
											ヂャ <br />
											<small>ja / dya</small>
										</td>
										<td></td>
										<td>
											ヂュ <br />
											<small>ju / dyu</small>
										</td>
										<td></td>
										<td>
											ヂョ <br />
											<small>jo / dyo</small>
										</td>
									</tr>
									<tr className="text-center">
										<td>
											ビャ <br />
											<small>bya</small>
										</td>
										<td></td>
										<td>
											ビュ <br />
											<small>byu</small>
										</td>
										<td></td>
										<td>
											ビョ <br />
											<small>byo</small>
										</td>
									</tr>
									<tr className="text-center">
										<td>
											ピャ <br />
											<small>pya</small>
										</td>
										<td></td>
										<td>
											ピュ <br />
											<small>pyu</small>
										</td>
										<td></td>
										<td>
											ピョ <br />
											<small>pyo</small>
										</td>
									</tr>
								</tbody>
							</table>
						</CardBody>
					</Card>
				</Col>
			</Col>
		</React.Fragment>
	);
}

export default TablasKatakana;
