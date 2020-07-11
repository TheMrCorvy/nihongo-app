import React from "react";
import { Col, Card, CardBody, UncontrolledTooltip } from "reactstrap";

export default function Vestirse() {
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
						className="fas fa-2x fa-tshirt"
						style={{
							position: "absolute",
							top: 10,
							right: 7,
							opacity: 0.7,
						}}
					></i>
				</div>
				<h4 className="text-left px-3 pt-3 float-left my-0">
					Verbos para Vestirse
				</h4>
				<CardBody className="mt-5 px-3">
					<p>
						En Japonés no hay una sola palabra para decir lo que en
						Español es el verbo "<strong>vestirse</strong>", de
						igual manera para indicar si se lleva puesto algo como
						un accesorio, etc.
					</p>
					<p>
						Principalmente va a estar variando sagún en qué parte
						del cuerpo nos estemos poniendo algo, sea una camisa, un
						reloj, pantalones, etcétera.
					</p>
					<p>
						Auqí estaremos viendo un resumen de qué verbo se utiliza
						para cada parte del cuerpo.
					</p>
					<h5 className="title text-info text-center my-5">
						Accesorios
					</h5>
					<p>
						Dentro de ésta categoría entran, por ejemplo, un
						cinturón, corbata, anillos, guantes, aritos o piercings,
						etc.
					</p>
					<p>
						El verbo para indicar que uno lleva puesto algún
						accesorio será「する - suru」
					</p>
					<p>
						<strong>Ejemplo:</strong>
					</p>
					<p className="text-center">
						<strong className="text-success">
							"Ponerse la corbata"
						</strong>
						<br />
						<i className="fas fa-long-arrow-alt-down px-2"></i>
						<br />
						<span className="text-info">ネクタイを　</span>
						<span className="text-primary">する</span>
						<br />
						<i className="fas fa-long-arrow-alt-down px-2"></i>
						<br />
						<strong className="text-info">Nekutai o </strong>
						<strong className="text-primary">suru</strong>
					</p>
					<h5 className="title text-success text-center my-5">
						Sombreros
					</h5>
					<p>
						Dentro de ésta categoría entran todas las cosas que uno
						se pone en la cabeza (cascos, sombreros, gorrras, etc.),{" "}
						<strong>excepto anteojos</strong> ya que éstos tienen su
						propio verbo.
					</p>
					<p>El verbo para éste caso es:「かぶる - kaburu」</p>
					<p>
						<strong>Ejemplo:</strong>
					</p>
					<p className="text-center">
						<strong className="text-success">
							"Ponerse una gorra / sombrero"
						</strong>
						<br />
						<i className="fas fa-long-arrow-alt-down px-2"></i>
						<br />
						<span className="text-info">
							<span id="boshi">帽子</span>を　
						</span>
						<span className="text-primary">かぶる</span>
						<br />
						<i className="fas fa-long-arrow-alt-down px-2"></i>
						<br />
						<strong className="text-info">Boshi o </strong>
						<strong className="text-primary">kaburu</strong>
					</p>
					<UncontrolledTooltip
						placement="top"
						target="boshi"
						delay={0}
					>
						ぼし
					</UncontrolledTooltip>
					<p>
						Para el caso de los anteojos, lentes de sol, y
						similares, se dice de la siguiente manera:
					</p>
					<p className="text-center">
						<strong className="text-success">
							"Ponerse los anteojos"
						</strong>
						<br />
						<i className="fas fa-long-arrow-alt-down px-2"></i>
						<br />
						<span className="text-info">メガネを　</span>
						<span className="text-primary">かける</span>
						<br />
						<i className="fas fa-long-arrow-alt-down px-2"></i>
						<br />
						<strong className="text-info">Megane o </strong>
						<strong className="text-primary">kakeru</strong>
					</p>
					<h5 className="title text-warning text-center my-5">
						Torso y brazos
					</h5>
					<p>
						El verbo que se usa para toda la ropa que vaya sobre el
						torso y/o los brazos es「着る - きる - kiru」, y se
						usará para las camisas, buzos, camperas, remeras,{" "}
						<strong>o también</strong>{" "}
						<strong className="text-info">los trajes</strong>{" "}
						(formales) y{" "}
						<strong className="text-warning">los vestidos</strong>.
					</p>
					<p>
						<strong>Ejemplo:</strong>
					</p>
					<p className="text-center">
						<strong className="text-success">
							"Ponerse el traje"
						</strong>
						<br />
						<small>(un traje formal / de vestir)</small>
						<br />
						<i className="fas fa-long-arrow-alt-down px-2"></i>
						<br />
						<span className="text-info">スーツを　</span>
						<span className="text-primary" id="kiru">
							着る
						</span>
						<br />
						<i className="fas fa-long-arrow-alt-down px-2"></i>
						<br />
						<strong className="text-info">Suutsu o </strong>
						<strong className="text-primary">kiru</strong>
					</p>
					<UncontrolledTooltip
						placement="top"
						target="kiru"
						delay={0}
					>
						き
					</UncontrolledTooltip>
					<h5 className="title text-info text-center my-5">
						De la cintura hasta los pies
					</h5>
					<p>
						Y por último, pero no menos importante, el verbo que
						usaremos para pantalones, medias, zapatos, etc. es「履く
						- はく - kaburu」.
					</p>
					<p>
						<strong>Ejemplo:</strong>
					</p>
					<p className="text-center">
						<strong className="text-success">
							"Ponerse los pantalones"
						</strong>
						<br />
						<i className="fas fa-long-arrow-alt-down px-2"></i>
						<br />
						<span className="text-info">ズボンを　</span>
						<span className="text-primary" id="haku">
							履く
						</span>
						<br />
						<i className="fas fa-long-arrow-alt-down px-2"></i>
						<br />
						<strong className="text-info">Zubon o </strong>
						<strong className="text-primary">haku</strong>
					</p>
					<UncontrolledTooltip
						placement="top"
						target="haku"
						delay={0}
					>
						は
					</UncontrolledTooltip>
					<h5 className="title text-success text-center my-5">
						Quitarse ropa / accesorio
					</h5>
					<p>
						Para concluir con ésta sección queda ver el verbos para
						"desvestirse" o quitarse algún accesorio.
					</p>
					<p>
						A diferencia de como es para vestirse, para desvestirse
						se usará siempre el verbo「脱ぐ - ぬぐ - nugu」.
					</p>
					<p>
						<strong>Ejemplo:</strong>
					</p>
					<p className="text-center">
						<strong className="text-success">
							"Quitarse la camisa"
						</strong>
						<br />
						<i className="fas fa-long-arrow-alt-down px-2"></i>
						<br />
						<span className="text-info">シャツを　</span>
						<span className="text-primary" id="nugu">
							脱ぐ
						</span>
						<br />
						<i className="fas fa-long-arrow-alt-down px-2"></i>
						<br />
						<strong className="text-info">Shatsu o </strong>
						<strong className="text-primary">nugu</strong>
					</p>
					<UncontrolledTooltip
						placement="top"
						target="nugu"
						delay={0}
					>
						ぬ
					</UncontrolledTooltip>
				</CardBody>
			</Card>
		</Col>
	);
}
