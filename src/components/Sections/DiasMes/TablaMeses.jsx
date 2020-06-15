import React from "react";
import { Card, CardBody, Col, Progress } from "reactstrap";

export default function TablaMeses() {
	return (
		<Col md="12" id="meses">
			<Card
				className="card-plain text-white"
				style={{
					borderRadius: ".5rem",
					background: "#1171ef",
				}}
			>
				<CardBody className="text-center px-3">
					<h4 className="my-0 py-0">Años y Meses</h4>
					<div className="progress-container progress-success pb-4">
						<Progress max="100" value="100"></Progress>
					</div>
					<p>
						<strong>Cómo se dicen los meses del año?</strong> es una
						duda que probablemente tengas ahora mísmo, y es muy
						simple realmente, los nombres de los meses son los
						números del 1 al 12 sumado al kanji「月」(がつ - gatsu).{" "}
						<br />
					</p>
					<div className="row justify-content-around mb-5">
						<span className="px-2 py-2">
							Enero{" "}
							<i className="fas fa-long-arrow-alt-right px-2"></i>{" "}
							<strong>一月　いちがつ</strong> (ichigatsu)
						</span>
						<span className="px-2 py-2">
							Febrero{" "}
							<i className="fas fa-long-arrow-alt-right px-2"></i>{" "}
							<strong>二月　にがつ</strong> (nigatsu)
						</span>
						<span className="px-2 py-2">
							Marzo{" "}
							<i className="fas fa-long-arrow-alt-right px-2"></i>{" "}
							<strong>三月　さんがつ</strong> (sangatsu)
						</span>
						<span className="px-2 py-2">
							Abril{" "}
							<i className="fas fa-long-arrow-alt-right px-2"></i>{" "}
							<strong>四月　しがつ</strong> (shigatsu)
						</span>
						<span className="px-2 py-2">
							Mayo{" "}
							<i className="fas fa-long-arrow-alt-right px-2"></i>{" "}
							<strong>五月　ごがつ</strong> (gogatsu)
						</span>
						<span className="px-2 py-2">
							Junio{" "}
							<i className="fas fa-long-arrow-alt-right px-2"></i>{" "}
							<strong>六月　ろくがつ</strong> (rokugatsu)
						</span>
						<span className="px-2 py-2">
							Julio{" "}
							<i className="fas fa-long-arrow-alt-right px-2"></i>{" "}
							<strong>七月　しちがつ</strong> (shichigatsu)
						</span>
						<span className="px-2 py-2">
							Agosto{" "}
							<i className="fas fa-long-arrow-alt-right px-2"></i>{" "}
							<strong>八月　はちがつ</strong> (hachigatsu)
						</span>
						<span className="px-2 py-2">
							Septiembre{" "}
							<i className="fas fa-long-arrow-alt-right px-2"></i>{" "}
							<strong>九月　くがつ</strong> (kugatsu)
						</span>
						<span className="px-2 py-2">
							Octubre{" "}
							<i className="fas fa-long-arrow-alt-right px-2"></i>{" "}
							<strong>十月　じゅうがつ</strong> (juugatsu)
						</span>
						<span className="px-2 py-2">
							Noviembre{" "}
							<i className="fas fa-long-arrow-alt-right px-2"></i>{" "}
							<strong>十一月　じゅういちがつ</strong>{" "}
							(juuichigatsu)
						</span>
						<span className="px-2 py-2">
							Diciembre{" "}
							<i className="fas fa-long-arrow-alt-right px-2"></i>{" "}
							<strong>十二月　じゅうにがつ</strong> (juunigatsu)
						</span>
					</div>
					<p className="text-left mb-5">
						<strong>Nota:</strong> Hay meses que se leen con las
						lecturas alternativas de sus respectivos números
						(Septiembre「くがつ」, por ejemplo). <br />{" "}
						<strong>
							Los meses no se pueden leer de otras formas que no
							sean las detalladas arriba.
						</strong>{" "}
						Ni aunque sea la forma alternativa del mísmo número.
					</p>
					<p className="text-right">
						<strong className="h5 text-bold">
							Y cómo se dicen los años entonces?
						</strong>{" "}
						<br />
						El Kanji de "Año/s" es「年」「ねん」(nen). Y para hablar
						de los años, 2020 por ejemplo, diríamos:
						二千二十年　にせんにじゅうねん (nisennijuunen)
					</p>
				</CardBody>
			</Card>
		</Col>
	);
}
