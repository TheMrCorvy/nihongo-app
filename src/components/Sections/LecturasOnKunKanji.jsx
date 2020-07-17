import React from "react";
import { Card, CardBody, Col } from "reactstrap";

export default function LecturasOnKunKanji() {
	return (
		<Col md="12" id="info">
			<Card
				className="card-plain px-3 bg-white my-5"
				style={{
					borderRadius: 15,
				}}
			>
				<CardBody>
					<h5 className="text-center text-info pt-0 title">
						Las Lecturas de los Kanjis
					</h5>
					<p>
						Notarás que la mayoría, si no es que todos los kanjis,
						tienen varias formas de leerse, dichas lecturas se
						clasifican en 2 grandes grupos, las lecturas{" "}
						<strong>訓読み Kun’yomi</strong>, y por el otro lado las
						lecturas <strong>音読み On’yomi</strong>.
					</p>
					<p>
						Como ya sabrán, los kanjis no se originaron naturalmente
						en el idioma Japonés, sino que fueron "importados" del
						Chino, lo que trajo como consecuencia que la mayoría
						tuvieran una lectura proveniente del idioma Chino y al
						mismo tiempo otra proveniente del{" "}
						<strong>Japonés hablado</strong>.
					</p>
					<h5 className="mt-5 pt-5">
						訓読み Kun’yomi la lectura japonesa
					</h5>
					<p>
						Teniendo en cuenta el significado en chino de un kanji,
						se asoció con la palabra japonesa equivalente a este
						significado, por ejemplo el kanji de「犬」- "perro", que
						en Chino se lee「ケン - ken」, en Japonés se le asoció
						con la palabra 「いぬ - inu」.
					</p>
					<p>
						Pero las palabras largas en japonés no siempre encajaban
						en un solo kanji, entonces lo que se hacía era que el
						resto de la palabra se acababa de completar con
						notaciones (que más adelante se convirtieron en
						hiragana).
					</p>
					<p>
						Por ejemplo, el kanji「悲」que significa "triste", en
						japonés se dice「かなしい - kanashii」. El
						kanji「悲」corresponde a la parte "kana" y la parte
						"shii" se escribe en hiragana:「悲しい」.
					</p>
					<h5 className="mt-5 pt-5 text-right">
						音読み On’yomi la lectura china
					</h5>
					<p>
						On’yomi se traduce literalmente desde el Japonés como
						"Lectura de Sonido" y hace referencia a la lectura china
						del kanji, es decir, los sonidos originales de la lengua
						china.
					</p>
					<p>
						Realmente el japonés y el chino son idiomas muy
						diferentes por lo que los sonidos que el Japonés da a
						los kanji para su lectura china son solamente
						aproximaciones de la pronunciación original en chino.
					</p>
					<h5 className="mt-5 pt-5 text-center">
						Puntos Importantes
					</h5>
					<ul>
						<li>
							<p>
								La lectura <strong>Kun</strong> es la japonesa,
								y la <strong>On</strong> es la china.
							</p>
						</li>
						<li>
							<p>
								<strong className="text-danger">
									Generalmente
								</strong>{" "}
								(no siempre) se usa la lectura Kun para cuando
								un Kanji está acompañado por un Hiragana.
							</p>
						</li>
						<li>
							<p>
								<strong className="text-danger">
									Generalmente
								</strong>{" "}
								la lectura On se usará para cuando un Kanji está
								acompañado por otro/s kanjis.
							</p>
						</li>
						<li>
							<p>
								Si un Kanji se pronuncia con 3 o más sílabas
								(sin escribir hiraganas al lado), por
								ejemplo「心 - こころ - kokoro」, entonces su
								lectura será <strong>Kun’yomi</strong>.
							</p>
						</li>
					</ul>
				</CardBody>
			</Card>
		</Col>
	);
}
