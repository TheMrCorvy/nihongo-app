import React from "react";
import { Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";

export default function ToOmou() {
	return (
		<Col md="12">
			<Card
				className="card-plain bg-white"
				style={{ borderRadius: "15px" }}
				id="de"
			>
				<div
					className="bg-info text-white text-center justify-content-center"
					style={{
						borderTopRightRadius: "15px",
						borderBottomLeftRadius: "15px",
						height: "50px",
						width: "50px",
						position: "absolute",
						top: 0,
						right: 0,
					}}
				>
					<i
						className="fas fa-3x fa-lightbulb"
						style={{
							position: "absolute",
							top: 4,
							right: 10,
							opacity: 0.7,
						}}
					></i>
				</div>
				<h4 className="text-left px-4 pt-2 float-left my-0">
					Decir, Creer, y Pensar
				</h4>
				<CardBody className="mt-5 px-3">
					<p>
						Aquí vamos a ver los verbos que "
						<strong>relatan historias</strong>". Los usaremos para
						hablar de cosas que nos dijeron, las creencias /
						pensamientos, y las opiniones personales.
					</p>
					<p>Utilizaremos principalmente éstas 3 palabras:</p>

					<ul>
						<li>
							<p>「言う - いう - iu (decir)」</p>
						</li>
						<li>
							<p>「思う - おもう - omou (creer / opinar)」</p>
						</li>
						<li>
							<p>「考える - かんがえる - kangaeru (pensar)」</p>
						</li>
					</ul>

					<p>
						Éstos 3 verbos siempre finalizarán las frases, siendo
						precedidos por lo que estén relatando, es decir, primero
						diremos nuestra opinión, y luego vendrá{" "}
						<span id="omou1">思</span>う.
					</p>
					<UncontrolledTooltip
						placement="top"
						target="omou1"
						delay={0}
					>
						おも
					</UncontrolledTooltip>
					<p>
						Al ser éstos los verbos que finalizan la oración, éstos
						mismos son los que marcarán el tiempo, y el tipo de
						discurso (
						<strong className="text-primary">Formal</strong> o{" "}
						<strong className="text-info">Normal</strong>).
					</p>
					<p>
						Para los 2 primeros casos, 言う (iu) y 思う (omou),
						debemos conectar lo que les precede con la partícula{" "}
						<strong className="text-danger">と</strong>.
					</p>
					<h4 className="text-center">Ejemplos</h4>
					<p>
						<strong className="text-info">思う - Opinar:</strong>
					</p>
					<p className="text-right">
						<strong className="text-success">
							"No creo que venga"
						</strong>
						<br />「<span id="kiru2">来</span>ない
						<span className="text-primary">と　</span>
						<span className="text-info">
							<span id="omou2">思</span>う
						</span>
						」
						<br />
						「konai <strong className="text-primary">to </strong>
						<strong className="text-info">omou</strong>」
					</p>
					<UncontrolledTooltip
						placement="top"
						target="kiru2"
						delay={0}
					>
						こ
					</UncontrolledTooltip>
					<UncontrolledTooltip
						placement="top"
						target="omou2"
						delay={0}
					>
						おも
					</UncontrolledTooltip>
					<p>
						<strong className="text-info">考える - Pensar:</strong>
					</p>
					<p className="text-right">
						<strong className="text-success">
							"Estás pensando demasiado!"
						</strong>
						<br />「
						<span className="text-info">
							<span id="kangae2">考</span>え
						</span>
						すぎるよ！」
						<br />「<strong className="text-info">kangae</strong>
						sugiruyo!」
					</p>
					<UncontrolledTooltip
						placement="top"
						target="kangae2"
						delay={0}
					>
						かんがえ
					</UncontrolledTooltip>
					<p>
						<strong className="text-info">言う - Decir:</strong>
					</p>
					<p className="text-right">
						<strong className="text-success">
							"Dijo que vendría"
						</strong>
						<br />「<span id="kiru">来</span>る
						<span className="text-primary">と　</span>
						<span className="text-info">
							<span id="itte">言</span>っていた
						</span>
						」
						<br />
						「kiru <strong className="text-primary">to </strong>
						<strong className="text-info">itteita</strong>」
					</p>
					<UncontrolledTooltip
						placement="top"
						target="kiru"
						delay={0}
					>
						き
					</UncontrolledTooltip>
					<UncontrolledTooltip
						placement="top"
						target="itte"
						delay={0}
					>
						い
					</UncontrolledTooltip>
				</CardBody>
			</Card>
		</Col>
	);
}
