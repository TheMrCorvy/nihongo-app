import React from "react";
import { Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";

export default function ParticulaTo() {
	return (
		<Col md="12">
			<Card
				className="card-plain bg-white"
				style={{ borderRadius: ".5rem" }}
				id="to"
			>
				<div
					className="bg-info text-white text-center justify-content-center"
					style={{
						borderTopLeftRadius: ".5rem",
						borderBottomRightRadius: ".5rem",
						height: "40px",
						width: "40px",
						position: "absolute",
						top: 0,
						left: 0,
					}}
				>
					<p className="mb-0 h2">と</p>
				</div>
				<h4 className="text-right px-4 pt-2 float-right my-0">
					Partícula <strong>To</strong>
				</h4>
				<CardBody className="mt-5">
					<div
						style={{ width: "100%" }}
						className="row justify-content-between mx-0 px-3"
					>
						<p className="h5">Pronunciación:</p>

						<p className="h5">
							<strong>To</strong>
						</p>
					</div>
					<h4 className="text-center">¿Cuál es su Función?</h4>
					<p className="px-3">
						La partícula と tiene 3 usos principales, en primer
						lugar se usa como{" "}
						<strong>conector de sustantivos</strong> de forma
						identica a como en Español decimos "<strong>Y</strong>"
						para concatenar palabras, pero con la diferencia de que
						と <strong>bajo ninguna sircunstancia</strong> se puede
						usar para conectar ni <strong>verbos</strong> ni{" "}
						<strong>adjetivos</strong>, ya que para ambos casos se
						usa la forma て<span id="tekei-part-to">形</span>.
					</p>
					<UncontrolledTooltip
						placement="top"
						target="tekei-part-to"
						delay={0}
					>
						けい
					</UncontrolledTooltip>
					<p className="px-3">
						También estaremos usando と para expresar{" "}
						<strong>compañía</strong>, por ejemplo que estemos
						hablando de "<strong>yo</strong>" y "
						<strong>alguien más</strong>", de ésta forma se
						utilizará と para decir "persona <strong>Y</strong> otra
						persona".
					</p>
					<p className="px-3">
						Y por último, la partícula と tambien se usa para
						conectar con<span id="omoimasu2">「思い</span>ます」
						("pienso que" / "opino que" / "creo que"), para de ésta
						forma expresar <strong>pensamientos</strong>.
					</p>
					<UncontrolledTooltip
						placement="top"
						target="omoimasu2"
						delay={0}
					>
						おも
					</UncontrolledTooltip>
					<h4 className="text-center">Ejemplos</h4>
					<p className="px-3 text-center">
						<strong className="text-info">Conector "Y":</strong> 「
						<span id="kudamono">果物</span>
						<span className="text-success">と</span>　
						<span id="yasai">野菜</span>。」
						<br /> "Frutas{" "}
						<strong className="text-success">y</strong> verduras"
					</p>
					<UncontrolledTooltip
						placement="top"
						target="kudamono"
						delay={0}
					>
						くだもの
					</UncontrolledTooltip>
					<UncontrolledTooltip
						placement="top"
						target="yasai"
						delay={0}
					>
						やさい
					</UncontrolledTooltip>
					<p className="px-3 text-center">
						<strong className="text-info">Compañía:</strong>{" "}
						「ミラーさん
						<span className="text-success">と</span>　
						<span id="ikimasu">行</span>きました。」
						<br />
						"Fui <strong className="text-success">con</strong>{" "}
						Miller-san"
					</p>
					<UncontrolledTooltip
						placement="top"
						target="ikimasu"
						delay={0}
					>
						い
					</UncontrolledTooltip>
					<p className="px-3 text-center">
						<strong className="text-info">(と思いま):</strong>
						「もうすぐ<span id="hajimaru">始</span>まる
						<span className="text-success">と</span>　
						<span id="omoimasu3">思</span>います。」
						<br />
						"Creo <strong className="text-success">que</strong> está
						por empezar."
					</p>
					<UncontrolledTooltip
						placement="top"
						target="omoimasu3"
						delay={0}
					>
						おも
					</UncontrolledTooltip>
					<UncontrolledTooltip
						placement="top"
						target="hajimaru"
						delay={0}
					>
						はじ
					</UncontrolledTooltip>
				</CardBody>
			</Card>
		</Col>
	);
}
