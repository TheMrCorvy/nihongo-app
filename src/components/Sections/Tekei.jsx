import React from "react";
import { Col, Card, CardBody } from "reactstrap";

export default function Tekei(props) {
	if (props.verbos) {
		return (
			<div
				className="col-lg-12 row justify-content-center"
				id="verbos-te"
			>
				<h2 className="col-lg-12 text-center title">Verbos　て形</h2>
				<Col md="12">
					<Card
						style={{ borderRadius: ".5rem" }}
						className="bg-white card-plain px-3"
					>
						<h3 className="title text-warning text-center">
							Grupo 1
						</h3>
						<CardBody>
							<p>
								Acá van las reglas de conjugacion para presente
								+ y -, y para pasado + y - y van cada una segun
								cada carta de grupo o tipo de verbo o adjetivo.
							</p>
							<p>
								Acá van las reglas de conjugacion para presente
								+ y -, y para pasado + y - y van cada una segun
								cada carta de grupo o tipo de verbo o adjetivo.
							</p>
							<p>
								Acá van las reglas de conjugacion para presente
								+ y -, y para pasado + y - y van cada una segun
								cada carta de grupo o tipo de verbo o adjetivo.
							</p>
							<p>
								Acá van las reglas de conjugacion para presente
								+ y -, y para pasado + y - y van cada una segun
								cada carta de grupo o tipo de verbo o adjetivo.
							</p>

							<p>
								Acá van las reglas de conjugacion para presente
								+ y -, y para pasado + y - y van cada una segun
								cada carta de grupo o tipo de verbo o adjetivo.
							</p>
						</CardBody>
					</Card>
				</Col>
				<Col md="12">
					<Card
						style={{ borderRadius: ".5rem" }}
						className="bg-white card-plain px-3"
					>
						<h3 className="title text-primary text-center">
							Grupo 2
						</h3>
						<CardBody>
							<p>
								Acá van las reglas de conjugacion para presente
								+ y -, y para pasado + y - y van cada una segun
								cada carta de grupo o tipo de verbo o adjetivo.
							</p>
							<p>
								Acá van las reglas de conjugacion para presente
								+ y -, y para pasado + y - y van cada una segun
								cada carta de grupo o tipo de verbo o adjetivo.
							</p>
							<p>
								Acá van las reglas de conjugacion para presente
								+ y -, y para pasado + y - y van cada una segun
								cada carta de grupo o tipo de verbo o adjetivo.
							</p>

							<p>
								Acá van las reglas de conjugacion para presente
								+ y -, y para pasado + y - y van cada una segun
								cada carta de grupo o tipo de verbo o adjetivo.
							</p>
						</CardBody>
					</Card>
				</Col>
				<Col md="12">
					<Card
						style={{ borderRadius: ".5rem" }}
						className="bg-white card-plain px-3"
					>
						<h3 className="title text-success text-center">
							Grupo 3
						</h3>
						<CardBody>
							<p>
								Acá van las reglas de conjugacion para presente
								+ y -, y para pasado + y - y van cada una segun
								cada carta de grupo o tipo de verbo o adjetivo.
							</p>
							<p>
								Acá van las reglas de conjugacion para presente
								+ y -, y para pasado + y - y van cada una segun
								cada carta de grupo o tipo de verbo o adjetivo.
							</p>
							<p>
								Acá van las reglas de conjugacion para presente
								+ y -, y para pasado + y - y van cada una segun
								cada carta de grupo o tipo de verbo o adjetivo.
							</p>

							<p>
								Acá van las reglas de conjugacion para presente
								+ y -, y para pasado + y - y van cada una segun
								cada carta de grupo o tipo de verbo o adjetivo.
							</p>
						</CardBody>
					</Card>
				</Col>
			</div>
		);
	} else {
		return (
			<div
				className="col-lg-12 row justify-content-center"
				id="adjetivos-te"
			>
				<h2 className="col-lg-12 text-center title">Adjetivos　て形</h2>
				<Col md="12">
					<Card
						style={{ borderRadius: ".5rem" }}
						className="bg-white card-plain px-3"
					>
						<h3 className="title text-success text-center">
							な形ようし
						</h3>
						<CardBody>
							<p>
								Acá van las reglas de conjugacion para presente
								+ y -, y para pasado + y - y van cada una segun
								cada carta de grupo o tipo de verbo o adjetivo.
							</p>
							<p>
								Acá van las reglas de conjugacion para presente
								+ y -, y para pasado + y - y van cada una segun
								cada carta de grupo o tipo de verbo o adjetivo.
							</p>
							<p>
								Acá van las reglas de conjugacion para presente
								+ y -, y para pasado + y - y van cada una segun
								cada carta de grupo o tipo de verbo o adjetivo.
							</p>

							<p>
								Acá van las reglas de conjugacion para presente
								+ y -, y para pasado + y - y van cada una segun
								cada carta de grupo o tipo de verbo o adjetivo.
							</p>
						</CardBody>
					</Card>
				</Col>
				<Col md="12">
					<Card
						style={{ borderRadius: ".5rem" }}
						className="bg-white card-plain px-3"
					>
						<h3 className="title text-primary text-center">
							い形ようし
						</h3>
						<CardBody>
							<p>
								Acá van las reglas de conjugacion para presente
								+ y -, y para pasado + y - y van cada una segun
								cada carta de grupo o tipo de verbo o adjetivo.
							</p>
							<p>
								Acá van las reglas de conjugacion para presente
								+ y -, y para pasado + y - y van cada una segun
								cada carta de grupo o tipo de verbo o adjetivo.
							</p>
							<p>
								Acá van las reglas de conjugacion para presente
								+ y -, y para pasado + y - y van cada una segun
								cada carta de grupo o tipo de verbo o adjetivo.
							</p>

							<p>
								Acá van las reglas de conjugacion para presente
								+ y -, y para pasado + y - y van cada una segun
								cada carta de grupo o tipo de verbo o adjetivo.
							</p>
						</CardBody>
					</Card>
				</Col>
			</div>
		);
	}
}
